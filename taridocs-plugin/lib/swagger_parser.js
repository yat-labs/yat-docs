const debug = require('debug')('tari-docs:swagger');
const validUrl = require('valid-url');
const path = require('path');
const widdershins = require('widdershins');
const superagent= require('superagent');
const fs = require('fs').promises;
const yaml = require('yaml');
const traverse = require('traverse');

async function fetch_swagger_spec(apiUrl) {
    let spec = {};
        if (validUrl.isUri(apiUrl)) {
        try {
            spec = await superagent.get(apiUrl).json();
        } catch (err) {
            debug("Error downloading swagger specification: %s", err.message);
        }
    } else {
        try {
            spec = await fs.readFile(apiUrl, 'utf8');
        } catch (err) {
            debug("Error loading swagger specification: %s", err.message);
        }
    }
    let api = {};
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
            omitHeader: false,
            language_tabs: options.languages || ['javascript'],
            search: false,
            expandBody: true,
            codeSamples: true,
            user_templates: templatesPath
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

module.exports = {
    fetch_swagger_spec,
    openapi_to_markdown
}