# ProxyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proxyPost**](ProxyApi.md#proxyPost) | **POST** /proxy |  Calls a pre-defined proxy service with the provided data


<a name="proxyPost"></a>
# **proxyPost**
> ProxyResult proxyPost(body)

 Calls a pre-defined proxy service with the provided data

Returns the response from the proxied service as a string

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

val apiInstance = ProxyApi()
val body : ProxyCallParameters =  // ProxyCallParameters | 
try {
    val result : ProxyResult = apiInstance.proxyPost(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ProxyApi#proxyPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ProxyApi#proxyPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProxyCallParameters**](ProxyCallParameters.md)|  |

### Return type

[**ProxyResult**](ProxyResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

