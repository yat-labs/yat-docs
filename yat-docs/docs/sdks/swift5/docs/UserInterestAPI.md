---
id: userinterestapi
title: UserInterestAPI
---



All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserInterest**](UserInterestAPI.md#deleteuserinterest) | **DELETE** /user_interests/{emoji_id} | Destroys the user interest preventing this Emoji ID&#39;s notification emails from being sent for this user
[**getInterestedUsers**](UserInterestAPI.md#getinterestedusers) | **GET** /user_interests | Returns a paginated list of user interest records associated with the user
[**getUserInterestForYat**](UserInterestAPI.md#getuserinterestforyat) | **GET** /user_interests/{emoji_id} | Given an EmojiId returns information about the user interest if a record exists for this user
[**registerInterest**](UserInterestAPI.md#registerinterest) | **POST** /user_interests | Create new interest in emoji to be notified when available


# **deleteUserInterest**
```swift
    internal class func deleteUserInterest( emojiId: String) -> Promise<UserInterest>
```

Destroys the user interest preventing this Emoji ID's notification emails from being sent for this user

NOTE: user should have scope `UserInterestDelete`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let emojiId = "emojiId_example" // String | 

// Destroys the user interest preventing this Emoji ID's notification emails from being sent for this user
UserInterestAPI.deleteUserInterest(emojiId: emojiId).then {
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

### Return type

[**UserInterest**](UserInterest.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getInterestedUsers**
```swift
    internal class func getInterestedUsers() -> Promise<Payload>
```

Returns a paginated list of user interest records associated with the user

NOTE: user should have scope `UserInterestRead`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK


// Returns a paginated list of user interest records associated with the user
UserInterestAPI.getInterestedUsers().then {
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

[**Payload**](Payload.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserInterestForYat**
```swift
    internal class func getUserInterestForYat( emojiId: String) -> Promise<UserInterest>
```

Given an EmojiId returns information about the user interest if a record exists for this user

NOTE: user should have scope `UserInterestRead`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let emojiId = "emojiId_example" // String | 

// Given an EmojiId returns information about the user interest if a record exists for this user
UserInterestAPI.getUserInterestForYat(emojiId: emojiId).then {
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

### Return type

[**UserInterest**](UserInterest.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerInterest**
```swift
    internal class func registerInterest( body: NewUserInterestParameters) -> Promise<UserInterest>
```

Create new interest in emoji to be notified when available

NOTE: user should have scope `UserInterestWrite`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = NewUserInterestParameters(emojiId: "emojiId_example") // NewUserInterestParameters | 

// Create new interest in emoji to be notified when available
UserInterestAPI.registerInterest(body: body).then {
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
 **body** | [**NewUserInterestParameters**](NewUserInterestParameters.md) |  | 

### Return type

[**UserInterest**](UserInterest.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

