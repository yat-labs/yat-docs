---
id: emojiidapi
title: EmojiIDApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edit**](EmojiIDApi.md#edit) | **PATCH** /emoji_id/{emoji_id} | Edit EmojiId
[**list**](EmojiIDApi.md#list) | **GET** /emoji_id | List user&#39;s emoji Ids
[**lookup**](EmojiIDApi.md#lookup) | **GET** /emoji_id/{emoji_id} | Lookup EmojiId
[**search**](EmojiIDApi.md#search) | **GET** /emoji_id/search | Search for EmojiID



### edit

```js
/**
* @returns Object
**/
async function edit(emojiId: String, body: EditRequest)
```

Edit EmojiId

#### Notes:
Add and remove records in EmojiId, update merkle_root and signature too. Access notes: user expected to own the emoji's pubkey, have Admin role or be power member of organization if pubkey belongs to organization, otherwise operation will fail.

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


await api.login("your@email.com", "your_password");

let emojiId = "emojiId_example"; // String 
// populate emojiId...

let body = new YatJs.EditRequest(); // EditRequest 
// populate body...

try {
  let res = await api.emojiID().edit(emojiId, body);
  // res is of type Object
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**emojiId** | **String**|  | 
**body** | [**EditRequest**](../sdk_nodejs_index#editrequest)
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
* @returns [String]
**/
async function list(opts)
```

List user&#39;s emoji Ids

#### Notes:
If no parameters provided will return all emojis of current user. When `user_id` or `organization_id` specified will return emojis owned by specified user or organization, requires Admin or organization power user access. Result is an array of emoji ids in display format (i.e. with all skin tone modifiers applied) `[\"🤟🏾🍗👽👻\",\"🌈👍🏿💯\"]`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let opts = {
  'organizationId': null, // String | Lookup emojis owned by `organization_id`,  requires organization power user role
  'userId': null // String | Lookup emojis owned by `user_id`,  requires Admin role
};
try {
  let res = await api.emojiID().list(opts);
  // res is of type [String]
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

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
* @returns LookupResponse
**/
async function lookup(emojiId: String, opts)
```

Lookup EmojiId

#### Notes:
Will filter and return data from supplied tags, If tags filter is not supplied will return all tags attached. It will also try to get views for the past month, if not available will return -1. This method is called when a user wants to look up an Emoji ID's records such as a crypto address or a redirect

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


let emojiId = "emojiId_example"; // String 
// populate emojiId...

let opts = {
  'tags': "tags_example" // String | Comma-separated list of tags to display, skip it to display all, e.g. `?tags=0x0001,0x1001`
};
try {
  let res = await api.emojiID().lookup(emojiId, opts);
  // res is of type LookupResponse
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**emojiId** | **String**|  | 
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
* @returns SearchResult
**/
async function search(emojiId: String, opts)
```

Search for EmojiID

#### Notes:
Returns price, availability and other information on emoji and its alternates (similar EmojiIDs that are currently available)

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


let emojiId = "emojiId_example"; // String | Emoji ID in percent url-encoded form
// populate emojiId...

let opts = {
  'redemptionCode': "redemptionCode_example" // String | Redemption code
};
try {
  let res = await api.emojiID().search(emojiId, opts);
  // res is of type SearchResult
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**emojiId** | **String**| Emoji ID in percent url-encoded form | 
**redemptionCode** | **String**| Redemption code | [optional] 

#### Return type


[**SearchResult**](../sdk_nodejs_index#SearchResult)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

