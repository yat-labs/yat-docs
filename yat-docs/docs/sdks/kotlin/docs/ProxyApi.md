---
id: proxyapi
title: ProxyApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callProxy**](ProxyApi.md#callProxy) | **POST** /proxy | Calls a pre-defined proxy service with the provided data


## callProxy

Calls a pre-defined proxy service with the provided data

#### ProxyResult callProxy(body)


Returns the response from the proxied service as a string

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProxyCallParameters**](../sdk_kotlin_index#ProxyCallParameters)|  |

### Return type


[**ProxyResult**](../sdk_kotlin_index#ProxyResult)


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

val apiInstance = ProxyApi()
    val body : ProxyCallParameters =  // ProxyCallParameters | 
try {
val result : ProxyResult = apiInstance.callProxy(body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling ProxyApi#callProxy")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling ProxyApi#callProxy")
e.printStackTrace()
}
```

