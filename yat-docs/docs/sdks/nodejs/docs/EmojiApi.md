---
id: emojiapi
title: EmojiApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edit**](EmojiApi.md#edit) | **PATCH** /emoji/{eid} | Edit EmojiId
[**list**](EmojiApi.md#list) | **GET** /emoji | List emojis
[**lookup**](EmojiApi.md#lookup) | **GET** /emoji/{eid} | Lookup EmojiId
[**search**](EmojiApi.md#search) | **GET** /emoji/search | Search for EmojiID



### edit

```js
/**
*  @returns Object 
**/
function edit(eid, body)
```

Edit EmojiId

#### Notes:
Add and remove records in EmojiId, update merkle_root and signature too. Access notes: user expected to own the emoji&#39;s pubkey, have Admin role or be power member of organization if pubkey belongs to organization, otherwise operation will fail.

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

let apiInstance = new YatJs.EmojiApi();
let eid = "eid_example"; // String | 
let body = new YatJs.EditRequest(); // EditRequest | 
apiInstance.edit(eid, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**eid** | **String**|  | 
**body** | [**EditRequest**](../sdk_nodejs_index#EditRequest)
|  | 

#### Return type

**Object**


#### Authorization

[JWT](../sdk_nodejs_index#JWT), [apiKey](../sdk_nodejs_index#apiKey)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### list

```js
/**
*  @returns [String] 
**/
function list(opts)
```

List emojis

#### Notes:
If no parameters provided will return all emojis of current user. When &#x60;user_id&#x60; or &#x60;organization_id&#x60; specified will return emojis owned by specified user or organization, requires Admin or organization power user access. Result is array of emojis &#x60;[\&quot;🍗\&quot;,\&quot;🌈\&quot;]&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.EmojiApi();
let opts = {
  'organizationId': null, // String | Lookup emojis owned by `organization_id`,  requires organization power user role
  'userId': null // String | Lookup emojis owned by `user_id`,  requires Admin role
};
apiInstance.list(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**organizationId** | [**String**](../sdk_nodejs_index#)
| Lookup emojis owned by &#x60;organization_id&#x60;,  requires organization power user role | [optional] 
**userId** | [**String**](../sdk_nodejs_index#)
| Lookup emojis owned by &#x60;user_id&#x60;,  requires Admin role | [optional] 

#### Return type

**[String]**


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### lookup

```js
/**
*  @returns LookupResponse 
**/
function lookup(eid, opts)
```

Lookup EmojiId

#### Notes:
Will filter and return data from supplied tags, If tags filter is not supplied will return all tags attached. It will also try to get views for the past month, if not available will return -1. This method is called when a user wants to look up an EID&#39;s records such as a crypto address or a redirect

#### Example

```javascript
import YatJs from 'emoji_id_api_server';

let apiInstance = new YatJs.EmojiApi();
let eid = "eid_example"; // String | 
let opts = {
  'tags': "tags_example" // String | Comma-separated list of tags to display, skip it to display all, e.g. `?tags=0x0001,0x1001`
};
apiInstance.lookup(eid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**eid** | **String**|  | 
**tags** | **String**| Comma-separated list of tags to display, skip it to display all, e.g. &#x60;?tags&#x3D;0x0001,0x1001&#x60; | [optional] 

#### Return type


[**LookupResponse**](../sdk_nodejs_index#LookupResponse)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### search

```js
/**
*  @returns SearchResult 
**/
function search(eid, opts)
```

Search for EmojiID

#### Notes:
Returns price, availability and other information on emoji and its alternates (similar EmojiIDs that are currently available)

#### Example

```javascript
import YatJs from 'emoji_id_api_server';

let apiInstance = new YatJs.EmojiApi();
let eid = "eid_example"; // String | Emoji ID in percent url-encoded form
let opts = {
  'redemptionCode': "redemptionCode_example" // String | Redemption code
};
apiInstance.search(eid, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**eid** | **String**| Emoji ID in percent url-encoded form | 
**redemptionCode** | **String**| Redemption code | [optional] 

#### Return type


[**SearchResult**](../sdk_nodejs_index#SearchResult)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

