---
id: cartapi
title: CartApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItems**](CartApi.md#addItems) | **POST** /cart | Update cart items by adding new items to the cart[**checkout**](CartApi.md#checkout) | **POST** /cart/checkout | Checkout cart with provided payment details[**clear**](CartApi.md#clear) | **DELETE** /cart | Remove all items from cart[**getItems**](CartApi.md#getItems) | **GET** /cart | Return cart content[**replaceItems**](CartApi.md#replaceItems) | **PUT** /cart | Replace cart items


## addItems

Update cart items by adding new items to the cart

#### DisplayOrder addItems(body)


NOTE: user should have scope &#x60;CartUpdate&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartRequest**](../sdk_kotlin_index#UpdateCartRequest)|  |

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

val apiInstance = CartApi()
    val body : UpdateCartRequest =  // UpdateCartRequest | 
try {
val result : DisplayOrder = apiInstance.addItems(body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling CartApi#addItems")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#addItems")
e.printStackTrace()
}
```


## checkout

Checkout cart with provided payment details

#### DisplayOrder checkout(body)


NOTE: user should have scope &#x60;CartUpdate&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CheckoutCartRequestBody**](../sdk_kotlin_index#CheckoutCartRequestBody)|  |

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

val apiInstance = CartApi()
    val body : CheckoutCartRequestBody =  // CheckoutCartRequestBody | 
try {
val result : DisplayOrder = apiInstance.checkout(body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling CartApi#checkout")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#checkout")
e.printStackTrace()
}
```


## clear

Remove all items from cart

#### DisplayOrder clear()


NOTE: user should have scope &#x60;CartUpdate&#x60;

### Parameters
This endpoint does not need any parameter.

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

val apiInstance = CartApi()
try {
val result : DisplayOrder = apiInstance.clear()
    println(result)
} catch (e: ClientException) {
println("4xx response calling CartApi#clear")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#clear")
e.printStackTrace()
}
```


## getItems

Return cart content

#### DisplayOrder getItems()


NOTE: user should have scope &#x60;CartShow&#x60;

### Parameters
This endpoint does not need any parameter.

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

val apiInstance = CartApi()
try {
val result : DisplayOrder = apiInstance.getItems()
    println(result)
} catch (e: ClientException) {
println("4xx response calling CartApi#getItems")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#getItems")
e.printStackTrace()
}
```


## replaceItems

Replace cart items

#### DisplayOrder replaceItems(body)


NOTE: user should have scope &#x60;CartUpdate&#x60;

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartRequest**](../sdk_kotlin_index#UpdateCartRequest)|  |

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

val apiInstance = CartApi()
    val body : UpdateCartRequest =  // UpdateCartRequest | 
try {
val result : DisplayOrder = apiInstance.replaceItems(body)
    println(result)
} catch (e: ClientException) {
println("4xx response calling CartApi#replaceItems")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#replaceItems")
e.printStackTrace()
}
```

