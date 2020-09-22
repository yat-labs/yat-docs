module.exports = {
    docs: {
        'API Documentation': ['api_reference/api-reference'],
        'SDK Documentation': [
            {
                type: 'ref',
                id: 'sdks/kotlin/sdk_kotlin_index'
            },
            {
                type: 'ref',
                id: 'sdks/nodejs/sdk_nodejs_index'
            }
        ],
        'User Guides': [
            'guides/overview',
            'guides/login',
            'guides/register',
            'guides/managing'
        ],
        'Links': [{
            type: 'link',
            label: 'Yat homepage',
            href: 'https://y.at'
        }]
    },
    sdk_nodejs: [
        'sdks/nodejs/sdk_nodejs_index',
        'sdks/nodejs/docs/cartapi',
        'sdks/nodejs/docs/emojiapi',
        'sdks/nodejs/docs/keymanagementapi',
        'sdks/nodejs/docs/proxyapi',
        'sdks/nodejs/docs/userauthenticationapi',
        'sdks/nodejs/docs/userinterestapi',
        'sdks/nodejs/docs/usersapi'
    ],
    sdk_kotlin: [
        'sdks/kotlin/sdk_kotlin_index',
        'sdks/kotlin/docs/cartapi',
        'sdks/kotlin/docs/emojiapi',
        'sdks/kotlin/docs/keymanagementapi',
        'sdks/kotlin/docs/proxyapi',
        'sdks/kotlin/docs/userauthenticationapi',
        'sdks/kotlin/docs/userinterestapi',
        'sdks/kotlin/docs/usersapi'
    ]
};
