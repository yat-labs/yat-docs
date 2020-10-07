---
id: advanced_topics
slug: /advanced_topics
title: Advanced integration topics
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

This guide will walk you through following advanced topics:
* [Discount codes](#discount-codes)
* [Free random yats](#free-random-yats)
* [Ordering and cart usage](#ordering-and-cart-usage)

## Discount codes

If you are a y.at affiliate or partner, there are 2 ways of offering Yat discounts for your users:
1. via a publicly available [redemption code](/docs/sdks/nodejs/sdk_nodejs_index#enum-activatorenum), or
2. via an offer embedded in the app, and locked with a [secret key](/docs/sdks/nodejs/sdk_nodejs_index#enum-activatorenum)

Redemption code are usually provided for claiming discounts during the checkout flow at [y.at](https://y.at).  The secret key approach is more suitable for use in Yat-integrated applications. We will cover that in more detail below.

## Free random yats

Integration partners can make use of a convenience endpoint [POST /codes/{code_id}/random_yat](/docs/api-ref#use-random-yat-code).

This endpoint is secured by a secret key, and handles the steps of selecting and assigning a yat for your users on the server side.

The code snippet below illustrates how you might approach setting up all your users with a discounted yat automatically:
1. An authorised integration partner, let's call them `Organization owner` would lookup the secret code with `code_type="RandomYat"` via
[`GET /codes`](/docs/api-ref/#fetch-codes) (.discounts().listCodes() in the SDK).
2. The `Organization owner` then attaches a newly generated or existing Ristretto public key corresponding to the secret key
via [`POST /codes/{code_id}/pubkeys/{pubkey}`](/docs/api-ref/#add-pubkey-for-code).
3. The `Organization owner` would sign an user's `alternate_id` with their secret key and provided signature
along with their pubkey to the user. In the JS demo we use the [`tari_crypto`](https://www.npmjs.com/package/tari_crypto) package to sign the message. Note that the signature consists of the public key, nonce and signature itself.
4. The `User` can then activate their free random yat with their promo code by submitting a signed message via
[`POST /codes/{code_id}/random_yat`](/docs/api-ref/#use-random-yat-code)
This call will result in a new cart being created for user, with newly generated random yat and 100% discount applied.
5. The `User` completes the transaction via cart checkout with a `method="Free"` via
[`POST /cart/checkout`](/docs/api-ref/#checkout-cart-with-provided-payment-details).


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
const tari_crypto = require('tari_crypto');
const api = new yat.YatJs();
const apiUser = new yat.YatJs();

// Lookup RandomYat code and return first Code object
async function lookup_code(organization_id) {
    // First lookup organization Id
    // Lookup available codes and pick one with RandomYat code_type
    let opts = { 'codeType': 'RandomYat', 'organizationId': organization_id };
    let res = await api.discounts().listCodes(opts);
    if (res.data.length == 0) throw 'RandomYat Code is not assigned to organization';
    // res is of type ListOfCodeAvailability
    console.log('Found random yat code: ', JSON.stringify(res.data[0]));
    return res.data[0]
}

async function attach_pubkey(code, pubkey) {
    let codeId = code.id;
    let res = await api.discounts().addPubkeyForCode(codeId, pubkey);
    console.log(`Code pubkey ${pubkey} was attached succesfully`);
}

async function activate_random_yat(user, code, pubkey, secret) {
    let codeId = code.id;
    let body = new yat.RandomYatActivateBody();
    let signature = tari_crypto.sign(secret, user.alternate_id);
    body.nonce = signature.public_nonce;
    body.pubkey = pubkey;
    body.signature = signature.signature;
    let res = await apiUser.discounts().activateRandomYatCode(codeId, body);
    console.log(`Created cart ${res.id}`);
    return res;
}

async function checkout() {
    let res = await apiUser.cart().checkout({ method: "Free" });
    let eid = res.order_items.filter((item) => item.item_type == 'EmojiId')[0].emoji_id;
    console.log('Congratulations with your free emoji: ', eid);
}

async function main() {
    try {
        // Initialize API and login
        api.basePath = 'http://localhost:3001';
        await api.login("owner@org.com", "your_password");
        apiUser.basePath = 'http://localhost:3001';
        await apiUser.login("app-user", "your_password");

        // Retrieve information about current account
        let account = await api.users().getAccount();
        let organization_id = null;
        for (var id in account.organization_roles) {
            if (account.organization_roles[id] == 'OrgOwner') organization_id = id;
        }
        console.log(`User [email=${account.user.email}] is owner of organization [ID=${organization_id}]`);

        // Setup access to code activation via signature
        // Secret key would be stored only on a client side
        // and used for signing messages
        let [secret, pubkey] = tari_crypto.generate_keypair();
        console.log(`Pubkey: ${pubkey} Secret: ${secret}`);
        let code = await lookup_code(organization_id);
        await attach_pubkey(code, pubkey);

        // Now the user part. User need to know secret or signed message.
        let user_account = await apiUser.users().getAccount();
        let cart = await activate_random_yat(user_account.user, code, pubkey, secret)
        console.log("Cart items:");
        for (const oi of cart.order_items) {
            console.log(`${oi.item_type} ${(oi.emoji_id ? ` ${oi.emoji_id}\t` : "\t\t" )} Value=${oi.unit_price_in_cents}`);
        }

        // Finally acquire emoji for user
        await checkout();
    } catch (error) {
        console.error(error);
    }
}


main()
    .then(() => console.log("Bye"))
    .catch(console.error);
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

This script would usually generate following output:

```
User [email=owner@org.com] is owner of organization [ID=e4f7411c-0669-4dda-a229-d048d14ad3f8]
Pubkey: 5c999677190010b9a934fbb1879920200ea04ee59b22e12e3b1fcc913f313332 Secret: b7b55a8929e1ab284ab243eba6f580d201aa7cf057740535ea1a0615ce6cfc06
Found random yat code:  {"total_uses":3,"activator":"SecretKey","available":null,"code_type":"RandomYat","created_at":"2020-10-02T20:35:56.662Z","deleted_at":null,"discount_as_percentage":100,"discount_in_cents":null,"end_date":null,"id":"c1bff4a3-0fa6-4e0d-acec-11fef06f36bf","max_emojis_per_user":null,"max_uses":null,"name":"random yat","organization_id":"e4f7411c-0669-4dda-a229-d048d14ad3f8","redemption_code":null,"start_date":null,"updated_at":"2020-10-02T20:35:56.662Z"}
Code pubkey 5c999677190010b9a934fbb1879920200ea04ee59b22e12e3b1fcc913f313332 was attached succesfully
Created cart 5827b41a-e6a4-440f-8ad6-335f8f5aadd7
Cart items:
Discount                 Value=-4800
EmojiId  💎♣️🎐🐺         Value=4800
Congratulations with your free emoji:  💎♣️🎐🐺
Bye
```

## Ordering and cart usage

  🚧 COMIN SOON 🚧
