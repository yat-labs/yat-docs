---
id: cartapi
title: CartAPI
---



All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addItems**](CartAPI.md#additems) | **POST** /cart | Update cart items by adding new items to the cart
[**checkout**](CartAPI.md#checkout) | **POST** /cart/checkout | Checkout cart with provided payment details
[**clear**](CartAPI.md#clear) | **DELETE** /cart | Remove all items from cart
[**getItems**](CartAPI.md#getitems) | **GET** /cart | Return cart content
[**replaceItems**](CartAPI.md#replaceitems) | **PUT** /cart | Replace cart items


# **addItems**
```swift
    internal class func addItems( body: UpdateCartRequest) -> Promise<DisplayOrder>
```

Update cart items by adding new items to the cart

NOTE: user should have scope `CartUpdate`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = UpdateCartRequest(items: [UpdateCartRequest_items(emojiId: "emojiId_example", redemptionCode: "redemptionCode_example")], trackingData: 123) // UpdateCartRequest | 

// Update cart items by adding new items to the cart
CartAPI.addItems(body: body).then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartRequest**](UpdateCartRequest.md) |  | 

### Return type

[**DisplayOrder**](DisplayOrder.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkout**
```swift
    internal class func checkout( body: CheckoutCartRequestBody) -> Promise<DisplayOrder>
```

Checkout cart with provided payment details

NOTE: user should have scope `CartUpdate`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = CheckoutCartRequestBody(method: "method_example", paymentMethodId: 123, provider: "provider_example", pubkey: "pubkey_example", savePaymentMethod: false, setDefault: false, token: "token_example", trackingData: 123) // CheckoutCartRequestBody | 

// Checkout cart with provided payment details
CartAPI.checkout(body: body).then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CheckoutCartRequestBody**](CheckoutCartRequestBody.md) |  | 

### Return type

[**DisplayOrder**](DisplayOrder.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clear**
```swift
    internal class func clear() -> Promise<DisplayOrder>
```

Remove all items from cart

NOTE: user should have scope `CartUpdate`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK


// Remove all items from cart
CartAPI.clear().then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DisplayOrder**](DisplayOrder.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getItems**
```swift
    internal class func getItems() -> Promise<DisplayOrder>
```

Return cart content

NOTE: user should have scope `CartShow`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK


// Return cart content
CartAPI.getItems().then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DisplayOrder**](DisplayOrder.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replaceItems**
```swift
    internal class func replaceItems( body: UpdateCartRequest) -> Promise<DisplayOrder>
```

Replace cart items

NOTE: user should have scope `CartUpdate`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = UpdateCartRequest(items: [UpdateCartRequest_items(emojiId: "emojiId_example", redemptionCode: "redemptionCode_example")], trackingData: 123) // UpdateCartRequest | 

// Replace cart items
CartAPI.replaceItems(body: body).then {
         // when the promise is fulfilled
     }.always {
         // regardless of whether the promise is fulfilled, or rejected
     }.catch { errorType in
         // when the promise is rejected
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartRequest**](UpdateCartRequest.md) |  | 

### Return type

[**DisplayOrder**](DisplayOrder.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

