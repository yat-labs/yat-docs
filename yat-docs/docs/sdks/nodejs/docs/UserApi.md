---
id: userapi
title: UserApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirm2FA**](UserApi.md#confirm2fa) | **POST** /account/2fa/confirm | Confirm two factor authentication update
[**update2FA**](UserApi.md#update2fa) | **POST** /account/2fa | Update two factor authentication



### confirm2FA

```js
/**
* @returns SuccessResponse
**/
async function confirm2FA(body: Confirm2FaUpdate)
```

Confirm two factor authentication update

#### Notes:
Match 2FA code and commit two factor authentication setting for user account

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let body = new YatJs.Confirm2FaUpdate(); // Confirm2FaUpdate 
// populate body...

try {
  let res = await api.user().confirm2FA(body);
  // res is of type SuccessResponse
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**Confirm2FaUpdate**](../sdk_nodejs_index#confirm2faupdate)
|  | 

#### Return type


[**SuccessResponse**](../sdk_nodejs_index#SuccessResponse)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### update2FA

```js
/**
* @returns Update2FAResponse
**/
async function update2FA(body: Update2FAParameters)
```

Update two factor authentication

#### Notes:
Returning String with SVG QR code when enabling 2FA OR empty String in the case of disabling<br/> NOTE: This call does not take effect until code is confirmed via `POST /account/2fa/confirm`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let body = new YatJs.Update2FAParameters(); // Update2FAParameters 
// populate body...

try {
  let res = await api.user().update2FA(body);
  // res is of type Update2FAResponse
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**Update2FAParameters**](../sdk_nodejs_index#update2faparameters)
|  | 

#### Return type


[**Update2FAResponse**](../sdk_nodejs_index#Update2FAResponse)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

