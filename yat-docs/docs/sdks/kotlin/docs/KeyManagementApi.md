---
id: keymanagementapi
title: KeyManagementApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pubkeysGet**](KeyManagementApi.md#pubkeysGet) | **GET** /pubkeys |  Retrieve pubkeys
[**pubkeysPost**](KeyManagementApi.md#pubkeysPost) | **POST** /pubkeys |  Generate custodial wallet
[**pubkeysPubkeyPost**](KeyManagementApi.md#pubkeysPubkeyPost) | **POST** /pubkeys/{pubkey} |  Add pubkey for current user
[**usersUserIdPubkeysGet**](KeyManagementApi.md#usersUserIdPubkeysGet) | **GET** /users/{user_id}/pubkeys |  Retrieve pubkeys by user_id
[**usersUserIdPubkeysPubkeyPost**](KeyManagementApi.md#usersUserIdPubkeysPubkeyPost) | **POST** /users/{user_id}/pubkeys/{pubkey} |  Add pubkey for user by user_id



## pubkeysGet

 Retrieve pubkeys

#### kotlin.collections.List&lt;kotlin.String&gt; pubkeysGet()


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
val result : kotlin.collections.List<kotlin.String> = apiInstance.pubkeysGet()
    println(result)
} catch (e: ClientException) {
println("4xx response calling KeyManagementApi#pubkeysGet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling KeyManagementApi#pubkeysGet")
e.printStackTrace()
}
```


## pubkeysPost

 Generate custodial wallet

#### kotlin.String pubkeysPost()


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
val result : kotlin.String = apiInstance.pubkeysPost()
    println(result)
} catch (e: ClientException) {
println("4xx response calling KeyManagementApi#pubkeysPost")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling KeyManagementApi#pubkeysPost")
e.printStackTrace()
}
```


## pubkeysPubkeyPost

 Add pubkey for current user

#### pubkeysPubkeyPost(pubkey)


This call expects empty body

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pubkey** | **kotlin.String**|  |

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

val apiInstance = KeyManagementApi()
    val pubkey : kotlin.String = pubkey_example // kotlin.String | 
try {
apiInstance.pubkeysPubkeyPost(pubkey)
} catch (e: ClientException) {
println("4xx response calling KeyManagementApi#pubkeysPubkeyPost")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling KeyManagementApi#pubkeysPubkeyPost")
e.printStackTrace()
}
```


## usersUserIdPubkeysGet

 Retrieve pubkeys by user_id

#### kotlin.collections.List&lt;kotlin.String&gt; usersUserIdPubkeysGet(userId)


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
val result : kotlin.collections.List<kotlin.String> = apiInstance.usersUserIdPubkeysGet(userId)
    println(result)
} catch (e: ClientException) {
println("4xx response calling KeyManagementApi#usersUserIdPubkeysGet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling KeyManagementApi#usersUserIdPubkeysGet")
e.printStackTrace()
}
```


## usersUserIdPubkeysPubkeyPost

 Add pubkey for user by user_id

#### usersUserIdPubkeysPubkeyPost(userId, pubkey)


NOTE: user should have scope &#x60;UserPubkeyWrite&#x60; This call expects empty body

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**| Public key to add |
 **pubkey** | [**java.util.UUID**](../sdk_kotlin_index#)| &#x60;user_id&#x60; to grant public key ownership to |

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

val apiInstance = KeyManagementApi()
    val userId : kotlin.String = userId_example // kotlin.String | Public key to add
    val pubkey : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | `user_id` to grant public key ownership to
try {
apiInstance.usersUserIdPubkeysPubkeyPost(userId, pubkey)
} catch (e: ClientException) {
println("4xx response calling KeyManagementApi#usersUserIdPubkeysPubkeyPost")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling KeyManagementApi#usersUserIdPubkeysPubkeyPost")
e.printStackTrace()
}
```

