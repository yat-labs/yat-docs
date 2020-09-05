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
            // The loadContent hook is executed after siteConfig and env has been loaded.
            // You can return a JavaScript object that will be passed to contentLoaded hook.
        },

        async contentLoaded({content, actions}) {
            // The contentLoaded hook is done after loadContent hook is done.
            // `actions` are set of functional API provided by Docusaurus (e.g. addRoute)
        },

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