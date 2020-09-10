# com.tarilabs.client - Kotlin client library for Sample Yat API reference

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

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CartApi* | [**cartCheckoutPost**](docs/CartApi.md#cartcheckoutpost) | **POST** /cart/checkout |  Checkout cart
*CartApi* | [**cartDelete**](docs/CartApi.md#cartdelete) | **DELETE** /cart |  Clean up cart
*CartApi* | [**cartGet**](docs/CartApi.md#cartget) | **GET** /cart |  Return cart content
*CartApi* | [**cartPost**](docs/CartApi.md#cartpost) | **POST** /cart |  Update cart items
*CartApi* | [**cartPut**](docs/CartApi.md#cartput) | **PUT** /cart |  Replace cart items
*EmojiApi* | [**emojiEidGet**](docs/EmojiApi.md#emojieidget) | **GET** /emoji/{eid} |  Lookup EmojiId
*EmojiApi* | [**emojiEidPatch**](docs/EmojiApi.md#emojieidpatch) | **PATCH** /emoji/{eid} |  Edit EmojiId
*EmojiApi* | [**emojiGet**](docs/EmojiApi.md#emojiget) | **GET** /emoji |  List emojis
*EmojiApi* | [**emojiSearchGet**](docs/EmojiApi.md#emojisearchget) | **GET** /emoji/search |  Search for EmojiID
*KeyManagementApi* | [**pubkeysGet**](docs/KeyManagementApi.md#pubkeysget) | **GET** /pubkeys |  Retrieve pubkeys
*KeyManagementApi* | [**pubkeysPost**](docs/KeyManagementApi.md#pubkeyspost) | **POST** /pubkeys |  Generate custodial wallet
*KeyManagementApi* | [**pubkeysPubkeyPost**](docs/KeyManagementApi.md#pubkeyspubkeypost) | **POST** /pubkeys/{pubkey} |  Add pubkey for current user
*KeyManagementApi* | [**usersUserIdPubkeysGet**](docs/KeyManagementApi.md#usersuseridpubkeysget) | **GET** /users/{user_id}/pubkeys |  Retrieve pubkeys by user_id
*KeyManagementApi* | [**usersUserIdPubkeysPubkeyPost**](docs/KeyManagementApi.md#usersuseridpubkeyspubkeypost) | **POST** /users/{user_id}/pubkeys/{pubkey} |  Add pubkey for user by user_id
*ProxyApi* | [**proxyPost**](docs/ProxyApi.md#proxypost) | **POST** /proxy |  Calls a pre-defined proxy service with the provided data
*UserAuthenticationApi* | [**auth2faPost**](docs/UserAuthenticationApi.md#auth2fapost) | **POST** /auth/2fa |  Two factor authentication
*UserAuthenticationApi* | [**authMagicLinkPost**](docs/UserAuthenticationApi.md#authmagiclinkpost) | **POST** /auth/magic_link |  Generate magic link for login
*UserAuthenticationApi* | [**authTokenPost**](docs/UserAuthenticationApi.md#authtokenpost) | **POST** /auth/token |  Login via password
*UserAuthenticationApi* | [**authTokenRefreshPost**](docs/UserAuthenticationApi.md#authtokenrefreshpost) | **POST** /auth/token/refresh |  Refreshes access token
*UserInterestApi* | [**userInterestsEidDelete**](docs/UserInterestApi.md#userinterestseiddelete) | **DELETE** /user_interests/{eid} |  Destroys the user interest preventing this eid's notification emails from being sent for this user
*UserInterestApi* | [**userInterestsEidGet**](docs/UserInterestApi.md#userinterestseidget) | **GET** /user_interests/{eid} |  Given an EmojiId returns information about the user interest if a record exists for this user
*UserInterestApi* | [**userInterestsGet**](docs/UserInterestApi.md#userinterestsget) | **GET** /user_interests |  Returns a paginated list of user interest records associated with the user
*UserInterestApi* | [**userInterestsPost**](docs/UserInterestApi.md#userinterestspost) | **POST** /user_interests |  Create new interest in emoji to be notified when available
*UsersApi* | [**usersPost**](docs/UsersApi.md#userspost) | **POST** /users |  Register a User


<a name="documentation-for-models"></a>
## Documentation for Models

 - [com.tarilabs.client.models.CheckoutCartRequest](docs/CheckoutCartRequest.md)
 - [com.tarilabs.client.models.Confirm2Fa](docs/Confirm2Fa.md)
 - [com.tarilabs.client.models.EditRequest](docs/EditRequest.md)
 - [com.tarilabs.client.models.EditRequestInsert](docs/EditRequestInsert.md)
 - [com.tarilabs.client.models.LoginRequest](docs/LoginRequest.md)
 - [com.tarilabs.client.models.LookupResponse](docs/LookupResponse.md)
 - [com.tarilabs.client.models.LookupResponseResponse](docs/LookupResponseResponse.md)
 - [com.tarilabs.client.models.LookupResponseResponseError](docs/LookupResponseResponseError.md)
 - [com.tarilabs.client.models.LookupResponseResponseResult](docs/LookupResponseResponseResult.md)
 - [com.tarilabs.client.models.MagicLinkLoginRequest](docs/MagicLinkLoginRequest.md)
 - [com.tarilabs.client.models.MagicLinkLoginResponse](docs/MagicLinkLoginResponse.md)
 - [com.tarilabs.client.models.NewUserInterestParameters](docs/NewUserInterestParameters.md)
 - [com.tarilabs.client.models.ProxyCallParameters](docs/ProxyCallParameters.md)
 - [com.tarilabs.client.models.ProxyResult](docs/ProxyResult.md)
 - [com.tarilabs.client.models.RefreshRequest](docs/RefreshRequest.md)
 - [com.tarilabs.client.models.RegisterUserParameters](docs/RegisterUserParameters.md)
 - [com.tarilabs.client.models.SearchResult](docs/SearchResult.md)
 - [com.tarilabs.client.models.SearchResultAlternates](docs/SearchResultAlternates.md)
 - [com.tarilabs.client.models.SearchResultResult](docs/SearchResultResult.md)
 - [com.tarilabs.client.models.TokenResponse](docs/TokenResponse.md)
 - [com.tarilabs.client.models.UpdateCartRequest](docs/UpdateCartRequest.md)
 - [com.tarilabs.client.models.UpdateCartRequestItems](docs/UpdateCartRequestItems.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="apiKey"></a>
### apiKey

- **Type**: API key
- **API key parameter name**: API
- **Location**: HTTP header

