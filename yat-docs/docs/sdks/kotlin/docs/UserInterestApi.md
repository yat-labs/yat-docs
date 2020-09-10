# UserInterestApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userInterestsEidDelete**](UserInterestApi.md#userInterestsEidDelete) | **DELETE** /user_interests/{eid} |  Destroys the user interest preventing this eid&#39;s notification emails from being sent for this user
[**userInterestsEidGet**](UserInterestApi.md#userInterestsEidGet) | **GET** /user_interests/{eid} |  Given an EmojiId returns information about the user interest if a record exists for this user
[**userInterestsGet**](UserInterestApi.md#userInterestsGet) | **GET** /user_interests |  Returns a paginated list of user interest records associated with the user
[**userInterestsPost**](UserInterestApi.md#userInterestsPost) | **POST** /user_interests |  Create new interest in emoji to be notified when available


<a name="userInterestsEidDelete"></a>
# **userInterestsEidDelete**
> userInterestsEidDelete(eid)

 Destroys the user interest preventing this eid&#39;s notification emails from being sent for this user

User requires scope &#x60;UserInterestDelete&#x60;.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eid** | **kotlin.String**|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userInterestsEidGet"></a>
# **userInterestsEidGet**
> userInterestsEidGet(eid)

 Given an EmojiId returns information about the user interest if a record exists for this user

User requires scope &#x60;UserInterestRead&#x60;.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eid** | **kotlin.String**|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userInterestsGet"></a>
# **userInterestsGet**
> userInterestsGet()

 Returns a paginated list of user interest records associated with the user

User requires scope &#x60;UserInterestRead&#x60;.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="userInterestsPost"></a>
# **userInterestsPost**
> userInterestsPost(body)

 Create new interest in emoji to be notified when available

User requires scope &#x60;UserInterestWrite&#x60;.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewUserInterestParameters**](NewUserInterestParameters.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

