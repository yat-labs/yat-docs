---
id: usersapi
title: UsersApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callDelete**](UsersApi.md#calldelete) | **DELETE** /users/{id} | Delete a user
[**confirm2FA**](UsersApi.md#confirm2fa) | **POST** /account/2fa/confirm | Confirm two factor authentication update
[**createUser**](UsersApi.md#createuser) | **POST** /users | Register a User
[**getAccount**](UsersApi.md#getaccount) | **GET** /account | Current user account
[**getAllUsers**](UsersApi.md#getallusers) | **GET** /users | List users
[**update**](UsersApi.md#update) | **PATCH** /account | Update the currently logged in user
[**update2FA**](UsersApi.md#update2fa) | **POST** /account/2fa | Update two factor authentication
[**updateUser**](UsersApi.md#updateuser) | **PATCH** /users/{id} | Update a user as an admin



### callDelete

```js
/**
* @returns DisplayUser
**/
async function callDelete(id: String)
```

Delete a user

#### Notes:
NOTE: user should have scope `UserDeleteSelf` if deleting themselves, `UserDelete` is needed for other users

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let id = null; // String 
// populate id...

try {
  let res = await api.users().callDelete(id);
  // res is of type DisplayUser
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

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
  let res = await api.users().confirm2FA(body);
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


### createUser

```js
/**
* @returns CurrentUser
**/
async function createUser(body: RegisterUserParameters)
```

Register a User

#### Notes:
Create a user and a custodial wallet

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


let body = new YatJs.RegisterUserParameters(); // RegisterUserParameters 
// populate body...

try {
  let res = await api.users().createUser(body);
  // res is of type CurrentUser
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**RegisterUserParameters**](../sdk_nodejs_index#registeruserparameters)
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
* @returns CurrentUser
**/
async function getAccount()
```

Current user account

#### Notes:
Displays the currently logged in user account details.

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

try {
  let res = await api.users().getAccount();
  // res is of type CurrentUser
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters

This endpoint does not have any parameters.

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
* @returns ListOfDisplayUser
**/
async function getAllUsers(opts)
```

List users

#### Notes:
NOTE: user should have scope `UserList`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let opts = {
  'dir': "dir_example", // String | 
  'limit': 56, // Number | 
  'page': 56, // Number | 
  'sort': "sort_example" // String | 
};
try {
  let res = await api.users().getAllUsers(opts);
  // res is of type ListOfDisplayUser
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**dir** | **String**|  | [optional] 
**limit** | **Number**|  | [optional] 
**page** | **Number**|  | [optional] 
**sort** | **String**|  | [optional] 

#### Return type


[**ListOfDisplayUser**](../sdk_nodejs_index#ListOfDisplayUser)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### update

```js
/**
* @returns CurrentUser
**/
async function update(body: UpdateUserParameters)
```

Update the currently logged in user

#### Notes:
NOTE: user should have scope `UserWriteSelf`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


await api.login("your@email.com", "your_password");

let body = new YatJs.UpdateUserParameters(); // UpdateUserParameters 
// populate body...

try {
  let res = await api.users().update(body);
  // res is of type CurrentUser
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**UpdateUserParameters**](../sdk_nodejs_index#updateuserparameters)
|  | 

#### Return type


[**CurrentUser**](../sdk_nodejs_index#CurrentUser)


#### Authorization

[JWT](../sdk_nodejs_index#JWT), [two_factor](../sdk_nodejs_index#two_factor)

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
  let res = await api.users().update2FA(body);
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


### updateUser

```js
/**
* @returns DisplayUser
**/
async function updateUser(id: String, body: AdminUpdateUserParameters)
```

Update a user as an admin

#### Notes:
NOTE: user should have scope `UserWrite`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


await api.login("your@email.com", "your_password");

let id = null; // String 
// populate id...

let body = new YatJs.AdminUpdateUserParameters(); // AdminUpdateUserParameters 
// populate body...

try {
  let res = await api.users().updateUser(id, body);
  // res is of type DisplayUser
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | [**String**](../sdk_nodejs_index#)
|  | 
**body** | [**AdminUpdateUserParameters**](../sdk_nodejs_index#adminupdateuserparameters)
|  | 

#### Return type


[**DisplayUser**](../sdk_nodejs_index#DisplayUser)


#### Authorization

[JWT](../sdk_nodejs_index#JWT), [two_factor](../sdk_nodejs_index#two_factor)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

