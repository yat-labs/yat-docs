# UserAuthenticationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth2faPost**](UserAuthenticationApi.md#auth2faPost) | **POST** /auth/2fa |  Two factor authentication
[**authMagicLinkPost**](UserAuthenticationApi.md#authMagicLinkPost) | **POST** /auth/magic_link |  Generate magic link for login
[**authTokenPost**](UserAuthenticationApi.md#authTokenPost) | **POST** /auth/token |  Login via password
[**authTokenRefreshPost**](UserAuthenticationApi.md#authTokenRefreshPost) | **POST** /auth/token/refresh |  Refreshes access token


<a name="auth2faPost"></a>
# **auth2faPost**
> TokenResponse auth2faPost(body)

 Two factor authentication

Complete login flow when user requires 2FA. &#x60;refresh_token&#x60; obtained from a call to &#x60;/token&#x60; or &#x60;/token/refresh&#x60; should be used to complete authentication. **Note:** 2FA token has expiration timeout, which is when expired sensitive operations would require authentication via 2fa once again.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

val apiInstance = UserAuthenticationApi()
val body : Confirm2Fa =  // Confirm2Fa | 
try {
    val result : TokenResponse = apiInstance.auth2faPost(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserAuthenticationApi#auth2faPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserAuthenticationApi#auth2faPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Confirm2Fa**](Confirm2Fa.md)|  |

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="authMagicLinkPost"></a>
# **authMagicLinkPost**
> MagicLinkLoginResponse authMagicLinkPost(body)

 Generate magic link for login

Will generate and send magic link to provided user&#39;s email. Assuming the email address corresponds to a valid user

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

val apiInstance = UserAuthenticationApi()
val body : MagicLinkLoginRequest =  // MagicLinkLoginRequest | 
try {
    val result : MagicLinkLoginResponse = apiInstance.authMagicLinkPost(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserAuthenticationApi#authMagicLinkPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserAuthenticationApi#authMagicLinkPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**MagicLinkLoginRequest**](MagicLinkLoginRequest.md)|  |

### Return type

[**MagicLinkLoginResponse**](MagicLinkLoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="authTokenPost"></a>
# **authTokenPost**
> TokenResponse authTokenPost(body)

 Login via password

Login via username/password. Will return access and refresh tokens. NOTE: when &#x60;requires_2fa&#x60; is not empty in response, provided \&quot;refresh_token\&quot; should be used to confirm 2FA code via &#x60;POST /auth/2fa&#x60;.

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

val apiInstance = UserAuthenticationApi()
val body : LoginRequest =  // LoginRequest | 
try {
    val result : TokenResponse = apiInstance.authTokenPost(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserAuthenticationApi#authTokenPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserAuthenticationApi#authTokenPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginRequest**](LoginRequest.md)|  |

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="authTokenRefreshPost"></a>
# **authTokenRefreshPost**
> TokenResponse authTokenRefreshPost(body)

 Refreshes access token

Will return updated access and refresh tokens. NOTE: when &#x60;requires_2fa&#x60; is not empty in response, provided \&quot;refresh_token\&quot; should be used to confirm 2FA code via &#x60;POST /2fa&#x60;

### Example
```kotlin
// Import classes:
//import com.tarilabs.client.infrastructure.*
//import com.tarilabs.client.models.*

val apiInstance = UserAuthenticationApi()
val body : RefreshRequest =  // RefreshRequest | 
try {
    val result : TokenResponse = apiInstance.authTokenRefreshPost(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UserAuthenticationApi#authTokenRefreshPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UserAuthenticationApi#authTokenRefreshPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RefreshRequest**](RefreshRequest.md)|  |

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

