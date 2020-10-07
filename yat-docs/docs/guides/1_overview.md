---
id: overview
slug: /overview
title: Introduction and overview
---

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

## What are Yats and Emoji Id?

Emoji id is a key-value lookup system that allows individuals, organizations, or entities to unify their presence on the internet.

Emoji ids connect keys (the _yat_) to data (URLs, social media handles, payment addresses and more) that have been associated with that key by the key’s owner, or in some cases by an authorised proxy.

The yat consists of a string of one to six emoji that the user can personalise to tell a story about their identity, lifestyle, or brand.

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
  represented by their [category tag](/docs/categories). Examples include Bitcoin addresses, DNS 'A' records, web URLs and Lat-Long
  coordinates.
* **Canonical format** - The unambiguous, official representation of a yat. Typically, any visual modifiers, such as skin tone have been stripped from the yat in the canonical representation. See
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

Each category is be further divided into precise category fields. For example, there are record [tags](/docs/categories) in the cryptocurrency
category for Bitcoin addresses, Monero addresses, Tari addresses, Ethereum addresses and so on.

## Emoji id formats

The Unicode specification allows for various modifiers to be applied to emoji to change their appearance. Examples include
gender, hair colour, skin tone and more are added with every emoji set release.

Some of these modified emoji are very subtle, and cannot be easily differentiated in isolation, (compare 🤟🏾, and 🤟🏽)
and so for that reason, Emoji id cannot include modifiers beyond a strict set of rules.

Besides skin tones, which do not affect the glyph icon and therefore can be managed, the current set of yats _do not
include any emoji_ that accept modifiers, including gender modifiers.

The designated emoji modifier, `0xFE0F`, is a modifier for an existing unicode character that looks like an emoji, but is
really just a character in a font set. The modifiers tell renderers to use the emoji glyph for the preceding character
rather than the 'webding' or standard Unicode character. An example is the sun emoji (`0x2600 0xFE0F`), or `☀`, vs ☀️.

When a user claims a yat, the yat is converted into canonical format. The canonical format is an unambiguous representation
of a yat and is used as the key in the emoji id key-value lookup database. Yat are converted to canonical format by

* Removing all modifiers from every emoji character, except for `0xFE0f` in some cases.
* Converting emoji into their "fully qualified" representation. This entails adding the `0xFE0F` modifier in cases where it has been specified in the Unicode specification, and removing it where it has not.

See [the Unicode specification](https://unicode.org/Public/emoji/13.0/emoji-test.txt) for the complete list.

When users claim a yat, any skin tone modifiers they used in the purchase flow will be remembered and associated with that
character and yat. Anytime the yat is requested for _display purposes_, as opposed to lookup purposes, the skin tone modifier will be injected back into
the yat, and the user will see the yat he or she expects.

When taking a yat as input into an API call, the yat will be automatically converted to canonical form. Therefore, lookups
for 🤟🏾🤟🏾🤟🏾 and 🤟🏽🤟🏽🤟🏽 will resolve to the same canonical yat (🤟🤟🤟).

When yats are _returned_ from endpoints, the _display format_ will usually be returned, but the endpoint documentation
will provide clarification where necessary.

## Emoji selection guidelines

We would have loved to have allowed any emoji to be used in your yat. But it was necessary to exclude many emoji from the official
list to protect users from both unintentional and malicious confusion amongst similar-looking yats.

We considered many aspects of the user experience and deliberated at length of such issues as inclusivity, adoption levels,
confusion amongst similar looking emoji, colour blindness and cultural specifics. A set of guidelines emerged from these
conversations that are used to determine whether a particular emoji is included into the Yat set or not.

### Unicode 8 and lower only

Android 6.0.1+ supports Unicode 8, which means all the selected emoji will render for ~97%+ of users.

### Look an animal in the face, don't judge it by its body

Most animals come in both a face version (e.g. dog face), _and_ a full body version (e.g. dog body). Since the body
versions are generally very tiny and easy to mix up with one another, and are not as frequently used as the face emoji,
we've decided to only include animal face emoji (except in cases where ONLY a full body is available and so there's no ambiguity).

### If you're on the fence, exclude it

We erred on the side of conservatism. It is easy to add emoji to the supported set anytime, but we can never remove emoji from the set.

### For identical emoji in different colors, select one color

10% of men are colorblind so color is a phishing attack vector. For example, we included ❤️. So we should exclude other colors like 💙 and 💜.

