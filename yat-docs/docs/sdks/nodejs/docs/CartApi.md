## CartApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartCheckoutPost**](CartApi.md#cartCheckoutPost) | **POST** /cart/checkout |  Checkout cart
[**cartDelete**](CartApi.md#cartDelete) | **DELETE** /cart |  Clean up cart
[**cartGet**](CartApi.md#cartGet) | **GET** /cart |  Return cart content
[**cartPost**](CartApi.md#cartPost) | **POST** /cart |  Update cart items
[**cartPut**](CartApi.md#cartPut) | **PUT** /cart |  Replace cart items



### cartCheckoutPost

> cartCheckoutPost(body)

 Checkout cart

Submit order with provided payment details.

> Example

```javascript
import YatJs from 'sample_yat_api_reference';

let apiInstance = new YatJs.CartApi();
let body = new YatJs.CheckoutCartRequest(); // CheckoutCartRequest | 
apiInstance.cartCheckoutPost(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CheckoutCartRequest**](CheckoutCartRequest.md)|  | 

#### Return type

null (empty response body)

#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### cartDelete

> cartDelete()

 Clean up cart

User requires scope &#x60;CartUpdate&#x60;.

> Example

```javascript
import YatJs from 'sample_yat_api_reference';

let apiInstance = new YatJs.CartApi();
apiInstance.cartDelete().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters

This endpoint does not need any parameter.

#### Return type

null (empty response body)

#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### cartGet

> cartGet()

 Return cart content

User requires scope &#x60;CartShow&#x60;.

> Example

```javascript
import YatJs from 'sample_yat_api_reference';

let apiInstance = new YatJs.CartApi();
apiInstance.cartGet().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters

This endpoint does not need any parameter.

#### Return type

null (empty response body)

#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### cartPost

> cartPost(body)

 Update cart items

Will add new items to the cart. User requires scope &#x60;CartUpdate&#x60;.

> Example

```javascript
import YatJs from 'sample_yat_api_reference';

let apiInstance = new YatJs.CartApi();
let body = new YatJs.UpdateCartRequest(); // UpdateCartRequest | 
apiInstance.cartPost(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartRequest**](UpdateCartRequest.md)|  | 

#### Return type

null (empty response body)

#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### cartPut

> cartPut(body)

 Replace cart items

User requires scope &#x60;CartUpdate&#x60;.

> Example

```javascript
import YatJs from 'sample_yat_api_reference';

let apiInstance = new YatJs.CartApi();
let body = new YatJs.UpdateCartRequest(); // UpdateCartRequest | 
apiInstance.cartPut(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdateCartRequest**](UpdateCartRequest.md)|  | 

#### Return type

null (empty response body)

#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

