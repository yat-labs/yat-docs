const swagger = require('./lib/swagger_parser');
const sdk = require('./lib/sdk_generator');
const fs = require('fs').promises;
const debug = require('debug')('yat-docs:plugin');
const path = require('path');

const DEFAULT_OPTIONS = {
    specification: "swagger.json",
    apiRefPath: "docs/api_reference/api.md",
    sdkPath: "sdks",
    sdkDocPath: "docs/sdks",
    generateApiReference: true,
    generateSDks: true,
    languages: ["nodejs", "kotlin", "swift5"]
};

// A JavaScript function that returns an object.
// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.
// `opts` is the user-defined options.
module.exports = function (context, opts) {
    // Merge defaults with user-defined options.
    const options = {...DEFAULT_OPTIONS, ...opts};

    return {
        name: 'yatdocs-plugin',

        async loadContent() {
            if (options.generateApiReference) {
                await swagger.generateApiReference(context, options);
            }
            if (options.generateSDks) {
                await sdk.generateSDKs(context, options);
            }
        },

        extendCli(program) {
            require("./lib/cli")(program, context, options);
        },
    };
};
