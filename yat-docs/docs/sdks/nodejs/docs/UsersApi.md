## UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersPost**](UsersApi.md#usersPost) | **POST** /users |  Register a User



### usersPost

> usersPost(body)

 Register a User

Create a user and a custodial wallet

> Example

```javascript
import YatJs from 'sample_yat_api_reference';

let apiInstance = new YatJs.UsersApi();
let body = new YatJs.RegisterUserParameters(); // RegisterUserParameters | 
apiInstance.usersPost(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

#### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegisterUserParameters**](RegisterUserParameters.md)|  | 

#### Return type

null (empty response body)

#### Authorization

No authorization required

#### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

