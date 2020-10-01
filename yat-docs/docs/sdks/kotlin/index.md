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
[CartApi](docs/CartApi.md) | [**addItems**](docs/CartApi.md#additems) | **POST** /cart | Update cart items by adding new items to the cart
[CartApi](docs/CartApi.md) | [**checkout**](docs/CartApi.md#checkout) | **POST** /cart/checkout | Checkout cart with provided payment details
[CartApi](docs/CartApi.md) | [**clear**](docs/CartApi.md#clear) | **DELETE** /cart | Remove all items from cart
[CartApi](docs/CartApi.md) | [**getItems**](docs/CartApi.md#getitems) | **GET** /cart | Return cart content
[CartApi](docs/CartApi.md) | [**replaceItems**](docs/CartApi.md#replaceitems) | **PUT** /cart | Replace cart items
[DiscountsApi](docs/DiscountsApi.md) | [**activateRandomYatCode**](docs/DiscountsApi.md#activaterandomyatcode) | **POST** /codes/{code_id}/random_yat | Use random yat code
[DiscountsApi](docs/DiscountsApi.md) | [**addPubkeyForCode**](docs/DiscountsApi.md#addpubkeyforcode) | **POST** /codes/{code_id}/pubkeys/{pubkey} | Add pubkey for code
[DiscountsApi](docs/DiscountsApi.md) | [**listCodes**](docs/DiscountsApi.md#listcodes) | **GET** /codes | Fetch codes
[DiscountsApi](docs/DiscountsApi.md) | [**revokePubkeyForCode**](docs/DiscountsApi.md#revokepubkeyforcode) | **DELETE** /codes/{code_id}/pubkeys/{pubkey} | Revoke pubkey for code
[EmojiApi](docs/EmojiApi.md) | [**emojiList**](docs/EmojiApi.md#emojilist) | **GET** /emoji | List of supported emoji characters
[EmojiApi](docs/EmojiApi.md) | [**random**](docs/EmojiApi.md#random) | **GET** /emoji_id/random | Return random Emoji
[EmojiIDApi](docs/EmojiIDApi.md) | [**edit**](docs/EmojiIDApi.md#edit) | **PATCH** /emoji_id/{emoji_id} | Edit EmojiId
[EmojiIDApi](docs/EmojiIDApi.md) | [**list**](docs/EmojiIDApi.md#list) | **GET** /emoji_id | List user's emoji Ids
[EmojiIDApi](docs/EmojiIDApi.md) | [**lookup**](docs/EmojiIDApi.md#lookup) | **GET** /emoji_id/{emoji_id} | Lookup EmojiId
[EmojiIDApi](docs/EmojiIDApi.md) | [**search**](docs/EmojiIDApi.md#search) | **GET** /emoji_id/search | Search for EmojiID
[KeyManagementApi](docs/KeyManagementApi.md) | [**addPubkey**](docs/KeyManagementApi.md#addpubkey) | **POST** /pubkeys/{pubkey} | Add pubkey for current user
[KeyManagementApi](docs/KeyManagementApi.md) | [**addPubkeyForUser**](docs/KeyManagementApi.md#addpubkeyforuser) | **POST** /users/{user_id}/pubkeys/{pubkey} | Add pubkey for user by user_id
[KeyManagementApi](docs/KeyManagementApi.md) | [**createWallet**](docs/KeyManagementApi.md#createwallet) | **POST** /pubkeys | Generate custodial wallet
[KeyManagementApi](docs/KeyManagementApi.md) | [**getPubkeys**](docs/KeyManagementApi.md#getpubkeys) | **GET** /pubkeys | Retrieve pubkeys
[KeyManagementApi](docs/KeyManagementApi.md) | [**getPubkeysForUser**](docs/KeyManagementApi.md#getpubkeysforuser) | **GET** /users/{user_id}/pubkeys | Retrieve pubkeys by user_id
[ProxyApi](docs/ProxyApi.md) | [**callProxy**](docs/ProxyApi.md#callproxy) | **POST** /proxy | Calls a pre-defined proxy service with the provided data
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**login**](docs/UserAuthenticationApi.md#login) | **POST** /auth/token | Login via password
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**magicLinkLogin**](docs/UserAuthenticationApi.md#magiclinklogin) | **POST** /auth/magic_link | Generate magic link for login
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**refreshToken**](docs/UserAuthenticationApi.md#refreshtoken) | **POST** /auth/token/refresh | Refresh access token
[UserAuthenticationApi](docs/UserAuthenticationApi.md) | [**twoFactorAuthentication**](docs/UserAuthenticationApi.md#twofactorauthentication) | **POST** /auth/2fa | Two factor authentication
[UserInterestApi](docs/UserInterestApi.md) | [**deleteUserInterest**](docs/UserInterestApi.md#deleteuserinterest) | **DELETE** /user_interests/{emoji_id} | Destroys the user interest preventing this Emoji ID's notification emails from being sent for this user
[UserInterestApi](docs/UserInterestApi.md) | [**getInterestedUsers**](docs/UserInterestApi.md#getinterestedusers) | **GET** /user_interests | Returns a paginated list of user interest records associated with the user
[UserInterestApi](docs/UserInterestApi.md) | [**getUserInterestForYat**](docs/UserInterestApi.md#getuserinterestforyat) | **GET** /user_interests/{emoji_id} | Given an EmojiId returns information about the user interest if a record exists for this user
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
**email** | **kotlin.String** | Optional: Email |  [optional]
**firstName** | **kotlin.String** | Optional: First name |  [optional]
**freeLimit** | **kotlin.Int** | Optional: Free limit for how many yats the user may purchase |  [optional]
**isActive** | **kotlin.Boolean** | Optional: If the user is active, updating to true triggers user activation related events |  [optional]
**lastName** | **kotlin.String** | Optional: Last name |  [optional]



### CheckoutCartRequestBody

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | [**inline**](#MethodEnum)
 | Payment method type | 
**paymentMethodId** | [**java.util.UUID**](#java.util.UUID) | Use stored payment method (only with &#x60;Provider&#x60; method) |  [optional]
**provider** | [**inline**](#ProviderEnum)
 | Payment provider (required with &#x60;Provider&#x60; or &#x60;Card&#x60; methods)  payment types. |  [optional]
**pubkey** | **kotlin.String** | Optional: The user&#39;s public key to associate with this emoji id |  [optional]
**savePaymentMethod** | **kotlin.Boolean** | Save card payment method. |  [optional]
**setDefault** | **kotlin.Boolean** | Set card payment method as default. |  [optional]
**token** | **kotlin.String** | Card payment token (required with &#x60;Card&#x60; method) |  [optional]
**trackingData** | [**kotlin.Any**](#) | Optional: tracking data |  [optional]


#### Enum: method
Name | Value
---- | -----
method | Provider, Card, Default, Free


#### Enum: provider
Name | Value
---- | -----
provider | Free, Globee, Stripe



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
globalScopes | adminEmoji:register, adminEmoji:write, cart:show, cart:update, code:delete, code:read, code:write, emojiGroups:delete, emojiGroups:read, emojiGroups:write, order:read, order:readSelf, order:refund, order:refundOverride, order:resendConfirmation, organization:admin, organizationCode:admin, organizationEmoji:list, organizationEmoji:write, organizationList:read, organization:read, organizationUser:admin, organizationUser:read, organization:write, paymentMethod:destroy, paymentMethod:read, paymentMethod:setDefault, refund:read, token:refresh, auth:twoFactor, user:delete, user:deleteSelf, userEmoji:list, userInterest:delete, userInterest:read, userInterest:write, user:list, userPubkeys:list, userPubkeys:write, user:write, user:writeSelf


#### Enum: organization_roles
Name | Value
---- | -----
organizationRoles | Admin, OrgController, OrgMember, OrgOwner, Super, User


#### Enum: organization_scopes
Name | Value
---- | -----
organizationScopes | adminEmoji:register, adminEmoji:write, cart:show, cart:update, code:delete, code:read, code:write, emojiGroups:delete, emojiGroups:read, emojiGroups:write, order:read, order:readSelf, order:refund, order:refundOverride, order:resendConfirmation, organization:admin, organizationCode:admin, organizationEmoji:list, organizationEmoji:write, organizationList:read, organization:read, organizationUser:admin, organizationUser:read, organization:write, paymentMethod:destroy, paymentMethod:read, paymentMethod:setDefault, refund:read, token:refresh, auth:twoFactor, user:delete, user:deleteSelf, userEmoji:list, userInterest:delete, userInterest:read, userInterest:write, user:list, userPubkeys:list, userPubkeys:write, user:write, user:writeSelf


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
**twoFactorAuth** | [**inline**](#TwoFactorAuthEnum)
 | Two factor authentication backend |  [optional]


#### Enum: role
Name | Value
---- | -----
role | Admin, OrgController, OrgMember, OrgOwner, Super, User


#### Enum: two_factor_auth
Name | Value
---- | -----
twoFactorAuth | GoogleAuthenticator



### DisplayOrder

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) | A UTC timestamp for when this order was initially created. | 
**eligibleForRefund** | **kotlin.Boolean** | Whether an order is eligible for a refund via an admin. | 
**id** | [**java.util.UUID**](#java.util.UUID) | The unique identifier for this order | 
**miscRefundedTotalInCents** | **kotlin.Long** | The total of miscellaneous refund amounts retirned to the order. | 
**orderItems** | [**kotlin.collections.List&lt;DisplayOrderOrderItems&gt;**](#DisplayOrderOrderItems) | The list of individual line items making up this order. | 
**orderNumber** | **kotlin.String** | The order number is the last 8 characters of the order&#39;s ID for user display purposes. | 
**refundedTotalInCents** | **kotlin.Long** | The total of refund amounts for the order. | 
**status** | [**inline**](#StatusEnum)
 | The order of the status. Orders start in &#39;Draft&#39; status, then move to &#39;PendingPayment&#39; and finally, &#39;Paid&#39;,  unless they are &#39;Cancelled&#39;. | 
**totalInCents** | **kotlin.Long** | The sum of all the items in this order, plus fees, in USD cents. | 
**updatedAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) | A UTC timestamp for the last time any field in this order was modified. | 
**user** | [**DisplayOrderUser**](#DisplayOrderUser) |  | 
**userId** | [**java.util.UUID**](#java.util.UUID) | The identifier of the user placing this order | 
**expiresAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) | Checkout carts have a limited time before they expire. This prevents users from blocking inventory from being  sold to other customers. The expiry time is configurable on the server and is typically 5 minutes. |  [optional]
**organizationId** | [**java.util.UUID**](#java.util.UUID) | The organization id of the user, if applicable. This will generally be null, unless the purchase is coming via  a referral programme. |  [optional]
**paidAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) | A UTC timestamp for when payment for this order was received. Will be null if no payment has been made yet. |  [optional]
**paymentMethodData** | [**kotlin.Any**](#) | Payment method data for payment methods that provide QR code checkout options set via checkout. |  [optional]
**secondsUntilExpiry** | **kotlin.Int** | A convenience field indicating how long before &#x60;expires_at&#x60; is reached. |  [optional]


#### Enum: status
Name | Value
---- | -----
status | Cancelled, Draft, Paid, PendingPayment



### DisplayOrderOrderItems

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientFeeInCents** | **kotlin.Int** | The fee attributable to the referral partner, in addition to the nominal unit price, in USD cents. | 
**companyFeeInCents** | **kotlin.Int** | The fee attributable to the service host or company, in addition to the nominal unit price, in USD cents. | 
**createdAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) | A UTC timestamp for when this order item was created. | 
**id** | [**java.util.UUID**](#java.util.UUID) | A unique identifier for this order item | 
**itemType** | [**inline**](#ItemTypeEnum)
 | The type of order. Current enumerations are EmojiId and Discount | 
**orderId** | [**java.util.UUID**](#java.util.UUID) | The id of the order this order item | 
**quantity** | **kotlin.Int** | The number of items in the line order. For emoji id sales, this should always be one. | 
**refundedQuantity** | **kotlin.Int** |  | 
**unitPriceInCents** | **kotlin.Int** | The nominal, non-discounted price of the item, in USD cents. | 
**updatedAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) | A UTC timestamp for when ny field in the order item was modified. | 
**codeId** | [**java.util.UUID**](#java.util.UUID) | The code associated with this order item for providing a discount. |  [optional]
**emojiId** | **kotlin.String** | The emoji id that is being purchased |  [optional]
**parentId** | [**java.util.UUID**](#java.util.UUID) | Parent order item&#39;s ID, set for discounts and fees |  [optional]


#### Enum: item_type
Name | Value
---- | -----
itemType | Discount, EmojiId



### DisplayOrderUser

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
**twoFactorAuth** | [**inline**](#TwoFactorAuthEnum)
 | Two factor authentication backend |  [optional]


#### Enum: role
Name | Value
---- | -----
role | Admin, OrgController, OrgMember, OrgOwner, Super, User


#### Enum: two_factor_auth
Name | Value
---- | -----
twoFactorAuth | GoogleAuthenticator



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
**twoFactorAuth** | [**inline**](#TwoFactorAuthEnum)
 | Two factor authentication backend |  [optional]


#### Enum: role
Name | Value
---- | -----
role | Admin, OrgController, OrgMember, OrgOwner, Super, User


#### Enum: two_factor_auth
Name | Value
---- | -----
twoFactorAuth | GoogleAuthenticator



### EditRequest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | **kotlin.collections.List&lt;kotlin.String&gt;** | Optional: hashes of records to delete |  [optional]
**insert** | [**kotlin.collections.List&lt;EditRequestInsert&gt;**](#EditRequestInsert) | Optional: list of records to add |  [optional]
**merkleRoot** | **kotlin.String** | Optional: merkle root (use WASM to generate) |  [optional]
**signature** | **kotlin.String** | Optional: signature (use WASM to generate) |  [optional]



### EditRequestInsert

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **kotlin.String** | Category data in text format | 
**tag** | **kotlin.String** | Category ID as a hex number | 



### ListOfCodeAvailability

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**kotlin.collections.List&lt;ListOfCodeAvailabilityData&gt;**](#ListOfCodeAvailabilityData) |  |  [optional]
**paging** | [**ListOfCodeAvailabilityPaging**](#ListOfCodeAvailabilityPaging) |  |  [optional]



### ListOfCodeAvailabilityData

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalUses** | **kotlin.Long** |  | 
**activator** | [**inline**](#ActivatorEnum)
 |  |  [optional]
**available** | **kotlin.Long** |  |  [optional]
**codeType** | [**inline**](#CodeTypeEnum)
 |  |  [optional]
**createdAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  |  [optional]
**deletedAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  |  [optional]
**discountAsPercentage** | **kotlin.Int** |  |  [optional]
**discountInCents** | **kotlin.Int** |  |  [optional]
**endDate** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  |  [optional]
**id** | [**java.util.UUID**](#java.util.UUID) |  |  [optional]
**maxEmojisPerUser** | **kotlin.Int** |  |  [optional]
**maxUses** | **kotlin.Int** |  |  [optional]
**name** | **kotlin.String** |  |  [optional]
**organizationId** | [**java.util.UUID**](#java.util.UUID) |  |  [optional]
**redemptionCode** | **kotlin.String** |  |  [optional]
**startDate** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  |  [optional]
**updatedAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  |  [optional]


#### Enum: activator
Name | Value
---- | -----
activator | RedemptionCode, SecretKey


#### Enum: code_type
Name | Value
---- | -----
codeType | Discount, RandomYat



### ListOfCodeAvailabilityPaging

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dir** | [**inline**](#DirEnum)
 |  | 
**limit** | **kotlin.Int** |  | 
**page** | **kotlin.Int** |  | 
**sort** | **kotlin.String** |  | 
**tags** | [**kotlin.collections.Map&lt;kotlin.String, kotlin.Any&gt;**](#kotlin.Any) |  | 
**total** | **kotlin.Long** |  | 


#### Enum: dir
Name | Value
---- | -----
dir | Asc, Desc



### ListOfDisplayUser

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**kotlin.collections.List&lt;ListOfDisplayUserData&gt;**](#ListOfDisplayUserData) |  |  [optional]
**paging** | [**ListOfCodeAvailabilityPaging**](#ListOfCodeAvailabilityPaging) |  |  [optional]



### ListOfDisplayUserData

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
**twoFactorAuth** | [**inline**](#TwoFactorAuthEnum)
 | Two factor authentication backend |  [optional]


#### Enum: role
Name | Value
---- | -----
role | Admin, OrgController, OrgMember, OrgOwner, Super, User


#### Enum: two_factor_auth
Name | Value
---- | -----
twoFactorAuth | GoogleAuthenticator



### ListOfUserInterest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**kotlin.collections.List&lt;ListOfUserInterestData&gt;**](#ListOfUserInterestData) |  |  [optional]
**paging** | [**ListOfCodeAvailabilityPaging**](#ListOfCodeAvailabilityPaging) |  |  [optional]



### ListOfUserInterestData

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  | 
**emojiId** | **kotlin.String** |  | 
**id** | [**java.util.UUID**](#java.util.UUID) |  | 
**updatedAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  | 
**userId** | [**java.util.UUID**](#java.util.UUID) |  | 



### LoginRequest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **kotlin.String** | Required: Password | 
**alternateId** | **kotlin.String** | Alternate identifier |  [optional]
**email** | **kotlin.String** | Email |  [optional]
**gRecaptchaResponse** | **kotlin.String** | Response from google Recaptcha |  [optional]



### LookupResponse

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewsPastMonth** | **kotlin.Long** | Number of times emoji viewed during past month | 
**error** | [**LookupResponseError**](#LookupResponseError) |  |  [optional]
**result** | [**kotlin.collections.List&lt;LookupResponseResult&gt;**](#LookupResponseResult) | Records associated with EmojiID |  [optional]
**status** | **kotlin.Boolean** | Response status.  If true, the requested data will be in the result field, null otherwise |  [optional]



### LookupResponseError

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **kotlin.String** | Error code | 
**reason** | **kotlin.String** |  | 



### LookupResponseResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **kotlin.String** | Category data in text or hex encoded formats | 
**hash** | **kotlin.String** | Hash identifies record, can be used to delete records | 
**tag** | **kotlin.String** | Category as a hex string number | 



### MagicLinkLoginRequest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **kotlin.String** | Email |  [optional]
**gRecaptchaResponse** | **kotlin.String** | Response from google Recaptcha |  [optional]
**userId** | [**java.util.UUID**](#java.util.UUID) | User ID |  [optional]



### MagicLinkLoginResponse

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **kotlin.String** | Message | 
**status** | [**inline**](#StatusEnum)
 | Status of requested user after completing the login request | 


#### Enum: status
Name | Value
---- | -----
status | Active, RegisteredInactive, RegisteredActive, Inactive



### NewUserInterestParameters

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emojiId** | **kotlin.String** | Emoji ID to express interest in | 



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
service | RestPack, Echo, Scraper



### ProxyResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **kotlin.String** | The response from the proxied service as a String | 



### RandomResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**kotlin.collections.List&lt;RandomResultResult&gt;**](#RandomResultResult) | Random Emoji IDs | 



### RandomResultResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | [**inline**](#AvailabilityEnum)
 | The availability state of this emoji | 
**available** | **kotlin.Boolean** | Whether the Emoji ID is available for purchase | 
**discountedPrice** | **kotlin.Int** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Discounted price is 0 if the emoji is not available | 
**emojiId** | **kotlin.String** | Emoji ID in canonical form | 
**price** | **kotlin.Int** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Price is 0 if the emoji is not available | 
**viewsPastMonth** | **kotlin.Long** | Total lookups using this API, if someone is viewing this Emoji ID  using their own self hosted node, it will not be counted here | 


#### Enum: availability
Name | Value
---- | -----
availability | Available, Taken, InCart, ComingSoon, NoPrice



### RandomYatActivateBody

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nonce** | **kotlin.String** | Schnorr signature nonce as a hex | 
**pubkey** | **kotlin.String** | Public key to authorize usage of a code | 
**signature** | **kotlin.String** | Schnorr signature as a hex with alternate_id as a challenge | 
**trackingData** | [**kotlin.Any**](#) | Custom tracking data to be associated with a purchase |  [optional]



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
**gRecaptchaResponse** | **kotlin.String** | Response from google Recaptcha |  [optional]
**lastName** | **kotlin.String** | Optional: last name |  [optional]
**password** | **kotlin.String** | Optional: password |  [optional]
**source** | **kotlin.String** | Required when registering with &#x60;alternate_id&#x60;, source for non custodial user |  [optional]



### SearchResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternates** | [**kotlin.collections.List&lt;RandomResultResult&gt;**](#RandomResultResult) | Alternative Emoji IDs | 
**result** | [**SearchResultResult**](#SearchResultResult) |  | 



### SearchResultResult

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | [**inline**](#AvailabilityEnum)
 | The availability state of this emoji | 
**available** | **kotlin.Boolean** | Whether the Emoji ID is available for purchase | 
**discountedPrice** | **kotlin.Int** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Discounted price is 0 if the emoji is not available | 
**emojiId** | **kotlin.String** | Emoji ID in canonical form | 
**price** | **kotlin.Int** | Pricing in US cents, e.g. 1024 is 10.24 USD.  Price is 0 if the emoji is not available | 
**viewsPastMonth** | **kotlin.Long** | Total lookups using this API, if someone is viewing this Emoji ID  using their own self hosted node, it will not be counted here | 


#### Enum: availability
Name | Value
---- | -----
availability | Available, Taken, InCart, ComingSoon, NoPrice



### TokenResponse

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **kotlin.String** | Access token | 
**refreshToken** | **kotlin.String** | Refresh token,  only required for 2FA (???) | 
**requires2fa** | [**inline**](#Requires2faEnum)
 | Whether has 2FA enabled or not |  [optional]


#### Enum: requires_2fa
Name | Value
---- | -----
requires2fa | GoogleAuthenticator



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
**emojiId** | **kotlin.String** | EmojiID to buy | 
**redemptionCode** | **kotlin.String** | Redemption Code if applicable |  [optional]



### UpdateUserParameters

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **kotlin.String** | Optional: Email |  [optional]
**firstName** | **kotlin.String** | Optional: First name |  [optional]
**lastName** | **kotlin.String** | Optional: Last name |  [optional]



### UserInterest

#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  | 
**emojiId** | **kotlin.String** |  | 
**id** | [**java.util.UUID**](#java.util.UUID) |  | 
**updatedAt** | [**java.time.OffsetDateTime**](#java.time.OffsetDateTime) |  | 
**userId** | [**java.util.UUID**](#java.util.UUID) |  | 





<a name="documentation-for-authorization"></a>
## Documentation for Authorization


### JWT

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


### two_factor

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

