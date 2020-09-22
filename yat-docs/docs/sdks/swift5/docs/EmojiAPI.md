---
id: emojiapi
title: EmojiAPI
---



All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emojiList**](EmojiAPI.md#emojilist) | **GET** /emoji | List of supported emoji characters
[**random**](EmojiAPI.md#random) | **GET** /emoji_id/random | Return random Emoji


# **emojiList**
```swift
    internal class func emojiList() -> Promise<[String]>
```

List of supported emoji characters

Result is an array of emojis `[\"🍗\",\"🌈\"]`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK


// List of supported emoji characters
EmojiAPI.emojiList().then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **random**
```swift
    internal class func random() -> Promise<RandomResult>
```

Return random Emoji

Returns price, availability and other information for random emoji

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK


// Return random Emoji
EmojiAPI.random().then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RandomResult**](RandomResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

