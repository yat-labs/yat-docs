const swagger = require('./lib/swagger_parser');
const sdk = require('./lib/sdk_generator');
const fs = require('fs').promises;
const debug = require('debug')('tari-docs:plugin');
const path = require('path');

const DEFAULT_OPTIONS = {
    specification: "swagger.json"
};

// A JavaScript function that returns an object.
// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.
// `opts` is the user-defined options.
module.exports = function (context, opts) {
    // Merge defaults with user-defined options.
    const options = {...DEFAULT_OPTIONS, ...opts};

    return {
        name: 'taridocs-plugin',

        async loadContent() {
            const apiMarkdown = await swagger.openapi_to_markdown(options);
            await writeApiReference(apiMarkdown, context);
        },

        async contentLoaded({content, actions}) {},

        async postBuild(props) {
            // After docusaurus <build> finish.
        },

        getThemePath() {
            // Returns the path to the directory where the theme components can
            // be found.
        },

        extendCli(program) {
            require("./lib/cli")(program);
        },

        injectHtmlTags() {
            // Inject head and/or body HTML tags.
        },
    };
};

async function writeApiReference(apiMarkdown, context) {
    try {
        const srcDir = context.siteDir;
        const outPath = path.resolve(srcDir, "docs/api_reference/api.md");
        await fs.writeFile(outPath, apiMarkdown);
    } catch (e) {
        debug("Could not write API reference markdown");
    }
}