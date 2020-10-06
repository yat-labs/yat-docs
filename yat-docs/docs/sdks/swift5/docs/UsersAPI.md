---
id: usersapi
title: UsersAPI
---



All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirm2FA**](UsersAPI.md#confirm2fa) | **POST** /account/2fa/confirm | Confirm two factor authentication update
[**createUser**](UsersAPI.md#createuser) | **POST** /users | Register a User
[**delete**](UsersAPI.md#delete) | **DELETE** /users/{id} | Delete a user
[**getAccount**](UsersAPI.md#getaccount) | **GET** /account | Current user account
[**getAllUsers**](UsersAPI.md#getallusers) | **GET** /users | List users
[**update**](UsersAPI.md#update) | **PATCH** /account | Update the currently logged in user
[**update2FA**](UsersAPI.md#update2fa) | **POST** /account/2fa | Update two factor authentication
[**updateUser**](UsersAPI.md#updateuser) | **PATCH** /users/{id} | Update a user as an admin


# **confirm2FA**
```swift
    internal class func confirm2FA( body: Confirm2FaUpdate) -> Promise<SuccessResponse>
```

Confirm two factor authentication update

Match 2FA code and commit two factor authentication setting for user account

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = Confirm2FaUpdate(code: "code_example") // Confirm2FaUpdate | 

// Confirm two factor authentication update
UsersAPI.confirm2FA(body: body).then {
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
 **body** | [**Confirm2FaUpdate**](Confirm2FaUpdate.md) |  | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createUser**
```swift
    internal class func createUser( body: RegisterUserParameters) -> Promise<CurrentUser>
```

Register a User

Create a user and a custodial wallet

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = RegisterUserParameters(alternateId: "alternateId_example", email: "email_example", firstName: "firstName_example", gRecaptchaResponse: "gRecaptchaResponse_example", lastName: "lastName_example", password: "password_example", source: "source_example") // RegisterUserParameters | 

// Register a User
UsersAPI.createUser(body: body).then {
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
 **body** | [**RegisterUserParameters**](RegisterUserParameters.md) |  | 

### Return type

[**CurrentUser**](CurrentUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete**
```swift
    internal class func delete( id: UUID) -> Promise<DisplayUser>
```

Delete a user

NOTE: user should have scope `UserDeleteSelf` if deleting themselves, `UserDelete` is needed for other users

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let id = 987 // UUID | 

// Delete a user
UsersAPI.delete(id: id).then {
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
 **id** | [**UUID**](.md) |  | 

### Return type

[**DisplayUser**](DisplayUser.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAccount**
```swift
    internal class func getAccount() -> Promise<CurrentUser>
```

Current user account

Displays the currently logged in user account details.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK


// Current user account
UsersAPI.getAccount().then {
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

[**CurrentUser**](CurrentUser.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllUsers**
```swift
    internal class func getAllUsers( dir: Dir_getAllUsers? = nil,  limit: Int? = nil,  page: Int? = nil,  sort: String? = nil) -> Promise<ListOfDisplayUser>
```

List users

NOTE: user should have scope `UserList`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let dir = "dir_example" // String |  (optional)
let limit = 987 // Int |  (optional)
let page = 987 // Int |  (optional)
let sort = "sort_example" // String |  (optional)

// List users
UsersAPI.getAllUsers(dir: dir, limit: limit, page: page, sort: sort).then {
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
 **dir** | **String** |  | [optional] 
 **limit** | **Int** |  | [optional] 
 **page** | **Int** |  | [optional] 
 **sort** | **String** |  | [optional] 

### Return type

[**ListOfDisplayUser**](ListOfDisplayUser.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
```swift
    internal class func update( body: UpdateUserParameters) -> Promise<CurrentUser>
```

Update the currently logged in user

NOTE: user should have scope `UserWriteSelf`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = UpdateUserParameters(email: "email_example", firstName: "firstName_example", lastName: "lastName_example") // UpdateUserParameters | 

// Update the currently logged in user
UsersAPI.update(body: body).then {
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
 **body** | [**UpdateUserParameters**](UpdateUserParameters.md) |  | 

### Return type

[**CurrentUser**](CurrentUser.md)

### Authorization

[JWT](../README.md#JWT), [two_factor](../README.md#two_factor)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update2FA**
```swift
    internal class func update2FA( body: Update2FAParameters) -> Promise<Update2FAResponse>
```

Update two factor authentication

Returning String with SVG QR code when enabling 2FA OR empty String in the case of disabling<br/> NOTE: This call does not take effect until code is confirmed via `POST /account/2fa/confirm`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = Update2FAParameters(height: 123, requires2fa: "requires2fa_example", width: 123) // Update2FAParameters | 

// Update two factor authentication
UsersAPI.update2FA(body: body).then {
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
 **body** | [**Update2FAParameters**](Update2FAParameters.md) |  | 

### Return type

[**Update2FAResponse**](Update2FAResponse.md)

### Authorization

[JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
```swift
    internal class func updateUser( id: UUID,  body: AdminUpdateUserParameters) -> Promise<DisplayUser>
```

Update a user as an admin

NOTE: user should have scope `UserWrite`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let id = 987 // UUID | 
let body = AdminUpdateUserParameters(email: "email_example", firstName: "firstName_example", freeLimit: 123, isActive: false, lastName: "lastName_example") // AdminUpdateUserParameters | 

// Update a user as an admin
UsersAPI.updateUser(id: id, body: body).then {
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
 **id** | [**UUID**](.md) |  | 
 **body** | [**AdminUpdateUserParameters**](AdminUpdateUserParameters.md) |  | 

### Return type

[**DisplayUser**](DisplayUser.md)

### Authorization

[JWT](../README.md#JWT), [two_factor](../README.md#two_factor)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
