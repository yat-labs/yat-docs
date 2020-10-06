---
id: userapi
title: UserApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirm2FA**](UserApi.md#confirm2FA) | **POST** /account/2fa/confirm | Confirm two factor authentication update[**update2FA**](UserApi.md#update2FA) | **POST** /account/2fa | Update two factor authentication


## confirm2FA

Confirm two factor authentication update

#### SuccessResponse confirm2FA(body)


Match 2FA code and commit two factor authentication setting for user account

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Confirm2FaUpdate**](../sdk_kotlin_index#Confirm2FaUpdate)|  |

### Return type


[**SuccessResponse**](../sdk_kotlin_index#SuccessResponse)


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

val apiInstance = UserApi()
    val body : Confirm2FaUpdate =  // Confirm2FaUpdate | 
try {
val result : SuccessResponse = apiInstance.confirm2FA(body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling UserApi#confirm2FA")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserApi#confirm2FA")
e.printStackTrace()
}
```


## update2FA

Update two factor authentication

#### Update2FAResponse update2FA(body)


Returning String with SVG QR code when enabling 2FA OR empty String in the case of disabling&lt;br/&gt; NOTE: This call does not take effect until code is confirmed via &#x60;POST /account/2fa/confirm&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Update2FAParameters**](../sdk_kotlin_index#Update2FAParameters)|  |

### Return type


[**Update2FAResponse**](../sdk_kotlin_index#Update2FAResponse)


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

val apiInstance = UserApi()
    val body : Update2FAParameters =  // Update2FAParameters | 
try {
val result : Update2FAResponse = apiInstance.update2FA(body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling UserApi#update2FA")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserApi#update2FA")
e.printStackTrace()
}
```

