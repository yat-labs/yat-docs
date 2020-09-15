---
id: keymanagementapi
title: KeyManagementApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPubkey**](KeyManagementApi.md#addPubkey) | **POST** /pubkeys/{pubkey} | Add pubkey for current user[**addPubkeyForUser**](KeyManagementApi.md#addPubkeyForUser) | **POST** /users/{user_id}/pubkeys/{pubkey} | Add pubkey for user by user_id[**createWallet**](KeyManagementApi.md#createWallet) | **POST** /pubkeys | Generate custodial wallet[**getPubkeys**](KeyManagementApi.md#getPubkeys) | **GET** /pubkeys | Retrieve pubkeys[**getPubkeysForUser**](KeyManagementApi.md#getPubkeysForUser) | **GET** /users/{user_id}/pubkeys | Retrieve pubkeys by user_id


## addPubkey

Add pubkey for current user

#### kotlin.String addPubkey(pubkey)


This call expects empty body

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubkey** | **kotlin.String**|  |

### Return type

**kotlin.String**


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

val apiInstance = KeyManagementApi()
    val pubkey : kotlin.String = pubkey_example // kotlin.String | 
try {
val result : kotlin.String = apiInstance.addPubkey(pubkey)
    println(result)
} catch (e: ClientException) {
println("4xx response calling KeyManagementApi#addPubkey")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling KeyManagementApi#addPubkey")
e.printStackTrace()
}
```


## addPubkeyForUser

Add pubkey for user by user_id

#### kotlin.String addPubkeyForUser(userId, pubkey)


NOTE: user should have scope &#x60;UserPubkeyWrite&#x60; This call expects empty body

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**| Public key to add |
 **pubkey** | [**java.util.UUID**](../sdk_kotlin_index#)| &#x60;user_id&#x60; to grant public key ownership to |

### Return type

**kotlin.String**


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

val apiInstance = KeyManagementApi()
    val userId : kotlin.String = userId_example // kotlin.String | Public key to add
    val pubkey : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | `user_id` to grant public key ownership to
try {
val result : kotlin.String = apiInstance.addPubkeyForUser(userId, pubkey)
    println(result)
} catch (e: ClientException) {
println("4xx response calling KeyManagementApi#addPubkeyForUser")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling KeyManagementApi#addPubkeyForUser")
e.printStackTrace()
}
```


## createWallet

Generate custodial wallet

#### kotlin.String createWallet()


Generates custodial wallet with pubkey for currently authenticated user. This call expects empty body.

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.String**


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

val apiInstance = KeyManagementApi()
try {
val result : kotlin.String = apiInstance.createWallet()
    println(result)
} catch (e: ClientException) {
println("4xx response calling KeyManagementApi#createWallet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling KeyManagementApi#createWallet")
e.printStackTrace()
}
```


## getPubkeys

Retrieve pubkeys

#### kotlin.collections.List&lt;kotlin.String&gt; getPubkeys()


Retrieves pubkeys owned by currently authenticated user. This call expects empty body.

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.collections.List&lt;kotlin.String&gt;**


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

val apiInstance = KeyManagementApi()
try {
val result : kotlin.collections.List<kotlin.String> = apiInstance.getPubkeys()
    println(result)
} catch (e: ClientException) {
println("4xx response calling KeyManagementApi#getPubkeys")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling KeyManagementApi#getPubkeys")
e.printStackTrace()
}
```


## getPubkeysForUser

Retrieve pubkeys by user_id

#### kotlin.collections.List&lt;kotlin.String&gt; getPubkeysForUser(userId)


NOTE: user should have scope &#x60;UserPubkeyList&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**java.util.UUID**](../sdk_kotlin_index#)|  |

### Return type

**kotlin.collections.List&lt;kotlin.String&gt;**


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

val apiInstance = KeyManagementApi()
    val userId : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
try {
val result : kotlin.collections.List<kotlin.String> = apiInstance.getPubkeysForUser(userId)
    println(result)
} catch (e: ClientException) {
println("4xx response calling KeyManagementApi#getPubkeysForUser")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling KeyManagementApi#getPubkeysForUser")
e.printStackTrace()
}
```

