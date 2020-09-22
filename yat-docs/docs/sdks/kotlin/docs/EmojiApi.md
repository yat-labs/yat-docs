---
id: emojiapi
title: EmojiApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emojiList**](EmojiApi.md#emojiList) | **GET** /emoji | List of supported emoji characters[**random**](EmojiApi.md#random) | **GET** /emoji_id/random | Return random Emoji


## emojiList

List of supported emoji characters

#### kotlin.collections.List&lt;kotlin.String&gt; emojiList()


Result is an array of emojis &#x60;[\&quot;🍗\&quot;,\&quot;🌈\&quot;]&#x60;

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.collections.List&lt;kotlin.String&gt;**


### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = EmojiApi()
try {
val result : kotlin.collections.List<kotlin.String> = apiInstance.emojiList()
    println(result)
} catch (e: ClientException) {
println("4xx response calling EmojiApi#emojiList")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling EmojiApi#emojiList")
e.printStackTrace()
}
```


## random

Return random Emoji

#### RandomResult random()


Returns price, availability and other information for random emoji

### Parameters
This endpoint does not need any parameter.

### Return type


[**RandomResult**](../sdk_kotlin_index#RandomResult)


### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = EmojiApi()
try {
val result : RandomResult = apiInstance.random()
    println(result)
} catch (e: ClientException) {
println("4xx response calling EmojiApi#random")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling EmojiApi#random")
e.printStackTrace()
}
```

