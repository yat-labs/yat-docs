---
id: userinterestapi
title: UserInterestApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserInterest**](UserInterestApi.md#deleteUserInterest) | **DELETE** /user_interests/{emoji_id} | Destroys the user interest preventing this Emoji ID&#39;s notification emails from being sent for this user[**getInterestedUsers**](UserInterestApi.md#getInterestedUsers) | **GET** /user_interests | Returns a paginated list of user interest records associated with the user[**getUserInterestForYat**](UserInterestApi.md#getUserInterestForYat) | **GET** /user_interests/{emoji_id} | Given an EmojiId returns information about the user interest if a record exists for this user[**registerInterest**](UserInterestApi.md#registerInterest) | **POST** /user_interests | Create new interest in emoji to be notified when available


## deleteUserInterest

Destroys the user interest preventing this Emoji ID&#39;s notification emails from being sent for this user

#### UserInterest deleteUserInterest(emojiId)


NOTE: user should have scope &#x60;UserInterestDelete&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emojiId** | **kotlin.String**|  |

### Return type


[**UserInterest**](../sdk_kotlin_index#UserInterest)


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

val apiInstance = UserInterestApi()
    val emojiId : kotlin.String = emojiId_example // kotlin.String | 
try {
val result : UserInterest = apiInstance.deleteUserInterest(emojiId)
    println(result)
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

#### ListOfUserInterest getInterestedUsers(dir, limit, page, sort)


NOTE: user should have scope &#x60;UserInterestRead&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dir** | **kotlin.String**|  | [optional] [enum: Asc, Desc]
 **limit** | **kotlin.Int**|  | [optional]
 **page** | **kotlin.Int**|  | [optional]
 **sort** | **kotlin.String**|  | [optional]

### Return type


[**ListOfUserInterest**](../sdk_kotlin_index#ListOfUserInterest)


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

val apiInstance = UserInterestApi()
    val dir : kotlin.String = dir_example // kotlin.String | 
    val limit : kotlin.Int = 56 // kotlin.Int | 
    val page : kotlin.Int = 56 // kotlin.Int | 
    val sort : kotlin.String = sort_example // kotlin.String | 
try {
val result : ListOfUserInterest = apiInstance.getInterestedUsers(dir, limit, page, sort)
    println(result)
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

#### UserInterest getUserInterestForYat(emojiId)


NOTE: user should have scope &#x60;UserInterestRead&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emojiId** | **kotlin.String**|  |

### Return type


[**UserInterest**](../sdk_kotlin_index#UserInterest)


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

val apiInstance = UserInterestApi()
    val emojiId : kotlin.String = emojiId_example // kotlin.String | 
try {
val result : UserInterest = apiInstance.getUserInterestForYat(emojiId)
    println(result)
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

#### UserInterest registerInterest(body)


NOTE: user should have scope &#x60;UserInterestWrite&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewUserInterestParameters**](../sdk_kotlin_index#NewUserInterestParameters)|  |

### Return type


[**UserInterest**](../sdk_kotlin_index#UserInterest)


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

val apiInstance = UserInterestApi()
    val body : NewUserInterestParameters =  // NewUserInterestParameters | 
try {
val result : UserInterest = apiInstance.registerInterest(body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling UserInterestApi#registerInterest")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserInterestApi#registerInterest")
e.printStackTrace()
}
```

