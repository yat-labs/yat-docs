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
[**getItems**](CartApi.md#getitems) | **GET** /cart | Return cart content
[**replaceItems**](CartApi.md#replaceitems) | **PUT** /cart | Replace cart items



### add

```js
/**
* @returns DisplayOrder
**/
async function add(body: UpdateCartRequest)
```

Update cart items by adding new items to the cart

#### Notes:
NOTE: user should have scope `CartUpdate`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let body = new YatJs.UpdateCartRequest(); // UpdateCartRequest 
// populate body...

try {
  let res = await api.cart().add(body);
  // res is of type DisplayOrder
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**UpdateCartRequest**](../sdk_nodejs_index#updatecartrequest)
|  | 

#### Return type


[**DisplayOrder**](../sdk_nodejs_index#DisplayOrder)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### checkout

```js
/**
* @returns DisplayOrder
**/
async function checkout(body: CheckoutCartRequest)
```

Checkout cart with provided payment details

#### Notes:
NOTE: user should have scope `CartUpdate`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let body = new YatJs.CheckoutCartRequest(); // CheckoutCartRequest 
// populate body...

try {
  let res = await api.cart().checkout(body);
  // res is of type DisplayOrder
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**CheckoutCartRequest**](../sdk_nodejs_index#checkoutcartrequest)
|  | 

#### Return type


[**DisplayOrder**](../sdk_nodejs_index#DisplayOrder)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### clear

```js
/**
* @returns DisplayOrder
**/
async function clear()
```

Remove all items from cart

#### Notes:
NOTE: user should have scope `CartUpdate`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

try {
  let res = await api.cart().clear();
  // res is of type DisplayOrder
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters

This endpoint does not have any parameters.

#### Return type


[**DisplayOrder**](../sdk_nodejs_index#DisplayOrder)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### getItems

```js
/**
* @returns DisplayOrder
**/
async function getItems()
```

Return cart content

#### Notes:
NOTE: user should have scope `CartShow`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

try {
  let res = await api.cart().getItems();
  // res is of type DisplayOrder
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters

This endpoint does not have any parameters.

#### Return type


[**DisplayOrder**](../sdk_nodejs_index#DisplayOrder)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### replaceItems

```js
/**
* @returns DisplayOrder
**/
async function replaceItems(body: UpdateCartRequest)
```

Replace cart items

#### Notes:
NOTE: user should have scope `CartUpdate`

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let body = new YatJs.UpdateCartRequest(); // UpdateCartRequest 
// populate body...

try {
  let res = await api.cart().replaceItems(body);
  // res is of type DisplayOrder
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**UpdateCartRequest**](../sdk_nodejs_index#updatecartrequest)
|  | 

#### Return type


[**DisplayOrder**](../sdk_nodejs_index#DisplayOrder)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

