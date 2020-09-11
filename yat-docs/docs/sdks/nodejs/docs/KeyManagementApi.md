---
id: keymanagementapi
title: KeyManagementApi
---

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pubkeysGet**](KeyManagementApi.md#pubkeysGet) | **GET** /pubkeys |  Retrieve pubkeys
[**pubkeysPost**](KeyManagementApi.md#pubkeysPost) | **POST** /pubkeys |  Generate custodial wallet
[**pubkeysPubkeyPost**](KeyManagementApi.md#pubkeysPubkeyPost) | **POST** /pubkeys/{pubkey} |  Add pubkey for current user
[**usersUserIdPubkeysGet**](KeyManagementApi.md#usersUserIdPubkeysGet) | **GET** /users/{user_id}/pubkeys |  Retrieve pubkeys by user_id
[**usersUserIdPubkeysPubkeyPost**](KeyManagementApi.md#usersUserIdPubkeysPubkeyPost) | **POST** /users/{user_id}/pubkeys/{pubkey} |  Add pubkey for user by user_id



### pubkeysGet

> [String] pubkeysGet()

 Retrieve pubkeys

Retrieves pubkeys owned by currently authenticated user. This call expects empty body.

> Example

```javascript
import YatJs from 'yat';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.KeyManagementApi();
apiInstance.pubkeysGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters

This endpoint does not need any parameter.

#### Return type

**[String]**


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### pubkeysPost

> String pubkeysPost()

 Generate custodial wallet

Generates custodial wallet with pubkey for currently authenticated user. This call expects empty body.

> Example

```javascript
import YatJs from 'yat';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.KeyManagementApi();
apiInstance.pubkeysPost().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters

This endpoint does not need any parameter.

#### Return type

**String**


#### Authorization

[JWT](../sdk_nodejs_index#JWT), [apiKey](../sdk_nodejs_index#apiKey)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### pubkeysPubkeyPost

> pubkeysPubkeyPost(pubkey)

 Add pubkey for current user

This call expects empty body

> Example

```javascript
import YatJs from 'yat';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.KeyManagementApi();
let pubkey = "pubkey_example"; // String | 
apiInstance.pubkeysPubkeyPost(pubkey).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pubkey** | **String**|  | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT), [apiKey](../sdk_nodejs_index#apiKey)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### usersUserIdPubkeysGet

> [String] usersUserIdPubkeysGet(userId)

 Retrieve pubkeys by user_id

NOTE: user should have scope &#x60;UserPubkeyList&#x60;

> Example

```javascript
import YatJs from 'yat';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.KeyManagementApi();
let userId = null; // String | 
apiInstance.usersUserIdPubkeysGet(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**userId** | [**String**](../sdk_nodejs_index#)
|  | 

#### Return type

**[String]**


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### usersUserIdPubkeysPubkeyPost

> usersUserIdPubkeysPubkeyPost(userId, pubkey)

 Add pubkey for user by user_id

NOTE: user should have scope &#x60;UserPubkeyWrite&#x60; This call expects empty body

> Example

```javascript
import YatJs from 'yat';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.KeyManagementApi();
let userId = "userId_example"; // String | Public key to add
let pubkey = null; // String | `user_id` to grant public key ownership to
apiInstance.usersUserIdPubkeysPubkeyPost(userId, pubkey).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**userId** | **String**| Public key to add | 
**pubkey** | [**String**](../sdk_nodejs_index#)
| &#x60;user_id&#x60; to grant public key ownership to | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT), [apiKey](../sdk_nodejs_index#apiKey)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

