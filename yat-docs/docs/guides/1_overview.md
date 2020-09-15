---
id: overview
slug: /overview
title: Using the Yat SDKs
---

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

## What are Yats / Emoji ids?

Emoji id is a key-value lookup system that allows individuals, organizations, or entities to unify their presence on the internet.

Emoji ids connect keys (the _yat_) to data (URLs, social media handles, payment addresses and more) that have been associated to that key by the key’s owner, or in some cases by an authorised proxy.

The yat consists of a string of one to six emoji, that the user can personalise to tell a story about their identity, lifestyle, or brand.

## Terminology

* **Emoji id** - An emoji id (also known as a _yat_, or _eid_) is a 1-6 character string of emoji that users can own and
  associate data with in a public lookup repository.
* **Yat** - A synonymn for an emoji id. Strictly speaking, Yat is the brand name and emoji id is the technical term, but
  they can be used interchangeably.
* **Emoji id record** - A piece of data, such as a URL, social media handle, or payment address that is associated with
  an emoji id.
* **Emoji id category** - Emoji id record types are grouped into categories to aid data management and record discovery.
  Examples include cryptocurrency addresses, web properties, DNS records, location data.
* **Emoji id tag** - Emoji id categories are subdivided into specific data types that have specific data formats,
  represented by their Category Tag. Examples include Bitcoin addresses, DNS A records, web URLs and Lat-Long
  coordinates.
* **Canonical format** - The unambiguous, official representation of a yat. See
  [Emoji id formats](#emoji-id-formats) for further discussion.
* **Display format** - The yat format including any modifiers chosen by the owner. See
  [Emoji id formats](#emoji-id-formats) for further discussion.

## Emoji id records

Any number of data types can be associated with a yat.

Yat records are grouped into categories for simpler classification. This list may grow over time, but for now, the categories are:

* Website URLs
* Social media handles
* Cryptocurrency payment addresses
* Payment rail handles
* Location data
* Email addresses
* Domain Name System (DNS) fields
* Arbitrary text data

Each category is be further divided into precise category fields. For example, there are record tags in the cryptocurrency category for Bitcoin addresses, Monero addresses, Tari addresses, Ethereum addresses and so on.

## Emoji id formats

The Unicode specification allows for various modifiers to be applied to emoji to change their appearance. Examples include
gender, hair colour, skin tone and more are added with every emoji set release.

Some of these modified emoji are very subtle, and cannot be easily differentiated in isolation, (compare 🤟🏾, and 🤟🏽)
and so for that reason, Emoji id cannot include modifiers beyond a strict set of rules.

The current set of yats _do not include any emoji_ that accept modifiers, including gender modifiers, except for skin
tone modifiers, and the "designated emoji" modifier.

The designated emoji modifier, `0xFE0F`, is a modifier for an existing unicode character that looks like an emoji, but is
really just a character in a font set. The modifiers tell renderers to use the emoji glyph for the preceding character
rather than the 'webding' or standard Unicode character. An example is the sun emoji (`0x2600 0xFE0F`), or ☀, vs ☀️.

When a user claims a yat, the yat is converted into canonical format. Canonical format is an unambiguous representation
of a yat and is used as the key in the emoji id key-value lookup database. Yat are converted to canonical format by

* Removing all modifiers from every emoji character, except for `0xFE0f` in some cases.
* All emoji glyphs are forced into a "fully qualified" representation. This entails adding the `0xFE0F` modifier in cases where it has been specified in the Unicode specification, and removing it where it has not.

See [the Unicode specification](https://unicode.org/Public/emoji/13.0/emoji-test.txt) for the complete list.

When users claim a yat, any skin tone modifiers they used in the purchase flow will be remembered and associated with that
character and yat. Anytime the yat is requested for _display purposes_, as opposed to lookup purposes, the skin tone modifier will be injected back into
the yat, and the user will see the yat he or she expects.

When taking a yat as input into an API call, the yat will be automatically converted to canonical form. Therefore, lookups
for 🤟🏾🤟🏾🤟🏾 and 🤟🏽🤟🏽🤟🏽 will resolve to the same yat (🤟🤟🤟).

When yats are _returned_ from endpoints, the _display format_ will usually be returned, but the endpoint documentation  
will provide clarification where necessary.
