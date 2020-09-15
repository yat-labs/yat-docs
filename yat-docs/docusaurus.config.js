const path = require('path');
const yaml = require('yaml');
const fs = require('fs');

module.exports = {
  title: 'Yat Developer Documentation',
  tagline: 'Helping you build awesome stuff with 🖖.at',
  url: 'https://docs.y.at',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Tari Labs', // Usually your GitHub org/user name.
  projectName: 'yat-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'Yat Developer Documentation',
      logo: {
        alt: 'Yat',
        src: 'img/yat-logo-yellow.png',
      },
      items: [
        {
          href: 'https://github.com/tari-labs/tari-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Tari Labs, Pty. Ltd. Built with the help of Docusaurus. 🦕`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['kotlin', 'swift']
    },
  },
  plugins: [
      [
          path.resolve(__dirname, '../taridocs-plugin'),
          {
            generateApiReference: false,
            generateSDks: false,
            specification: "http://localhost:3001/swagger",
            apiRefPath: "docs/api_reference/api.md",
            sdkPath: "sdks",
            sdkDocPath: "docs/sdks",
            languages: [
              {id: "nodejs", label: "Javascript / NodeJs"},
              {id: "kotlin", label: "Android / Kotlin"},
              {id: "swift5", label: "iOS / Swift 5"}
            ],
            // These options are passed directly to swagger-parser. Options are details at https://apitools.dev/swagger-parser/docs/options.html
            swagger_parser: {
              validate: {schema: true}
            },
            openapi_generator: yaml.parse(fs.readFileSync("sdk_generator_opts.yml", "utf8"))
          }
      ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
