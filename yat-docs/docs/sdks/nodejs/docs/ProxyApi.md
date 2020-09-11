---
id: proxyapi
title: ProxyApi
---

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proxyPost**](ProxyApi.md#proxyPost) | **POST** /proxy |  Calls a pre-defined proxy service with the provided data



### proxyPost

> ProxyResult proxyPost(body)

 Calls a pre-defined proxy service with the provided data

Returns the response from the proxied service as a string

> Example

```javascript
import YatJs from 'yat';
let defaultClient = YatJs.ApiClient.instance;
// Configure API key authorization: JWT
let JWT = defaultClient.authentications['JWT'];
JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWT.apiKeyPrefix = 'Token';

let apiInstance = new YatJs.ProxyApi();
let body = new YatJs.ProxyCallParameters(); // ProxyCallParameters | 
apiInstance.proxyPost(body).then((data) => {
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

