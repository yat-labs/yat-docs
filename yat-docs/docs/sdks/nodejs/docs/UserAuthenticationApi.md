---
id: userauthenticationapi
title: UserAuthenticationApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](UserAuthenticationApi.md#login) | **POST** /auth/token | Login via password
[**magicLinkLogin**](UserAuthenticationApi.md#magiclinklogin) | **POST** /auth/magic_link | Generate magic link for login
[**refreshToken**](UserAuthenticationApi.md#refreshtoken) | **POST** /auth/token/refresh | Refresh access token
[**twoFactorAuthentication**](UserAuthenticationApi.md#twofactorauthentication) | **POST** /auth/2fa | Two factor authentication



### login

```js
/**
* @returns TokenResponse
**/
async function login(body: LoginRequest)
```

Login via password

#### Notes:
Login via username/password. Will return access and refresh tokens. NOTE: when `requires_2fa` is not empty in response, provided \"refresh_token\" should be used to confirm 2FA code via `POST /auth/2fa`.

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


let body = new YatJs.LoginRequest(); // LoginRequest 
// populate body...

try {
  let res = await api.userAuthentication().login(body);
  // res is of type TokenResponse
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**LoginRequest**](../sdk_nodejs_index#loginrequest)
|  | 

#### Return type


[**TokenResponse**](../sdk_nodejs_index#TokenResponse)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### magicLinkLogin

```js
/**
* @returns SuccessResponse
**/
async function magicLinkLogin(body: MagicLinkLoginRequest)
```

Generate magic link for login

#### Notes:
Will generate and send magic link to provided user's email. Assuming the email address corresponds to a valid user

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


let body = new YatJs.MagicLinkLoginRequest(); // MagicLinkLoginRequest 
// populate body...

try {
  let res = await api.userAuthentication().magicLinkLogin(body);
  // res is of type SuccessResponse
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**MagicLinkLoginRequest**](../sdk_nodejs_index#magiclinkloginrequest)
|  | 

#### Return type


[**SuccessResponse**](../sdk_nodejs_index#SuccessResponse)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### refreshToken

```js
/**
* @returns TokenResponse
**/
async function refreshToken(body: RefreshRequest)
```

Refresh access token

#### Notes:
Will return updated access and refresh tokens. NOTE: when `requires_2fa` is not empty in response, provided \"refresh_token\" should be used to confirm 2FA code via `POST /2fa`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


let body = new YatJs.RefreshRequest(); // RefreshRequest 
// populate body...

try {
  let res = await api.userAuthentication().refreshToken(body);
  // res is of type TokenResponse
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**RefreshRequest**](../sdk_nodejs_index#refreshrequest)
|  | 

#### Return type


[**TokenResponse**](../sdk_nodejs_index#TokenResponse)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### twoFactorAuthentication

```js
/**
* @returns TokenResponse
**/
async function twoFactorAuthentication(body: Confirm2Fa)
```

Two factor authentication

#### Notes:
Complete login flow when user requires 2FA. `refresh_token` obtained from a call to `/token` or `/token/refresh` should be used to complete authentication. **Note:** 2FA token has expiration timeout, which is when expired sensitive operations would require authentication via 2fa once again.

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


let body = new YatJs.Confirm2Fa(); // Confirm2Fa 
// populate body...

try {
  let res = await api.userAuthentication().twoFactorAuthentication(body);
  // res is of type TokenResponse
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**Confirm2Fa**](../sdk_nodejs_index#confirm2fa)
|  | 

#### Return type


[**TokenResponse**](../sdk_nodejs_index#TokenResponse)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

