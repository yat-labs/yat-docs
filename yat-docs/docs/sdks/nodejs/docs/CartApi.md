---
id: cartapi
title: CartApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add**](CartApi.md#add) | **POST** /cart | Update cart items by adding new items to the cart
[**checkout**](CartApi.md#checkout) | **POST** /cart/checkout | Checkout cart with provided payment details
[**clear**](CartApi.md#clear) | **DELETE** /cart | Remove all items from cart
[**getItems**](CartApi.md#getItems) | **GET** /cart | Return cart content
[**replaceItems**](CartApi.md#replaceItems) | **PUT** /cart | Replace cart items



### add

```js
/**
* 
**/
function add(body)
```

Update cart items by adding new items to the cart

#### Notes:
NOTE: user should have scope &#x60;CartUpdate&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.CartApi();
let body = new YatJs.UpdateCartRequest(); // UpdateCartRequest | 
apiInstance.add(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**UpdateCartRequest**](../sdk_nodejs_index#UpdateCartRequest)
|  | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### checkout

```js
/**
* 
**/
function checkout(body)
```

Checkout cart with provided payment details

#### Notes:
NOTE: user should have scope &#x60;CartUpdate&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.CartApi();
let body = new YatJs.CheckoutCartRequest(); // CheckoutCartRequest | 
apiInstance.checkout(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**CheckoutCartRequest**](../sdk_nodejs_index#CheckoutCartRequest)
|  | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### clear

```js
/**
* 
**/
function clear()
```

Remove all items from cart

#### Notes:
NOTE: user should have scope &#x60;CartUpdate&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.CartApi();
apiInstance.clear().then(() => {
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

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### getItems

```js
/**
* 
**/
function getItems()
```

Return cart content

#### Notes:
NOTE: user should have scope &#x60;CartShow&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.CartApi();
apiInstance.getItems().then(() => {
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

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### replaceItems

```js
/**
* 
**/
function replaceItems(body)
```

Replace cart items

#### Notes:
NOTE: user should have scope &#x60;CartUpdate&#x60;

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.CartApi();
let body = new YatJs.UpdateCartRequest(); // UpdateCartRequest | 
apiInstance.replaceItems(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**UpdateCartRequest**](../sdk_nodejs_index#UpdateCartRequest)
|  | 

#### Return type

null (empty response body)

#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

