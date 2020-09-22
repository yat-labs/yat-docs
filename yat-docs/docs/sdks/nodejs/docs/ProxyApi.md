---
id: proxyapi
title: ProxyApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callProxy**](ProxyApi.md#callproxy) | **POST** /proxy | Calls a pre-defined proxy service with the provided data



### callProxy

```js
/**
* @returns ProxyResult
**/
async function callProxy(body: ProxyCallParameters)
```

Calls a pre-defined proxy service with the provided data

#### Notes:
Returns the response from the proxied service as a string

#### Example

```javascript
const yat = require('yatjs');
const api = new yat.YatJs();

await api.login("your@email.com", "your_password");

let body = new YatJs.ProxyCallParameters(); // ProxyCallParameters 
// populate body...

try {
  let res = await api.proxy().callProxy(body);
  // res is of type ProxyResult
  console.log('API called successfully. Result: ', res);
} catch (error) {
  console.error(error);
}

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**ProxyCallParameters**](../sdk_nodejs_index#proxycallparameters)
|  | 

#### Return type


[**ProxyResult**](../sdk_nodejs_index#ProxyResult)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

