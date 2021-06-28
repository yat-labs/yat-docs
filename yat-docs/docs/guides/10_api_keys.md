---
id: api_keys
slug: /api_keys
title: How to generate an API key
---

The most common way to access the Yat API is using access tokens. But you may also supply an API key with every request
that may offer some users more flexibility and ease of use when interacting with the Yat API.

## Generating an API Key

To generate an API key that you can use as authentication in the `X-Api-Key` header follow these steps.

1. Get an access token - in your browser after refreshing the page open a developer console and type `JSON.parse(localStorage.getItem('tokens')).access_token`
2. Generate an API key
   ```bash
   curl -X POST https://a.y.at/api_keys -H 'Authorization: Bearer {access_token}' -H 'Content-Type: application/json' -d '{"name": "Your-Key-Name"}'
   ```
3. The response contains an `api_key` field in the JSON result.
4. All further queries can now be called with `curl -H 'X-Api-Key: api_key'`