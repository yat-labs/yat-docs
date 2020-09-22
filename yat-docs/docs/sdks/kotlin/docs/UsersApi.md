---
id: usersapi
title: UsersApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /users | Register a User[**delete**](UsersApi.md#delete) | **DELETE** /users/{id} | Delete a user[**getAccount**](UsersApi.md#getAccount) | **GET** /account | Current user account[**getAllUsers**](UsersApi.md#getAllUsers) | **GET** /users | List users[**update**](UsersApi.md#update) | **PATCH** /account | Update the currently logged in user[**updateUser**](UsersApi.md#updateUser) | **PATCH** /users/{id} | Update a user as an admin


## createUser

Register a User

#### CurrentUser createUser(body)


Create a user and a custodial wallet

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegisterUserParameters**](../sdk_kotlin_index#RegisterUserParameters)|  |

### Return type


[**CurrentUser**](../sdk_kotlin_index#CurrentUser)


### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### Example

```kotlin
// Import classes:
// import com.tarilabs.client.infrastructure.*
// import com.tarilabs.client.models.*

val apiInstance = UsersApi()
    val body : RegisterUserParameters =  // RegisterUserParameters | 
try {
val result : CurrentUser = apiInstance.createUser(body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling UsersApi#createUser")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#createUser")
e.printStackTrace()
}
```


## delete

Delete a user

#### DisplayUser delete(id)


NOTE: user should have scope &#x60;UserDeleteSelf&#x60; if deleting themselves, &#x60;UserDelete&#x60; is needed for other users

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**java.util.UUID**](../sdk_kotlin_index#)|  |

### Return type


[**DisplayUser**](../sdk_kotlin_index#DisplayUser)


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

val apiInstance = UsersApi()
    val id : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
val result : DisplayUser = apiInstance.delete(id)
    println(result)
} catch (e: ClientException) {
println("4xx response calling UsersApi#delete")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#delete")
e.printStackTrace()
}
```


## getAccount

Current user account

#### CurrentUser getAccount()


Displays the currently logged in user account details.

### Parameters
This endpoint does not need any parameter.

### Return type


[**CurrentUser**](../sdk_kotlin_index#CurrentUser)


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

val apiInstance = UsersApi()
try {
val result : CurrentUser = apiInstance.getAccount()
    println(result)
} catch (e: ClientException) {
println("4xx response calling UsersApi#getAccount")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#getAccount")
e.printStackTrace()
}
```


## getAllUsers

List users

#### Payload getAllUsers()


NOTE: user should have scope &#x60;UserList&#x60;

### Parameters
This endpoint does not need any parameter.

### Return type


[**Payload**](../sdk_kotlin_index#Payload)


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

val apiInstance = UsersApi()
try {
val result : Payload = apiInstance.getAllUsers()
    println(result)
} catch (e: ClientException) {
println("4xx response calling UsersApi#getAllUsers")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#getAllUsers")
e.printStackTrace()
}
```


## update

Update the currently logged in user

#### CurrentUser update(body)


NOTE: user should have scope &#x60;UserWriteSelf&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateUserParameters**](../sdk_kotlin_index#UpdateUserParameters)|  |

### Return type


[**CurrentUser**](../sdk_kotlin_index#CurrentUser)


### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""
Configure apiKey:
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

val apiInstance = UsersApi()
    val body : UpdateUserParameters =  // UpdateUserParameters | 
try {
val result : CurrentUser = apiInstance.update(body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling UsersApi#update")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#update")
e.printStackTrace()
}
```


## updateUser

Update a user as an admin

#### DisplayUser updateUser(id, body)


NOTE: user should have scope &#x60;UserWrite&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**java.util.UUID**](../sdk_kotlin_index#)|  |
 **body** | [**AdminUpdateUserParameters**](../sdk_kotlin_index#AdminUpdateUserParameters)|  |

### Return type


[**DisplayUser**](../sdk_kotlin_index#DisplayUser)


### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""
Configure apiKey:
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

val apiInstance = UsersApi()
    val id : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
    val body : AdminUpdateUserParameters =  // AdminUpdateUserParameters | 
try {
val result : DisplayUser = apiInstance.updateUser(id, body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling UsersApi#updateUser")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UsersApi#updateUser")
e.printStackTrace()
}
```

