---
id: sdk_kotlin_index
title: Kotlin SDK documentation
---

:::caution
The SDK code and documetnation are in ALPHA state and are under heavy development. As a result, the apis are still in
flux, and the documentation may be out of date with the code.
:::

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

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
[CartApi](docs/CartApi.md) | [**add**](docs/CartApi.md#add) | **POST** /cart | Update cart items by adding new items to the cart
[CartApi](docs/CartApi.md) | [**checkout**](docs/CartApi.md#checkout) | **POST** /cart/checkout | Checkout cart with provided payment details
[CartApi](docs/CartApi.md) | [**clear**](docs/CartApi.md#clear) | **DELETE** /cart | Remove all items from cart
[CartApi](docs/CartApi.md) | [**getItems**](docs/CartApi.md#getitems) | **GET** /cart | Return cart content
[CartApi](docs/CartApi.md) | [**replaceItems**](docs/CartApi.md#replaceitems) | **PUT** /cart | Replace cart items
[EmojiApi](docs/EmojiApi.md) | [**edit**](docs/EmojiApi.md#edit) | **PATCH** /emoji/{eid} | Edit EmojiId
[EmojiApi](docs/EmojiApi.md) | [**list**](docs/EmojiApi.md#list) | **GET** /emoji | List emojis
[EmojiApi](docs/EmojiApi.md) | [**lookup**](docs/EmojiApi.md#lookup) | **GET** /emoji/{eid} | Lookup EmojiId
[EmojiApi](docs/EmojiApi.md) | [**search**](docs/EmojiApi.md#search) | **GET** /emoji/search | Search for EmojiID
[KeyManagementApi](docs/KeyManagementApi.md) | [**addPubkey**](docs/KeyManagementApi.md#addpubkey) | **POST** /pubkeys/{pubkey} | Add pubkey for current user
[KeyManagementApi](docs/KeyManagementApi.md) | [**addPubkeyForUser**](docs/KeyManagementApi.md#addpubkeyforuser) | **POST** /users/{user_id}/pubkeys/{pubkey} | Add pubkey for user by user_id
[KeyManagementApi](docs/KeyManagementApi.md) | [**createWallet**](docs/KeyManagementApi.md#createwallet) | **POST** /pubkeys | Generate custodial wallet
[KeyManagementApi](docs/KeyManagementApi.md) | [**getPubkeys**](docs/KeyManagementApi.md#getpubkeys) | **GET** /pubkeys | Retrieve pubkeys
[KeyManagementApi](docs/KeyManagementApi.md) | [**getPubkeysForUser**](docs/KeyManagementApi.md#getpubkeysforuser) | **GET** /users/{user_id}/pubkeys | Retrieve pubkeys by user_id
[ProxyApi](docs/ProxyApi.md) | [**callProxy**](docs/ProxyApi.md#callproxy) | **POST** /proxy | Calls a pre-defined proxy service with the provided data
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**login**](docs/UserAuthenticationApi.md#login) | **POST** /auth/token | Login via password
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**magicLinkLogin**](docs/UserAuthenticationApi.md#magiclinklogin) | **POST** /auth/magic_link | Generate magic link for login
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**refreshToken**](docs/UserAuthenticationApi.md#refreshtoken) | **POST** /auth/token/refresh | Refreshes access token
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**twoFactorAuthentication**](docs/UserAuthenticationApi.md#twofactorauthentication) | **POST** /auth/2fa | Two factor authentication
[UserInterestApi](docs/UserInterestApi.md) | [**deleteUserInterest**](docs/UserInterestApi.md#deleteuserinterest) | **DELETE** /user_interests/{eid} | Destroys the user interest preventing this eid's notification emails from being sent for this user
[UserInterestApi](docs/UserInterestApi.md) | [**getInterestedUsers**](docs/UserInterestApi.md#getinterestedusers) | **GET** /user_interests | Returns a paginated list of user interest records associated with the user
[UserInterestApi](docs/UserInterestApi.md) | [**getUserInterestForYat**](docs/UserInterestApi.md#getuserinterestforyat) | **GET** /user_interests/{eid} | Given an EmojiId returns information about the user interest if a record exists for this user
[UserInterestApi](docs/UserInterestApi.md) | [**registerInterest**](docs/UserInterestApi.md#registerinterest) | **POST** /user_interests | Create new interest in emoji to be notified when available
[UsersApi](docs/UsersApi.md) | [**createUser**](docs/UsersApi.md#createuser) | **POST** /users | Register a User
[UsersApi](docs/UsersApi.md) | [**delete**](docs/UsersApi.md#delete) | **DELETE** /users/{id} | Delete a user
[UsersApi](docs/UsersApi.md) | [**getAccount**](docs/UsersApi.md#getaccount) | **GET** /account | Current user account
[UsersApi](docs/UsersApi.md) | [**getAllUsers**](docs/UsersApi.md#getallusers) | **GET** /users | List users
[UsersApi](docs/UsersApi.md) | [**update**](docs/UsersApi.md#update) | **PATCH** /account | Update the currently logged in user
[UsersApi](docs/UsersApi.md) | [**updateUser**](docs/UsersApi.md#updateuser) | **PATCH** /users/{id} | Update a user as an admin



## Documentation for Models


### AdminUpdateUserParameters

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userParameters** | [**AdminUpdateUserParametersUserParameters**](#AdminUpdateUserParametersUserParameters) |  | 
**freeLimit** | **kotlin.Int** | Optional: Free limit for how many yats the user may purchase |  [optional]
**isActive** | **kotlin.Boolean** | Optional: If the user is active, updating to true triggers user activation related events |  [optional]



### AdminUpdateUserParametersUserParameters

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **kotlin.String** | Optional: Email |  [optional]
**firstName** | **kotlin.String** | Optional: First name |  [optional]
**lastName** | **kotlin.String** | Optional: Last name |  [optional]



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



### CurrentUser

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**globalScopes** | [**inline**](#kotlin.collections.List&lt;GlobalScopesEnum&gt;)
 | A list of fine-grained permissions the user may perform. | 
**organizationRoles** | [**inline**](#kotlin.collections.Map&lt;kotlin.String, InnerEnum&gt;)
 | The role this user has in each organisation. Organisations are currently not used, but are reserved for  future operations. | 
**organizationScopes** | [**inline**](#kotlin.collections.Map&lt;kotlin.String, kotlin.collections.List&lt;kotlin.String&gt;&gt;)
 | The scopes that are granted to this user for each organisation. Organisations are currently not used, but are  reserved for future operations. | 
**pubkeys** | **kotlin.collections.List&lt;kotlin.String&gt;** | A list of this user&#39;s public keys. When yats are deployed to the blockchain, users prove ownership of their  Yats with digital signatures, proving knowledge of the private keys that \&quot;own\&quot; the yat. In the centralised  implementation of Yat, the server will custody the users&#39; wallets and private keys, but in other respects the  ownership model is the same. | 
**role** | [**inline**](#RoleEnum)
 | The role assigned to this user. Roles grant authority to user accounts to perform certain actions. | 
**user** | [**CurrentUserUser**](#CurrentUserUser) |  | 


#### Enum: global_scopes
Name | Value
---- | -----
globalScopes | AdminEmojiRegister, AdminEmojiWrite, CartShow, CartUpdate, CodeDelete, CodeRead, CodeWrite, EmojiGroupsDelete, EmojiGroupsRead, EmojiGroupsWrite, OrderRead, OrderReadSelf, OrderRefund, OrderRefundOverride, OrderResendConfirmation, OrganizationAdmin, OrganizationEmojiList, OrganizationEmojiWrite, OrganizationListRead, OrganizationRead, OrganizationUserAdmin, OrganizationUserRead, OrganizationWrite, PaymentMethodDestroy, PaymentMethodRead, PaymentMethodSetDefault, RefundRead, TokenRefresh, TwoFactorAuth, UserDelete, UserDeleteSelf, UserEmojiList, UserInterestDelete, UserInterestRead, UserInterestWrite, UserList, UserPubkeyList, UserPubkeyWrite, UserWrite, UserWriteSelf


#### Enum: organization_roles
Name | Value
---- | -----
organizationRoles | Admin, OrgController, OrgMember, OrgOwner, Super, User


#### Enum: organization_scopes
Name | Value
---- | -----
organizationScopes | AdminEmojiRegister, AdminEmojiWrite, CartShow, CartUpdate, CodeDelete, CodeRead, CodeWrite, EmojiGroupsDelete, EmojiGroupsRead, EmojiGroupsWrite, OrderRead, OrderReadSelf, OrderRefund, OrderRefundOverride, OrderResendConfirmation, OrganizationAdmin, OrganizationEmojiList, OrganizationEmojiWrite, OrganizationListRead, OrganizationRead, OrganizationUserAdmin, OrganizationUserRead, OrganizationWrite, PaymentMethodDestroy, PaymentMethodRead, PaymentMethodSetDefault, RefundRead, TokenRefresh, TwoFactorAuth, UserDelete, UserDeleteSelf, UserEmojiList, UserInterestDelete, UserInterestRead, UserInterestWrite, UserList, UserPubkeyList, UserPubkeyWrite, UserWrite, UserWriteSelf


#### Enum: role
Name | Value
---- | -----
role | Admin, OrgController, OrgMember, OrgOwner, Super, User



### CurrentUserUser

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  | 
**freeLimit** | **kotlin.Int** |  | 
**id** | [**java.util.UUID**](#java.util.UUID) |  | 
**isActive** | **kotlin.Boolean** |  | 
**remainingFreeEmoji** | **kotlin.Int** |  | 
**role** | [**inline**](#RoleEnum)
 |  | 
**updatedAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  | 
**alternateId** | **kotlin.String** |  |  [optional]
**deactivatedAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  |  [optional]
**email** | **kotlin.String** |  |  [optional]
**firstName** | **kotlin.String** |  |  [optional]
**lastName** | **kotlin.String** |  |  [optional]
**source** | **kotlin.String** |  |  [optional]
**twoFactorAuth** | [**kotlin.Any**](#) |  |  [optional]


#### Enum: role
Name | Value
---- | -----
role | Admin, OrgController, OrgMember, OrgOwner, Super, User



### DisplayUser

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  | 
**freeLimit** | **kotlin.Int** |  | 
**id** | [**java.util.UUID**](#java.util.UUID) |  | 
**isActive** | **kotlin.Boolean** |  | 
**remainingFreeEmoji** | **kotlin.Int** |  | 
**role** | [**inline**](#RoleEnum)
 |  | 
**updatedAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  | 
**alternateId** | **kotlin.String** |  |  [optional]
**deactivatedAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  |  [optional]
**email** | **kotlin.String** |  |  [optional]
**firstName** | **kotlin.String** |  |  [optional]
**lastName** | **kotlin.String** |  |  [optional]
**source** | **kotlin.String** |  |  [optional]
**twoFactorAuth** | [**kotlin.Any**](#) |  |  [optional]


#### Enum: role
Name | Value
---- | -----
role | Admin, OrgController, OrgMember, OrgOwner, Super, User



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
**password** | **kotlin.String** | Required: Password | 
**alternateId** | **kotlin.String** | Alternate identifier |  [optional]
**email** | **kotlin.String** | Email |  [optional]
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
service | Microlink, RestPack, Echo, Scraper



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
**alternateId** | **kotlin.String** | Alternate identifier |  [optional]
**email** | **kotlin.String** | Email address |  [optional]
**firstName** | **kotlin.String** | Optional: first name |  [optional]
**gMinusRecaptchaMinusResponse** | **kotlin.String** | Response from google Recaptcha |  [optional]
**lastName** | **kotlin.String** | Optional: last name |  [optional]
**password** | **kotlin.String** | Optional: password |  [optional]
**source** | **kotlin.String** | Required when registering with &#x60;alternate_id&#x60;, source for non custodial user |  [optional]



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
**availability** | [**inline**](#AvailabilityEnum)
 | The availability state of this emoji | 
**available** | **kotlin.Boolean** | Whether the EID is available for purchase | 
**discountedPrice** | **kotlin.Long** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Discounted price is 0 if the emoji is not available | 
**eid** | **kotlin.String** | Emoji ID in percent url-encoded form | 
**price** | **kotlin.Long** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Price is 0 if the emoji is not available | 
**viewsPastMonth** | **kotlin.Long** | Total lookups using this API, if someone is viewing this EID  using their own self hosted node, it will not be counted here | 


#### Enum: availability
Name | Value
---- | -----
availability | Available, Taken, InCart, ComingSoon, NoPrice



### SearchResultResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | [**inline**](#AvailabilityEnum)
 | The availability state of this emoji | 
**available** | **kotlin.Boolean** | Whether the EID is available for purchase | 
**discountedPrice** | **kotlin.Long** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Discounted price is 0 if the emoji is not available | 
**eid** | **kotlin.String** | Emoji ID in percent url-encoded form | 
**price** | **kotlin.Long** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Price is 0 if the emoji is not available | 
**viewsPastMonth** | **kotlin.Long** | Total lookups using this API, if someone is viewing this EID  using their own self hosted node, it will not be counted here | 


#### Enum: availability
Name | Value
---- | -----
availability | Available, Taken, InCart, ComingSoon, NoPrice



### SuccessResponse

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **kotlin.String** |  | 



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
**email** | **kotlin.String** | Optional: Email |  [optional]
**firstName** | **kotlin.String** | Optional: First name |  [optional]
**lastName** | **kotlin.String** | Optional: Last name |  [optional]





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

