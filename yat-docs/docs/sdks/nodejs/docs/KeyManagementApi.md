---
id: keymanagementapi
title: KeyManagementApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPubkey**](KeyManagementApi.md#addPubkey) | **POST** /pubkeys/{pubkey} | Add pubkey for current user
[**addPubkeyForUser**](KeyManagementApi.md#addPubkeyForUser) | **POST** /users/{user_id}/pubkeys/{pubkey} | Add pubkey for user by user_id
[**createWallet**](KeyManagementApi.md#createWallet) | **POST** /pubkeys | Generate custodial wallet
[**getPubkeys**](KeyManagementApi.md#getPubkeys) | **GET** /pubkeys | Retrieve pubkeys
[**getPubkeysForUser**](KeyManagementApi.md#getPubkeysForUser) | **GET** /users/{user_id}/pubkeys | Retrieve pubkeys by user_id



### addPubkey

```js
/**
*  @returns String 
**/
function addPubkey(pubkey)
```

Add pubkey for current user

#### Notes:
This call expects empty body

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
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
apiInstance.addPubkey(pubkey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pubkey** | **String**|  | 

#### Return type

**String**


#### Authorization

[JWT](../sdk_nodejs_index#JWT), [apiKey](../sdk_nodejs_index#apiKey)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### addPubkeyForUser

```js
/**
*  @returns String 
**/
function addPubkeyForUser(userId, pubkey)
```

Add pubkey for user by user_id

#### Notes:
NOTE: user should have scope &#x60;UserPubkeyWrite&#x60; This call expects empty body

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
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
apiInstance.addPubkeyForUser(userId, pubkey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
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

**String**


#### Authorization

[JWT](../sdk_nodejs_index#JWT), [apiKey](../sdk_nodejs_index#apiKey)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### createWallet

```js
/**
*  @returns String 
**/
function createWallet()
```

Generate custodial wallet

#### Notes:
Generates custodial wallet with pubkey for currently authenticated user. This call expects empty body.

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
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
apiInstance.createWallet().then((data) => {
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


### getPubkeys

```js
/**
*  @returns [String] 
**/
function getPubkeys()
```

Retrieve pubkeys

#### Notes:
Retrieves pubkeys owned by currently authenticated user. This call expects empty body.

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.KeyManagementApi();
apiInstance.getPubkeys().then((data) => {
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


### getPubkeysForUser

```js
/**
*  @returns [String] 
**/
function getPubkeysForUser(userId)
```

Retrieve pubkeys by user_id

#### Notes:
NOTE: user should have scope &#x60;UserPubkeyList&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.KeyManagementApi();
let userId = null; // String | 
apiInstance.getPubkeysForUser(userId).then((data) => {
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

