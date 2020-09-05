const debug = require('debug')('tari-docs:swagger');
const validUrl = require('valid-url');
const path = require('path');
const widdershins = require('widdershins');
const superagent= require('superagent');
const fs = require('fs').promises;

async function fetch_swagger_spec(api) {
    let spec = {};
    if (!validUrl.isUri(api)) {
        try {
            spec = await superagent.get(api).json();
        } catch (err) {
            debug("Error downloading swagger specification: %s", e.message);
        }
    } else {
        try {
            spec = await fs.readFile(api);
        } catch (err) {
            debug("Error loading swagger specification: %s", e.message);
        }
    }
    return spec;
}

/**
 * Create an object to attach to the hexo context variable containing the parsed OpenApi markdown
 */
async function openapi_to_markdown(options) {
    let specPath = options.specification;
    try {
        debug("Fetching Swagger spec: %s", specPath);
        let api = await fetch_swagger_spec(specPath);
        let templatesPath = options.templatesPath || path.resolve(__dirname, "../widdershins_templates/openapi3");
        // Define widdershins options
        const options = {
            omitHeader: true,
            language_tabs: options.languages || ['javascript'],
            search: false,
            expandBody: true,
            codeSamples: true,
            user_templates: templatesPath
        };
        let output = await widdershins.convert(api, options);
        return output;
    } catch (err) {
        debug("Error parsing Swagger spec %s: %O", specPath, err.message);
        return "";
    }
}

module.exports = {
    fetch_swagger_spec,
    openapi_to_markdown
}