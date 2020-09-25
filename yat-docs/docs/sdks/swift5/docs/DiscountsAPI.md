---
id: discountsapi
title: DiscountsAPI
---



All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPubkeyForCode**](DiscountsAPI.md#addpubkeyforcode) | **POST** /codes/{code_id}/pubkeys/{pubkey} | Add pubkey for code
[**listCodes**](DiscountsAPI.md#listcodes) | **GET** /codes | Fetch codes
[**revokePubkeyForCode**](DiscountsAPI.md#revokepubkeyforcode) | **DELETE** /codes/{code_id}/pubkeys/{pubkey} | Revoke pubkey for code


# **addPubkeyForCode**
```swift
    internal class func addPubkeyForCode( codeId: UUID,  pubkey: String) -> Promise<String>
```

Add pubkey for code

NOTE: user should have scope `OrganizationCodeAdmin` or `CodeWrite`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let codeId = 987 // UUID | 
let pubkey = "pubkey_example" // String | Public key to authorize usage of a code

// Add pubkey for code
DiscountsAPI.addPubkeyForCode(codeId: codeId, pubkey: pubkey).then {
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
 **codeId** | [**UUID**](.md) |  | 
 **pubkey** | **String** | Public key to authorize usage of a code | 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT), [Two factor authentication](../README.md#Two factor authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCodes**
```swift
    internal class func listCodes( codeType: CodeType_listCodes? = nil,  dir: Dir_listCodes? = nil,  limit: Int? = nil,  organizationId: UUID? = nil,  page: Int? = nil,  sort: String? = nil) -> Promise<ListOfCodeAvailability>
```

Fetch codes

Return codes with their usage and availability information NOTE: user should have scope `OrganizationCodeAdmin` or `CodeRead`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let codeType = "codeType_example" // String | Optional: filter by code type (optional)
let dir = "dir_example" // String |  (optional)
let limit = 987 // Int |  (optional)
let organizationId = 987 // UUID | Optional: filter by organization id (optional)
let page = 987 // Int |  (optional)
let sort = "sort_example" // String |  (optional)

// Fetch codes
DiscountsAPI.listCodes(codeType: codeType, dir: dir, limit: limit, organizationId: organizationId, page: page, sort: sort).then {
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
 **codeType** | **String** | Optional: filter by code type | [optional] 
 **dir** | **String** |  | [optional] 
 **limit** | **Int** |  | [optional] 
 **organizationId** | [**UUID**](.md) | Optional: filter by organization id | [optional] 
 **page** | **Int** |  | [optional] 
 **sort** | **String** |  | [optional] 

### Return type

[**ListOfCodeAvailability**](ListOfCodeAvailability.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **revokePubkeyForCode**
```swift
    internal class func revokePubkeyForCode( codeId: UUID,  pubkey: String) -> Promise<String>
```

Revoke pubkey for code

NOTE: user should have scope `OrganizationCodeAdmin` or `CodeWrite`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let codeId = 987 // UUID | 
let pubkey = "pubkey_example" // String | Public key to authorize usage of a code

// Revoke pubkey for code
DiscountsAPI.revokePubkeyForCode(codeId: codeId, pubkey: pubkey).then {
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
 **codeId** | [**UUID**](.md) |  | 
 **pubkey** | **String** | Public key to authorize usage of a code | 

### Return type

**String**

### Authorization

[JWT](../README.md#JWT), [Two factor authentication](../README.md#Two factor authentication)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

