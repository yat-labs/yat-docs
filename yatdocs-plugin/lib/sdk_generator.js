const rimraf = require("rimraf");
const debug = require('debug')('tari-docs:sdk_generator');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
const yaml = require('yaml');
const fs = require('fs').promises;
const validUrl = require('valid-url');
const os = require('os');
/**
 * Deletes the SDK folder
 */
async function cleanSdks(ctx, options) {
    const sdkDir = path.resolve(ctx.siteDir, options.sdkPath);
    debug("SDK folder removal (%s) starting...", sdkDir);
    rimraf.sync(sdkDir);
    const sdkDocDir = path.resolve(ctx.siteDir, options.sdkDocPath);
    debug("SDK Doc folder removal (%s) starting...", sdkDocDir);
    rimraf.sync(sdkDocDir);
    debug("SDK folder removal complete");
}

/**
 * Create an object to attach to the hexo context variable containing the parsed swagger markdown for each page
 */
async function generateSDKs(ctx, options) {
    debug("Generating SDK docs...");
    const sdkDir = path.resolve(ctx.siteDir, options.sdkPath);
    try {
        await fs.mkdir(path.join(sdkDir, "config"), { recursive: true });
    } catch (err) {
        debug("Error creating SDK generation folder");
        throw err;
    }
    const spec = options.specification;
    const languages = options.languages;
    for (const lang of languages) {
        try {
            // Generate the SDK
            await runOpenAPIGenerator(options, spec, lang, sdkDir);
            // Copy the Documentation to a local object
        } catch (err) {
            debug("Error parsing Swagger spec %s: %O", spec.title, err.message);
        }
    }
    try {
        await writeSDKdocs(ctx, options);
    } catch (err) {
        debug("Error copying SDK documentation: %s", err.message);
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
    const langConfig = config.openapi_generator[lang.id];
    if (!langConfig) {
        throw(new Error(`No openapi Generator configuration exists for ${lang.id}`));
    }

    const langConfigFile = path.resolve(out_dir, "config", `config_${lang.id}.yml`);
    try {
        await fs.writeFile(langConfigFile, yaml.stringify(langConfig));
    } catch (err) {
        throw new Error(`Error writing ${lang.id} SDK configuration file: ${err.message}`);
    }
    // Map lang => generator
    const generator = lang_to_generator(lang.id);
    // Specify output and template folders
    const output = path.join(out_dir, lang.id);
    const templates = path.resolve(__dirname, `../sdk_generator/templates/openapi-generator_${generator}`);
    const script_dir = path.resolve(__dirname, '../sdk_generator');
    // Build command
    debug(`${os.platform()} detected`);
    const additionalGeneratorOptions = langConfig['additionalGeneratorOptions'] ?? '';
    const cmd = os.platform() === "win32" ?
        `oag.bat ${langConfigFile} ${generator} ${specUri} ${output} ${templates} ${additionalGeneratorOptions}` :
        `./oag.sh generate -c ${langConfigFile} -g ${generator} -i ${specUri} -o ${output} -t ${templates} ${additionalGeneratorOptions}`;
    try {
        const {stdout, stderr} = await exec(cmd, {cwd: script_dir, maxBuffer: 1024 * 1024 * 5});
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

async function writeSDKdocs(ctx, options) {
    let sdkSrc = path.resolve(ctx.siteDir, options.sdkPath);
    try {
        await fs.access(sdkSrc);
    } catch {
        debug("No SDKs were found");
        return;
    }
    const pArr = options.languages.map(lang => writeSdkDoc(lang, sdkSrc, ctx, options));
    const result = await Promise.all(pArr);
    return result;
}


async function writeSdkDoc(lang, sdkSrc, ctx, options) {
    const srcDocs = path.join(sdkSrc, lang.id, "docs");
    const readme = path.join(sdkSrc, lang.id, "README.md");
    const destDir = path.resolve(ctx.siteDir, options.sdkDocPath, lang.id);
    await fs.mkdir(path.join(destDir, 'docs'), { recursive: true });
    // Save the README
    const readmePath = path.join(destDir, "index.md");
    await fs.copyFile(readme, readmePath);
    // Save the SDK docs
    let file_list = [];
    try {
        file_list = await fs.readdir(srcDocs);
    } catch (err) {
        debug("Error getting SDK source documentation: %s", err.message);
    }
    let filter_fn;
    switch (lang) {
        case "swift":
            filter_fn = _f => true;
            break;
        default:
            filter_fn = f => f => f.toLowerCase().endsWith("api.md");
    }
    const pArr = file_list
        .filter(filter_fn)
        .map(async f =>  fs.copyFile(path.join(srcDocs, f), path.join(destDir, 'docs/', f)));
    await Promise.all(pArr);
    debug(`${lang.id} SDK documentation copied.`)
}

module.exports = {
    cleanSdks,
    generateSDKs,
    loadSdkOptions
}
