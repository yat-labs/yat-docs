const debug = require('debug')('tari-docs:main');
const paths = require('path');
const sdk = require("./sdk_generator");
const swagger = require('./swagger_parser');

module.exports = function(program, ctx, options) {

    function exec_wrapper(cmd) {
        exec(cmd, ctx, options).then(() => {
            debug("Completed execution.")
        }).catch(err => {
            console.error("Failed execution", err);
        });
    }

    program.command('clean-sdk')
        .description('Delete all generated SDK documentation files')
        .action(exec_wrapper);
    program.command('generate-sdk')
        .description('Build the SDKs and then quit')
        .action(exec_wrapper);
    program.command('clean-api-ref')
        .description('Delete all generated documentation files')
        .action(exec_wrapper);
    program.command('generate-api-ref')
        .description('Build the API reference documentation and then quit')
        .action(exec_wrapper);
    program.command('clean-docs')
        .description('Delete all generated SDK and API reference documentation files')
        .action(exec_wrapper);
    program.command('generate-docs')
        .description('Generate and save the SDK and API reference docs without building the website')
        .action(exec_wrapper);
    return program;
}



async function exec(cmd, ctx, options) {
    let command = cmd.name();
    debug('Executing command: %s', command);
    switch (command) {
        case "clean-sdk": return sdk.cleanSdks(ctx, options);
        case "generate-sdk": return sdk.generateSDKs(ctx, options);
        case "clean-api-ref": return swagger.deleteApiReference(ctx, options);
        case "generate-api-ref": return swagger.generateApiReference(ctx, options);
        case "clean-docs": return cleanDocs(ctx, options);
        case "generate-docs": return generateDocs(ctx, options);
        default:
            debug("Unknown command: %s", command);
            return;
    }
}


async function cleanDocs(ctx, options) {
    await sdk.cleanSdks(ctx, options);
    await swagger.deleteApiReference(ctx, options);
}



async function generateDocs(ctx, options) {
    await sdk.generateSDKs(ctx, options);
    await swagger.generateApiReference(ctx, options);
}