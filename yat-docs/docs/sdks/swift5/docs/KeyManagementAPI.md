---
id: keymanagementapi
title: KeyManagementAPI
---



All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPubkey**](KeyManagementAPI.md#addpubkey) | **POST** /pubkeys/{pubkey} | Add pubkey for current user
[**addPubkeyForUser**](KeyManagementAPI.md#addpubkeyforuser) | **POST** /users/{user_id}/pubkeys/{pubkey} | Add pubkey for user by user_id
[**createWallet**](KeyManagementAPI.md#createwallet) | **POST** /pubkeys | Generate custodial wallet
[**getPubkeys**](KeyManagementAPI.md#getpubkeys) | **GET** /pubkeys | Retrieve pubkeys
[**getPubkeysForUser**](KeyManagementAPI.md#getpubkeysforuser) | **GET** /users/{user_id}/pubkeys | Retrieve pubkeys by user_id


# **addPubkey**
```swift
    internal class func addPubkey( pubkey: String) -> Promise<String>
```

Add pubkey for current user

This call expects empty body

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let pubkey = "pubkey_example" // String | 

// Add pubkey for current user
KeyManagementAPI.addPubkey(pubkey: pubkey).then {
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
 **pubkey** | **String** |  | 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT), [apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addPubkeyForUser**
```swift
    internal class func addPubkeyForUser( userId: String,  pubkey: UUID) -> Promise<String>
```

Add pubkey for user by user_id

NOTE: user should have scope `UserPubkeyWrite` This call expects empty body

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let userId = "userId_example" // String | Public key to add
let pubkey = 987 // UUID | `user_id` to grant public key ownership to

// Add pubkey for user by user_id
KeyManagementAPI.addPubkeyForUser(userId: userId, pubkey: pubkey).then {
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
 **userId** | **String** | Public key to add | 
 **pubkey** | [**UUID**](.md) | &#x60;user_id&#x60; to grant public key ownership to | 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT), [apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWallet**
```swift
    internal class func createWallet() -> Promise<String>
```

Generate custodial wallet

Generates custodial wallet with pubkey for currently authenticated user. This call expects empty body.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK


// Generate custodial wallet
KeyManagementAPI.createWallet().then {
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

**String**

### Authorization

[JWT](../README.md#JWT), [apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPubkeys**
```swift
    internal class func getPubkeys() -> Promise<[String]>
```

Retrieve pubkeys

Retrieves pubkeys owned by currently authenticated user. This call expects empty body.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK


// Retrieve pubkeys
KeyManagementAPI.getPubkeys().then {
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

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPubkeysForUser**
```swift
    internal class func getPubkeysForUser( userId: UUID) -> Promise<[String]>
```

Retrieve pubkeys by user_id

NOTE: user should have scope `UserPubkeyList`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let userId = 987 // UUID | 

// Retrieve pubkeys by user_id
KeyManagementAPI.getPubkeysForUser(userId: userId).then {
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
 **userId** | [**UUID**](.md) |  | 

### Return type

**[String]**

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

