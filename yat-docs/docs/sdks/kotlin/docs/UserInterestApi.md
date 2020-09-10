---
id: userinterestapi
title: UserInterestApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userInterestsEidDelete**](UserInterestApi.md#userInterestsEidDelete) | **DELETE** /user_interests/{eid} |  Destroys the user interest preventing this eid&#39;s notification emails from being sent for this user
[**userInterestsEidGet**](UserInterestApi.md#userInterestsEidGet) | **GET** /user_interests/{eid} |  Given an EmojiId returns information about the user interest if a record exists for this user
[**userInterestsGet**](UserInterestApi.md#userInterestsGet) | **GET** /user_interests |  Returns a paginated list of user interest records associated with the user
[**userInterestsPost**](UserInterestApi.md#userInterestsPost) | **POST** /user_interests |  Create new interest in emoji to be notified when available



## userInterestsEidDelete

 Destroys the user interest preventing this eid&#39;s notification emails from being sent for this user

#### userInterestsEidDelete(eid)


User requires scope &#x60;UserInterestDelete&#x60;.

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
apiInstance.userInterestsEidDelete(eid)
} catch (e: ClientException) {
println("4xx response calling UserInterestApi#userInterestsEidDelete")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserInterestApi#userInterestsEidDelete")
e.printStackTrace()
}
```


## userInterestsEidGet

 Given an EmojiId returns information about the user interest if a record exists for this user

#### userInterestsEidGet(eid)


User requires scope &#x60;UserInterestRead&#x60;.

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
apiInstance.userInterestsEidGet(eid)
} catch (e: ClientException) {
println("4xx response calling UserInterestApi#userInterestsEidGet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserInterestApi#userInterestsEidGet")
e.printStackTrace()
}
```


## userInterestsGet

 Returns a paginated list of user interest records associated with the user

#### userInterestsGet()


User requires scope &#x60;UserInterestRead&#x60;.

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
apiInstance.userInterestsGet()
} catch (e: ClientException) {
println("4xx response calling UserInterestApi#userInterestsGet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserInterestApi#userInterestsGet")
e.printStackTrace()
}
```


## userInterestsPost

 Create new interest in emoji to be notified when available

#### userInterestsPost(body)


User requires scope &#x60;UserInterestWrite&#x60;.

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
apiInstance.userInterestsPost(body)
} catch (e: ClientException) {
println("4xx response calling UserInterestApi#userInterestsPost")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling UserInterestApi#userInterestsPost")
e.printStackTrace()
}
```

