## ProxyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proxyPost**](ProxyApi.md#proxyPost) | **POST** /proxy |  Calls a pre-defined proxy service with the provided data



### proxyPost

> ProxyResult proxyPost(body)

 Calls a pre-defined proxy service with the provided data

Returns the response from the proxied service as a string

> Example

```javascript
import YatJs from 'sample_yat_api_reference';

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
 **body** | [**ProxyCallParameters**](ProxyCallParameters.md)|  | 

#### Return type

[**ProxyResult**](ProxyResult.md)

#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

