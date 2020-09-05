const debug = require('debug')('tari-docs:main');
const paths = require('path');
const sdk = require("./sdk_generator");

module.exports = function(program) {
    program.command('clean-sdk')
        .description('Delete all generated documentation files')
        .action(exec_wrapper);
    program.command('generate-sdk')
        .description('Build the SDKs and then quit')
        .action(exec_wrapper);
    return program;
}

function exec_wrapper(cmd) {
    exec(cmd).then(() => {
        debug("Completed execution.")
    }).catch(err => {
        console.error("Failed execution", err);
    });
}

async function exec(cmd) {
    let command = cmd.name();
    debug('Executing command: %s', command);
    switch (command) {
        case "clean-sdk": return cleanSdks();
        case "generate-sdk": return generateSDKs();
        default:
            debug("Unknown command: %s", command);
            return;
    }
}

async function cleanSdks() {
    debug("Cleaning SDK directory...");
    return sdk.cleanSDKs();
}

async function generateSDKs() {
    debug("Loading SDK config...");
    // Ugly hack, but I don't know if docusaurus sends through any global here / the config.
    let opts = await sdk.loadSdkOptions(paths.resolve('./sdk_generator_opts.yml'));
    debug("Generating docs...");
    return sdk.generateSDKs(opts);
}