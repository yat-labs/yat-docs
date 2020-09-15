---
id: userinterestapi
title: UserInterestApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserInterest**](UserInterestApi.md#deleteUserInterest) | **DELETE** /user_interests/{eid} | Destroys the user interest preventing this eid&#39;s notification emails from being sent for this user[**getInterestedUsers**](UserInterestApi.md#getInterestedUsers) | **GET** /user_interests | Returns a paginated list of user interest records associated with the user[**getUserInterestForYat**](UserInterestApi.md#getUserInterestForYat) | **GET** /user_interests/{eid} | Given an EmojiId returns information about the user interest if a record exists for this user[**registerInterest**](UserInterestApi.md#registerInterest) | **POST** /user_interests | Create new interest in emoji to be notified when available


## deleteUserInterest

Destroys the user interest preventing this eid&#39;s notification emails from being sent for this user

#### deleteUserInterest(eid)


NOTE: user should have scope &#x60;UserInterestDelete&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eid** | **kotlin.String**|  |

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

val apiInstance = UserInterestApi()
    val eid : kotlin.String = eid_example // kotlin.String | 
try {
apiInstance.deleteUserInterest(eid)
} catch (e: ClientException) {
println("4xx response calling UserInterestApi#deleteUserInterest")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserInterestApi#deleteUserInterest")
e.printStackTrace()
}
```


## getInterestedUsers

Returns a paginated list of user interest records associated with the user

#### getInterestedUsers()


NOTE: user should have scope &#x60;UserInterestRead&#x60;

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

val apiInstance = UserInterestApi()
try {
apiInstance.getInterestedUsers()
} catch (e: ClientException) {
println("4xx response calling UserInterestApi#getInterestedUsers")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserInterestApi#getInterestedUsers")
e.printStackTrace()
}
```


## getUserInterestForYat

Given an EmojiId returns information about the user interest if a record exists for this user

#### getUserInterestForYat(eid)


NOTE: user should have scope &#x60;UserInterestRead&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eid** | **kotlin.String**|  |

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

val apiInstance = UserInterestApi()
    val eid : kotlin.String = eid_example // kotlin.String | 
try {
apiInstance.getUserInterestForYat(eid)
} catch (e: ClientException) {
println("4xx response calling UserInterestApi#getUserInterestForYat")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserInterestApi#getUserInterestForYat")
e.printStackTrace()
}
```


## registerInterest

Create new interest in emoji to be notified when available

#### registerInterest(body)


NOTE: user should have scope &#x60;UserInterestWrite&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewUserInterestParameters**](../sdk_kotlin_index#NewUserInterestParameters)|  |

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

val apiInstance = UserInterestApi()
    val body : NewUserInterestParameters =  // NewUserInterestParameters | 
try {
apiInstance.registerInterest(body)
} catch (e: ClientException) {
println("4xx response calling UserInterestApi#registerInterest")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserInterestApi#registerInterest")
e.printStackTrace()
}
```

