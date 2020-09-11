---
id: sdk_kotlin_index
title: Kotlin SDK documentation
---

## Requires

* Kotlin 1.3.61
* Gradle 4.9

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

## Documentation for API Endpoints

All URIs are relative to *http://localhost:3001*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
[CartApi](docs/CartApi.md) | [**cartCheckoutPost**](docs/CartApi.md#cartcheckoutpost) | **POST** /cart/checkout |  Checkout cart
[CartApi](docs/CartApi.md) | [**cartDelete**](docs/CartApi.md#cartdelete) | **DELETE** /cart |  Clean up cart
[CartApi](docs/CartApi.md) | [**cartGet**](docs/CartApi.md#cartget) | **GET** /cart |  Return cart content
[CartApi](docs/CartApi.md) | [**cartPost**](docs/CartApi.md#cartpost) | **POST** /cart |  Update cart items
[CartApi](docs/CartApi.md) | [**cartPut**](docs/CartApi.md#cartput) | **PUT** /cart |  Replace cart items
[EmojiApi](docs/EmojiApi.md) | [**emojiEidGet**](docs/EmojiApi.md#emojieidget) | **GET** /emoji/{eid} |  Lookup EmojiId
[EmojiApi](docs/EmojiApi.md) | [**emojiEidPatch**](docs/EmojiApi.md#emojieidpatch) | **PATCH** /emoji/{eid} |  Edit EmojiId
[EmojiApi](docs/EmojiApi.md) | [**emojiGet**](docs/EmojiApi.md#emojiget) | **GET** /emoji |  List emojis
[EmojiApi](docs/EmojiApi.md) | [**emojiSearchGet**](docs/EmojiApi.md#emojisearchget) | **GET** /emoji/search |  Search for EmojiID
[KeyManagementApi](docs/KeyManagementApi.md) | [**pubkeysGet**](docs/KeyManagementApi.md#pubkeysget) | **GET** /pubkeys |  Retrieve pubkeys
[KeyManagementApi](docs/KeyManagementApi.md) | [**pubkeysPost**](docs/KeyManagementApi.md#pubkeyspost) | **POST** /pubkeys |  Generate custodial wallet
[KeyManagementApi](docs/KeyManagementApi.md) | [**pubkeysPubkeyPost**](docs/KeyManagementApi.md#pubkeyspubkeypost) | **POST** /pubkeys/{pubkey} |  Add pubkey for current user
[KeyManagementApi](docs/KeyManagementApi.md) | [**usersUserIdPubkeysGet**](docs/KeyManagementApi.md#usersuseridpubkeysget) | **GET** /users/{user_id}/pubkeys |  Retrieve pubkeys by user_id
[KeyManagementApi](docs/KeyManagementApi.md) | [**usersUserIdPubkeysPubkeyPost**](docs/KeyManagementApi.md#usersuseridpubkeyspubkeypost) | **POST** /users/{user_id}/pubkeys/{pubkey} |  Add pubkey for user by user_id
[ProxyApi](docs/ProxyApi.md) | [**proxyPost**](docs/ProxyApi.md#proxypost) | **POST** /proxy |  Calls a pre-defined proxy service with the provided data
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**auth2faPost**](docs/UserAuthenticationApi.md#auth2fapost) | **POST** /auth/2fa |  Two factor authentication
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**authMagicLinkPost**](docs/UserAuthenticationApi.md#authmagiclinkpost) | **POST** /auth/magic_link |  Generate magic link for login
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**authTokenPost**](docs/UserAuthenticationApi.md#authtokenpost) | **POST** /auth/token |  Login via password
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**authTokenRefreshPost**](docs/UserAuthenticationApi.md#authtokenrefreshpost) | **POST** /auth/token/refresh |  Refreshes access token
[UserInterestApi](docs/UserInterestApi.md) | [**userInterestsEidDelete**](docs/UserInterestApi.md#userinterestseiddelete) | **DELETE** /user_interests/{eid} |  Destroys the user interest preventing this eid's notification emails from being sent for this user
[UserInterestApi](docs/UserInterestApi.md) | [**userInterestsEidGet**](docs/UserInterestApi.md#userinterestseidget) | **GET** /user_interests/{eid} |  Given an EmojiId returns information about the user interest if a record exists for this user
[UserInterestApi](docs/UserInterestApi.md) | [**userInterestsGet**](docs/UserInterestApi.md#userinterestsget) | **GET** /user_interests |  Returns a paginated list of user interest records associated with the user
[UserInterestApi](docs/UserInterestApi.md) | [**userInterestsPost**](docs/UserInterestApi.md#userinterestspost) | **POST** /user_interests |  Create new interest in emoji to be notified when available
[UsersApi](docs/UsersApi.md) | [**accountGet**](docs/UsersApi.md#accountget) | **GET** /account |  Current user account
[UsersApi](docs/UsersApi.md) | [**accountPatch**](docs/UsersApi.md#accountpatch) | **PATCH** /account |  Update the currently logged in user
[UsersApi](docs/UsersApi.md) | [**usersGet**](docs/UsersApi.md#usersget) | **GET** /users |  List users
[UsersApi](docs/UsersApi.md) | [**usersIdDelete**](docs/UsersApi.md#usersiddelete) | **DELETE** /users/{id} |  Delete a user
[UsersApi](docs/UsersApi.md) | [**usersIdPatch**](docs/UsersApi.md#usersidpatch) | **PATCH** /users/{id} |  Update a user as an admin
[UsersApi](docs/UsersApi.md) | [**usersPost**](docs/UsersApi.md#userspost) | **POST** /users |  Register a User



## Documentation for Models


### AdminUpdateUserParameters

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userParameters** | [**AdminUpdateUserParametersUserParameters**](#AdminUpdateUserParametersUserParameters) |  | 
**freeLimit** | **kotlin.Int** |  |  [optional]
**isActive** | **kotlin.Boolean** |  |  [optional]



### AdminUpdateUserParametersUserParameters

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **kotlin.String** |  |  [optional]
**firstName** | **kotlin.String** |  |  [optional]
**lastName** | **kotlin.String** |  |  [optional]



### CheckoutCartRequest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | [**inline**](#MethodEnum)
 | Payment method | 
**pubkey** | **kotlin.String** | Optional: user public key |  [optional]
**trackingData** | [**kotlin.Any**](#) | Optional: tracking data |  [optional]


#### Enum: method
Name | Value
---- | -----
method | Default, Free



### Confirm2Fa

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **kotlin.String** | Two factor authentication code | 
**refreshToken** | **kotlin.String** | Refresh token obtained from login request | 



### EditRequest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**kotlin.collections.List&lt;java.io.File&gt;**](#java.io.File) | Optional: hashes of records to delete |  [optional]
**insert** | [**kotlin.collections.List&lt;EditRequestInsert&gt;**](#EditRequestInsert) | Optional: list of records to add |  [optional]
**merkleRoot** | [**java.io.File**](#java.io.File) | Optional: merkle root (use WASM to generate) |  [optional]
**signature** | [**java.io.File**](#java.io.File) | Optional: signature (use WASM to generate) |  [optional]



### EditRequestInsert

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **kotlin.String** | Category data in text format | 
**tag** | **kotlin.String** | Category ID as a hex number | 



### LoginRequest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **kotlin.String** | Requred: Email | 
**password** | **kotlin.String** | Requred: Password | 
**gMinusRecaptchaMinusResponse** | **kotlin.String** | Response from google Recaptcha |  [optional]



### LookupResponse

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**LookupResponseResponse**](#LookupResponseResponse) |  | 
**viewsPastMonth** | **kotlin.Long** | Number of times emoji viewed during past month | 



### LookupResponseResponse

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **kotlin.Boolean** | Response status.  If true, the requested data will be in the result field, null otherwise | 
**error** | [**LookupResponseResponseError**](#LookupResponseResponseError) |  |  [optional]
**result** | [**kotlin.collections.List&lt;LookupResponseResponseResult&gt;**](#LookupResponseResponseResult) | Records associated with EmojiID |  [optional]



### LookupResponseResponseError

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **kotlin.String** | Error code | 
**reason** | **kotlin.String** |  | 



### LookupResponseResponseResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **kotlin.String** | Category data in text or hex encoded formats | 
**hash** | [**java.io.File**](#java.io.File) | Hash identifies record, can be used to delete records | 
**tag** | **kotlin.String** | Category as a hex string number | 



### MagicLinkLoginRequest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **kotlin.String** | Email |  [optional]
**gMinusRecaptchaMinusResponse** | **kotlin.String** | Response from google Recaptcha |  [optional]
**userId** | [**java.util.UUID**](#java.util.UUID) | User ID |  [optional]



### MagicLinkLoginResponse

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **kotlin.String** |  | 



### NewUserInterestParameters

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eid** | **kotlin.String** | EmojiID to express interest in | 



### ProxyCallParameters

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | [**inline**](#ServiceEnum)
 | &#x60;ProxyService&#x60; type | 
**data** | **kotlin.String** | The data to pass through to the proxied service |  [optional]


#### Enum: service
Name | Value
---- | -----
service | Microlink, Echo



### ProxyResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **kotlin.String** | The response from the proxied service as a String | 



### RefreshRequest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refreshToken** | **kotlin.String** | Refresh token obtained from login request | 



### RegisterUserParameters

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **kotlin.String** | Required: email address | 
**firstName** | **kotlin.String** | Optional: first name |  [optional]
**gMinusRecaptchaMinusResponse** | **kotlin.String** | Response from google Recaptcha |  [optional]
**lastName** | **kotlin.String** | Optional: last name |  [optional]
**password** | **kotlin.String** | Optional: password |  [optional]



### SearchResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternates** | [**kotlin.collections.List&lt;SearchResultAlternates&gt;**](#SearchResultAlternates) | Alternative Emoji IDs | 
**result** | [**SearchResultResult**](#SearchResultResult) |  | 



### SearchResultAlternates

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **kotlin.Boolean** | Whether the EID is available for purchase | 
**discountedPrice** | **kotlin.Long** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Discounted price is 0 if the emoji is not available | 
**eid** | **kotlin.String** | Emoji ID in percent url-encoded form | 
**price** | **kotlin.Long** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Price is 0 if the emoji is not available | 
**viewsPastMonth** | **kotlin.Long** | Total lookups using this API, if someone is viewing this EID  using their own self hosted node, it will not be counted here | 



### SearchResultResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **kotlin.Boolean** | Whether the EID is available for purchase | 
**discountedPrice** | **kotlin.Long** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Discounted price is 0 if the emoji is not available | 
**eid** | **kotlin.String** | Emoji ID in percent url-encoded form | 
**price** | **kotlin.Long** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Price is 0 if the emoji is not available | 
**viewsPastMonth** | **kotlin.Long** | Total lookups using this API, if someone is viewing this EID  using their own self hosted node, it will not be counted here | 



### TokenResponse

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **kotlin.String** | Access token | 
**refreshToken** | **kotlin.String** | Refresh token,  only required for 2FA (???) | 
**requires2fa** | [**kotlin.Any**](#) | Whether has 2FA enabled or not |  [optional]



### UpdateCartRequest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**kotlin.collections.List&lt;UpdateCartRequestItems&gt;**](#UpdateCartRequestItems) | New items to add to cart | 
**trackingData** | [**kotlin.Any**](#) | Tracking data |  [optional]



### UpdateCartRequestItems

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eid** | **kotlin.String** | EmojiID to buy | 
**redemptionCode** | **kotlin.String** | Redemption Code if applicable |  [optional]



### UpdateUserParameters

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **kotlin.String** |  |  [optional]
**firstName** | **kotlin.String** |  |  [optional]
**lastName** | **kotlin.String** |  |  [optional]





<a name="documentation-for-authorization"></a>
## Documentation for Authorization


### JWT

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


### apiKey

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

