---
id: usersapi
title: UsersApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountGet**](UsersApi.md#accountGet) | **GET** /account |  Current user account
[**accountPatch**](UsersApi.md#accountPatch) | **PATCH** /account |  Update the currently logged in user
[**usersGet**](UsersApi.md#usersGet) | **GET** /users |  List users
[**usersIdDelete**](UsersApi.md#usersIdDelete) | **DELETE** /users/{id} |  Delete a user
[**usersIdPatch**](UsersApi.md#usersIdPatch) | **PATCH** /users/{id} |  Update a user as an admin
[**usersPost**](UsersApi.md#usersPost) | **POST** /users |  Register a User



## accountGet

 Current user account

#### accountGet()


Displays the currently logged in user account details.

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = UsersApi()
try {
apiInstance.accountGet()
} catch (e: ClientException) {
println("4xx response calling UsersApi#accountGet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#accountGet")
e.printStackTrace()
}
```


## accountPatch

 Update the currently logged in user

#### accountPatch(body)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateUserParameters**](../sdk_kotlin_index#UpdateUserParameters)|  |

### Return type

null (empty response body)

### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""
Configure apiKey:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = UsersApi()
    val body : UpdateUserParameters =  // UpdateUserParameters | 
try {
apiInstance.accountPatch(body)
} catch (e: ClientException) {
println("4xx response calling UsersApi#accountPatch")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#accountPatch")
e.printStackTrace()
}
```


## usersGet

 List users

#### usersGet()


This is an admin endpoint

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = UsersApi()
try {
apiInstance.usersGet()
} catch (e: ClientException) {
println("4xx response calling UsersApi#usersGet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#usersGet")
e.printStackTrace()
}
```


## usersIdDelete

 Delete a user

#### usersIdDelete(id)




### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**java.util.UUID**](../sdk_kotlin_index#)|  |

### Return type

null (empty response body)

### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = UsersApi()
    val id : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
apiInstance.usersIdDelete(id)
} catch (e: ClientException) {
println("4xx response calling UsersApi#usersIdDelete")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#usersIdDelete")
e.printStackTrace()
}
```


## usersIdPatch

 Update a user as an admin

#### usersIdPatch(id, body)


Note: Requires UserWrite Scope

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**java.util.UUID**](../sdk_kotlin_index#)|  |
 **body** | [**AdminUpdateUserParameters**](../sdk_kotlin_index#AdminUpdateUserParameters)|  |

### Return type

null (empty response body)

### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""
Configure apiKey:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = UsersApi()
    val id : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
    val body : AdminUpdateUserParameters =  // AdminUpdateUserParameters | 
try {
apiInstance.usersIdPatch(id, body)
} catch (e: ClientException) {
println("4xx response calling UsersApi#usersIdPatch")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#usersIdPatch")
e.printStackTrace()
}
```


## usersPost

 Register a User

#### usersPost(body)


Create a user and a custodial wallet

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegisterUserParameters**](../sdk_kotlin_index#RegisterUserParameters)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

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

