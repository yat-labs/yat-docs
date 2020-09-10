---
id: usersapi
title: UsersApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountGet**](UsersApi.md#accountGet) | **GET** /account |  Current user account
[**accountPatch**](UsersApi.md#accountPatch) | **PATCH** /account |  Update the currently logged in user
[**usersGet**](UsersApi.md#usersGet) | **GET** /users |  List users
[**usersIdDelete**](UsersApi.md#usersIdDelete) | **DELETE** /users/{id} |  Delete a user
[**usersIdPatch**](UsersApi.md#usersIdPatch) | **PATCH** /users/{id} |  Update a user as an admin
[**usersPost**](UsersApi.md#usersPost) | **POST** /users |  Register a User



### accountGet

> accountGet()

 Current user account

Displays the currently logged in user account details.

> Example

```javascript
import YatJs from 'openapi-js-client';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UsersApi();
apiInstance.accountGet().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters

This endpoint does not need any parameter.

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### accountPatch

> accountPatch(body)

 Update the currently logged in user

> Example

```javascript
import YatJs from 'openapi-js-client';
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

let apiInstance = new YatJs.UsersApi();
let body = new YatJs.UpdateUserParameters(); // UpdateUserParameters | 
apiInstance.accountPatch(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**UpdateUserParameters**](../sdk_nodejs_index#UpdateUserParameters)
|  | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT), [apiKey](../sdk_nodejs_index#apiKey)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### usersGet

> usersGet()

 List users

This is an admin endpoint

> Example

```javascript
import YatJs from 'openapi-js-client';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UsersApi();
apiInstance.usersGet().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters

This endpoint does not need any parameter.

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### usersIdDelete

> usersIdDelete(id)

 Delete a user

> Example

```javascript
import YatJs from 'openapi-js-client';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UsersApi();
let id = null; // String | 
apiInstance.usersIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | [**String**](../sdk_nodejs_index#)
|  | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### usersIdPatch

> usersIdPatch(id, body)

 Update a user as an admin

Note: Requires UserWrite Scope

> Example

```javascript
import YatJs from 'openapi-js-client';
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

let apiInstance = new YatJs.UsersApi();
let id = null; // String | 
let body = new YatJs.AdminUpdateUserParameters(); // AdminUpdateUserParameters | 
apiInstance.usersIdPatch(id, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | [**String**](../sdk_nodejs_index#)
|  | 
**body** | [**AdminUpdateUserParameters**](../sdk_nodejs_index#AdminUpdateUserParameters)
|  | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT), [apiKey](../sdk_nodejs_index#apiKey)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### usersPost

> usersPost(body)

 Register a User

Create a user and a custodial wallet

> Example

```javascript
import YatJs from 'openapi-js-client';

let apiInstance = new YatJs.UsersApi();
let body = new YatJs.RegisterUserParameters(); // RegisterUserParameters | 
apiInstance.usersPost(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**RegisterUserParameters**](../sdk_nodejs_index#RegisterUserParameters)
|  | 

#### Return type

null (empty response body)

#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

