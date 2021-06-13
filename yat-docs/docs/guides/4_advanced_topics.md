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
* [Payment methods](#payment-methods)
* [Ordering via credit card](#ordering-via-credit-card)

## Discount codes

If you are a y.at affiliate or partner, there are 2 ways of offering Yat discounts for your users:
1. via a publicly available [redemption code](/docs/sdks/nodejs/sdk_nodejs_index#enum-activatorenum), or
2. via an offer embedded in the app, and locked with a [secret key](/docs/sdks/nodejs/sdk_nodejs_index#enum-activatorenum)

Redemption codes are used to claim discounts during the checkout flow at [y.at](https://y.at).

## Payment methods

There are 4 [payment methods](/docs/sdks/nodejs/sdk_nodejs_index#enum-methodenum) which can be used for cart checkouts:
1. `Provider` is directly managed by the y.at website to configure  a payment provider, and is either `Stripe` or
   `CoinbaseCommerce`.
2. `Card` is used with `Stripe` provider and allows users to pay with a credit card.
3. `Default` uses the payment method that was configured for user account as default.
4. `Free` was already described in [Claiming a Yat with a promo code](/docs/integration_general#claiming-a-yat-with-a-promo-code)

## Ordering and cart usage

The code snippet below illustrates how you might implement payments via credit card for users:
1. The user adds a yat to their cart. In the example below we use
   [a convenience endpoint](/docs/api-ref/#return-random-emoji) that generates a random yat that is available for
   purchase.
2. A new cart with the selected yat is created via the [replace cart](/docs/api-ref#replace-cart-items) endpoint.
3. The application obtains a token from `Stripe` for the user.
4. We can then complete the checkout using the `Stripe` token.
5. If the default payment is set in step 4, processing future payments is even simpler, using the `Default` payment
   method.

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
/**
 * List the yats the user owns
 * @returns {Promise<*>}
 */
async function placeNewCart(items) {
    let request = new yat.UpdateCartRequest(items);
    console.log("Sending replace cart request: ", request);
    let cart = await api.cart().replaceItems(request);
    console.log(`Created cart ${cart.id} with items `, cart.order_items.map((rec, i) => `${i+1}. ${rec.emoji_id} - ${rec.unit_price_in_cents}`));
    return cart;
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

async function main() {
    try {
        await api.login(alternate_id, password);
        // Pick random yats
        const emojis = await api.emojiID().random();
        console.log("Random emoji suggestions:", emojis.result.map((rec, i) => `${i+1}. ${rec.emoji_id} - ${rec.price}`));
        // Pick 2 yats from the middle and place into the cart
        let items = emojis.result.map((rec) => new yat.UpdateCartRequestItems(rec.emoji_id)).splice(2, 2);
        await placeNewCart(items);

        // Checkout via credit card. We use test token in this case "tok_visa"
        // For actual payment Stripe token shall be acquired as described https://stripe.com/docs/api/tokens/create_card
        // Yat's Stripe public API key should be used for communication with Stripe
        let result = await api.cart().checkout({ method: "Card", provider: "Stripe", token: "tok_visa", save_payment_method: true, set_default: true });
        if (result.status == "Paid") {
            console.log("Congratulations!");
        }
        console.log(`Order is ${result.status}. Total: ${result.total_in_cents}.`);

        // Now we have setup the Default payment method. Let's buy 2 more emojis
        items = emojis.result.map((rec) => new yat.UpdateCartRequestItems(rec.emoji_id)).splice(5, 2);
        await placeNewCart(items);
        result = await api.cart().checkout({ method: "Default" });
        console.log(`Order is ${result.status}. Total: ${result.total_in_cents}.`);

        // List all emojis for the user, including the ones we've just purchased!
        await getMyYats();
    } catch(err) {
        console.log("Failed: ", err)
    }
}

// Main script
main()
.catch(res => {
    console.log('Error:', JSON.stringify(res.body));
}).then((res) => {
    console.log("Bye!")
});
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

This script produces output something along the lines of:


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

```
Random emoji suggestions: [
  '1. ⛓️♎🦎🔩 - 4800',
  '2. ❗🍯👗🖍️ - 4800',
  '3. 🤡🐵🍤 - 9600',
  '4. 👢☦️🙏🎼 - 4800',
  '5. 👟🚬🤳 - 9600',
  '6. 🍍👗🛶🍍 - 4800',
  '7. 🥒🐣🐮🏓 - 4800',
  '8. 🏥🐞🐭 - 9600',
  '9. 🐌🐮🤳🍥 - 4800',
  '10. 🦇🕷️😇 - 9600'
]
Sending replace cart request:  UpdateCartRequest {
  items: [
    UpdateCartRequestItems { emoji_id: '🤡🐵🍤' },
    UpdateCartRequestItems { emoji_id: '👢☦️🙏🎼' }
  ]
}
Created cart fbddfa1e-ade9-4811-9377-a55ccd2bfa78 with items  [ '1. 🤡🐵🍤 - 9600', '2. 👢☦️🙏🎼 - 4800' ]
Congratulations!
Order is Paid. Total: 14400.
Sending replace cart request:  UpdateCartRequest {
  items: [
    UpdateCartRequestItems { emoji_id: '🍍👗🛶🍍' },
    UpdateCartRequestItems { emoji_id: '🥒🐣🐮🏓' }
  ]
}
Created cart 6bfbffa2-81bf-4f0d-b24c-cb7b05be2eb1 with items  [ '1. 🍍👗🛶🍍 - 4800', '2. 🥒🐣🐮🏓 - 4800' ]
Order is Paid. Total: 9600.
These are my yats:  [
  '🌙👛🚪🔋', '💩🏹👟🚲',
  '💋❓🎉🦀',  '🔑🎯🐷👾',
  '⌚🥝🎻',    '🛵🐚🐨😶',
  '🤡🐵🍤',   '👢☦️🙏🎼',
  '🍍👗🛶🍍', '🥒🐣🐮🏓'
]
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


## Using Stripe

Yat uses [Stripe](https://stripe.com/) as a payment provider for handling credit card payments. Stripe manages and stores
all credit card and personally identifying information (PII), none of which is stored on y.at's servers.

To integrate card payments into a third-party application you need to obtain a Stripe API public key from the Yat integration
team.

For a testing purposes there is pre-registered token `"tok_visa"`. This key is only available on the y.at [test environment](https://emojid.me/).

The following is a list of suggested resources for reading about using Stripe for payments:
- Development quickstart [https://stripe.com/docs/development](https://stripe.com/docs/development)
- Creating a card token [https://stripe.com/docs/api/tokens/create_card](https://stripe.com/docs/api/tokens/create_card)
- Testing stripe payments [https://stripe.com/docs/testing](https://stripe.com/docs/testing)
- API Keys [https://stripe.com/docs/keys](https://stripe.com/docs/keys)
