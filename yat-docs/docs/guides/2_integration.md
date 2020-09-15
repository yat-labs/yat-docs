---
id: login
slug: /login
title: Integrating Yats in your applications
---

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

## User Authentication

Any requests that change or access user specific data require an `Authorization` header that includes `Bearer
{access_token}`. The access token expires after a set amount of time, after which a call to the `/auth/token/refresh`
endpoint with the refresh_token will return a new access_token for the next set time period.

Every user has a pre-defined role which includes exactly what endpoints they have access to.

```js
const yat = require('yatjs');
const api = new yat.YatJs();

async function runDemo() {
    try {
        await api.login("test@tari.com", "real_password");
        console.log("Logged in.");
    } catch (res) {
        console.log(`Could not log in: ${res.error}`);
    }
}

runDemo()
    .then(() => console.log("Bye"))
    .catch(console.error);

```

Once you have logged in, the access token is stored in the API state and will be submitted along with any subsequent calls that require authentication.

So assuming, you have an `api` object from the above code snippet, the following call should work without any extra effort:

```js
    try {
        let account = await api.users().getAccount();
        console.log("Account data:", account);
    } catch (res) {
        console.log(`Could not log in: ${res.error}`);
    }
```

#### 2FA

A user can activate 2FA

