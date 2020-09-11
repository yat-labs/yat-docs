---
id: userinterestapi
title: UserInterestApi
---

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userInterestsEidDelete**](UserInterestApi.md#userInterestsEidDelete) | **DELETE** /user_interests/{eid} |  Destroys the user interest preventing this eid&#39;s notification emails from being sent for this user
[**userInterestsEidGet**](UserInterestApi.md#userInterestsEidGet) | **GET** /user_interests/{eid} |  Given an EmojiId returns information about the user interest if a record exists for this user
[**userInterestsGet**](UserInterestApi.md#userInterestsGet) | **GET** /user_interests |  Returns a paginated list of user interest records associated with the user
[**userInterestsPost**](UserInterestApi.md#userInterestsPost) | **POST** /user_interests |  Create new interest in emoji to be notified when available



### userInterestsEidDelete

> userInterestsEidDelete(eid)

 Destroys the user interest preventing this eid&#39;s notification emails from being sent for this user

User requires scope &#x60;UserInterestDelete&#x60;.

> Example

```javascript
import YatJs from 'yat';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UserInterestApi();
let eid = "eid_example"; // String | 
apiInstance.userInterestsEidDelete(eid).then(() => {
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


### userInterestsEidGet

> userInterestsEidGet(eid)

 Given an EmojiId returns information about the user interest if a record exists for this user

User requires scope &#x60;UserInterestRead&#x60;.

> Example

```javascript
import YatJs from 'yat';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UserInterestApi();
let eid = "eid_example"; // String | 
apiInstance.userInterestsEidGet(eid).then(() => {
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


### userInterestsGet

> userInterestsGet()

 Returns a paginated list of user interest records associated with the user

User requires scope &#x60;UserInterestRead&#x60;.

> Example

```javascript
import YatJs from 'yat';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UserInterestApi();
apiInstance.userInterestsGet().then(() => {
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


### userInterestsPost

> userInterestsPost(body)

 Create new interest in emoji to be notified when available

User requires scope &#x60;UserInterestWrite&#x60;.

> Example

```javascript
import YatJs from 'yat';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.UserInterestApi();
let body = new YatJs.NewUserInterestParameters(); // NewUserInterestParameters | 
apiInstance.userInterestsPost(body).then(() => {
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

