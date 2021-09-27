const path = require('path');
const yaml = require('yaml');
const fs = require('fs');

module.exports = {
    title: 'Yat Developer Documentation',
    tagline: 'Helping you build awesome stuff with 🖖',
    url: 'https://docs.y.at',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'Yat Labs', // Usually your GitHub org/user name.
    projectName: 'yat-docs', // Usually your repo name.
    themeConfig: {
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true
        },
        navbar: {
            title: 'Yat Developer Documentation',
            logo: {
                alt: 'Yat',
                src: 'img/yat-logo-white.svg',
            },
            items: [
                {
                    to: '/docs/support',
                    label: 'Support',
                    position: 'right',
                },
                {
                    to: '/docs/api-ref',
                    label: 'APIs & SDKs',
                    position: 'right',
                },
                {
                    href: 'https://y.at',
                    label: 'Y.at',
                    position: 'right',
                    target: '_blank',
                },
                {
                    href: 'https://github.com/yat-labs/yat-docs',
                    label: 'GitHub',
                    position: 'right',
                    target: '_blank',
                },
                {
                    to: '/docs/api_keys',
                    label: 'Get API keys',
                    position: 'right',
					className: 'menuHighlight',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'User Guides',
                            to: '/docs/overview'
                        },
                        {
                            label: 'API reference',
                            to: '/docs/api-ref'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/PYTE7Jvvyt'
                        }
                    ]
                },
                {
                    title: 'Legal',
                    items: [
                        {
                            label: 'API Terms of Service',
                            to: '/terms_of_service'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Yat Labs, Pty. Ltd. Built with the help of Docusaurus. 🦕`,
        },
        prism: {
            theme: require('prism-react-renderer/themes/dracula'),
            additionalLanguages: ['kotlin', 'swift']
        },
    },
    plugins: [
        [
            path.resolve(__dirname, '../yatdocs-plugin'),
            {
                generateApiReference: false,
                generateSDks: false,
                specification: "http://a.y.at/swagger",
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
