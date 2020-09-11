---
id: cartapi
title: CartApi
---


All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartCheckoutPost**](CartApi.md#cartCheckoutPost) | **POST** /cart/checkout |  Checkout cart[**cartDelete**](CartApi.md#cartDelete) | **DELETE** /cart |  Clean up cart[**cartGet**](CartApi.md#cartGet) | **GET** /cart |  Return cart content[**cartPost**](CartApi.md#cartPost) | **POST** /cart |  Update cart items[**cartPut**](CartApi.md#cartPut) | **PUT** /cart |  Replace cart items


## cartCheckoutPost

 Checkout cart

#### cartCheckoutPost(body)


Submit order with provided payment details.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CheckoutCartRequest**](../sdk_kotlin_index#CheckoutCartRequest)|  |

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

val apiInstance = CartApi()
    val body : CheckoutCartRequest =  // CheckoutCartRequest | 
try {
apiInstance.cartCheckoutPost(body)
} catch (e: ClientException) {
println("4xx response calling CartApi#cartCheckoutPost")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#cartCheckoutPost")
e.printStackTrace()
}
```


## cartDelete

 Clean up cart

#### cartDelete()


User requires scope &#x60;CartUpdate&#x60;.

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

val apiInstance = CartApi()
try {
apiInstance.cartDelete()
} catch (e: ClientException) {
println("4xx response calling CartApi#cartDelete")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#cartDelete")
e.printStackTrace()
}
```


## cartGet

 Return cart content

#### cartGet()


User requires scope &#x60;CartShow&#x60;.

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

val apiInstance = CartApi()
try {
apiInstance.cartGet()
} catch (e: ClientException) {
println("4xx response calling CartApi#cartGet")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#cartGet")
e.printStackTrace()
}
```


## cartPost

 Update cart items

#### cartPost(body)


Will add new items to the cart. User requires scope &#x60;CartUpdate&#x60;.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartRequest**](../sdk_kotlin_index#UpdateCartRequest)|  |

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

val apiInstance = CartApi()
    val body : UpdateCartRequest =  // UpdateCartRequest | 
try {
apiInstance.cartPost(body)
} catch (e: ClientException) {
println("4xx response calling CartApi#cartPost")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#cartPost")
e.printStackTrace()
}
```


## cartPut

 Replace cart items

#### cartPut(body)


User requires scope &#x60;CartUpdate&#x60;.

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartRequest**](../sdk_kotlin_index#UpdateCartRequest)|  |

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

val apiInstance = CartApi()
    val body : UpdateCartRequest =  // UpdateCartRequest | 
try {
apiInstance.cartPut(body)
} catch (e: ClientException) {
println("4xx response calling CartApi#cartPut")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#cartPut")
e.printStackTrace()
}
```

