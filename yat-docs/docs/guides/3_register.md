---
id: register
slug: /register
title: Creating a new user
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

## Overview

There are 2 paths we can use for integration, with the user-centric path being more “privacy” focused, and the
organization-centric path being more centralized.

In the user-centric approach, each user will register independently and we will return access / refresh tokens to the
calling app which can be used independently to update the users’ Yats.

In the organization-centric approach, the user will be tied to an organization, giving the organization certain control
over their Yats. This would require a centralized server that would route all requests on behalf of the user.

## Signing up a new user

To create a new account at y.at, register a user with a `POST` query to the
[`/users`](/docs/api-ref#users) end-point.

There are three ways to register a new account on y.at:

* **With an email only**. Login and registration will be via [magic links](/docs/register#magic-links).
* **With an email and password**. Registration is immediate. Logins may use either username-password or magic link semantics.
* **With an "alternate id" and a password**. Affiliates and y.at partners will use this approach. The registration and flow is the same as for email/password. With "alternate id" registrations, logins must _always_ use username-password semantics, since there is no email address to receive magic links.


But there's also the option of omitting the password field completely, in which case y.at will grant user access via
[magic links](#magic-links).

Users have the ability to register with an email address and password.

An example code snippet for registering a new account is given in [Integrating Yats - Registering a new account](/docs/integration_general#registering-a-new-account).

## What is alternate_id

User might be registered either to their `email` or to `alternate_id`. Latter is global unique identifier, which is
usually correlates to the id used in integrated application. Such users require `source` and `password` fields to be set.
Users registered via `alternate_id` can only be authenticated via `password`,
though they can be converted to `email` authentication at later stage if needed.

## Authentication flows

Following are 2 distinct authentication flows:
* Login using password via POST to [`/auth/token`](/docs/api-ref#login-via-password)
* Generate [Magic link](#magic-links) for login via POST to [`/auth/magic_link`](/docs/api-ref#generate-magic-link-for-login)

On top of that user account might be enabled with [two factor authentication](#two-factor-authentication),
which would additionally require to pass 2FA code validation.

Conventional login via password can be used with user accounts registered to their `alternate_id`,
whilst for users registered to their email magic link is preferred way.

POST to `/auth/token` would result in `refresh_token`, `access_token` and a flag if two factor authentication is required:
* `refresh_token` is a token which only allows to acquire `access_token` via POST to [`/auth/token/refresh`](#refresh-access-token)
* `access_token` is a regular [JWT](https://tools.ietf.org/html/rfc7519) token used to authenticate all the API
calls providing it in the `Authorization` HTTP Header concatenated after the `"Bearer "` string.
* `requires_2fa` is a flag which indicates if further authentication via 2FA is required, see section below for details.

We will skip example again as it was already provided in the previous section
[Integrating Yats - User authentication](/docs/integration_general#user-authentication).

### Two factor authentication

Users that setup their account with two factor authentication (2FA) via
[`POST /account/2fa`](http://localhost:3000/docs/api-ref#update-two-factor-authentication), followed by confirmation
to [`POST /account/2fa/confirm`](http://localhost:3000/docs/api-ref#confirm-two-factor-authentication-update) will have an extra step during authentication and login.

When 2FA is required, the `requires_2fa` will indicate what type of 2FA is required. For example,

```json
{
  "requires_2fa": "GoogleAuthenticator"
  ...
}

You can obtain a `refresh_token` by posting the 2FA code via POST to [`/auth/2fa`](/docs/api-ref#two-factor-authentication). This token can be used as a regular refresh token.

Even after logging in, some sensitive endpoints are marked with 2FA. These endpoints require two factor authentication validation after a certain grace period (usually 15 minutes). This would be indicated with `424 HTTP` response code `FAILED DEPENDENCY`.

When this happens, a new `access_token` should be acquired by submitting a new code
to [`/auth/2fa`](/docs/api-ref#two-factor-authentication) before proceeding with request.

The Yat SDK manages most of the flow for you as can be seen from the example below:

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    { label: 'Android / Kotlin', value: 'kotlin', },
    { label: 'iOS / Swift 5', value: 'swift5', },
  ]
}>

<TabItem value="nodejs">

```javascript
const yat = require('yatjs');
const { totp } = require('otplib');
const api = new yat.YatJs();

let alternate_id = 'my-app-user-id-' + Math.random();
let password = 'secret password';
let SECRET = '';
totp.options = { encoding: 'hex' };

/**
 * Register a new Yat account
 */
async function register() {
    let details = new yat.RegisterUserParameters.constructFromObject({
        first_name: "Testy",
        last_name: "McTesty",
        source: "My nice app",
        alternate_id,
        password,

    });
    try {
        let res = await api.users().createUser(details);
        return true;
    } catch (err) {
        return false;
    }
}

/**
 * Setup account with 2FA enabled
 */
async function register_with_2fa() {
    try {
        if (!await register()) {
            console.log("Account already registered, will try to login");
        }
        await api.login(alternate_id, password);
        let { secret, qr_code_svg } = await api.users().update2FA({"requires_2fa": "GoogleAuthenticator"});
        // NOTE: qr_code_svg is svg in text which should be shown to user to save in Google Authenticator
        // For the API purposes we will be using secret directly
        SECRET = secret;
        let code = totp.generate(SECRET);
        console.log(`Confirming 2FA with ${code}. Secret ${secret}`);
        await api.users().confirm2FA({code});
        console.log("Confirmed 2FA for user account. Logged out.");
        api.logout();
        return true;
    } catch (err) {
        console.log(`Could not setup 2FA for account: `, err);
        return false;
    }
}

// Basic login demo
async function runDemo() {
    api.basePath = 'http://localhost:3001';
    console.log(`Yat API calls will be made to ${api.basePath}`);
    if (!await register_with_2fa()) return;
    try {
        let res = await api.login(alternate_id, password);
        console.log("Before confirm_2fa: Requires 2FA = ", res.requires_2fa);
        let code = totp.generate(SECRET);
        res = await api.confirm_2fa(code);
        console.log("After confirm_2fa: Requires 2FA = ", res.requires_2fa);
        let account = await api.users().getAccount();
        console.log("User profile data:", account.user);
    } catch (res) {
        console.log(`Could not log in`, res);
    }
}

runDemo()
    .then(() => console.log("Bye"))
    .catch(console.error);
````

</TabItem>
<TabItem value="swift5">

```swift
  🚧 COMIN SOON 🚧
```

</TabItem>
<TabItem value="kotlin">

```kotlin
  🚧 COMIN SOON 🚧
```

</TabItem>
</Tabs>

The script above would output:

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    { label: 'Android / Kotlin', value: 'kotlin', },
    { label: 'iOS / Swift 5', value: 'swift5', },
  ]
}>

<TabItem value="nodejs">

```text
Yat API calls will be made to http://localhost:3001
Confirming 2FA with 792622. Secret 302e35909b7377e939e036d671c827f6139607165e
Confirmed 2FA for user account. Logged out.
Before confirm_2fa: Requires 2FA =  GoogleAuthenticator
After confirm_2fa: Requires 2FA =  null
User profile data: CurrentUserUser {
  created_at: 2020-10-06T12:28:52.109Z,
  free_limit: 1,
  id: '3eed99a2-822b-4025-8ee7-cdbbd10340c8',
  is_active: true,
  remaining_free_emoji: 1,
  role: 'User',
  updated_at: 2020-10-06T12:28:53.215Z,
  alternate_id: 'my-app-user-id-0.9967526659657224',
  email: null,
  first_name: 'Testy',
  last_name: 'McTesty',
  source: 'My nice app',
  two_factor_auth: 'GoogleAuthenticator'
}
Bye
```
</TabItem>
<TabItem value="swift5">

```swift
  🚧 COMING SOON 🚧
```

</TabItem>
<TabItem value="kotlin">

```kotlin
  🚧 COMING SOON 🚧
```

</TabItem>
</Tabs>

### Magic links

What the heck are magic links? I'm glad you asked.

A user only requires an email address for registration. An introductory email is sent which includes a “magic link”. The
calling app can register an intent for the Yat domain, which would trigger an email to the user with a login link to the y.at site.
