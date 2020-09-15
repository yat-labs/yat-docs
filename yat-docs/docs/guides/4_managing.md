---
id: managing
slug: /managing
title: Managing yats
---

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

### Finding a free Yat

The availability of a Yat can be queried by doing a `GET` request to `/emoji/search/{eid}` where eid is the URI-encoded
Yat. It will return with the availability and price if it is available.

### Registering a Yat

Only authenticated users can register a Yat. You can add Yats to a user’s cart by `POST`ing to the `/cart` endpoint and
specifying the Yat in the `items` array of the body. It is possible to register more than one Yat at a time. If the Yat
is available it will be added to the cart and the expiry countdown starts. During this time no other users can add the
Yat to their cart, if the user fails to checkout before the countdown expires the Yat is returned to its pool.

If the Yat is free, the cart can be checked out using the `/cart/checkout` endpoint and the `PaymentProvider` of `Free`.
The other payment options are `Stripe` for credit card and `Globee` for crypto.

### Adding Yat records

The available Yat categories can be found in the docs. There can be multiple records per Yat category. To add new data a
`PATCH` request is sent to `/emoji/{eid}` which includes the insert key that contains an array of category Id’s and the
data to link. An example would be adding a Bitcoin address: `{“insert”: [{“tag”: “0x1003”, “data”: “bitcoin_address”}]}`

To delete category data you pass the hash of the data (that is returned by the API) in the `delete` key as an array.

### View Yat records

Yat data is publicly available. To query a Yat is as simple as issuing a `GET` request to `/emoji/{eid}` and it will
return all registered category data. Data can be filtered by adding a `?tags=0x1003` query parameter to pull only the
categories required.

Yats can also be queried via traditional DNS lookups. `dig TXT 0x1003.{eid}.y.at` will return the same data as the above
`GET` request.