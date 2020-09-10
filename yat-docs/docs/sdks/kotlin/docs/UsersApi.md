# UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersPost**](UsersApi.md#usersPost) | **POST** /users |  Register a User


<a name="usersPost"></a>
# **usersPost**
> usersPost(body)

 Register a User

Create a user and a custodial wallet

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

val apiInstance = UsersApi()
val body : RegisterUserParameters =  // RegisterUserParameters | 
try {
    apiInstance.usersPost(body)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#usersPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#usersPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegisterUserParameters**](RegisterUserParameters.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

