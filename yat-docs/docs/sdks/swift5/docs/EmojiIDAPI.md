---
id: emojiidapi
title: EmojiIDAPI
---



All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edit**](EmojiIDAPI.md#edit) | **PATCH** /emoji_id/{emoji_id} | Edit EmojiId
[**list**](EmojiIDAPI.md#list) | **GET** /emoji_id | List user&#39;s emoji Ids
[**lookup**](EmojiIDAPI.md#lookup) | **GET** /emoji_id/{emoji_id} | Lookup EmojiId
[**search**](EmojiIDAPI.md#search) | **GET** /emoji_id/search | Search for EmojiID


# **edit**
```swift
    internal class func edit( emojiId: String,  body: EditRequest) -> Promise<Any>
```

Edit EmojiId

Add and remove records in EmojiId, update merkle_root and signature too. Access notes: user expected to own the emoji's pubkey, have Admin role or be power member of organization if pubkey belongs to organization, otherwise operation will fail.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let emojiId = "emojiId_example" // String | 
let body = EditRequest(delete: ["delete_example"], insert: [EditRequest_insert(data: "data_example", tag: "tag_example")], merkleRoot: "merkleRoot_example", signature: "signature_example") // EditRequest | 

// Edit EmojiId
EmojiIDAPI.edit(emojiId: emojiId, body: body).then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emojiId** | **String** |  | 
 **body** | [**EditRequest**](EditRequest.md) |  | 

### Return type

**Any**

### Authorization

[JWT](../README.md#JWT), [Two factor authentication](../README.md#Two factor authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
```swift
    internal class func list( organizationId: UUID? = nil,  userId: UUID? = nil) -> Promise<[String]>
```

List user's emoji Ids

If no parameters provided will return all emojis of current user. When `user_id` or `organization_id` specified will return emojis owned by specified user or organization, requires Admin or organization power user access. Result is an array of emoji ids in display format (i.e. with all skin tone modifiers applied) `[\"🤟🏾🍗👽👻\",\"🌈👍🏿💯\"]`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let organizationId = 987 // UUID | Lookup emojis owned by `organization_id`,  requires organization power user role (optional)
let userId = 987 // UUID | Lookup emojis owned by `user_id`,  requires Admin role (optional)

// List user's emoji Ids
EmojiIDAPI.list(organizationId: organizationId, userId: userId).then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | [**UUID**](.md) | Lookup emojis owned by &#x60;organization_id&#x60;,  requires organization power user role | [optional] 
 **userId** | [**UUID**](.md) | Lookup emojis owned by &#x60;user_id&#x60;,  requires Admin role | [optional] 

### Return type

**[String]**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lookup**
```swift
    internal class func lookup( emojiId: String,  tags: String? = nil) -> Promise<LookupResponse>
```

Lookup EmojiId

Will filter and return data from supplied tags, If tags filter is not supplied will return all tags attached. It will also try to get views for the past month, if not available will return -1. This method is called when a user wants to look up an Emoji ID's records such as a crypto address or a redirect

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let emojiId = "emojiId_example" // String | 
let tags = "tags_example" // String | Comma-separated list of tags to display, skip it to display all, e.g. `?tags=0x0001,0x1001` (optional)

// Lookup EmojiId
EmojiIDAPI.lookup(emojiId: emojiId, tags: tags).then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emojiId** | **String** |  | 
 **tags** | **String** | Comma-separated list of tags to display, skip it to display all, e.g. &#x60;?tags&#x3D;0x0001,0x1001&#x60; | [optional] 

### Return type

[**LookupResponse**](LookupResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
```swift
    internal class func search( emojiId: String,  redemptionCode: String? = nil) -> Promise<SearchResult>
```

Search for EmojiID

Returns price, availability and other information on emoji and its alternates (similar EmojiIDs that are currently available)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let emojiId = "emojiId_example" // String | Emoji ID in percent url-encoded form
let redemptionCode = "redemptionCode_example" // String | Redemption code (optional)

// Search for EmojiID
EmojiIDAPI.search(emojiId: emojiId, redemptionCode: redemptionCode).then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emojiId** | **String** | Emoji ID in percent url-encoded form | 
 **redemptionCode** | **String** | Redemption code | [optional] 

### Return type

[**SearchResult**](SearchResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

