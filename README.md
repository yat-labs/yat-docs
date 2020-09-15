# Website

This website is built using

* [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator, for the static site generation
* [Widdershins](https://github.com/tari-labs/widdershins), for OpenApi spec => API reference markdown
* [OpenAPI Generator](https://openapi-generator.tech/) for generating the SDKs and related documentation.

### Installation

## Prerequisites

* You need node (version 12 works fine. v14 had some issues)
* Java (Tested with OpenJDK  1.8.0_242-b08. Presumably later versions work too).
* s3-deploy to push to AWS S3

## Building the site

```bash
$ cd yat-docs
$ yarn install # npm doesn't seem to work for some reason
$ cd ../taridocs-plugin
$ yarn install
```

### Local Development

```bash
$ cd yat-docs
$ yarn run generate-docs # Generates the API reference and SDK docs
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ cd yat-docs
$ yarn run generate-docs # Generates the API reference and SDK docs
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Other commands

```
Usage: docusaurus <command> [options]

Options:
  -V, --version                                            output the version number
  -h, --help                                               output usage information

Commands:
  build [options] [siteDir]                                Build website
  swizzle [options] [themeName] [componentName] [siteDir]  Copy the theme files into website folder for customization.
  deploy [options] [siteDir]                               Deploy website to GitHub pages
  start [options] [siteDir]                                Start the development server
  serve [options] [siteDir]                                Serve website
  docs:version <version>                                   Tag a new docs version
  clean-sdk                                                Delete all generated SDK documentation files
  generate-sdk                                             Build the SDKs and then quit
  clean-api-ref                                            Delete all generated documentation files
  generate-api-ref                                         Build the API reference documentation and then quit
  clean-docs                                               Delete all generated SDK and API reference documentation files
  generate-docs                                            Generate and save the SDK and API reference docs without building the website
```

## Debug logs

To generate debug logs to stdout, set the `DEBUG~ environment variable. All tari-doc plugin logs are namespaced accordingly,
so

    $ DEBUG=tari-docs:* npm run build

will print out all tari-docs debug information and ignore any other messages from other packages.


# Build and deploy

There's a makefile that eases the build / deploy cycle pain.

| Make command | Description                    |
|:-------------|:-------------------------------|
| `clean`      | Deletes the build directory    |
| `cleandocs`  | Deletes the generated docs     |
| `generate`   | Generates the API and SDK docs |
| `build`      | Builds the static website      |
| `preview`    | Build and run the site locally |

To successfully deploy, you need some environment variables set up. You can store these in `.env`

```
REGION=us-east-1

PREVIEW_BUCKET=previewbucket
PREVIEW_KEY=previewkey
PREVIEW_SECRET=previewsecret

PRODUCTION_BUCKET=productionbucket
PRODUCTION_KEY=prodkey234876786d
PRODUCTION_SECRET=prodsecret-3498sduhsdvjnvsdnflk
```

Then run

    $ ./deploy.sh