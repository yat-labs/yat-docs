---
id: integration_general
slug: /integration_general
title: Integrating Yats in your applications
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

This guide will walk you through a full integration flow, covering the following bases:

* [Registering a new account](#registering-a-new-account),
* [Logging into the API](#user-authentication),
* [Claiming a free Yat](#claiming-a-free-yat),
* [Fetching a list of yats you own](#fetching-a-list-of-yats-you-own),
* [Adding an emoji id record to the yat](#adding-an-emoji-id-record-to-the-yat),
* [Fetching the data associated with a yat](#fetching-the-data-associated-with-a-yat).

This is the code to carry out this flow in full, using the Yat SDK libraries. It might look like a lot all in one go, but
fear not. We'll walk through each piece step by step in the following sections.

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
const yat = require("yatJs");
const api = new yat.YatJs();

// hint: You can specify an alternative API url with the basePath property, e.g.:
// api.basePath = 'http://localhost:3001';

const email = "tester@y.at";
const password = "yatster";

/**
 * Register a new Yat account
 * @returns {Promise<boolean>}
 */
async function register() {
    let details = new yat.RegisterUserParameters.constructFromObject({
        first_name: "Testy",
        last_name: "McTesty",
        email,
        password
    });
    try {
        let res = await api.users().createUser(details);
        console.log("Registered user response:", res);
        return true;
    } catch (err) {
        const alreadyRegistered = err.status === 422 && err.body.fields.email[0].code === "uniqueness";
        if (!alreadyRegistered) {
            console.log(`Could not register an account: ${err.error}`);
        }
        return alreadyRegistered;
    }
}

/**
 * Generate a random yat of length `len` from the given list of emoji
 * @returns {string}
 */
function selectRandomYat(list, len) {
    const yat = [];
    for (let i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * list.length);
        yat.push(list[index]);
    }
    return yat.join("");
}

/**
 * Login into the yat API
 * @returns {Promise<void>}
 */
async function login() {
    try {
        // If login fails after registration, it may be due to y.at still being in closed Alpha. Each registration must be manually
        // approved by an admin before you can continue.
        let res = await api.login(email, password);
    } catch (res) {
        console.log(`Could not log in: ${res.error}`);
        throw new Error("Could not login");
    }
}

/**
 * Attempt to procure a free yat using the given promo code
 * @returns {Promise<string>}
 */
async function purchaseYat() {
    // Request the set of supported emoji
    const emojiList = await api.emoji().emojiList();
    // Clear the cart
    await api.cart().clear();
    // This is for demo purposes. There are also endpoints for automatically selecting a random yat and applying a
    // promo code.
    const myYat = selectRandomYat(emojiList, 4);
    console.log(`Checking ${myYat} availability...`);
    let opts = {
        'redemptionCode': "FREEYAT" // String | Redemption code
    };
    const yatInfo = await api.emojiID().search(myYat, opts);
    console.log(yatInfo.result);
    if (!yatInfo.result.available) {
        console.log(`Bad luck :(, ${yat} is not available.`);
    }
    // Add the yat to the cart. This time use the constructor
    const order = new yat.UpdateCartRequest([
        {
            emoji_id: myYat,
            redemption_code: "FREEYAT"
        }
    ]);
    const cart = await api.cart().add(order);
    console.log("Order added to cart: ", cart);
    // Checkout..
    const result = await api.cart().checkout({
        method: {type: "Free"}
    });
    console.log("Checkout succeeded: ", result);
    return myYat;
}

/**
 * List the yats the user owns
 * @returns {Promise<*>}
 */
async function getMyYats() {
    let yats = await api.emojiID().list();
    console.log("These are my yats: ", yats);
    return yats;
}

/**
 * Add a url record to my Yat
 * @returns {Promise<*>}
 */
async function addYatRecord(yat, url) {
    const req = {
        insert: [{
            tag: "0x4001",
            data: url
        }]
    };
    try {
        await api.emojiID().edit(yat, req);
        console.log("URL added to yat.");
    } catch (err) {
        console.log("Error Result of adding record request: ", err.body);
    }
    return yat;
}

/**
 * Display all the records associated with the given yat
 * @param yat
 * @returns {Promise<void>}
 */
async function printYatRecords(yat) {
    try {
        let records = await api.emojiID().lookup(yat);
        console.log(records);
    } catch (err) {
        console.log("Error fetching yat data: ", err.body)
    }
}

// Main script
register()
.then(login)
.then(getMyYats)
.then(yats => {
    if (yats.length === 0) return purchaseYat();
    return yats[0];
})
.then(yat => {
    return addYatRecord(yat, "http://api-docs.y.at/docs/sdks/nodejs/sdk_nodejs_index");
})
.then(printYatRecords)
.catch(res => {
    console.log('Error:', JSON.stringify(res.body));
}).then((res) => {
    console.log("Bye!")
});
```

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

This script produces output similar to

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
Checking 🏹👗🍬📿 availability...
SearchResultResult {
  availability: 'Available',
  available: true,
  discounted_price: 0,
  emoji_id: '🏹👗🍬📿',
  price: 3500,
  views_past_month: 1
}
Order added to cart:  DisplayOrder {
  created_at: 2020-09-25T11:17:30.939Z,
  eligible_for_refund: false,
  id: '4a91db8b-dd2e-4eed-bcb1-f31179a82294',
  misc_refunded_total_in_cents: 0,
  order_items: [...],
  order_number: '79a82294',
  refunded_total_in_cents: 0,
  status: 'Draft',
  total_in_cents: 0,
  updated_at: 2020-09-25T11:17:31.152Z,
  user: DisplayOrderUser {...},
  user_id: 'bbfaad2c-4478-4387-a569-e93f979a7817',
  expires_at: 2020-09-25T11:32:31.138Z,
  organization_id: null,
  paid_at: null,
  seconds_until_expiry: 899
}

Checkout succeeded:  DisplayOrder {
  created_at: 2020-09-25T11:17:30.939Z,
  eligible_for_refund: true,
  id: '4a91db8b-dd2e-4eed-bcb1-f31179a82294',
  misc_refunded_total_in_cents: 0,
  order_items: [...],
  order_number: '79a82294',
  refunded_total_in_cents: 0,
  status: 'Paid',
  total_in_cents: 0,
  updated_at: 2020-09-25T11:17:31.245Z,
  user: DisplayOrderUser {...},
  user_id: 'bbfaad2c-4478-4387-a569-e93f979a7817',
  expires_at: null,
  organization_id: null,
  paid_at: 2020-09-25T11:17:31.233Z,
  seconds_until_expiry: null
}
URL added to yat.
LookupResponse {
  status: true,
  error: undefined,
  result: [
    LookupResponseResult {
      data: 'http://api-docs.y.at/docs/sdks/nodejs/sdk_nodejs_index',
      hash: 'cdc56f98660c2d684605ada33266918043d7d1935e2b9f13550b32d05191bc7a',
      tag: '0x4001'
    },
  ],
  views_past_month: 16
}
Bye!
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

## Registering a new account

:::info Closed alpha
During the closed alpha, registrations are not automatically activated. If you are part of the closed alpha test group,
you will need to contact a y.at admin to activate your user account.
:::

There are a few ways to register a new account. The majority of use cases will make use of y.at's custodial wallet, in which case,
you just need an email address and password to create a new account. You can also optionally provide some personal details
to personalise your profile, such as first and last name.

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

```js {2-7,9}
async function register() {
    let details = new yat.RegisterUserParameters.constructFromObject({
        first_name: "Testy",
        last_name: "McTesty",
        email,
        password
    });
    try {
        let res = await api.users().createUser(details);
        console.log("Registered user response:", res);
        return true;
    } catch (err) {
        const alreadyRegistered = err.status === 422 && err.body.fields.email[0].code === "uniqueness";
        if (!alreadyRegistered) {
            console.log(`Could not register an account: ${err.error}`);
        }
        return alreadyRegistered;
    }
}
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

If the registration request is successful, you'll receive a copy of your User record, including the scopes and permissions
assign to your user account:

```json
{
    "user": {
        "id": "bbfaad2c-4478-4387-a569-e93f979a7817",
        "email": "tester@y.at",
        "alternate_id": null,
        "first_name": "Testy",
        "last_name": "McTesty",
        "role": "User",
        "two_factor_auth": null,
        "free_limit": 1,
        "remaining_free_emoji": 1,
        "is_active": true,
        "source": null,
        "created_at": "2020-09-22T21:26:51.545933Z",
        "updated_at": "2020-09-25T11:17:31.224291Z"
    },
    "role": "User",
    "global_scopes": [
        "cart:show",
        "cart:update",
        "order:read-self",
        "organization-list:read",
        "payment-method:destroy",
        "payment-method:read",
        "payment-method:set-default",
        "user:delete-self",
        "user-interest:delete",
        "user-interest:read",
        "user-interest:write",
        "user:write-self"
    ],
    "organization_roles": {},
    "organization_scopes": {},
    "pubkeys": [
        "d87a65697bfb7b9ffe19007753a7eacf77fec982b2484cc36659959d90d29131"
    ]
}
```
## User Authentication

Every user has a pre-defined role which includes exactly what endpoints they may access.

Any requests that change or access user specific data require an `Authorization` header that includes `Bearer
{access_token}`. The access token expires after a set amount of time, after which a call to the `/auth/token/refresh`
endpoint with the `refresh_token` will return a new `access_token` for the next set time period.

The Yat SDKs manage the access token state on your behalf, and automatically submit the refresh token if your current access
token is about to expire, so if you're using the SDKs, you don't have to worry about any of this beyond keeping a reference
to the api instance after using the appropriate `login` function:

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

```js {8}
const yat = require("yatJs");
const api = new yat.YatJs();

// ...

async function login() {
    try {
        let res = await api.login(email, password);
        // Api calls that require auth are automatically managed for you...
        let result = await api.someApi().someAuthFunction(foo);
    } catch (err) {
        console.log(`Could not log in: ${err.error}`);
        throw new Error("Could not login");
    }
}
```

</TabItem>
</Tabs>

## Purchasing a Yat

y.at supports purchasing a Yat using credit card and cryptocurrencies. All Yat purchases can be discounted with a Promo Code,
and if the discount is 100%, then no payment details are required whatsoever.

The demonstration flow above illustrates how to go about claiming a free yat by applying a Promo Code with 100% discount.
We'll describe that flow first, and then talk about how the credit card and crypto payments work.

### Checking Yat availability

Before you can add a yat to your cart, you should check whether it is available. This is done using the `search` function
in the Cart API.

You can optionally provide a promo code to the `search` call options, which will apply any applicable discount to the
reported price in the result.

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

```js {8-11}
const yat = require("yatJs");
const api = new yat.YatJs();

// ... Login etc

async function checkYatAvailability(myYat) {
    console.log(`Checking ${myYat} availability...`);
    let opts = {
        'redemptionCode': "FREEYAT" // String | Redemption code
    };
    const yatInfo = await api.emojiID().search(myYat, opts);
    console.log(yatInfo.result);
    if (!yatInfo.result.available) {
        console.log(`Bad luck :(, ${yat} is not available.`);
    }
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
  // 🚧 COMING SOON 🚧
```

</TabItem>
<TabItem value="swift5">

```swift
  // 🚧 COMING SOON 🚧
```

</TabItem>
</Tabs>

A typical successful response to the search function returns the details of the Yat, as well as some suggested alternate
Yats in case the requested one is not available:

```json
{
  "alternates": [
    {
      "availability": "Available",
      "available": true,
      "discounted_price": 0,
      "emoji_id": "👁️❤️🌴",
      "price": 9600,
      "views_past_month": 35
    }
  ],
  "result": {
    "availability": "Available",
    "available": true,
    "discounted_price": 0,
    "emoji_id": "👁️❤️🏀",
    "price": 9600,
    "views_past_month": 543
  }
}
```
### Claiming a free Yat

You can claim a Yat without providing any payment details by making use of the `Free` payment method. This method requires
a promo code(s) to be applied to the order since it will only succeed if the total cost of the order is zero.

The recommended claim process is:
* Clear the cart
* Add an item to the cart with the relevant Promo code
* Checkout with the `Free` payment provider.

This flow is achieved with three consecutive calls to the API:

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

```js {3,12,15}
async function claimYat(myYat) {
    // Clear the cart
    await api.cart().clear();
  
    // Add the yat to the cart. This time use the constructor
    const order = new yat.UpdateCartRequest([
        {
            emoji_id: myYat,
            redemption_code: "FREEYAT"
        }
    ]);
    const cart = await api.cart().add(order);
    console.log("Order added to cart: ", cart);
    // Checkout..
    const result = await api.cart().checkout({
        method: {type: "Free"}
    });
    console.log("Checkout succeeded: ", result);
    return myYat;
}
```

</TabItem>
</Tabs>

The final response from a successful checkout is the final order object and looks similar to the following:

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "eligible_for_refund": true,
  "expires_at": "2019-08-24T14:15:22Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "misc_refunded_total_in_cents": 0,
  "order_items": [
    {
      "client_fee_in_cents": 0,
      "code_id": "c6a02b7d-40f4-4982-9c97-607f4e20761a",
      "company_fee_in_cents": 0,
      "created_at": "2019-08-24T14:15:22Z",
      "emoji_id": "👁❤️🏀",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "item_type": "Discount",
      "order_id": "93101167-9065-4b9c-b98b-5d789a3ed9fe",
      "parent_id": "1c6ca187-e61f-4301-8dcb-0e9749e89eef",
      "quantity": 0,
      "refunded_quantity": 0,
      "unit_price_in_cents": 0,
      "updated_at": "2019-08-24T14:15:22Z"
    }
  ],
  "order_number": "string",
  "organization_id": "7c60d51f-b44e-4682-87d6-449835ea4de6",
  "paid_at": "2019-08-24T14:15:22Z",
  "payment_method_data": {},
  "refunded_total_in_cents": 0,
  "seconds_until_expiry": 0,
  "status": "Cancelled",
  "total_in_cents": 0,
  "updated_at": "2019-08-24T14:15:22Z",
  "user": {
    "alternate_id": "string",
    "created_at": "2019-08-24T14:15:22Z",
    "deactivated_at": "2019-08-24T14:15:22Z",
    "email": "string",
    "first_name": "string",
    "free_limit": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "is_active": true,
    "last_name": "string",
    "remaining_free_emoji": 0,
    "role": "Admin",
    "source": "string",
    "two_factor_auth": null,
    "updated_at": "2019-08-24T14:15:22Z"
  },
  "user_id": "a169451c-8525-4352-b8ca-070dd449a1a5"
}

```
### Yat purchases using a Credit card

🚧 COMIN SOON 🚧

### Yat purchases using cryptocurrency

🚧 COMIN SOON 🚧

## Fetching a list of yats you own

Congratulations! You've registered an account, and have claimed or purchased a shiny new yat. Let's make sure the
sale went through.

Assuming you have an api instance and are [logged in](#user-authentication), fetching a list of yats that you own is
very simple using the `emojiID` API.

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

```js {7}
const yat = require("yatJs");
const API = new yat.YatJs();

// Log in ...

async function fetchMyYats() {
    let yats = await API.emojiID().list();
    return yats;
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
  🚧 COMIN SOON 🚧
```

</TabItem>
<TabItem value="swift5">

```swift
  🚧 COMIN SOON 🚧
```

</TabItem>
</Tabs>

The method very simply returns an array of Yats owned by the logged-in user:

```json
[
    "🎀️♏🍋",
    "👁❤️🏀"
]
```

## Adding an emoji id record to the yat

Let's start making those yats useful!

It's possible to associate [all kinds of data](/docs/categories) with your Yat.

:::info Closed alpha
Whilst the API does support all these data types, only URL redirects are supported on the [y.at platform](https://y.at) presently,
so this guide will focus on that use case.
:::

Once again, the `emojiID` API provides the tools you need to add emoji id records to your yat. The `edit` function allows
you to insert and delete records from the emoji id record. Because of how emoji id records will be represented on the
blockchain, _updates_ to records are not possible. However, you can simulate an update by deleting the record and then
inserting a new one with the updated data.

Deleting records requires you to know the hash of the data you're deleting. You can calculate this yourself, using a 256-byte
Blake2b digest, or simply copy the hash from the result of the `lookup` API function.

The `edit` endpoint returns the list of yats that were modified as a result of the query, which you can typically ignore.

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

```js
async function addYatRecord(yat, url) {
    try {
        // Delete existing record
        let updates = { delete: ["cdc56f98660c2d684605ada33266918043d7d1935e2b9f13550b32d05191bc7a"] };
        await api.emojiID().edit(yat, updates);
        updates = { insert: [{ tag: "0x4001", data: url }] };
        await api.emojiID().edit(yat, updates);
        console.log("URL added to yat.");
    } catch (err) {
        console.log("Error Result of adding record request: ", err.body);
    }
    return yat;
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
  🚧 COMIN SOON 🚧
```

</TabItem>
<TabItem value="swift5">

```swift
  🚧 COMIN SOON 🚧
```

</TabItem>
</Tabs>

##  Fetching the data associated with a yat

The `lookup` function in the `EmojiID` API is likely the most important from a client-side perspective. It is an unauthenticated
endpoint, so you don't need an SDK instance to use it, but it is provided for completeness and convenience.

The `lookup` function takes two parameters: the yat to look up, and array of category tags to filter the results. If
you omit the tag filter, then the response contains all emoji id records attached to the yat.

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

```js
const yat = require("yatJs");
const api = new yat.YatJs();

// ...
async function printYatRecords(yat) {
    try {
        let records = await api.emojiID().lookup(yat);
        console.log(records);
    } catch (err) {
        console.log("Error fetching yat data: ", err.body)
    }
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
  🚧 COMIN SOON 🚧
```

</TabItem>
<TabItem value="swift5">

```swift
  🚧 COMIN SOON 🚧
```

</TabItem>
</Tabs>

A typical response to a lookup request contains an `error` object (`null` on a successful lookup), a response `status`
result (set to `true`), a counter, `views_past_month` indicating how many times the yat has been requested in the last
month, and an array of emoji id records.

Each record contains the data itself, the [category tag](/categories) for the record, and the hash of the data.

A typical response looks like

```json
{
    "status": true,
    "result": [
        {
            "tag": "0x4001",
            "data": "http://api-docs.y.at/docs/",
            "hash": "cdc56f98660c2d684605ada33266918043d7d1935e2b9f13550b32d05191bc7a"
        }
    ],
    "error": null,
    "views_past_month": 19
}
```

## Conclusion

And there you have it. Basic Yat integration from start to finish. From here you may wish to dive deeper into the SDK
documentation, or refer to the [API reference](/docs/api-ref) material, or take your integration knowledge even further with
one of our [advanced integration topics](/docs/advanced_topics).