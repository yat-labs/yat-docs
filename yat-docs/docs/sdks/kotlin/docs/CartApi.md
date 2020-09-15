---
id: cartapi
title: CartApi
---


All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add**](CartApi.md#add) | **POST** /cart | Update cart items by adding new items to the cart[**checkout**](CartApi.md#checkout) | **POST** /cart/checkout | Checkout cart with provided payment details[**clear**](CartApi.md#clear) | **DELETE** /cart | Remove all items from cart[**getItems**](CartApi.md#getItems) | **GET** /cart | Return cart content[**replaceItems**](CartApi.md#replaceItems) | **PUT** /cart | Replace cart items


## add

Update cart items by adding new items to the cart

#### add(body)


NOTE: user should have scope &#x60;CartUpdate&#x60;

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
apiInstance.add(body)
} catch (e: ClientException) {
println("4xx response calling CartApi#add")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#add")
e.printStackTrace()
}
```


## checkout

Checkout cart with provided payment details

#### checkout(body)


NOTE: user should have scope &#x60;CartUpdate&#x60;

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
apiInstance.checkout(body)
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

#### clear()


NOTE: user should have scope &#x60;CartUpdate&#x60;

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
apiInstance.clear()
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

#### getItems()


NOTE: user should have scope &#x60;CartShow&#x60;

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
apiInstance.getItems()
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

#### replaceItems(body)


NOTE: user should have scope &#x60;CartUpdate&#x60;

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
apiInstance.replaceItems(body)
} catch (e: ClientException) {
println("4xx response calling CartApi#replaceItems")
e.printStackTrace()
} catch (e: ServerException) {
println("5xx response calling CartApi#replaceItems")
e.printStackTrace()
}
```

