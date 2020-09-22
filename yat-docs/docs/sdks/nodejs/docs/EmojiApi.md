---
id: emojiapi
title: EmojiApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emojiList**](EmojiApi.md#emojilist) | **GET** /emoji | List of supported emoji characters
[**random**](EmojiApi.md#random) | **GET** /emoji_id/random | Return random Emoji



### emojiList

```js
/**
* @returns [String]
**/
async function emojiList()
```

List of supported emoji characters

#### Notes:
Result is an array of emojis `[\"🍗\",\"🌈\"]`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


try {
  let res = await api.emoji().emojiList();
  // res is of type [String]
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters

This endpoint does not have any parameters.

#### Return type

**[String]**


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### random

```js
/**
* @returns RandomResult
**/
async function random()
```

Return random Emoji

#### Notes:
Returns price, availability and other information for random emoji

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();


try {
  let res = await api.emoji().random();
  // res is of type RandomResult
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters

This endpoint does not have any parameters.

#### Return type


[**RandomResult**](../sdk_nodejs_index#RandomResult)


#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

