---
id: web_based_partner_integration
slug: /web_based_partner_integration
title: Web-Based Partner Integration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

This guide describes the Yat integration process for the Yat partners. A partner application can get a free Yat for any of its users, and link cryptocurrency addresses to the user's Yat as a result of the flow described in this document.

<a href="/img/web_based_integration_flow_1_large.png" target="_blank"><img src="/img/web_based_integration_flow_1_small.png"/></a>
<br/><br/>
<a href="/img/web_based_integration_flow_2_large.png" target="_blank"><img src="/img/web_based_integration_flow_2_small.png"/></a>

## 1. Pre-integration

The Yat team and the partner will need to finalize the following before kicking off the integration:

1. Partner branding assets for the Yat web views (e.g. the partner’s logo that will appear in our web app)
2. URL path component for the partner (e.g. `/coolwalletapp`)
3. Partner’s return URL that the Yat web app redirects to once a user completes the integration steps in our web app

Once the partner’s development team knows the partner path component and the redirection URL, they can carry out the rest of the steps below.

## 2. Calling the `/process` endpoint

As the first step of the integration, the partner app makes an call to the `/process` endpoint to:

1. Create and activate a new Yat user
2. Find a free Yat for the user
3. Assign this free Yat to the newly created user

**Service URL:** `https://y.at/process`<br/>
**Method:** `POST`<br/>
**Headers:**<br/>
- `X-Bypass-Token`: Contains an authentication token for the partner. To be delivered to the partner by the Yat team.

**Body:** A JSON object containing the id and password of the user. This pair can later be used to authenticate the user with the Yat API. `alternate_id` is a deterministic public value based on the unique wallet. `password` is a deterministic secret that can be any secret that is signed by the secret key for the wallet.
```json
{
  "alternate_id": "user_id",
  "password": "user_password"
}
```
**Response:** A JSON object that contains the user authentication info (`access_token` and `refresh_token`), user details (Yat user `id`, `alternate_id` that was sent by the partner, and more) and the Yat that got reserved and assigned to the user as the first value in the array `yats`.
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
    "free_limit": 1,
    "remaining_free_emoji": 0
  },
  "yats": [
    "🗞️💉⛸️🆓🔮"
  ]
}
```

## 3. Redirection of the user to the Yat web application

Partner application user needs to get redirected to the Yat web application after the successful completion of [Step #2](#2-calling-the-process-endpoint). A number of query parameters are necessary for the Yat web application to correctly identify the user and link any necessary data to the user's Yat.

**Web App URL:** `https://y.at/partner/{partner_path}`<br/>
**Path Parameters:**
- `partner_path`: A short path parameter for the partner that is defined by the Yat team and delivered to the partner application development team.

**Query Parameters:**
- `refresh_token`: User's refresh token that was received in the response body of [Step #2](#2-calling-the-process-endpoint).
- `eid`: The free Yat that got assigned to the user, received by the partner application as a result of the call to the `/process` endpoint in [Step #2](#2-calling-the-process-endpoint).
- `addresses`: A **percent-encoded** series of cryptocurrency addresses to be linked to the Yat separated by pipes in the format `{YAT_TAG_1}={ADDRESS_1}|{YAT_TAG_2}={ADDRESS_2}|...|{YAT_TAG_N}={ADDRESS_N}`. Please refer to the [Yat record categories](./categories) for detailed information on record categories, but here's a list of cyptocurrency address tags:
    - `0x1001` Monero standard address
    - `0x1002` Monero sub address
    - `0x1003` Bitcoin address
    - `0x1004` Ethereum address
    - `0x3fff` Generic crypto address

Here's an `addresses` parameter value that defines BTC and ETH addresses _before percent-encoding_:
`0x1003=1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s|0x1004=108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1`

Here's the same parameter value _after percent-encoding_:
`0x1003%3D1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s%7C0x1004%3D108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1`

And here's an imaginary URL for a partner app with the path parameter `coolwalletapp` that has the `refresh_token`, `eid` and the percent-encoded `address` query parameters:

```
https://y.at/partner/coolwalletapp?eid=🗞️💉⛸️🆓🔮&addresses=0x1003%3D1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s%7C0x1004%3D108dEFa0272dC118EF03a7993e4fC7A8AcF3a3d1&refresh_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiNmI2ZGE4MS0yNTBlLTQ1NmUtYTYxYS01ZjQyNmFlOTJhMjIiLCJpc3MiOiJlbW9qaS1pZC10b2tlbi1pc3N1ZXIiLCJleHAiOjE2MjAzNzczMjgsInNjb3BlcyI6WyJjYXJ0OnNob3ciLCJjYXJ0OnVwZGF0ZSIsInVzZXI6Y3JlYXRlQXBpS2V5IiwiZWRpdGlvbjpyZWFkIiwiZW1vamk6OnRyYW5zZmVyIiwibG9vdGJveDp1c2UiLCJvcmRlcjpyZWFkU2VsZiIsIm9yZ2FuaXphdGlvbkxpc3Q6cmVhZCIsInBheW1lbnRNZXRob2Q6ZGVzdHJveSIsInBheW1lbnRNZXRob2Q6cmVhZCIsInBheW1lbnRNZXRob2Q6c2V0RGVmYXVsdCIsInVzZXI6ZGVsZXRlU2VsZiIsInVzZXJJbnRlcmVzdDpkZWxldGUiLCJ1c2VySW50ZXJlc3Q6cmVhZCIsInVzZXJJbnRlcmVzdDp3cml0ZSIsInVzZXI6d3JpdGVTZWxmIl0sImlzc3VlZCI6MTYyMDM3NjQyOCwiYWN0aXZlMmZhIjowfQ.FZBzoe8Zky9Pl7WCNXwg5KphVO4FNTKxJKX87w9sHW0
```

## 4. Yat web flow and back to the partner application

The user can choose to keep the free Yat or purchase a new Yat on the Yat web application. After the successful completion of this flow, the Yat web application calls the return URL previously defined by the partner application development team.

**Return URL:** To be agreed upon by the Yat and partner development teams in [Step #1](#1-pre-integration).<br/>
**Query Parameters:**
- `eid`: The same Yat that was sent to the web application by the partner application in [Step #3](#3-redirection-of-the-user-to-the-yat-web-application), or a new Yat if the user has purchased a new Yat through the Yat web application.
- `refresh_token`: The same refresh token that was sent to the web application by the partner application in [Step #3](#3-redirection-of-the-user-to-the-yat-web-application).

Partner application receives the query parameters as a result of the redirection from the Yat web application to the partner application, and the integration flow is completed.