We also need to assume some people will do a poor job describing emoji, and may just say "heart" instead of "purple heart",
for example, which could cause confusion for the listener.

We can't prevent that, but if we restrict the set to just one color, accidental input of any other color will return an
error message, which is not ideal, but is far preferable to sending money, a message, etc. to the wrong person.

###  For groups of similar LOOKING, or similarly DESCRIBED emoji, pick one or none

This guideline reduces ambiguity in the emoji set.
We considered not just the visual similarity of the entire group, but how users may describe them and which are used more frequently in other apps (if relevant).

Not including any emoji from the group provides the best user experience in the sense that it constrains the user to
emoji that are less susceptible to user confusion, frustration, and error. For example, if someone tells you "globe"
you're probably going to feel frustrated when you see there are 3 globes in your keyboard 🌎 🌍 🌏 and even more
frustrated when you don't guess the right one and get an error, because you only have a 1 in 3 chance of getting it right the first time.

### Thinking about attacks

Many attacks (e.g. Nigerian Prince emails) are completely obvious to the majority of individuals, but are still effective
if just a few people fall for them. Put yourself in the mind of an attacker. Many mix-ups, of course, will not be due to
attacks but innocent human error, but with Yat those mix-ups could lead to real money being sent to the wrong person.

Some factors we consider:
- Many people get their left and right mixed up, so directional emoji (arrows, pointing fingers) could be easily mixed up with one another and therefore have been excluded.
- Some emoji look completely different but would be described the same way, for example diamond (the gem) and diamond (the card suit), which creates ambiguity.
- Some emoji are more difficult to describe and people may have wildly different understandings of the description, e.g. the devil vs. the red ogre thing, so it's best to pick either one or none of those.
- We shouldn't include more than 1 of any emoji that can be both singular or plural. For example, the single sword vs. crossed swords, because if someone tells you "swords" you may just hear "sword" and select the single sword when you see it on the keyboard.

## Gendered emoji

The Yat emoji set does not support _any_ gender-modifiable emoji. This is purely a technical decision to minimise ambiguity
and confusion among users.

Android has a dark and sordid history around their [handling of emoji genders](https://blog.emojipedia.org/android-10-0-emoji-changelog/).
As it stands, most users are still on an OS version that either supports ONLY male/female emoji (no gender-neutral), or _only_ gender-neutral emoji (no male/female).

Older versions of Android simply do not promote inclusivity, which by its modern day definition includes both binary and
non-binary gender identities, and Yat would inherit those constraints.

For example, some 55% of Android users are still on 7/8/9, which do not support gender-neutral emoji, and there are
still a significant number of users on Android 6, which do not support male/female emoji.

For example, on an Android 6 device, only the gender-neutral Person Walking is supported -- not Man Walking, not Woman Walking.
Then, on Android 7/8/9, they removed the gender-neutral emoji altogether, so only Man Walking and Woman Walking were supported,
but _not_ Person Walking.

Android 7/8/9 behave much like Telegram does when faced with a gender-neutral emoji; it modifies it unilaterally it by
appending one of the two gender modifiers.

_But_ with Android 10+, all three gender identities (person, male, female walking) are supported, along with a bunch of
new gender-neutral emoji that were only previously available in gendered flavors on 7/8/9 (and not at all on 6).

The UI patterns are not consistent either across OSes or platforms. *New* Android devices treat gender like skintones:
long press on a gender-neutral emoji to see the gender options for it. Unlike Android, iOS always shows all 3 genders
separately (even if behind the scenes it's the same emoji with a modifier).

Until devices and operating systems handle gendered emoji in a consistent and predictable way, it is much safer to leave
all gendered emoji from the Yat list altogether.

###  Similarity

The male and female and gender-neutral versions of many emojis look awfully similar. Consider 🚶🏼‍♀️ and 🚶🏼‍♂️.

Country Flag emojis have the same problem. Compare 🇮🇪, 🇨🇮, 🇮🇹, 🇬🇳 and 🇫🇷 or 🇹🇩, 🇧🇪 and 🇩🇪 and of course 🇦🇺 and 🇳🇿.
It would be unfair to include _some_ country flags and not others, so we leave them all out.

_By the way_, those flags are for Ireland, Ivory Coast, Italy, Guinea, France, Chad, Belgium, Germany, Australia and New Zealand. Could you differentiate them all?

