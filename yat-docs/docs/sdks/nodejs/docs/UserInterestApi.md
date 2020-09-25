---
id: userinterestapi
title: UserInterestApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserInterest**](UserInterestApi.md#deleteuserinterest) | **DELETE** /user_interests/{emoji_id} | Destroys the user interest preventing this Emoji ID&#39;s notification emails from being sent for this user
[**getInterestedUsers**](UserInterestApi.md#getinterestedusers) | **GET** /user_interests | Returns a paginated list of user interest records associated with the user
[**getUserInterestForYat**](UserInterestApi.md#getuserinterestforyat) | **GET** /user_interests/{emoji_id} | Given an EmojiId returns information about the user interest if a record exists for this user
[**registerInterest**](UserInterestApi.md#registerinterest) | **POST** /user_interests | Create new interest in emoji to be notified when available



### deleteUserInterest

```js
/**
* @returns UserInterest
**/
async function deleteUserInterest(emojiId: String)
```

Destroys the user interest preventing this Emoji ID&#39;s notification emails from being sent for this user

#### Notes:
NOTE: user should have scope `UserInterestDelete`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let emojiId = "emojiId_example"; // String 
// populate emojiId...

try {
  let res = await api.userInterest().deleteUserInterest(emojiId);
  // res is of type UserInterest
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**emojiId** | **String**|  | 

#### Return type


[**UserInterest**](../sdk_nodejs_index#UserInterest)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### getInterestedUsers

```js
/**
* @returns ListOfUserInterest
**/
async function getInterestedUsers(opts)
```

Returns a paginated list of user interest records associated with the user

#### Notes:
NOTE: user should have scope `UserInterestRead`

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
  let res = await api.userInterest().getInterestedUsers(opts);
  // res is of type ListOfUserInterest
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


[**ListOfUserInterest**](../sdk_nodejs_index#ListOfUserInterest)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### getUserInterestForYat

```js
/**
* @returns UserInterest
**/
async function getUserInterestForYat(emojiId: String)
```

Given an EmojiId returns information about the user interest if a record exists for this user

#### Notes:
NOTE: user should have scope `UserInterestRead`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let emojiId = "emojiId_example"; // String 
// populate emojiId...

try {
  let res = await api.userInterest().getUserInterestForYat(emojiId);
  // res is of type UserInterest
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**emojiId** | **String**|  | 

#### Return type


[**UserInterest**](../sdk_nodejs_index#UserInterest)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### registerInterest

```js
/**
* @returns UserInterest
**/
async function registerInterest(body: NewUserInterestParameters)
```

Create new interest in emoji to be notified when available

#### Notes:
NOTE: user should have scope `UserInterestWrite`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let body = new YatJs.NewUserInterestParameters(); // NewUserInterestParameters 
// populate body...

try {
  let res = await api.userInterest().registerInterest(body);
  // res is of type UserInterest
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**NewUserInterestParameters**](../sdk_nodejs_index#newuserinterestparameters)
|  | 

#### Return type


[**UserInterest**](../sdk_nodejs_index#UserInterest)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

