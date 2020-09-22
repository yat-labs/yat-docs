---
id: emojiidapi
title: EmojiIDApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edit**](EmojiIDApi.md#edit) | **PATCH** /emoji_id/{emoji_id} | Edit EmojiId[**list**](EmojiIDApi.md#list) | **GET** /emoji_id | List user&#39;s emoji Ids[**lookup**](EmojiIDApi.md#lookup) | **GET** /emoji_id/{emoji_id} | Lookup EmojiId[**search**](EmojiIDApi.md#search) | **GET** /emoji_id/search | Search for EmojiID


## edit

Edit EmojiId

#### kotlin.Any edit(emojiId, body)


Add and remove records in EmojiId, update merkle_root and signature too. Access notes: user expected to own the emoji&#39;s pubkey, have Admin role or be power member of organization if pubkey belongs to organization, otherwise operation will fail.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emojiId** | **kotlin.String**|  |
 **body** | [**EditRequest**](../sdk_kotlin_index#EditRequest)|  |

### Return type


[**kotlin.Any**](../sdk_kotlin_index#kotlin.Any)


### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""
Configure apiKey:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = EmojiIDApi()
    val emojiId : kotlin.String = emojiId_example // kotlin.String | 
    val body : EditRequest =  // EditRequest | 
try {
val result : kotlin.Any = apiInstance.edit(emojiId, body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling EmojiIDApi#edit")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling EmojiIDApi#edit")
e.printStackTrace()
}
```


## list

List user&#39;s emoji Ids

#### kotlin.collections.List&lt;kotlin.String&gt; list(organizationId, userId)


If no parameters provided will return all emojis of current user. When &#x60;user_id&#x60; or &#x60;organization_id&#x60; specified will return emojis owned by specified user or organization, requires Admin or organization power user access. Result is an array of emoji ids in display format (i.e. with all skin tone modifiers applied) &#x60;[\&quot;🤟🏾🍗👽👻\&quot;,\&quot;🌈👍🏿💯\&quot;]&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**java.util.UUID**](../sdk_kotlin_index#)| Lookup emojis owned by &#x60;organization_id&#x60;,  requires organization power user role | [optional]
 **userId** | [**java.util.UUID**](../sdk_kotlin_index#)| Lookup emojis owned by &#x60;user_id&#x60;,  requires Admin role | [optional]

### Return type

**kotlin.collections.List&lt;kotlin.String&gt;**


### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = EmojiIDApi()
    val organizationId : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | Lookup emojis owned by `organization_id`,  requires organization power user role
    val userId : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | Lookup emojis owned by `user_id`,  requires Admin role
try {
val result : kotlin.collections.List<kotlin.String> = apiInstance.list(organizationId, userId)
    println(result)
} catch (e: ClientException) {
println("4xx response calling EmojiIDApi#list")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling EmojiIDApi#list")
e.printStackTrace()
}
```


## lookup

Lookup EmojiId

#### LookupResponse lookup(emojiId, tags)


Will filter and return data from supplied tags, If tags filter is not supplied will return all tags attached. It will also try to get views for the past month, if not available will return -1. This method is called when a user wants to look up an Emoji ID&#39;s records such as a crypto address or a redirect

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emojiId** | **kotlin.String**|  |
 **tags** | **kotlin.String**| Comma-separated list of tags to display, skip it to display all, e.g. &#x60;?tags&#x3D;0x0001,0x1001&#x60; | [optional]

### Return type


[**LookupResponse**](../sdk_kotlin_index#LookupResponse)


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

val apiInstance = EmojiIDApi()
    val emojiId : kotlin.String = emojiId_example // kotlin.String | 
    val tags : kotlin.String = tags_example // kotlin.String | Comma-separated list of tags to display, skip it to display all, e.g. `?tags=0x0001,0x1001`
try {
val result : LookupResponse = apiInstance.lookup(emojiId, tags)
    println(result)
} catch (e: ClientException) {
println("4xx response calling EmojiIDApi#lookup")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling EmojiIDApi#lookup")
e.printStackTrace()
}
```


## search

Search for EmojiID

#### SearchResult search(emojiId, redemptionCode)


Returns price, availability and other information on emoji and its alternates (similar EmojiIDs that are currently available)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emojiId** | **kotlin.String**| Emoji ID in percent url-encoded form |
 **redemptionCode** | **kotlin.String**| Redemption code | [optional]

### Return type


[**SearchResult**](../sdk_kotlin_index#SearchResult)


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

val apiInstance = EmojiIDApi()
    val emojiId : kotlin.String = emojiId_example // kotlin.String | Emoji ID in percent url-encoded form
    val redemptionCode : kotlin.String = redemptionCode_example // kotlin.String | Redemption code
try {
val result : SearchResult = apiInstance.search(emojiId, redemptionCode)
    println(result)
} catch (e: ClientException) {
println("4xx response calling EmojiIDApi#search")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling EmojiIDApi#search")
e.printStackTrace()
}
```

