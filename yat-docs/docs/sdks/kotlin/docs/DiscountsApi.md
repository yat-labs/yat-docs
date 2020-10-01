---
id: discountsapi
title: DiscountsApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateRandomYatCode**](DiscountsApi.md#activateRandomYatCode) | **POST** /codes/{code_id}/random_yat | Use random yat code[**addPubkeyForCode**](DiscountsApi.md#addPubkeyForCode) | **POST** /codes/{code_id}/pubkeys/{pubkey} | Add pubkey for code[**listCodes**](DiscountsApi.md#listCodes) | **GET** /codes | Fetch codes[**revokePubkeyForCode**](DiscountsApi.md#revokePubkeyForCode) | **DELETE** /codes/{code_id}/pubkeys/{pubkey} | Revoke pubkey for code


## activateRandomYatCode

Use random yat code

#### DisplayOrder activateRandomYatCode(codeId, body)


Creates cart with random yat generated according to pattern with applied discount

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeId** | [**java.util.UUID**](../sdk_kotlin_index#)|  |
 **body** | [**RandomYatActivateBody**](../sdk_kotlin_index#RandomYatActivateBody)|  |

### Return type


[**DisplayOrder**](../sdk_kotlin_index#DisplayOrder)


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

val apiInstance = DiscountsApi()
    val codeId : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
    val body : RandomYatActivateBody =  // RandomYatActivateBody | 
try {
val result : DisplayOrder = apiInstance.activateRandomYatCode(codeId, body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling DiscountsApi#activateRandomYatCode")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling DiscountsApi#activateRandomYatCode")
e.printStackTrace()
}
```


## addPubkeyForCode

Add pubkey for code

#### kotlin.String addPubkeyForCode(codeId, pubkey)


NOTE: user should have scope &#x60;OrganizationCodeAdmin&#x60; or &#x60;CodeWrite&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeId** | [**java.util.UUID**](../sdk_kotlin_index#)|  |
 **pubkey** | **kotlin.String**| Public key to authorize usage of a code |

### Return type

**kotlin.String**


### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""
Configure two_factor:
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

val apiInstance = DiscountsApi()
    val codeId : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
    val pubkey : kotlin.String = pubkey_example // kotlin.String | Public key to authorize usage of a code
try {
val result : kotlin.String = apiInstance.addPubkeyForCode(codeId, pubkey)
    println(result)
} catch (e: ClientException) {
println("4xx response calling DiscountsApi#addPubkeyForCode")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling DiscountsApi#addPubkeyForCode")
e.printStackTrace()
}
```


## listCodes

Fetch codes

#### ListOfCodeAvailability listCodes(codeType, dir, limit, organizationId, page, sort)


Return codes with their usage and availability information NOTE: user should have scope &#x60;OrganizationCodeAdmin&#x60; or &#x60;CodeRead&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeType** | **kotlin.String**| Optional: filter by code type | [optional] [enum: Discount, RandomYat]
 **dir** | **kotlin.String**|  | [optional] [enum: Asc, Desc]
 **limit** | **kotlin.Int**|  | [optional]
 **organizationId** | [**java.util.UUID**](../sdk_kotlin_index#)| Optional: filter by organization id | [optional]
 **page** | **kotlin.Int**|  | [optional]
 **sort** | **kotlin.String**|  | [optional]

### Return type


[**ListOfCodeAvailability**](../sdk_kotlin_index#ListOfCodeAvailability)


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

val apiInstance = DiscountsApi()
    val codeType : kotlin.String = codeType_example // kotlin.String | Optional: filter by code type
    val dir : kotlin.String = dir_example // kotlin.String | 
    val limit : kotlin.Int = 56 // kotlin.Int | 
    val organizationId : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | Optional: filter by organization id
    val page : kotlin.Int = 56 // kotlin.Int | 
    val sort : kotlin.String = sort_example // kotlin.String | 
try {
val result : ListOfCodeAvailability = apiInstance.listCodes(codeType, dir, limit, organizationId, page, sort)
    println(result)
} catch (e: ClientException) {
println("4xx response calling DiscountsApi#listCodes")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling DiscountsApi#listCodes")
e.printStackTrace()
}
```


## revokePubkeyForCode

Revoke pubkey for code

#### kotlin.String revokePubkeyForCode(codeId, pubkey)


NOTE: user should have scope &#x60;OrganizationCodeAdmin&#x60; or &#x60;CodeWrite&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeId** | [**java.util.UUID**](../sdk_kotlin_index#)|  |
 **pubkey** | **kotlin.String**| Public key to authorize usage of a code |

### Return type

**kotlin.String**


### Authorization


Configure JWT:
    ApiClient.apiKey["Authorization"] = ""
    ApiClient.apiKeyPrefix["Authorization"] = ""
Configure two_factor:
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

val apiInstance = DiscountsApi()
    val codeId : java.util.UUID = 38400000-8cf0-11bd-b23e-10b96e4ef00d // java.util.UUID | 
    val pubkey : kotlin.String = pubkey_example // kotlin.String | Public key to authorize usage of a code
try {
val result : kotlin.String = apiInstance.revokePubkeyForCode(codeId, pubkey)
    println(result)
} catch (e: ClientException) {
println("4xx response calling DiscountsApi#revokePubkeyForCode")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling DiscountsApi#revokePubkeyForCode")
e.printStackTrace()
}
```

