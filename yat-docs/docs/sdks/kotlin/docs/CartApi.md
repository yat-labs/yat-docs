# CartApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartCheckoutPost**](CartApi.md#cartCheckoutPost) | **POST** /cart/checkout |  Checkout cart
[**cartDelete**](CartApi.md#cartDelete) | **DELETE** /cart |  Clean up cart
[**cartGet**](CartApi.md#cartGet) | **GET** /cart |  Return cart content
[**cartPost**](CartApi.md#cartPost) | **POST** /cart |  Update cart items
[**cartPut**](CartApi.md#cartPut) | **PUT** /cart |  Replace cart items


<a name="cartCheckoutPost"></a>
# **cartCheckoutPost**
> cartCheckoutPost(body)

 Checkout cart

Submit order with provided payment details.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CheckoutCartRequest**](CheckoutCartRequest.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartDelete"></a>
# **cartDelete**
> cartDelete()

 Clean up cart

User requires scope &#x60;CartUpdate&#x60;.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartGet"></a>
# **cartGet**
> cartGet()

 Return cart content

User requires scope &#x60;CartShow&#x60;.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

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

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartPost"></a>
# **cartPost**
> cartPost(body)

 Update cart items

Will add new items to the cart. User requires scope &#x60;CartUpdate&#x60;.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartRequest**](UpdateCartRequest.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="cartPut"></a>
# **cartPut**
> cartPut(body)

 Replace cart items

User requires scope &#x60;CartUpdate&#x60;.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartRequest**](UpdateCartRequest.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

