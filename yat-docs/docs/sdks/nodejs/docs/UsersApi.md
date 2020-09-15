---
id: usersapi
title: UsersApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](UsersApi.md#callDelete) | **DELETE** /users/{id} | Delete a user
[**createUser**](UsersApi.md#createUser) | **POST** /users | Register a User
[**getAccount**](UsersApi.md#getAccount) | **GET** /account | Current user account
[**getAllUsers**](UsersApi.md#getAllUsers) | **GET** /users | List users
[**update**](UsersApi.md#update) | **PATCH** /account | Update the currently logged in user
[**updateUser**](UsersApi.md#updateUser) | **PATCH** /users/{id} | Update a user as an admin



### callDelete

```js
/**
*  @returns DisplayUser 
**/
function callDelete(id)
```

Delete a user

#### Notes:
NOTE: user should have scope &#x60;UserDeleteSelf&#x60; if deleting themselves, &#x60;UserDelete&#x60; is needed for other users

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UsersApi();
let id = null; // String | 
apiInstance.callDelete(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
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


[**DisplayUser**](../sdk_nodejs_index#DisplayUser)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### createUser

```js
/**
*  @returns CurrentUser 
**/
function createUser(body)
```

Register a User

#### Notes:
Create a user and a custodial wallet

#### Example

```javascript
import YatJs from 'emoji_id_api_server';

let apiInstance = new YatJs.UsersApi();
let body = new YatJs.RegisterUserParameters(); // RegisterUserParameters | 
apiInstance.createUser(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
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


[**CurrentUser**](../sdk_nodejs_index#CurrentUser)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### getAccount

```js
/**
*  @returns CurrentUser 
**/
function getAccount()
```

Current user account

#### Notes:
Displays the currently logged in user account details.

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UsersApi();
apiInstance.getAccount().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters

This endpoint does not need any parameter.

#### Return type


[**CurrentUser**](../sdk_nodejs_index#CurrentUser)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### getAllUsers

```js
/**
* 
**/
function getAllUsers()
```

List users

#### Notes:
NOTE: user should have scope &#x60;UserList&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UsersApi();
apiInstance.getAllUsers().then(() => {
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


### update

```js
/**
*  @returns CurrentUser 
**/
function update(body)
```

Update the currently logged in user

#### Notes:
NOTE: user should have scope &#x60;UserWriteSelf&#x60;

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

let apiInstance = new YatJs.UsersApi();
let body = new YatJs.UpdateUserParameters(); // UpdateUserParameters | 
apiInstance.update(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
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


[**CurrentUser**](../sdk_nodejs_index#CurrentUser)


#### Authorization

[JWT](../sdk_nodejs_index#JWT), [apiKey](../sdk_nodejs_index#apiKey)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### updateUser

```js
/**
*  @returns DisplayUser 
**/
function updateUser(id, body)
```

Update a user as an admin

#### Notes:
NOTE: user should have scope &#x60;UserWrite&#x60;

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

let apiInstance = new YatJs.UsersApi();
let id = null; // String | 
let body = new YatJs.AdminUpdateUserParameters(); // AdminUpdateUserParameters | 
apiInstance.updateUser(id, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
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


[**DisplayUser**](../sdk_nodejs_index#DisplayUser)


#### Authorization

[JWT](../sdk_nodejs_index#JWT), [apiKey](../sdk_nodejs_index#apiKey)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

