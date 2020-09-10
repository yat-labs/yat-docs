---
id: userauthenticationapi
title: UserAuthenticationApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth2faPost**](UserAuthenticationApi.md#auth2faPost) | **POST** /auth/2fa |  Two factor authentication
[**authMagicLinkPost**](UserAuthenticationApi.md#authMagicLinkPost) | **POST** /auth/magic_link |  Generate magic link for login
[**authTokenPost**](UserAuthenticationApi.md#authTokenPost) | **POST** /auth/token |  Login via password
[**authTokenRefreshPost**](UserAuthenticationApi.md#authTokenRefreshPost) | **POST** /auth/token/refresh |  Refreshes access token



### auth2faPost

> TokenResponse auth2faPost(body)

 Two factor authentication

Complete login flow when user requires 2FA. &#x60;refresh_token&#x60; obtained from a call to &#x60;/token&#x60; or &#x60;/token/refresh&#x60; should be used to complete authentication. **Note:** 2FA token has expiration timeout, which is when expired sensitive operations would require authentication via 2fa once again.

> Example

```javascript
import YatJs from 'openapi-js-client';

let apiInstance = new YatJs.UserAuthenticationApi();
let body = new YatJs.Confirm2Fa(); // Confirm2Fa | 
apiInstance.auth2faPost(body).then((data) => {
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


### authMagicLinkPost

> MagicLinkLoginResponse authMagicLinkPost(body)

 Generate magic link for login

Will generate and send magic link to provided user&#39;s email. Assuming the email address corresponds to a valid user

> Example

```javascript
import YatJs from 'openapi-js-client';

let apiInstance = new YatJs.UserAuthenticationApi();
let body = new YatJs.MagicLinkLoginRequest(); // MagicLinkLoginRequest | 
apiInstance.authMagicLinkPost(body).then((data) => {
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


[**MagicLinkLoginResponse**](../sdk_nodejs_index#MagicLinkLoginResponse)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### authTokenPost

> TokenResponse authTokenPost(body)

 Login via password

Login via username/password. Will return access and refresh tokens. NOTE: when &#x60;requires_2fa&#x60; is not empty in response, provided \&quot;refresh_token\&quot; should be used to confirm 2FA code via &#x60;POST /auth/2fa&#x60;.

> Example

```javascript
import YatJs from 'openapi-js-client';

let apiInstance = new YatJs.UserAuthenticationApi();
let body = new YatJs.LoginRequest(); // LoginRequest | 
apiInstance.authTokenPost(body).then((data) => {
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


### authTokenRefreshPost

> TokenResponse authTokenRefreshPost(body)

 Refreshes access token

Will return updated access and refresh tokens. NOTE: when &#x60;requires_2fa&#x60; is not empty in response, provided \&quot;refresh_token\&quot; should be used to confirm 2FA code via &#x60;POST /2fa&#x60;

> Example

```javascript
import YatJs from 'openapi-js-client';

let apiInstance = new YatJs.UserAuthenticationApi();
let body = new YatJs.RefreshRequest(); // RefreshRequest | 
apiInstance.authTokenRefreshPost(body).then((data) => {
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

