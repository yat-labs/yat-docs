---
id: userinterestapi
title: UserInterestApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserInterest**](UserInterestApi.md#deleteUserInterest) | **DELETE** /user_interests/{eid} | Destroys the user interest preventing this eid&#39;s notification emails from being sent for this user
[**getInterestedUsers**](UserInterestApi.md#getInterestedUsers) | **GET** /user_interests | Returns a paginated list of user interest records associated with the user
[**getUserInterestForYat**](UserInterestApi.md#getUserInterestForYat) | **GET** /user_interests/{eid} | Given an EmojiId returns information about the user interest if a record exists for this user
[**registerInterest**](UserInterestApi.md#registerInterest) | **POST** /user_interests | Create new interest in emoji to be notified when available



### deleteUserInterest

```js
/**
* 
**/
function deleteUserInterest(eid)
```

Destroys the user interest preventing this eid&#39;s notification emails from being sent for this user

#### Notes:
NOTE: user should have scope &#x60;UserInterestDelete&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UserInterestApi();
let eid = "eid_example"; // String | 
apiInstance.deleteUserInterest(eid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**eid** | **String**|  | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### getInterestedUsers

```js
/**
* 
**/
function getInterestedUsers()
```

Returns a paginated list of user interest records associated with the user

#### Notes:
NOTE: user should have scope &#x60;UserInterestRead&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UserInterestApi();
apiInstance.getInterestedUsers().then(() => {
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


### getUserInterestForYat

```js
/**
* 
**/
function getUserInterestForYat(eid)
```

Given an EmojiId returns information about the user interest if a record exists for this user

#### Notes:
NOTE: user should have scope &#x60;UserInterestRead&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UserInterestApi();
let eid = "eid_example"; // String | 
apiInstance.getUserInterestForYat(eid).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**eid** | **String**|  | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### registerInterest

```js
/**
* 
**/
function registerInterest(body)
```

Create new interest in emoji to be notified when available

#### Notes:
NOTE: user should have scope &#x60;UserInterestWrite&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UserInterestApi();
let body = new YatJs.NewUserInterestParameters(); // NewUserInterestParameters | 
apiInstance.registerInterest(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**NewUserInterestParameters**](../sdk_nodejs_index#NewUserInterestParameters)
|  | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

