---
id: proxyapi
title: ProxyAPI
---



All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callProxy**](ProxyAPI.md#callproxy) | **POST** /proxy | Calls a pre-defined proxy service with the provided data


# **callProxy**
```swift
    internal class func callProxy( body: ProxyCallParameters) -> Promise<ProxyResult>
```

Calls a pre-defined proxy service with the provided data

Returns the response from the proxied service as a string

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = ProxyCallParameters(service: "service_example", data: "data_example") // ProxyCallParameters | 

// Calls a pre-defined proxy service with the provided data
ProxyAPI.callProxy(body: body).then {
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
 **body** | [**ProxyCallParameters**](ProxyCallParameters.md) |  | 

### Return type

[**ProxyResult**](ProxyResult.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

