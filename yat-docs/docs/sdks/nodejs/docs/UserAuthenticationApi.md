---
id: userauthenticationapi
title: UserAuthenticationApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](UserAuthenticationApi.md#login) | **POST** /auth/token | Login via password
[**magicLinkLogin**](UserAuthenticationApi.md#magicLinkLogin) | **POST** /auth/magic_link | Generate magic link for login
[**refreshToken**](UserAuthenticationApi.md#refreshToken) | **POST** /auth/token/refresh | Refreshes access token
[**twoFactorAuthentication**](UserAuthenticationApi.md#twoFactorAuthentication) | **POST** /auth/2fa | Two factor authentication



### login

```js
/**
*  @returns TokenResponse 
**/
function login(body)
```

Login via password

#### Notes:
Login via username/password. Will return access and refresh tokens. NOTE: when &#x60;requires_2fa&#x60; is not empty in response, provided \&quot;refresh_token\&quot; should be used to confirm 2FA code via &#x60;POST /auth/2fa&#x60;.

#### Example

```javascript
import YatJs from 'emoji_id_api_server';

let apiInstance = new YatJs.UserAuthenticationApi();
let body = new YatJs.LoginRequest(); // LoginRequest | 
apiInstance.login(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**LoginRequest**](../sdk_nodejs_index#LoginRequest)
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
*  @returns SuccessResponse 
**/
function magicLinkLogin(body)
```

Generate magic link for login

#### Notes:
Will generate and send magic link to provided user&#39;s email. Assuming the email address corresponds to a valid user

#### Example

```javascript
import YatJs from 'emoji_id_api_server';

let apiInstance = new YatJs.UserAuthenticationApi();
let body = new YatJs.MagicLinkLoginRequest(); // MagicLinkLoginRequest | 
apiInstance.magicLinkLogin(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**MagicLinkLoginRequest**](../sdk_nodejs_index#MagicLinkLoginRequest)
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
*  @returns TokenResponse 
**/
function refreshToken(body)
```

Refreshes access token

#### Notes:
Will return updated access and refresh tokens. NOTE: when &#x60;requires_2fa&#x60; is not empty in response, provided \&quot;refresh_token\&quot; should be used to confirm 2FA code via &#x60;POST /2fa&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';

let apiInstance = new YatJs.UserAuthenticationApi();
let body = new YatJs.RefreshRequest(); // RefreshRequest | 
apiInstance.refreshToken(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**RefreshRequest**](../sdk_nodejs_index#RefreshRequest)
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
*  @returns TokenResponse 
**/
function twoFactorAuthentication(body)
```

Two factor authentication

#### Notes:
Complete login flow when user requires 2FA. &#x60;refresh_token&#x60; obtained from a call to &#x60;/token&#x60; or &#x60;/token/refresh&#x60; should be used to complete authentication. **Note:** 2FA token has expiration timeout, which is when expired sensitive operations would require authentication via 2fa once again.

#### Example

```javascript
import YatJs from 'emoji_id_api_server';

let apiInstance = new YatJs.UserAuthenticationApi();
let body = new YatJs.Confirm2Fa(); // Confirm2Fa | 
apiInstance.twoFactorAuthentication(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**Confirm2Fa**](../sdk_nodejs_index#Confirm2Fa)
|  | 

#### Return type


[**TokenResponse**](../sdk_nodejs_index#TokenResponse)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

