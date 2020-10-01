---
id: userauthenticationapi
title: UserAuthenticationAPI
---



All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](UserAuthenticationAPI.md#login) | **POST** /auth/token | Login via password
[**magicLinkLogin**](UserAuthenticationAPI.md#magiclinklogin) | **POST** /auth/magic_link | Generate magic link for login
[**refreshToken**](UserAuthenticationAPI.md#refreshtoken) | **POST** /auth/token/refresh | Refresh access token
[**twoFactorAuthentication**](UserAuthenticationAPI.md#twofactorauthentication) | **POST** /auth/2fa | Two factor authentication


# **login**
```swift
    internal class func login( body: LoginRequest) -> Promise<TokenResponse>
```

Login via password

Login via username/password. Will return access and refresh tokens. NOTE: when `requires_2fa` is not empty in response, provided \"refresh_token\" should be used to confirm 2FA code via `POST /auth/2fa`.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = LoginRequest(password: "password_example", alternateId: "alternateId_example", email: "email_example", gRecaptchaResponse: "gRecaptchaResponse_example") // LoginRequest | 

// Login via password
UserAuthenticationAPI.login(body: body).then {
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
 **body** | [**LoginRequest**](LoginRequest.md) |  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **magicLinkLogin**
```swift
    internal class func magicLinkLogin( body: MagicLinkLoginRequest) -> Promise<MagicLinkLoginResponse>
```

Generate magic link for login

Will generate and send magic link to provided user's email. Assuming the email address corresponds to a valid user

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = MagicLinkLoginRequest(email: "email_example", gRecaptchaResponse: "gRecaptchaResponse_example", userId: 123) // MagicLinkLoginRequest | 

// Generate magic link for login
UserAuthenticationAPI.magicLinkLogin(body: body).then {
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
 **body** | [**MagicLinkLoginRequest**](MagicLinkLoginRequest.md) |  | 

### Return type

[**MagicLinkLoginResponse**](MagicLinkLoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **refreshToken**
```swift
    internal class func refreshToken( body: RefreshRequest) -> Promise<TokenResponse>
```

Refresh access token

Will return updated access and refresh tokens. NOTE: when `requires_2fa` is not empty in response, provided \"refresh_token\" should be used to confirm 2FA code via `POST /2fa`

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = RefreshRequest(refreshToken: "refreshToken_example") // RefreshRequest | 

// Refresh access token
UserAuthenticationAPI.refreshToken(body: body).then {
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
 **body** | [**RefreshRequest**](RefreshRequest.md) |  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **twoFactorAuthentication**
```swift
    internal class func twoFactorAuthentication( body: Confirm2Fa) -> Promise<TokenResponse>
```

Two factor authentication

Complete login flow when user requires 2FA. `refresh_token` obtained from a call to `/token` or `/token/refresh` should be used to complete authentication. **Note:** 2FA token has expiration timeout, which is when expired sensitive operations would require authentication via 2fa once again.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import YatSDK

let body = Confirm2Fa(code: "code_example", refreshToken: "refreshToken_example") // Confirm2Fa | 

// Two factor authentication
UserAuthenticationAPI.twoFactorAuthentication(body: body).then {
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
 **body** | [**Confirm2Fa**](Confirm2Fa.md) |  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

