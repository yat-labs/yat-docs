---
id: emojiapi
title: EmojiApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emojiEidGet**](EmojiApi.md#emojiEidGet) | **GET** /emoji/{eid} |  Lookup EmojiId
[**emojiEidPatch**](EmojiApi.md#emojiEidPatch) | **PATCH** /emoji/{eid} |  Edit EmojiId
[**emojiGet**](EmojiApi.md#emojiGet) | **GET** /emoji |  List emojis
[**emojiSearchGet**](EmojiApi.md#emojiSearchGet) | **GET** /emoji/search |  Search for EmojiID



## emojiEidGet

 Lookup EmojiId

#### LookupResponse emojiEidGet(eid, tags)


Will filter and return data from supplied tags, If tags filter is not supplied will return all tags attached. It will also try to get views for the past month, if not available will return -1. This method is called when a user wants to look up an EID&#39;s records such as a crypto address or a redirect

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eid** | **kotlin.String**|  |
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

val apiInstance = EmojiApi()
    val eid : kotlin.String = eid_example // kotlin.String | 
    val tags : kotlin.String = tags_example // kotlin.String | Comma-separated list of tags to display, skip it to display all, e.g. `?tags=0x0001,0x1001`
try {
val result : LookupResponse = apiInstance.emojiEidGet(eid, tags)
    println(result)
} catch (e: ClientException) {
println("4xx response calling EmojiApi#emojiEidGet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling EmojiApi#emojiEidGet")
e.printStackTrace()
}
```


## emojiEidPatch

 Edit EmojiId

#### kotlin.Any emojiEidPatch(eid, body)


Add and remove records in EmojiId, update merkle_root and signature too. Access notes: user expected to own the emoji&#39;s pubkey, have Admin role or be power member of organization if pubkey belongs to organization, otherwise operation will fail.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eid** | **kotlin.String**|  |
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

val apiInstance = EmojiApi()
    val eid : kotlin.String = eid_example // kotlin.String | 
    val body : EditRequest =  // EditRequest | 
try {
val result : kotlin.Any = apiInstance.emojiEidPatch(eid, body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling EmojiApi#emojiEidPatch")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling EmojiApi#emojiEidPatch")
e.printStackTrace()
}
```


## emojiGet

 List emojis

#### emojiGet(organizationId, userId)


If no parameters provided will return all emojis of current user. When &#x60;user_id&#x60; or &#x60;organization_id&#x60; specified will return emojis owned by specified user or organization, requires Admin or organization power user access. Result is array of emojis &#x60;[\&quot;🍗\&quot;,\&quot;🌈\&quot;]&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**java.util.UUID**](../sdk_kotlin_index#)| Lookup emojis owned by &#x60;organization_id&#x60;,  requires organization power user role | [optional]
 **userId** | [**java.util.UUID**](../sdk_kotlin_index#)| Lookup emojis owned by &#x60;user_id&#x60;,  requires Admin role | [optional]

### Return type

null (empty response body)

### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = EmojiApi()
    val organizationId : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | Lookup emojis owned by `organization_id`,  requires organization power user role
    val userId : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | Lookup emojis owned by `user_id`,  requires Admin role
try {
apiInstance.emojiGet(organizationId, userId)
} catch (e: ClientException) {
println("4xx response calling EmojiApi#emojiGet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling EmojiApi#emojiGet")
e.printStackTrace()
}
```


## emojiSearchGet

 Search for EmojiID

#### SearchResult emojiSearchGet(eid, redemptionCode)


Returns price, availability and other information on emoji and its alternates (similar EmojiIDs that are currently available)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eid** | **kotlin.String**| Emoji ID in percent url-encoded form |
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

val apiInstance = EmojiApi()
    val eid : kotlin.String = eid_example // kotlin.String | Emoji ID in percent url-encoded form
    val redemptionCode : kotlin.String = redemptionCode_example // kotlin.String | Redemption code
try {
val result : SearchResult = apiInstance.emojiSearchGet(eid, redemptionCode)
    println(result)
} catch (e: ClientException) {
println("4xx response calling EmojiApi#emojiSearchGet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling EmojiApi#emojiSearchGet")
e.printStackTrace()
}
```

