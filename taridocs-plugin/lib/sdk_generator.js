const rimraf = require("rimraf");
const debug = require('debug')('tari-docs:sdk_generator');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const yaml = require('yaml');
const fs = require('fs').promises;
const validUrl = require('valid-url');

/**
 * Deletes the SDK folder
 * @param config
 */
function cleanSDKs() {
    let sdk_dir =  path.resolve('./sdks');
    debug("SDK folder removal (%s) starting...", sdk_dir);
    rimraf.sync(sdk_dir);
    debug("SDK folder removal complete");
}

/**
 * Create an object to attach to the hexo context variable containing the parsed swagger markdown for each page
 */
async function generateSDKs(config) {
    let sdk_dir =  path.resolve('./sdks');
    try {
        await fs.mkdir(path.join(sdk_dir, "config"), { recursive: true });
    } catch (err) {
        debug("Error creating SDK generation folder");
        throw err;
    }
    const spec = config.specification || 'swagger.json';
    const languages = config.languages || [];
    for (const lang of languages) {
        try {
            // Generate the SDK
            await runOpenAPIGenerator(config, spec, lang, sdk_dir);
            // Copy the Documentation to a local object
        } catch (err) {
            debug("Error parsing Swagger spec %s: %O", spec.title, err.message);
        }
    }
}

/**
 * Return the full path of the given spec
 */
function spec_path(spec) {
    if (validUrl.is_uri(spec)) {
        return spec;
    }
    return path.resolve(process.cwd(), spec);
}

async function runOpenAPIGenerator(config, spec, lang, out_dir) {
    const specUri = spec_path(spec);
    // Write config to tmp file
    const langConfig = config.openapi_generator[lang];
    if (!langConfig) {
        throw(new Error(`No openapi Generator configuration exists for ${lang}`));
    }

    const langConfigFile = path.resolve(out_dir, "config", `config_${lang}.yml`);
    try {
        await fs.writeFile(langConfigFile, yaml.stringify(langConfig));
    } catch (err) {
        throw new Error(`Error writing ${lang} SDK configuration file: ${err.message}`);
    }
    // Map lang => generator
    const generator = lang_to_generator(lang);
    // Specify output and template folders
    const output = path.join(out_dir, lang);
    const templates = path.resolve(__dirname, `../sdk_generator/templates/openapi-generator_${generator}`);
    const script_dir = path.resolve(__dirname, '../sdk_generator');
    // Build command
    const cmd = `./oag.sh generate -c ${langConfigFile} -g ${generator} -i ${specUri} -o ${output} -t ${templates}`;
    try {
        const {stdout, stderr} = await exec(cmd, {cwd: script_dir});
        debug(stdout);
        debug(stderr);
    } catch (err) {
        debug("OpenAPI-Generator returned an error: %s", err.message);
    }
}

/**
 * Convert language tab value to openapi-generator generator value
 * @param lang
 * @returns {string|*}
 */
function lang_to_generator(lang) {
    switch (lang) {
        case "nodejs":
            return "javascript";
        case "swift":
            return "swift5";
        default:
            return lang;
    }
}

async function loadSdkOptions(path) {
    let opts = await fs.readFile(path, 'utf8');
    opts =  yaml.parse(opts);
    return opts;
}

/// from hexo

/**
 * SDK doc generator.
 *
 * Assumes that the SDKs have already been generated and reside at `config.sdk_dir`
 */
async function generateSdkDocs(locals) {
    let sdk_src = sdk_utils.get_sdk_dest(hexo.config);
    if (!sdk_src) {
        debug("No SDKs were found");
        return;
    }
    const pArr = hexo.config.languages.map(lang => generateSdkDoc(lang, sdk_src));
    const result = await Promise.all(pArr);
    return result;
}


async function generateSdkDoc(lang, sdk_src) {
    const src_docs = path.join(sdk_src, lang, "docs");
    let file_list = [];
    try {
        file_list = await fs.readdir(src_docs);
    } catch (err) {
        debug("Error getting SDK source documentation: %s", err.message);
    }
    const pArr = file_list
        .filter(f => f.endsWith(".md"))
        .map(async f =>  fs.readFile(path.join(src_docs, f), {encoding: 'utf8'}));
    const docs = await Promise.all(pArr);
    const text = docs.join("\n");
    const html = await hexo.render.render({text, engine: "markdown"});
    return {
        path: `sdk_ref/${lang}.html`,
        data: {
            content: html
        },
        layout: ["sdk", "index"]
    }
}

module.exports = {
    cleanSDKs,
    generateSDKs,
    loadSdkOptions
}