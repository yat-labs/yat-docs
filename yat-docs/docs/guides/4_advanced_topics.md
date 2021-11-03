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

There are 2 [payment methods](/docs/sdks/nodejs/sdk_nodejs_index#enum-methodenum) which can be used for cart checkouts:
1. `Provider` is directly managed by the y.at website to configure a payment provider, and is either `Stripe` or
   `CoinbaseCommerce`.
2. `Free` was already described in [Claiming a Yat with a promo code](/docs/integration_general#claiming-a-yat-with-a-promo-code)

## Ordering and cart usage

The code snippet below illustrates how you might implement payments via payment intents for users:
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
 * Create new cart for user
 * @returns {Promise<*>}
 */
 async function placeNewCart(items) {
    let request = new yat.AddItemsCartRequest(items);
    console.log("Sending add items cart request: ", request);
    let cart = await api.cart().addItems(request);
    console.log(`Created cart ${cart.id} with items `, cart.order_items.map((rec, i) => `${i+1}. ${rec.emoji_id} - ${rec.unit_price_in_cents}`));
    return cart;
}

async function main() {
    try {
        await api.login(email, password);
        // Pick random yats
        const emojis = await api.emojiID().random();
        console.log("Random emoji suggestions:", emojis.result.map((rec, i) => `${i+1}. ${rec.emoji_id} - ${rec.price}`));
        // Pick 2 yats from the middle and place into the cart
        let items = emojis.result.map((rec) => new yat.AddItemsCartRequestItems(rec.emoji_id)).splice(2, 2);
        await placeNewCart(items);

        // Checkout via payment intents. The user is given a payment intent ID which may be used to complete the purchase.
        // Yat's Stripe public API key should be used for communication with Stripe
        let result = await api.cart().checkout({ method: "Stripe"});
        console.log(`Order is ${result.status}. Payment data: ${result.payment_method_data.payment_intent_id}.`);
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
  '1. ♎😎♏ - 400',
  '2. 👎🛡️🌰 - 400',
  '3. 🛍️⚾💳 - 21000',
  '4. 🏟️🏀🎸🍵 - 400',
  '5. 😍🗄️✡️ - 500',
  '6. 🐨💍🐉⚽ - 10000',
  '7. ⛪🌴🍜⛵ - 9000',
  '8. 🦉🎏🌮💩 - 800',
  '9. 💰🦍🎥 - 8500',
  '10. ⚽🍔🚀👀 - 10500'
]
Sending add items cart request:  AddItemsCartRequest {
  items: [
    AddItemsCartRequestItems { emoji_id: '🛍️⚾💳' },
    AddItemsCartRequestItems { emoji_id: '🏟️🏀🎸🍵' }
  ]
}
Created cart aed099bd-f932-4e84-86dc-644c5fc13e74 with items  [ '1. 🛍️⚾💳 - 10500', '2. 🏟️🏀🎸🍵 - 400' ]
Order is PendingPayment. Payment data: pi_3Js9jAE6aCXPXX5q18SRrRQE.
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

To integrate card payments into a third-party application you need to obtain a Stripe API public key from the Yat integration team.

The following is a list of suggested resources for reading about using Stripe for payments:
- Development quickstart [https://stripe.com/docs/development](https://stripe.com/docs/development)
- Creating a card token [https://stripe.com/docs/api/tokens/create_card](https://stripe.com/docs/api/tokens/create_card)
- Testing stripe payments [https://stripe.com/docs/testing](https://stripe.com/docs/testing)
- API Keys [https://stripe.com/docs/keys](https://stripe.com/docs/keys)
