---
id: crypto-wallets
slug: /crypto-wallets
title: Crypto Wallets
---

## Overview

This guide describes the Yat integration process for the wallet partners. This guide contains a curation of flows recommended for wallet partners who want to integrate Yats to simplify the experience of sending and receiving payments.

## Getting Started

### Pre-integration setup

The Yat team and the partner will need to finalize the following before kicking off the integration:

* Partner branding assets for the Yat web views (e.g. the partner’s logo that will appear in our web app)
* URL path component for the partner (e.g. /coolwalletapp)
* Partner’s return URL that the Yat web app redirects to once a user completes the integration steps in our web app (Flow [1](#1-allow-my-users-to-get-a-yat) & [2](#2-connect-existing-yats))

Once the partner path component and the redirection URL have been assigned, they can carry out the rest of the steps below.

## 1. Allow my users to get a Yat

### Overview

This flow covers the journey of partner app users purchasing a Yat. We recommend that partnering apps enable the user to enter the journey from at least 3 points:

* Push notification announcing the partnership to all users
* Splash screens on app launch
* Menu item within the app’s Settings or Profile section

### 1A. Get a Yat (Custodial Wallets)

:::note
With a custodial wallet, the wallet provider controls your private keys. Essentially, a third party protects your funds and returns them if you want to trade or send them somewhere else. Custodial wallets are often found in web-based exchange wallets.
:::

<a href="/img/flow1a-lrg.png" target="_blank"><img src="/img/flow1a-sml.png"/></a>

### Redirection of the User to the Yat Web Application

The partner application user needs to get redirected to the Yat website to Get a Yat (Flow [1A](#1a-get-a-yat-custodial-wallets)). A number of query parameters are necessary for the Yat web application to correctly identify the user and link any necessary data to the user's Yat.

Web App URL: `https://y.at/partner/{partner_path}`

**Path Parameters:**

`partner_path:` A short path parameter for the partner that is defined by the Yat team and delivered to the partner application development team.

**Query Parameters:**

`refresh_token:` User's refresh token that was received in the response body of redirection to Yat web or as a deep link query parameter in redirection from Yat web in Get a Yat (Flow [1A](#1a-get-a-yat-custodial-wallets)).

`eid:` The Yat that the user linked or purchased, received by the partner application as a result of the initial connect call.

`addresses:` A percent-encoded series of cryptocurrency addresses to be linked to the Yat separated by pipes in the format `YAT_TAG_1=ADDRESS_1|YAT_TAG_2=ADDRESS_2|...|YAT_TAG_N=ADDRESS_N`.
Please refer to the [Yat record categories](https://api-docs.y.at/docs/categories) for detailed information on record categories, but here's a partial list of cryptocurrency address tags:

- `0x1001` Monero standard address
- `0x1002` Monero sub address
- `0x1003` Bitcoin address
- `0x1004` Ethereum address
- `0x3fff` Generic crypto address

Here's an addresses parameter value that defines BTC and ETH addresses before percent-encoding:
```
0x1003=1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s|0x1004=108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1```
```

Here's the same parameter value after percent-encoding:
```
0x1003%3D1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s%7C0x1004%3D108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1
```

And here's an imaginary URL for a partner app with the path parameter (e.g. coolwalletapp) that has the refresh_token, eid and the percent-encoded addresses query parameters:

```
https://y.at/partner/coolwalletapp?eid=🗞️💉⛸️🆓🔮&addresses=0x1003%3D1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s%7C0x1004%3D108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1&refresh_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNmI2ZGE4MS0yNTBlLTQ1NmUtYTYxYS01ZjQyNmFlOTJhMjIiLCJpc3MiOiJlbW9qaS1pZC10b2tlbi1pc3N1ZXIiLCJleHAiOjE2MjAzNzczMjgsInNjb3BlcyI6WyJjYXJ0OnNob3ciLCJjYXJ0OnVwZGF0ZSIsInVzZXI6Y3JlYXRlQXBpS2V5IiwiZWRpdGlvbjpyZWFkIiwiZW1vamk6OnRyYW5zZmVyIiwibG9vdGJveDp1c2UiLCJvcmRlcjpyZWFkU2VsZiIsIm9yZ2FuaXphdGlvbkxpc3Q6cmVhZCIsInBheW1lbnRNZXRob2Q6ZGVzdHJveSIsInBheW1lbnRNZXRob2Q6cmVhZCIsInBheW1lbnRNZXRob2Q6c2V0RGVmYXVsdCIsInVzZXI6ZGVsZXRlU2VsZiIsInVzZXJJbnRlcmVzdDpkZWxldGUiLCJ1c2VySW50ZXJlc3Q6cmVhZCIsInVzZXJJbnRlcmVzdDp3cml0ZSIsInVzZXI6d3JpdGVTZWxmIl0sImlzc3VlZCI6MTYyMDM3NjQyOCwiYWN0aXZlMmZhIjowfQ.FZBzoe8Zky9Pl7WCNXwg5KphVO4FNTKxJKX87w9sHW0
```

`address_json:` A Base64-encoded array of tag records to be linked to the Yat in the following format:
`[{YAT_TAG: ADDRESS_DATA}]`

`ADDRESS_DATA` contains the wallet address and name, separated by pipe (|) in the format `WALLET_ADDRESS|WALLET_NAME`

Making the entire format
```
[{YAT_TAG: WALLET_ADDRESS|WALLET_NAME}]
```

Here's an address_json parameter value that defines an ETH address before Base64-encoding:
```
[{0x1004:"108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1|Cool Wallet"}]
```

Here's the same parameter value after Base64-encoding:
```
W3siNDEwMCI6IjEwOGRFRmEwMjcyZEMxMThFRjAzYTc5OTNlNGZDN0E4QWNGM2EzZDF8Q29vbCBXYWxsZXQifV0
```

### Redirection of the User from Yat Web Flow to the Partner Application

The user can choose to purchase a new Yat on the Yat web application. After the successful
completion of this flow, the Yat web application calls the return URL previously defined by the partner application development team.

**Return URL:** To be agreed upon by the Yat and partner development teams in pre-integration setup.

** Query Parameters: **

`eid:` The Yat that was purchased, if any.

`refresh_token:` The same refresh token that was sent to the web application by the partner application in [Redirection of the User to the Yat Web Application](#redirection-of-the-user-to-the-yat-web-application).

The partner application receives the query parameters as a result of the redirection from the Yat web application to the partner application, and the integration flow is completed.

## 2. Connect existing Yat(s)

Users who already own one or more Yats can connect their Yat(s) with their wallet. We recommend that partner apps enable the user to enter the journey from:

* Push notification announcing the partnership to all users
* Splash screens on app launch
* Menu item within the app’s Settings or Profile section

### 2A. Connect existing Yat(s) from Onboarding

<a href="/img/flow2a-lrg.png" target="_blank"><img src="/img/flow2a-sml.png"/></a>

### 2B. Connect existing Yat(s) from Settings

<a href="/img/flow2b-lrg.png" target="_blank"><img src="/img/flow2b-sml.png"/></a>

The partner application user needs to get redirected to the Yat website to Connect a Yat (Flow 2). A number of query parameters are necessary for the Yat web application to correctly identify the user and link any necessary data to the user's Yat.

**Web App URL**: `https://y.at/partner/{partner_path}/link-email`

**Query Parameters:**

`refresh_token`: User's refresh token that was received in the response body of redirection to Yat web or as a deep link query parameter in redirection from Yat web.

`eid`: The Yat that the user linked or purchased, received by the partner application as a result of the initial connect call.

`addresses`: A percent-encoded series of cryptocurrency addresses to be linked to the Yat separated by pipes in the format `YAT_TAG_1=ADDRESS_1|YAT_TAG_2=ADDRESS_2|...|YAT_TAG_N=ADDRESS_N`.
Please refer to the [Yat record categories](https://api-docs.y.at/docs/categories) for detailed information on record categories.

## 3. Manage connected Yats

Partner application’s users can access the Yat dashboard directly from the partner app with the Manage Yats flow. The Yat Dashboard enables users to visualize, mint, transfer their Yat and more.

The partner application user needs to get redirected to the Yat website to Manage Yats (Flow 3). A number of query parameters are necessary for the Yat web application to correctly identify the user and link any necessary data to the user's Yat.

**Web App URL:** `http://y.at/partner/{partner_path}/manage`

**Query Parameters:**

`refresh_token`: User's refresh token that was received in the response body of redirection to Yat web.

`addresses` : A percent-encoded series of cryptocurrency addresses to be linked to the Yat separated by pipes in the format `YAT_TAG_1=ADDRESS_1|YAT_TAG_2=ADDRESS_2|...|YAT_TAG_N=ADDRESS_N`. Please refer to the [Yat record categories](https://api-docs.y.at/docs/categories) for detailed information on record categories.

<a href="/img/flow3-lrg.png" target="_blank"><img src="/img/flow3-sml.png"/></a>

## 4. Send payment to a Yat

If the user has connected an address with their Yat, addresses are set, anyone can send crypto payments and the user will receive it in the correct address. Alice can send BTC to Bob’s Yat (🚀👽) without ever having to paste Bob’s P2PKH address. To top it all off, the partner app can even render a unique visualization associated with 🚀👽 created by Bob himself. Yat supports the top 100 cryptocurrencies as native tags. Additional currencies can be specified with the generic crypto tag.

<a href="/img/flow4a-lrg.png" target="_blank"><img src="/img/flow4a-sml.png"/></a>

### 4B. Edge Case: Multiple Yats associated with 1 address

<a href="/img/flow4b-lrg.png" target="_blank"><img src="/img/flow4b-sml.png"/></a>

### Looking up a Yat

A `GET` request is required to look up a Yat and query all the records linked to it.

**Service URL:** `https://a.y.at/emoji_id/{yat}`

**Method:** `GET`

**Path Parameters:**

`yat`: The URI encoded Yat to be looked up. (e.g. https://a.y.at/emoji_id/%F0%9F%91%92%F0%9F%8D%A5%F0%9F%8D%AC%E2%99%90%F0%9F%95%8C)

Response: A JSON object that contains the lookup result. Yat records will be found in the result field. Below example contains a BTC address `(0x1003)`, an ETH address `(0x1004)`, a Monero standard address `(0x1001)` and a Tari public key `(0x0101)`.

```json
{
    "status": true,
    "result": [
        {
            "tag": "0x1003",
            "data": "1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s",
            "hash": "47a1b75620481c8c99549610e421639722f749f6f7ede10246c4217a5bbe1b6e"
        },
        {
            "tag": "0x1004",
            "data": "108defa0272dc118ef03a7993e4fc7a8acf3a3d1",
            "hash": "2b618fab33f33123d7529ecfaf35fbc931eaa5b0113ca8c402e1c47b541488b1"
        },
        {
            "tag": "0x0101",
            "data": "d2e4db6dac593a9af36987a35676838ede4f69684ba433baeed68bce048e111b",
            "hash": "511b317df0da2b7ffe168a4c94a6f221d32ec9fbcdc9ae93b8720f0bedad8875"
        },
        {
            "tag": "0x1001",
            "data": "4AdUndXHHZ6cfufTMvppY6JwXNouMBzSkbLYfpAV5Usx3skxNgYeYTRj5UzqtReoS44qo9mtmXCqY45DJ852K5Jv2684Rge",
            "hash": "426835f927679408ed496971f8630175cb5e40baa9640cac27c7901d9a76f7b9"
        }
    ],
    "error": null,
    "stats": [
        {
            "metric": "api_emoji_lookups",
            "description": "Number of times emoji was looked up via API",
            "start_date": "2021-04-13T12:22:54.032398558Z",
            "finish_date": "2021-05-11T12:22:54.032399729Z",
            "key": "👒🍥🍬♐🕌",
            "value": 0
        }
    ]
}
```

### Utility endpoints

If you're looking for a specific tag associated with the Yat, there are utility endpoints available for most of the emoji id category tags in the form `https://a.y.at/emoji_id/{yat}/{ticker}`.

So for example, to query the BTC address only you can simply call

`curl -X GET https://a.y.at/emoji_id/%F0%9F%91%92%F0%9F%8D%A5%F0%9F%8D%AC/BTC` and receive a response listing only the Bitcoin addresses associated with the yat. For example:

```json
{
  "status":true,
  "result":[
    {
      "tag":"0x1003",
      "data":"1BTCMyAdress2345678abcdefxxxxxxx",
      "hash":"c34cd3be99c3cc93aa48a51ea156bae863e40f91582bd70f2b688442c4482172"
    }
  ],
  "error":null
}
```

### Visualizations

Each Yat may have a set of visualizations, if the user has generated them. To access these pre-rendered files call

`curl -X GET https://a.y.at/emoji_id/%E2%98%A0%EF%B8%8F%F0%9F%90%99%E2%98%A0%EF%B8%8F/json/VisualizerFileLocations` which will respond with the absolute URLs for the files.

```json
{
  "data": {
    "gif": "https://y.at/viz/poison/poison.octopus.poison-f4fc44.gif",
    "image": "https://y.at/viz/poison/poison.octopus.poison-f4fc44.png",
    "video": "https://y.at/viz/poison/poison.octopus.poison-f4fc44.mp4",
    "webm": "https://y.at/viz/poison/poison.octopus.poison-f4fc44.webm"
  },
  "is_locked": false,
  "created_at": "2021-08-03T08:51:00.362249Z",
  "updated_at": "2021-09-15T09:23:37.787489Z",
  "locked_future_writes_at": null
}
```

Coming soon: If **no visualization** exists for the Yat, we recommend partners display the fallback graphic in place of the visualization. Fallback graphics will be updated on to this documentation shortly.

## 5. Receive payments from a Yat

Looking up a Yat from an address is not currently possible, however the client application could store a map of used addresses to known Yats and confirm the address is still linked to that Yat when doing the lookup by using Flow [7](#7-add-yats-to-address-book).

<a href="/img/flow5-lrg.png" target="_blank"><img src="/img/flow5-sml.png"/></a>

## 6. Share a Yat address

<a href="/img/flow6-lrg.png" target="_blank"><img src="/img/flow6-sml.png"/></a>

## 7. Add Yats to address book

The Address Book integration allows users to add and associate any number of crypto addresses with Yat(s) making it easier to send crypto to those crypto addresses in the future without having to recall their alphanumeric addresses.

<a href="/img/flow7-lrg.png" target="_blank"><img src="/img/flow7-sml.png"/></a>

&nbsp;  
As a part of this flow, the partner app will need to:

* Have a native address book feature built-in to their app
* Enable emoji rendering within the address field
* Assign a nickname to the address
* Allow users to enter/paste the Yat instead of their wallet address when sending money

## 8. Invalid Yats

Looking up a valid Yat, that has not yet been registered will return a 404 error.

`curl -X GET https://a.y.at/emoji_id/%E2%98%A0%EF%B8%8F%F0%9F%90%99%E2%98%A0%EF%B8%8F%F0%9F%91%81%EF%B8%8F%F0%9F%A6%96`

```json
{
  "error": "Error processing EmojiId 404: Emoji lookup error: EmojiDbError: EmojiID ☠️🐙☠️👁️🦖 not found"
}
```

Looking up a Yat that is not part of the set will return a 400 error.

`curl -X GET https://a.y.at/emoji_id/%F0%9F%88%B5`

```json
{
  "error": "Failed to parse EmojiId: Encountered a character or emoji not in the supported set"
}
```
