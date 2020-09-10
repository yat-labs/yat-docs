---
id: integration
slug: /
title: 🖖 Integrating Yats in your applications 🖖
---
## Overview

There are 2 paths we can use for integration, with the user-centric path being more “privacy” focused, and the
organization-centric path being more centralized.

In the user-centric approach, each user will register independently and we will return access / refresh tokens to the
calling app which can be used independently to update the users’ Yats.

In the organization-centric approach, the user will be tied to an organization, giving the organization certain control
over their Yats. This would require a centralized server that would route all requests on behalf of the user.

### Terminology

* **Emoji id** - An emoji id (also known as a _yat_, or _eid_) is a 3-6 character string of emoji that users can own and
  associate data with in a public lookup repository.
* **Yat** - A synonymn for an emoji id. Strictly speaking, Yat is the brand name and emoji id is the technical term, but
  they can be used interchangeably.
* **Emoji id record** - A piece of data, such as a URL, social media handle, or payment address that is associated with
  an emoji id.
* **Emoji id category** - Emoji id record types are grouped into categories to aid data management and record discovery.
  Examples include  
  cryptocurrency addresses, web properties, DNS records, location data.
* **Emoji id tag** - Emoji id categories are subdivided into specific data types that have specific data formats,
  represented by their Category Tag. Examples include Bitcoin addresses, DNS A records, web URLs and Lat-Long
  coordinates.

# Signing up a new user

To create a new account at y.at, register a user with a `POST` query to the
[`/users`](API_URL#tag/Users/paths/~1users/post) end-point.

The only mandatory field for registration is an email address, but the user's name and last name can be provided as
well.

The password field is optional. If it is provided, the user account will be created with the given password, and the
user will be able to log in using conventional uername-password semantics.

But there's also the option of omitting the password field completely, in which case y.at will grant user access via
[magic links](#magic_links).


Users have the ability to register with an email address and password.

## User Authentication

Any requests that change or access user specific data require an `Authorization` header that includes `Bearer
{access_token}`. The access token expires after a set amount of time, after which a call to the `/auth/token/refresh`
endpoint with the refresh_token will return a new access_token for the next set time period.

Every user has a pre-defined role which includes exactly what endpoints they have access to.

### Magic links

What the fuck are magic links? I'm glad you asked.

A user only requires an email address for registration. An introductory email is sent which includes a “magic link”. The
calling app can register an intent / universal link for the Yat domain and extract the `refresh_token` query parameter.
This refresh token expires and is used to generate an access and longer lived refresh token that can be used to interact
with the API.

#### 2FA

A user can activate 2FA

### Finding an Available Yat

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

