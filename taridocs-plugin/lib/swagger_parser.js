const debug = require('debug')('tari-docs:swagger');
const validUrl = require('valid-url');
const path = require('path');
const widdershins = require('widdershins');
const superagent = require('superagent');
const fs = require('fs').promises;
const yaml = require('yaml');
const traverse = require('traverse');

async function fetch_swagger_spec(apiUrl) {
    let api = {};
    if (validUrl.isUri(apiUrl)) {
        try {
            const res = await superagent.get(apiUrl);
            api = res.body;
        } catch (err) {
            debug("Error downloading swagger specification: %s", err.message);
        }
    } else {
        let spec = "";
        try {
            spec = await fs.readFile(apiUrl, 'utf8');
        } catch (err) {
            debug("Error loading swagger specification: %s", err.message);
        }
        try {
            api = JSON.parse(spec);
        } catch (err) {
            try {
                api = yaml.parse(spec);
            } catch (e) {
                debug(`API string was not JSON or YAML format. ${e.message}`);
                api = {};
            }
        }
    }
    return api;
}

/**
 * Create an object to attach to the hexo context variable containing the parsed OpenApi markdown
 */
async function openapi_to_markdown(options) {
    let specPath = options.specification;
    try {
        debug("Fetching Swagger spec: %s", specPath);
        let api = await fetch_swagger_spec(specPath);
        api = cleanupApi(api);
        let templatesPath = options.templatesPath || path.resolve(__dirname, "../widdershins_templates/openapi3");
        // Define widdershins options
        const opts = {
            omitHeader: true,
            language_tabs: options.languages || [['javascript', 'Javascript']],
            search: false,
            expandBody: true,
            codeSamples: true,
            user_templates: templatesPath,
            page_id: "index"
        };
        let output = await widdershins.convert(api, opts);
        return output;
    } catch (err) {
        debug("Error parsing Swagger spec %s: %O", specPath, err.message);
        return "";
    }
}

/**
 * Cleans up API entries:
 *  - Removes "\n" or "<br>" from strings, which breaks the parser
 */
function cleanupApi(api) {
    traverse(api).forEach(function (val) {
        if (this.isLeaf && typeof val === "string") {
            this.update(val.replace(/\n|(<br>)/, ''));
        }
    })
    return api;
}

async function writeApiReference(apiMarkdown, dest) {
    try {
        await fs.writeFile(dest, apiMarkdown);
    } catch (e) {
        debug("Could not write API reference markdown");
    }
}

async function generateApiReference(ctx, options) {
    debug("Generating API reference documentation...")
    const apiMarkdown = await openapi_to_markdown(options);
    const dest = path.resolve(ctx.siteDir, options.apiRefPath);
    await writeApiReference(apiMarkdown, dest);
    debug(`API reference documentation written to ${dest}`);
}

async function deleteApiReference(ctx, options) {
    debug("Cleaning Api reference directory...");
    let apiFile = path.resolve(ctx.siteDir, options.apiRefPath);
    await fs.unlink(apiFile);
}

module.exports = {
    fetch_swagger_spec,
    deleteApiReference,
    writeApiReference,
    generateApiReference
}