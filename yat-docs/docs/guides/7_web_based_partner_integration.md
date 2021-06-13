---
id: web_based_partner_integration
slug: /web_based_partner_integration
title: Web-Based Partner Integration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there
are likely bugs in the implementation.
:::

This guide describes the Yat integration process for the Yat partners. A partner application link users' existing yats
to their application, or provide a simple to use flow to allow them to buy a new one.

## 1. Pre-Integration

The Yat team and the partner will need to finalize the following before kicking off the integration:

1. Partner branding assets for the Yat web views (e.g. the partner’s logo that will appear in our web app)
2. URL path component for the partner (e.g. `/coolwalletapp`)
3. Partner’s return URL that the Yat web app redirects to once a user completes the integration steps in our
   web app ([2a](#2a-existing-partner-app-users))
4. Partner app's deep link scheme for the redirection of the existing Yat users to the partner app through a
   QR code ([2b](#2b-existing-yat-users))

Once the partner path component, the QR code deep link scheme and the redirection URL have been assigned, they can carry
out the rest of the steps below.

## 2a. Existing Partner App Users

<a href="/img/web_based_integration_flow_1_large.png" target="_blank"><img src="/img/web_based_integration_flow_1_small.png"/></a>
<br/><br/>

As the first step of the integration for an existing partner app user, the partner app makes a call to the `/process` endpoint to:

1. Create and activate a new Yat user
2. Allow the user to purchase a Yat
3. Assign the Yat to the newly created user

**Service URL:** `https://y.at/process`<br/>
**Method:** `POST`<br/>
**Headers:**<br/>
- `X-Bypass-Token`: Contains an authentication token for the partner. To be delivered to the partner by the Yat team.

**Body:** A JSON object containing the id and password of the user. This pair can later be used to authenticate the user
with the Yat API. `alternate_id` is a deterministic public value based on the unique wallet. `password` is a
deterministic secret that can be any secret that is signed by the secret key for the wallet.

```json
{
    "alternate_id": "user_id",
    "password": "user_password"
}
```

**Response:** A JSON object that contains the user authentication info (`access_token` and `refresh_token`), user
details (Yat user `id`, `alternate_id` that was sent by the partner, and more).

```json
{
    "auth": {
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNmI2ZGE4MS0yNTBlLTQ1NmUtYTYxYS01ZjQyNmFlOTJhMjIiLCJpc3MiOiJlbW9qaS1pZC10b2tlbi1pc3N1ZXIiLCJleHAiOjE2MjAzNzczMjgsInNjb3BlcyI6WyJjYXJ0OnNob3ciLCJjYXJ0OnVwZGF0ZSIsInVzZXI6Y3JlYXRlQXBpS2V5IiwiZWRpdGlvbjpyZWFkIiwiZW1vamk6OnRyYW5zZmVyIiwibG9vdGJveDp1c2UiLCJvcmRlcjpyZWFkU2VsZiIsIm9yZ2FuaXphdGlvbkxpc3Q6cmVhZCIsInBheW1lbnRNZXRob2Q6ZGVzdHJveSIsInBheW1lbnRNZXRob2Q6cmVhZCIsInBheW1lbnRNZXRob2Q6c2V0RGVmYXVsdCIsInVzZXI6ZGVsZXRlU2VsZiIsInVzZXJJbnRlcmVzdDpkZWxldGUiLCJ1c2VySW50ZXJlc3Q6cmVhZCIsInVzZXJJbnRlcmVzdDp3cml0ZSIsInVzZXI6d3JpdGVTZWxmIl0sImlzc3VlZCI6MTYyMDM3NjQyOCwiYWN0aXZlMmZhIjowfQ.FZBzoe8Zky9Pl7WCNXwg5KphVO4FNTKxJKX87w9sHW0",
        "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNmI2ZGE4MS0yNTBlLTQ1NmUtYTYxYS01ZjQyNmFlOTJhMjIiLCJpc3MiOiJlbW9qaS1pZC10b2tlbi1pc3N1ZXIiLCJleHAiOjE2MjMwNTQ4MjgsInNjb3BlcyI6WyJ0b2tlbjpyZWZyZXNoIl0sImlzc3VlZCI6MTYyMDM3NjQyOCwiYWN0aXZlMmZhIjowfQ.8Tr8zLbMLNzleG9KL0zJihBI6cd5V8rXPIOjQjcB_WI",
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

## 2b. Existing Yat Users

<a href="/img/web_based_integration_flow_2_large.png" target="_blank"><img src="/img/web_based_integration_flow_2_small.png"/></a>

<br/><br/>

Existing Yat users are forwarded to the partner application through a QR code, which encodes the partner deep link
scheme and query parameters that identify the user's Yat and session information.

**QR Code URL:** Partner app's deep link scheme as described in [Step #1](#1-pre-integration). (e.g. `coolwalletapp://y.at`)

**Query Parameters:**

- `eid`: Existing user's Yat.
- `refresh_token`: Existing user's refresh token.

Partner application proceeds with [Step #3](#3-redirection-of-the-user-to-the-yat-web-application) upon successful
reception of the QR code deep link.

## 3. Redirection of the User to the Yat Web Application

The partner application user needs to get redirected to the Yat website after the successful completion of
[Step #2a](#2a-existing-partner-app-users) or [Step #2b](#2b-existing-yat-users). A number of query parameters are
necessary for the Yat web application to correctly identify the user and link any necessary data to the user's Yat.

**Web App URL:** `https://y.at/partner/{partner_path}`<br/>
**Path Parameters:**

- `partner_path`: A short path parameter for the partner that is defined by the Yat team and delivered to the partner
   application development team.

**Query Parameters:**

- `refresh_token`: User's refresh token that was received in the response body of
  [Step #2a](#2a-existing-partner-app-users) or as a deep link query parameter in [Step #2b](#2b-existing-yat-users).
- `eid`: The Yat that the user linked or purchased, received by the partner application as a result of the call to the
  `/process` endpoint in [Step #2a](#2a-existing-partner-app-users) or as a deep link query parameter in
  [Step #2b](#2b-existing-yat-users).
- `addresses`: A **percent-encoded** series of cryptocurrency addresses to be linked to the Yat separated by pipes in
  the format `{YAT_TAG_1}={ADDRESS_1}|{YAT_TAG_2}={ADDRESS_2}|...|{YAT_TAG_N}={ADDRESS_N}`. Please refer to the
  [Yat record categories](5_categories.md) for detailed information on record categories, but here's a partial list of
  cyptocurrency address tags:
    - `0x1001` Monero standard address
    - `0x1002` Monero sub address
    - `0x1003` Bitcoin address
    - `0x1004` Ethereum address
    - `0x3fff` Generic crypto address

Here's an `addresses` parameter value that defines BTC and ETH addresses _before percent-encoding_:
`0x1003=1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s|0x1004=108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1`

Here's the same parameter value _after percent-encoding_:
`0x1003%3D1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s%7C0x1004%3D108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1`

And here's an imaginary URL for a partner app with the path parameter `coolwalletapp` that has the `refresh_token`,
`eid` and the percent-encoded `addresses` query parameters:

```
https://y.at/partner/coolwalletapp?eid=🗞️💉⛸️🆓🔮&addresses=0x1003%3D1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s%7C0x1004%3D108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1&refresh_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNmI2ZGE4MS0yNTBlLTQ1NmUtYTYxYS01ZjQyNmFlOTJhMjIiLCJpc3MiOiJlbW9qaS1pZC10b2tlbi1pc3N1ZXIiLCJleHAiOjE2MjAzNzczMjgsInNjb3BlcyI6WyJjYXJ0OnNob3ciLCJjYXJ0OnVwZGF0ZSIsInVzZXI6Y3JlYXRlQXBpS2V5IiwiZWRpdGlvbjpyZWFkIiwiZW1vamk6OnRyYW5zZmVyIiwibG9vdGJveDp1c2UiLCJvcmRlcjpyZWFkU2VsZiIsIm9yZ2FuaXphdGlvbkxpc3Q6cmVhZCIsInBheW1lbnRNZXRob2Q6ZGVzdHJveSIsInBheW1lbnRNZXRob2Q6cmVhZCIsInBheW1lbnRNZXRob2Q6c2V0RGVmYXVsdCIsInVzZXI6ZGVsZXRlU2VsZiIsInVzZXJJbnRlcmVzdDpkZWxldGUiLCJ1c2VySW50ZXJlc3Q6cmVhZCIsInVzZXJJbnRlcmVzdDp3cml0ZSIsInVzZXI6d3JpdGVTZWxmIl0sImlzc3VlZCI6MTYyMDM3NjQyOCwiYWN0aXZlMmZhIjowfQ.FZBzoe8Zky9Pl7WCNXwg5KphVO4FNTKxJKX87w9sHW0
```

## 4. Yat Web Flow and Back to the Partner Application

The user can choose to purchase a new Yat on the Yat web application. After the successful
completion of this flow, the Yat web application calls the return URL previously defined by the partner application
development team.

**Return URL:** To be agreed upon by the Yat and partner development teams in [Step #1](#1-pre-integration).<br/>
**Query Parameters:**

- `eid`: The Yat that was purchased, if any.
- `refresh_token`: The same refresh token that was sent to the web application by the partner application in
  [Step #3](#3-redirection-of-the-user-to-the-yat-web-application).

The partner application receives the query parameters as a result of the redirection from the Yat web application to the
partner application, and the integration flow is completed.

## 5. Looking up a Yat

A `GET` request is required to look up a Yat and query all the records linked to it.

**Service URL:** `https://y.at/emoji_id/{yat}`<br/>
**Method:** `GET`<br/>
**Path Parameters:**

- `yat`: The Yat to be looked up. (e.g. `https://y.at/emoji_id/👒🍥🍬♐🕌`)

**Response:** A JSON object that contains the lookup result. Yat records will be found in the `result` field. Below
example contains a BTC address (`0x1003`), an ETH address (`0x1004`), a Monero standard address (`0x1001`) and a Tari
public key (`0x0101`).

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

If you're looking for a specific tag associated wityh the Yat, there are utility endpoints available for most of the
emoji id category tags in the form `https://y.at/emoji_id/{yat}/{ticker}`.

So for example, to query the BTC address only you can simply call

`curl -X GET http://localhost:3001/emoji_id/👒🍥🍬/BTC` and receive a response listing only the Bitcoin addresses
associated with the yat. For example:

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