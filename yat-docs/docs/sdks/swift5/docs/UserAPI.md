---
id: userapi
title: UserAPI
---



All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirm2FA**](UserAPI.md#confirm2fa) | **POST** /account/2fa/confirm | Confirm two factor authentication update
[**update2FA**](UserAPI.md#update2fa) | **POST** /account/2fa | Update two factor authentication


# **confirm2FA**
```swift
    internal class func confirm2FA( body: Confirm2FaUpdate) -> Promise<SuccessResponse>
```

Confirm two factor authentication update

Match 2FA code and commit two factor authentication setting for user account

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = Confirm2FaUpdate(code: "code_example") // Confirm2FaUpdate | 

// Confirm two factor authentication update
UserAPI.confirm2FA(body: body).then {
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
 **body** | [**Confirm2FaUpdate**](Confirm2FaUpdate.md) |  | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update2FA**
```swift
    internal class func update2FA( body: Update2FAParameters) -> Promise<Update2FAResponse>
```

Update two factor authentication

Returning String with SVG QR code when enabling 2FA OR empty String in the case of disabling<br/> NOTE: This call does not take effect until code is confirmed via `POST /account/2fa/confirm`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = Update2FAParameters(height: 123, requires2fa: "requires2fa_example", width: 123) // Update2FAParameters | 

// Update two factor authentication
UserAPI.update2FA(body: body).then {
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
 **body** | [**Update2FAParameters**](Update2FAParameters.md) |  | 

### Return type

[**Update2FAResponse**](Update2FAResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

