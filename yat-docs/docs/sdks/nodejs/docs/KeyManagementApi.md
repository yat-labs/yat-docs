---
id: keymanagementapi
title: KeyManagementApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPubkey**](KeyManagementApi.md#addpubkey) | **POST** /pubkeys/{pubkey} | Add pubkey for current user
[**addPubkeyForUser**](KeyManagementApi.md#addpubkeyforuser) | **POST** /users/{user_id}/pubkeys/{pubkey} | Add pubkey for user by user_id
[**createWallet**](KeyManagementApi.md#createwallet) | **POST** /pubkeys | Generate custodial wallet
[**getPubkeys**](KeyManagementApi.md#getpubkeys) | **GET** /pubkeys | Retrieve pubkeys
[**getPubkeysForUser**](KeyManagementApi.md#getpubkeysforuser) | **GET** /users/{user_id}/pubkeys | Retrieve pubkeys by user_id



### addPubkey

```js
/**
* @returns String
**/
async function addPubkey(pubkey: String)
```

Add pubkey for current user

#### Notes:
This call expects empty body

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


await api.login("your@email.com", "your_password");

let pubkey = "pubkey_example"; // String 
// populate pubkey...

try {
  let res = await api.keyManagement().addPubkey(pubkey);
  // res is of type String
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pubkey** | **String**|  | 

#### Return type

**String**


#### Authorization

[JWT](../sdk_nodejs_index#JWT), [Two factor authentication](../sdk_nodejs_index#Two factor authentication)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### addPubkeyForUser

```js
/**
* @returns String
**/
async function addPubkeyForUser(userId: String, pubkey: String)
```

Add pubkey for user by user_id

#### Notes:
NOTE: user should have scope `UserPubkeyWrite` This call expects empty body

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


await api.login("your@email.com", "your_password");

let userId = "userId_example"; // String | Public key to add
// populate userId...

let pubkey = null; // String | `user_id` to grant public key ownership to
// populate pubkey...

try {
  let res = await api.keyManagement().addPubkeyForUser(userId, pubkey);
  // res is of type String
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

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

[JWT](../sdk_nodejs_index#JWT), [Two factor authentication](../sdk_nodejs_index#Two factor authentication)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### createWallet

```js
/**
* @returns String
**/
async function createWallet()
```

Generate custodial wallet

#### Notes:
Generates custodial wallet with pubkey for currently authenticated user. This call expects empty body.

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


await api.login("your@email.com", "your_password");

try {
  let res = await api.keyManagement().createWallet();
  // res is of type String
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters

This endpoint does not have any parameters.

#### Return type

**String**


#### Authorization

[JWT](../sdk_nodejs_index#JWT), [Two factor authentication](../sdk_nodejs_index#Two factor authentication)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### getPubkeys

```js
/**
* @returns [String]
**/
async function getPubkeys()
```

Retrieve pubkeys

#### Notes:
Retrieves pubkeys owned by currently authenticated user. This call expects empty body.

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

try {
  let res = await api.keyManagement().getPubkeys();
  // res is of type [String]
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters

This endpoint does not have any parameters.

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
* @returns [String]
**/
async function getPubkeysForUser(userId: String)
```

Retrieve pubkeys by user_id

#### Notes:
NOTE: user should have scope `UserPubkeyList`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let userId = null; // String 
// populate userId...

try {
  let res = await api.keyManagement().getPubkeysForUser(userId);
  // res is of type [String]
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

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

