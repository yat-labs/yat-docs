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
* Partner app's deep link scheme for the redirection of the existing Yat users to the partner app through a QR code (Flow [1](#1-allow-my-users-to-get-a-yat), [2](#2-connect-existing-yats) & [8](#8-enable-yat-users-to-connect-with-partner-wallets))

Once the partner path component, the QR code deep link scheme and the redirection URL have been assigned, they can carry out the rest of the steps below.

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

### 1B. Get a Yat (Non-custodial Wallets)

:::note
Non-custodial crypto wallets give users complete control of their keys and funds. They can be browser-based, software installed on mobile devices or on desktops, or cold-storage wallets like hardware devices, among others.
:::

<a href="/img/flow1b-lrg.png" target="_blank"><img src="/img/flow1b-sml.png"/></a>

&nbsp;  
As the first step of the integration for an existing partner app user, the partner app makes a call to the `/process` endpoint to:

1. Create and activate a new Yat user
2. Allow the user to purchase a Yat
3. Assign the Yat to the newly created user

**Service URL:** https://y.at/process

**Method:** `POST`

**Headers:**

- `X-Bypass-Token:` Contains an authentication token for the partner. To be delivered to the partner by the Yat team.

**Body:** A JSON object containing the id and password of the user. This pair can later be used to authenticate the user with the Yat API. `alternate_id` is a deterministic public value based on the unique wallet. `password` is a deterministic secret that can be any secret that is signed by the secret key for the wallet.

``` json
{
    "alternate_id": "user_id",
    "password": "user_password"
}
```

**Response:** A JSON object that contains the user authentication info (`access_token` and `refresh_token`), user details (Yat user `id`, `alternate_id` that was sent by the partner, and more).

``` json
{
    "auth": {
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...FZBzoe8Zky9Pl7WCNXwg5KphVO4FNTKxJKX87w9sHW0",
        "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...8Tr8zLbMLNzleG9KL0zJihBI6cd5V8rXPIOjQjcB_WI",
        "requires_2fa": null
    },
    "user": {
        "id": "b6b6da81-250e-456e-a61a-5f426ae92a22",
        "alternate_id": "keith24",
        "is_active": true,
        "pubkeys": [
            "ac7f4164608a0b75a3d97da9bd27dc957c2ee80462875daf5e7ba18bf3dce545"
        ],
        "free_limit": 0,
        "remaining_free_emoji": 0
    },
}
```

### Redirection of the User to the Yat Web Application

The partner application user needs to get redirected to the Yat website to Get a Yat (Flow [1A](#1a-get-a-yat-custodial-wallets) & [1B](#1b-get-a-yat-non-custodial-wallets)) or Connect a Yat (Flow [2](#2-connect-existing-yats)). A number of query parameters are necessary for the Yat web application to correctly identify the user and link any necessary data to the user's Yat.

Web App URL: `https://y.at/partner/{partner_path}`

**Path Parameters:**

`partner_path:` A short path parameter for the partner that is defined by the Yat team and delivered to the partner application development team.

**Query Parameters:**

`refresh_token:` User's refresh token that was received in the response body of redirection to Yat web or as a deep link query parameter in redirection from Yat web in both of the above flows - Get a Yat (Flow [1A](#1a-get-a-yat-custodial-wallets) & [1B](#1b-get-a-yat-non-custodial-wallets)) or Connect a Yat (Flow [2A](#2a-connect-existing-yats-from-onboarding) & [2B](#2b-connect-existing-yats-from-settings)).

`eid:` The Yat that the user linked or purchased, received by the partner application as a result of the call to the /process endpoint in Step #2a or as a deep link query parameter in Flow [8](#8-enable-yat-users-to-connect-with-partner-wallets) (Enable Yat users to connect with partner wallets).

`addresses:` A percent-encoded series of cryptocurrency addresses to be linked to the Yat separated by pipes in the format `{YAT_TAG_1}={ADDRESS_1}|{YAT_TAG_2}={ADDRESS_2}|...|{YAT_TAG_N}={ADDRESS_N}`.
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

## 3. Manage connected Yats

Partner application’s users can access the Yat dashboard directly from the partner app with the Manage Yats flow. The Yat Dashboard enables users to visualize, mint, transfer their Yat and more.

<a href="/img/flow3-lrg.png" target="_blank"><img src="/img/flow3-sml.png"/></a>

## 4. Send payment to a Yat

If the user has connected an address with their Yat, addresses are set, any one can send crypto payments and the user will receive it in the correct address. Alice can send BTC to Bob’s Yat (🚀👽) without ever having to paste Bob’s P2PKH address. To top it all off, the partner app can even render a unique visualization associated with 🚀👽 created by Bob himself. Yat supports the top 100 cryptocurrencies.

<a href="/img/flow4a-lrg.png" target="_blank"><img src="/img/flow4a-sml.png"/></a>

### 4B. Edge Case: Multiple Yats associated with 1 address

<a href="/img/flow4b-lrg.png" target="_blank"><img src="/img/flow4b-sml.png"/></a>

### 4C. Edge Case: Multiple addresses associated with 1 Yat

<a href="/img/flow4c-lrg.png" target="_blank"><img src="/img/flow4c-sml.png"/></a>

### Looking up a Yat

A `GET` request is required to look up a Yat and query all the records linked to it.

**Service URL:** `https://a.y.at/emoji_id/{yat}`

**Method:** `GET`

**Path Parameters:**

`yat`: The Yat to be looked up. (e.g. https://y.at/emoji_id/👒🍥🍬♐🕌)

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

`curl -X GET http://localhost:3001/emoji_id/👒🍥🍬/BTC` and receive a response listing only the Bitcoin addresses associated with the yat. For example:

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

## 5. Receive payments from a Yat

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

## 8. Enable Yat users to connect with partner wallets

Logged-in Yat users who already own one or more Yats can connect their Yat(s) with their wallet directly from Yat’s web app.

Yat will publish a blog post and marketing collateral to announce the partnership to the Yat community. The post will contain a QR code with a deferred deep link that launches the app or installs and then launches the partner app.

<a href="/img/flow8-lrg.png" target="_blank"><img src="/img/flow8-sml.png"/></a>

&nbsp;  
Existing Yat users are forwarded to the partner application through a QR code, which encodes the partner deep link scheme and query parameters that identify the user's Yat and session information.

QR Code URL: Partner app's deep link scheme as described in [Pre-integration setup](#getting-started). (e.g. `coolwalletapp://y.at` )

**Query Parameters:**

`eid:` Existing user's Yat.

`refresh_token:` Existing user's refresh token.
Partner application proceeds with [Flow 8](#8-enable-yat-users-to-connect-with-partner-wallets) upon successful reception of the QR code deep link.
