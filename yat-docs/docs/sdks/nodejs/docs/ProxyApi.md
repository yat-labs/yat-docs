---
id: proxyapi
title: ProxyApi
---

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callProxy**](ProxyApi.md#callProxy) | **POST** /proxy | Calls a pre-defined proxy service with the provided data



### callProxy

```js
/**
*  @returns ProxyResult 
**/
function callProxy(body)
```

Calls a pre-defined proxy service with the provided data

#### Notes:
Returns the response from the proxied service as a string

#### Example

```javascript
import YatJs from 'emoji_id_api_server';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.ProxyApi();
let body = new YatJs.ProxyCallParameters(); // ProxyCallParameters | 
apiInstance.callProxy(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | [**ProxyCallParameters**](../sdk_nodejs_index#ProxyCallParameters)
|  | 

#### Return type


[**ProxyResult**](../sdk_nodejs_index#ProxyResult)


#### Authorization

[JWT](../sdk_nodejs_index#JWT)

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

