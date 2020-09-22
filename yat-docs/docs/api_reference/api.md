---
id: "api-reference"
slug: "/api-ref"
title: Emoji ID API server
---

:::caution
The emoji id API is currently in BETA. The API has largely stabilised, but endpoint paths, input and
output parameters may still change without notice.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

----

## General information

### Description
**Version:** 0.1.34

Emoji ID is a directory service that associates almost any type of structured data with a short, memorable identifier the emoji id.

----
## Authentication

* API Key (JWT)
    - Parameter Name: **Authorization**, in: header. Use format `Bearer TOKEN`

* API Key (apiKey)
    - Parameter Name: **Authorization**, in: header. When user has 2FA configured: JWT token in `Bearer TOKEN` format which has not expired 2FA timeout

----

## User Authentication

From a user experience standpoint, we want encourage the use of magic links.<br/>                1. Users request a magic link <br/>
                2. If 2FA is enabled submit proceed to 2FA.

### Two factor authentication

<a id="opIdtwoFactorAuthentication"></a>

*Two factor authentication*

Complete login flow when user requires 2FA. `refresh_token` obtained from a call to `/token` or `/token/refresh` should be used to complete authentication. **Note:** 2FA token has expiration timeout, which is when expired sensitive operations would require authentication via 2fa once again.

#### Example
  `POST /auth/2fa`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "code": "string",
  "refresh_token": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/auth/2fa',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "code": "string",
  "refresh_token": "string"
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/auth/2fa")
        .post(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/auth/2fa")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "code": "string",
  "refresh_token": "string"
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "code": "string",
  "refresh_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Confirm2Fa](#confirm2fa)|true|none|

<h4 id="twofactorauthentication-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TokenResponse](#tokenresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::note
This operation does not require authentication
:::

### Generate magic link for login

<a id="opIdmagicLinkLogin"></a>

*Generate magic link for login*

Will generate and send magic link to provided user's email. Assuming the email address corresponds to a valid user

#### Example
  `POST /auth/magic_link`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "email": "string",
  "g-recaptcha-response": "string",
  "user_id": "a169451c-8525-4352-b8ca-070dd449a1a5"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/auth/magic_link',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "email": "string",
  "g-recaptcha-response": "string",
  "user_id": "a169451c-8525-4352-b8ca-070dd449a1a5"
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/auth/magic_link")
        .post(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/auth/magic_link")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "email": "string",
  "g-recaptcha-response": "string",
  "user_id": "a169451c-8525-4352-b8ca-070dd449a1a5"
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "email": "string",
  "g-recaptcha-response": "string",
  "user_id": "a169451c-8525-4352-b8ca-070dd449a1a5"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MagicLinkLoginRequest](#magiclinkloginrequest)|true|none|

<h4 id="magiclinklogin-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[SuccessResponse](#successresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::note
This operation does not require authentication
:::

### Login via password

<a id="opIdlogin"></a>

*Login via password*

Login via username/password. Will return access and refresh tokens. NOTE: when `requires_2fa` is not empty in response, provided "refresh_token" should be used to confirm 2FA code via `POST /auth/2fa`.

#### Example
  `POST /auth/token`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "alternate_id": "string",
  "email": "string",
  "g-recaptcha-response": "string",
  "password": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/auth/token',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "alternate_id": "string",
  "email": "string",
  "g-recaptcha-response": "string",
  "password": "string"
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/auth/token")
        .post(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/auth/token")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "alternate_id": "string",
  "email": "string",
  "g-recaptcha-response": "string",
  "password": "string"
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "alternate_id": "string",
  "email": "string",
  "g-recaptcha-response": "string",
  "password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoginRequest](#loginrequest)|true|none|

<h4 id="login-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TokenResponse](#tokenresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::note
This operation does not require authentication
:::

### Refreshes access token

<a id="opIdrefreshToken"></a>

*Refreshes access token*

Will return updated access and refresh tokens. NOTE: when `requires_2fa` is not empty in response, provided "refresh_token" should be used to confirm 2FA code via `POST /2fa`

#### Example
  `POST /auth/token/refresh`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "refresh_token": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/auth/token/refresh',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "refresh_token": "string"
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/auth/token/refresh")
        .post(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/auth/token/refresh")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "refresh_token": "string"
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "refresh_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefreshRequest](#refreshrequest)|true|none|

<h4 id="refreshtoken-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TokenResponse](#tokenresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::note
This operation does not require authentication
:::

----

## Cart

Cart management endpoints

### Return cart content

<a id="opIdgetItems"></a>

*Return cart content*

NOTE: user should have scope `CartShow`

#### Example
  `GET /cart`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/cart',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/cart")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/cart")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

<h4 id="getitems-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[DisplayOrder](#displayorder)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Replace cart items

<a id="opIdreplaceItems"></a>

*Replace cart items*

NOTE: user should have scope `CartUpdate`

#### Example
  `PUT /cart`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "items": [
    {
      "emoji_id": "🐱🐉🐋🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/cart',
{
  method: 'PUT',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "items": [
    {
      "emoji_id": "🐱🐉🐋🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/cart")
        .put(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/cart")

var request = URLRequest(url: url!)
request.httpMethod = "PUT"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "items": [
    {
      "emoji_id": "🐱🐉🐋🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "items": [
    {
      "emoji_id": "🐱🐉🐋🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateCartRequest](#updatecartrequest)|true|none|

<h4 id="replaceitems-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[DisplayOrder](#displayorder)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Update cart items by adding new items to the cart

<a id="opIdadd"></a>

*Update cart items by adding new items to the cart*

NOTE: user should have scope `CartUpdate`

#### Example
  `POST /cart`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "items": [
    {
      "emoji_id": "🐱🐉🐋🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/cart',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "items": [
    {
      "emoji_id": "🐱🐉🐋🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/cart")
        .post(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/cart")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "items": [
    {
      "emoji_id": "🐱🐉🐋🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "items": [
    {
      "emoji_id": "🐱🐉🐋🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateCartRequest](#updatecartrequest)|true|none|

<h4 id="add-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[DisplayOrder](#displayorder)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Remove all items from cart

<a id="opIdclear"></a>

*Remove all items from cart*

NOTE: user should have scope `CartUpdate`

#### Example
  `DELETE /cart`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/cart',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/cart")
        .delete()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/cart")

var request = URLRequest(url: url!)
request.httpMethod = "DELETE"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

<h4 id="clear-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[DisplayOrder](#displayorder)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Checkout cart with provided payment details

<a id="opIdcheckout"></a>

*Checkout cart with provided payment details*

NOTE: user should have scope `CartUpdate`

#### Example
  `POST /cart/checkout`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "method": "Default",
  "pubkey": "74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f",
  "tracking_data": {}
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/cart/checkout',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "method": "Default",
  "pubkey": "74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f",
  "tracking_data": {}
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/cart/checkout")
        .post(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/cart/checkout")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "method": "Default",
  "pubkey": "74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f",
  "tracking_data": {}
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "method": "Default",
  "pubkey": "74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f",
  "tracking_data": {}
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CheckoutCartRequest](#checkoutcartrequest)|true|none|

<h4 id="checkout-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[DisplayOrder](#displayorder)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

----

## Emoji

Emoji endpoints. Endpoints to interact with the supported Emoji character sets.

### List of supported emoji characters

<a id="opIdemoji_list"></a>

*List of supported emoji characters*

Result is an array of emojis `["🍗","🌈"]`

#### Example
  `GET /emoji`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*'
};

fetch('/emoji',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/emoji")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/emoji")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

<h4 id="emoji_list-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<h4 id="emoji_list-responseschema">Response Schema</h4>

:::note
This operation does not require authentication
:::

### Return random Emoji

<a id="opIdrandom"></a>

*Return random Emoji*

Returns price, availability and other information for random emoji

#### Example
  `GET /emoji_id/random`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*'
};

fetch('/emoji_id/random',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/emoji_id/random")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/emoji_id/random")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

<h4 id="random-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RandomResult](#randomresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::note
This operation does not require authentication
:::

----

## Emoji ID

Endpoints for interacting and managing your emoji ids. Endpoints that result in data modification require authentication and the necessary permissions (or scopes). The most common endpoint will be a lookup, i.e. `/emoji_id/{emoji_id}` and does not require authorization, this is when a user wants to get records associated with an Emoji ID.

### List user's emoji Ids

<a id="opIdlist"></a>

*List user's emoji Ids*

If no parameters provided will return all emojis of current user. When `user_id` or `organization_id` specified will return emojis owned by specified user or organization, requires Admin or organization power user access. Result is an array of emoji ids in display format (i.e. with all skin tone modifiers applied) `["🤟🏾🍗👽👻","🌈👍🏿💯"]`

#### Example
  `GET /emoji_id`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/emoji_id',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/emoji_id")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/emoji_id")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_id|query|string(uuid)|false|Lookup emojis owned by `organization_id`, requires organization power user role|
|user_id|query|string(uuid)|false|Lookup emojis owned by `user_id`, requires Admin role|

<h4 id="list-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<h4 id="list-responseschema">Response Schema</h4>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EmojiId](#emojiid)]|false|none|[The emoji id is the key value used in the Emoji ID key-value lookup system. As the name suggests, the id consists solely of emoji characters from a [carefully curated list](/docs/api-ref/#list-users-emoji-ids) ranging in length from one to six characters. Emoji ids are 'owned' in the sense that there is a private-public keypair associated with the id that granted transfer and write-access rights to anyone with knowledge of the emoji id's private key. The primary use of emoji ids is to associate useful related data with the id. This creates a unified identity around that emoji id. For example, someone may associate a website, a twitter handle and a BTC payment address to an emoji id. Those three disparate entities can then be easily accessed using the same emoji id.]|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Search for EmojiID

<a id="opIdsearch"></a>

*Search for EmojiID*

Returns price, availability and other information on emoji and its alternates (similar EmojiIDs that are currently available)

#### Example
  `GET /emoji_id/search`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*'
};

fetch('/emoji_id/search?emoji_id=string',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/emoji_id/search?emoji_id=string")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/emoji_id/search?emoji_id=string")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emoji_id|query|string|true|Emoji ID in percent url-encoded form|
|redemption_code|query|string|false|Redemption code|

<h4 id="search-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[SearchResult](#searchresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::note
This operation does not require authentication
:::

### Lookup EmojiId

<a id="opIdlookup"></a>

*Lookup EmojiId*

Will filter and return data from supplied tags, If tags filter is not supplied will return all tags attached. It will also try to get views for the past month, if not available will return -1. This method is called when a user wants to look up an Emoji ID's records such as a crypto address or a redirect

#### Example
  `GET /emoji_id/{emoji_id}`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*'
};

fetch('/emoji_id/{emoji_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/emoji_id/{emoji_id}")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/emoji_id/{emoji_id}")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emoji_id|path|string|true|none|
|tags|query|string|false|Comma-separated list of tags to display, skip it to display all, e.g. `?tags=0x0001,0x1001`|

<h4 id="lookup-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[LookupResponse](#lookupresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::note
This operation does not require authentication
:::

### Edit EmojiId

<a id="opIdedit"></a>

*Edit EmojiId*

Add and remove records in EmojiId, update merkle_root and signature too. Access notes: user expected to own the emoji's pubkey, have Admin role or be power member of organization if pubkey belongs to organization, otherwise operation will fail.

#### Example
  `PATCH /emoji_id/{emoji_id}`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "delete": [
    "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944"
  ],
  "insert": [
    {
      "data": "127.0.0.1",
      "tag": "0x4101"
    }
  ],
  "merkle_root": "916ea8882cdbe350ca9cec48680e4bf37d75930d8d033bed57128c0809537336",
  "signature": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/emoji_id/{emoji_id}',
{
  method: 'PATCH',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "delete": [
    "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944"
  ],
  "insert": [
    {
      "data": "127.0.0.1",
      "tag": "0x4101"
    }
  ],
  "merkle_root": "916ea8882cdbe350ca9cec48680e4bf37d75930d8d033bed57128c0809537336",
  "signature": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/emoji_id/{emoji_id}")
        .patch(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/emoji_id/{emoji_id}")

var request = URLRequest(url: url!)
request.httpMethod = "PATCH"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "delete": [
    "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944"
  ],
  "insert": [
    {
      "data": "127.0.0.1",
      "tag": "0x4101"
    }
  ],
  "merkle_root": "916ea8882cdbe350ca9cec48680e4bf37d75930d8d033bed57128c0809537336",
  "signature": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "delete": [
    "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944"
  ],
  "insert": [
    {
      "data": "127.0.0.1",
      "tag": "0x4101"
    }
  ],
  "merkle_root": "916ea8882cdbe350ca9cec48680e4bf37d75930d8d033bed57128c0809537336",
  "signature": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emoji_id|path|string|true|none|
|body|body|[EditRequest](#editrequest)|true|none|

<h4 id="edit-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<h4 id="edit-responseschema">Response Schema</h4>

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
:::

----

## User Interest

User Interest endpoints. Endpoints for users to express interest in Emoji IDs.

### Returns a paginated list of user interest records associated with the user

<a id="opIdgetInterestedUsers"></a>

*Returns a paginated list of user interest records associated with the user*

NOTE: user should have scope `UserInterestRead`

#### Example
  `GET /user_interests`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/user_interests',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/user_interests")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/user_interests")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

<h4 id="getinterestedusers-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Payload](#payload)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Create new interest in emoji to be notified when available

<a id="opIdregisterInterest"></a>

*Create new interest in emoji to be notified when available*

NOTE: user should have scope `UserInterestWrite`

#### Example
  `POST /user_interests`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "emoji_id": "🐱🐉🐋🐴🐵"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/user_interests',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "emoji_id": "🐱🐉🐋🐴🐵"
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/user_interests")
        .post(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/user_interests")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "emoji_id": "🐱🐉🐋🐴🐵"
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "emoji_id": "🐱🐉🐋🐴🐵"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewUserInterestParameters](#newuserinterestparameters)|true|none|

<h4 id="registerinterest-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[UserInterest](#userinterest)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Given an EmojiId returns information about the user interest if a record exists for this user

<a id="opIdgetUserInterestForYat"></a>

*Given an EmojiId returns information about the user interest if a record exists for this user*

NOTE: user should have scope `UserInterestRead`

#### Example
  `GET /user_interests/{emoji_id}`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/user_interests/{emoji_id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/user_interests/{emoji_id}")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/user_interests/{emoji_id}")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emoji_id|path|string|true|none|

<h4 id="getuserinterestforyat-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[UserInterest](#userinterest)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Destroys the user interest preventing this Emoji ID's notification emails from being sent for this user

<a id="opIddeleteUserInterest"></a>

*Destroys the user interest preventing this Emoji ID's notification emails from being sent for this user*

NOTE: user should have scope `UserInterestDelete`

#### Example
  `DELETE /user_interests/{emoji_id}`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/user_interests/{emoji_id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/user_interests/{emoji_id}")
        .delete()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/user_interests/{emoji_id}")

var request = URLRequest(url: url!)
request.httpMethod = "DELETE"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emoji_id|path|string|true|none|

<h4 id="deleteuserinterest-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[UserInterest](#userinterest)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

----

## Users

User Management. Only applicable for users with custodial wallets.

### Current user account

<a id="opIdgetAccount"></a>

*Current user account*

Displays the currently logged in user account details.

#### Example
  `GET /account`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/account',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/account")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/account")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

<h4 id="getaccount-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[CurrentUser](#currentuser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Update the currently logged in user

<a id="opIdupdate"></a>

*Update the currently logged in user*

NOTE: user should have scope `UserWriteSelf`

#### Example
  `PATCH /account`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "email": "string",
  "first_name": "string",
  "last_name": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/account',
{
  method: 'PATCH',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "email": "string",
  "first_name": "string",
  "last_name": "string"
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/account")
        .patch(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/account")

var request = URLRequest(url: url!)
request.httpMethod = "PATCH"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "email": "string",
  "first_name": "string",
  "last_name": "string"
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "email": "string",
  "first_name": "string",
  "last_name": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateUserParameters](#updateuserparameters)|true|none|

<h4 id="update-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[CurrentUser](#currentuser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
:::

### List users

<a id="opIdgetAllUsers"></a>

*List users*

NOTE: user should have scope `UserList`

#### Example
  `GET /users`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/users',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/users")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/users")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

<h4 id="getallusers-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Payload](#payload)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Register a User

<a id="opIdcreateUser"></a>

*Register a User*

Create a user and a custodial wallet

#### Example
  `POST /users`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "alternate_id": "string",
  "email": "string",
  "first_name": "string",
  "g-recaptcha-response": "string",
  "last_name": "string",
  "password": "string",
  "source": "string"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/users',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "alternate_id": "string",
  "email": "string",
  "first_name": "string",
  "g-recaptcha-response": "string",
  "last_name": "string",
  "password": "string",
  "source": "string"
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/users")
        .post(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/users")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "alternate_id": "string",
  "email": "string",
  "first_name": "string",
  "g-recaptcha-response": "string",
  "last_name": "string",
  "password": "string",
  "source": "string"
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "alternate_id": "string",
  "email": "string",
  "first_name": "string",
  "g-recaptcha-response": "string",
  "last_name": "string",
  "password": "string",
  "source": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterUserParameters](#registeruserparameters)|true|none|

<h4 id="createuser-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[CurrentUser](#currentuser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::note
This operation does not require authentication
:::

### Delete a user

<a id="opIddelete"></a>

*Delete a user*

NOTE: user should have scope `UserDeleteSelf` if deleting themselves, `UserDelete` is needed for other users

#### Example
  `DELETE /users/{id}`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/users/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/users/{id}")
        .delete()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/users/{id}")

var request = URLRequest(url: url!)
request.httpMethod = "DELETE"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h4 id="delete-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[DisplayUser](#displayuser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Update a user as an admin

<a id="opIdupdateUser"></a>

*Update a user as an admin*

NOTE: user should have scope `UserWrite`

#### Example
  `PATCH /users/{id}`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "free_limit": 0,
  "is_active": true,
  "user_parameters": {
    "email": "string",
    "first_name": "string",
    "last_name": "string"
  }
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/users/{id}',
{
  method: 'PATCH',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "free_limit": 0,
  "is_active": true,
  "user_parameters": {
    "email": "string",
    "first_name": "string",
    "last_name": "string"
  }
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/users/{id}")
        .patch(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/users/{id}")

var request = URLRequest(url: url!)
request.httpMethod = "PATCH"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "free_limit": 0,
  "is_active": true,
  "user_parameters": {
    "email": "string",
    "first_name": "string",
    "last_name": "string"
  }
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "free_limit": 0,
  "is_active": true,
  "user_parameters": {
    "email": "string",
    "first_name": "string",
    "last_name": "string"
  }
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|
|body|body|[AdminUpdateUserParameters](#adminupdateuserparameters)|true|none|

<h4 id="updateuser-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[DisplayUser](#displayuser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
:::

----

## Key Management

Manage a user's public keys

### Retrieve pubkeys

<a id="opIdgetPubkeys"></a>

*Retrieve pubkeys*

Retrieves pubkeys owned by currently authenticated user. This call expects empty body.

#### Example
  `GET /pubkeys`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/pubkeys',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/pubkeys")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/pubkeys")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

<h4 id="getpubkeys-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<h4 id="getpubkeys-responseschema">Response Schema</h4>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pubkey](#pubkey)]|false|none|[A hexadecimal representation of a 256-bit public key.]|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Generate custodial wallet

<a id="opIdcreateWallet"></a>

*Generate custodial wallet*

Generates custodial wallet with pubkey for currently authenticated user. This call expects empty body.

#### Example
  `POST /pubkeys`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/pubkeys',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/pubkeys")
        .post()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/pubkeys")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

<h4 id="createwallet-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Pubkey](#pubkey)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
:::

### Add pubkey for current user

<a id="opIdaddPubkey"></a>

*Add pubkey for current user*

This call expects empty body

#### Example
  `POST /pubkeys/{pubkey}`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/pubkeys/{pubkey}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/pubkeys/{pubkey}")
        .post()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/pubkeys/{pubkey}")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pubkey|path|string|true|none|

<h4 id="addpubkey-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Pubkey](#pubkey)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
:::

### Retrieve pubkeys by user_id

<a id="opIdgetPubkeysForUser"></a>

*Retrieve pubkeys by user_id*

NOTE: user should have scope `UserPubkeyList`

#### Example
  `GET /users/{user_id}/pubkeys`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/users/{user_id}/pubkeys',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/users/{user_id}/pubkeys")
        .get()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/users/{user_id}/pubkeys")

var request = URLRequest(url: url!)
request.httpMethod = "GET"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string(uuid)|true|none|

<h4 id="getpubkeysforuser-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<h4 id="getpubkeysforuser-responseschema">Response Schema</h4>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pubkey](#pubkey)]|false|none|[A hexadecimal representation of a 256-bit public key.]|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

### Add pubkey for user by user_id

<a id="opIdaddPubkeyForUser"></a>

*Add pubkey for user by user_id*

NOTE: user should have scope `UserPubkeyWrite` This call expects empty body

#### Example
  `POST /users/{user_id}/pubkeys/{pubkey}`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/users/{user_id}/pubkeys/{pubkey}',
{
  method: 'POST',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val request = Request.Builder()
        .url("$apiBaseURL/users/{user_id}/pubkeys/{pubkey}")
        .post()
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/users/{user_id}/pubkeys/{pubkey}")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Public key to add|
|pubkey|path|string(uuid)|true|`user_id` to grant public key ownership to|

<h4 id="addpubkeyforuser-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Pubkey](#pubkey)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
:::

----

## Proxy

### Calls a pre-defined proxy service with the provided data

<a id="opIdcallProxy"></a>

*Calls a pre-defined proxy service with the provided data*

Returns the response from the proxied service as a string

#### Example
  `POST /proxy`

<Tabs
  defaultValue="nodejs"
  groupId="operation_code_samples"
  values={[
    
    { label: 'Javascript / NodeJs', value: 'nodejs', },
    
    { label: 'Android / Kotlin', value: 'kotlin', },
    
    { label: 'iOS / Swift 5', value: 'swift5', },
    
  ]
}>

<TabItem value="nodejs">

```javascript
const fetch = require('node-fetch');
const inputBody = {
  "data": "string",
  "service": "RestPack"
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*',
  'Authorization':'API_KEY'
};

fetch('/proxy',
{
  method: 'POST',
  body: JSON.stringify(inputBody),
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.Callback
import okhttp3.Response
import okhttp3.Call
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

fun main() {
    val apiBaseURL = "https://api.y.at"
    val httpClient = OkHttpClient()
    val requestBody = 
        """
{
  "data": "string",
  "service": "RestPack"
}
        """.toRequestBody("application/json; charset=utf-8".toMediaType())
    val request = Request.Builder()
        .url("$apiBaseURL/proxy")
        .post(requestBody)
        .build()
    httpClient.newCall(request).enqueue(object : Callback {
        override fun onResponse(call: Call, response: Response) {
            if (response.isSuccessful) {
                if (response.body != null) {
                    println("Successful (${response.code}) with response: " + response.body?.string())
                } else {
                    println("Successful (${response.code}) with empty response.")
                }
            } else {
                println("Failed with status code: ${response.code}")
            }
        }
        override fun onFailure(call: Call, e: IOException) {
            println("Request failed: $e")
        }
    })
}
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation

let apiBaseURL = "https://api.y.at"
let url = URL(string: apiBaseURL + "/proxy")

var request = URLRequest(url: url!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")

let requestBody = """
{
  "data": "string",
  "service": "RestPack"
}
"""
request.httpBody = requestBody.data(using: .utf8)

let sessionConfiguration = URLSessionConfiguration.default
let session = URLSession(configuration: sessionConfiguration)
let task = session.dataTask(with: request) { (data, response, error) in
    guard error == nil else {
        print("Request failed: \(String(describing: error))")
        return
    }
    if let response = response as? HTTPURLResponse {
        if (response.statusCode >= 200
            && response.statusCode < 300) {
            print("Successful with status code: \(response.statusCode)")
        } else {
            print("Failed with status code: \(response.statusCode)")
        }
        // display body
        if let data = data, let responseBody = String(data: data, encoding: .utf8) {
            print("Response body:")
            print(responseBody)
        } else {
            print("Empty response body.")
        }
    } else {
        print("Unexpected response type.")
    }
}
task.resume()
```

</TabItem>

</Tabs>

#### Body parameter

```json
{
  "data": "string",
  "service": "RestPack"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProxyCallParameters](#proxycallparameters)|true|none|

<h4 id="callproxy-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ProxyResult](#proxyresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

:::info Authentication
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
:::

----

## Schemas

### AdminUpdateUserParameters

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|free_limit|integer(int32)|false|none|Optional: Free limit for how many yats the user may purchase.|
|is_active|boolean|false|none|Optional: If the user is active, updating to true triggers user activation related events.|
|user_parameters|object|true|none|None.|
|» email|string|false|none|Optional: Email.|
|» first_name|string|false|none|Optional: First name.|
|» last_name|string|false|none|Optional: Last name.|

#### Example

```json
{
  "free_limit": 0,
  "is_active": true,
  "user_parameters": {
    "email": "string",
    "first_name": "string",
    "last_name": "string"
  }
}

```

### CheckoutCartRequest

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|true|none|Payment method.|
|pubkey|string|false|none|Optional: The user's public key to associate with this emoji id.|
|tracking_data|object|false|none|Optional: tracking data.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|Default|
|method|Free|

#### Example

```json
{
  "method": "Default",
  "pubkey": "74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f",
  "tracking_data": {}
}

```

### Confirm2Fa

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Two factor authentication code.|
|refresh_token|string|true|none|Refresh token obtained from login request.|

#### Example

```json
{
  "code": "string",
  "refresh_token": "string"
}

```

### CurrentUser

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|global_scopes|[string]|true|none|A list of fine-grained permissions the user may perform.|
|organization_roles|object|true|none|The role this user has in each organisation.|
|» **additionalProperties**|string|false|none|None.|
|organization_scopes|object|true|none|The scopes that are granted to this user for each organisation.|
|» **additionalProperties**|[string]|false|none|None.|
|pubkeys|[string]|true|none|A list of this user's public keys.|
|role|string|true|none|The role assigned to this user.|
|user|object|true|none|The current user's details.|
|» alternate_id|string|false|none|None.|
|» created_at|string(date-time)|true|none|None.|
|» deactivated_at|string(date-time)|false|none|None.|
|» email|string|false|none|None.|
|» first_name|string|false|none|None.|
|» free_limit|integer(int32)|true|none|None.|
|» id|string(uuid)|true|none|None.|
|» is_active|boolean|true|none|None.|
|» last_name|string|false|none|None.|
|» remaining_free_emoji|integer(int32)|true|none|None.|
|» role|string|true|none|None.|
|» source|string|false|none|None.|
|» two_factor_auth|any|false|none|None.|
|» updated_at|string(date-time)|true|none|None.|

#### Enumerated Values

|Property|Value|
|---|---|
|**additionalProperties**|Admin|
|**additionalProperties**|OrgController|
|**additionalProperties**|OrgMember|
|**additionalProperties**|OrgOwner|
|**additionalProperties**|Super|
|**additionalProperties**|User|
|role|Admin|
|role|OrgController|
|role|OrgMember|
|role|OrgOwner|
|role|Super|
|role|User|
|role|Admin|
|role|OrgController|
|role|OrgMember|
|role|OrgOwner|
|role|Super|
|role|User|

#### Example

```json
{
  "global_scopes": [
    "AdminEmojiRegister"
  ],
  "organization_roles": {
    "property1": "Admin",
    "property2": "Admin"
  },
  "organization_scopes": {
    "property1": [
      "AdminEmojiRegister"
    ],
    "property2": [
      "AdminEmojiRegister"
    ]
  },
  "pubkeys": [
    "74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f"
  ],
  "role": "Admin",
  "user": {
    "alternate_id": "string",
    "created_at": "2019-08-24T14:15:22Z",
    "deactivated_at": "2019-08-24T14:15:22Z",
    "email": "string",
    "first_name": "string",
    "free_limit": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "is_active": true,
    "last_name": "string",
    "remaining_free_emoji": 0,
    "role": "Admin",
    "source": "string",
    "two_factor_auth": null,
    "updated_at": "2019-08-24T14:15:22Z"
  }
}

```

### DisplayOrder

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|A UTC timestamp for when this order was initially created.|
|eligible_for_refund|boolean|true|none|Whether an order is eligible for a refund via an admin.|
|expires_at|string(date-time)|false|none|Checkout carts have a limited time before they expire.|
|id|string(uuid)|true|none|The unique identifier for this order.|
|misc_refunded_total_in_cents|integer(int64)|true|none|The total of miscellaneous refund amounts retirned to the order.|
|order_items|[any]|true|none|The list of individual line items making up this order.|
|» client_fee_in_cents|integer(int64)|true|none|The fee attributable to the referral partner, in addition to the nominal unit price, in USD cents.|
|» code_id|string(uuid)|false|none|The code associated with this order item for providing a discount.|
|» company_fee_in_cents|integer(int64)|true|none|The fee attributable to the service host or company, in addition to the nominal unit price, in USD cents.|
|» created_at|string(date-time)|true|none|A UTC timestamp for when this order item was created.|
|» emoji_id|string|false|none|The emoji id that is being purchased.|
|» id|string(uuid)|true|none|A unique identifier for this order item.|
|» item_type|string|true|none|The type of order.|
|» order_id|string(uuid)|true|none|The id of the order this order item.|
|» parent_id|string(uuid)|false|none|Parent order item's ID, set for discounts and fees.|
|» quantity|integer(int64)|true|none|The number of items in the line order.|
|» refunded_quantity|integer(int64)|true|none|None.|
|» unit_price_in_cents|integer(int64)|true|none|The nominal, non-discounted price of the item, in USD cents.|
|» updated_at|string(date-time)|true|none|A UTC timestamp for when ny field in the order item was modified.|
|order_number|string|true|none|The order number is the last 8 characters of the order's ID for user display purposes.|
|organization_id|string(uuid)|false|none|The organization id of the user, if applicable.|
|paid_at|string(date-time)|false|none|A UTC timestamp for when payment for this order was received.|
|payment_method_data|object|false|none|Payment method data for payment methods that provide QR code checkout options set via checkout.|
|refunded_total_in_cents|integer(int64)|true|none|The total of refund amounts for the order.|
|seconds_until_expiry|integer(int32)|false|none|A convenience field indicating how long before `expires_at` is reached.|
|status|string|true|none|The order of the status.|
|total_in_cents|integer(int64)|true|none|The sum of all the items in this order, plus fees, in USD cents.|
|updated_at|string(date-time)|true|none|A UTC timestamp for the last time any field in this order was modified.|
|user|object|true|none|The details of the user placing this order.|
|» alternate_id|string|false|none|None.|
|» created_at|string(date-time)|true|none|None.|
|» deactivated_at|string(date-time)|false|none|None.|
|» email|string|false|none|None.|
|» first_name|string|false|none|None.|
|» free_limit|integer(int32)|true|none|None.|
|» id|string(uuid)|true|none|None.|
|» is_active|boolean|true|none|None.|
|» last_name|string|false|none|None.|
|» remaining_free_emoji|integer(int32)|true|none|None.|
|» role|string|true|none|None.|
|» source|string|false|none|None.|
|» two_factor_auth|any|false|none|None.|
|» updated_at|string(date-time)|true|none|None.|
|user_id|string(uuid)|true|none|The identifier of the user placing this order.|

#### Enumerated Values

|Property|Value|
|---|---|
|item_type|Discount|
|item_type|EmojiId|
|status|Cancelled|
|status|Draft|
|status|Paid|
|status|PendingPayment|
|role|Admin|
|role|OrgController|
|role|OrgMember|
|role|OrgOwner|
|role|Super|
|role|User|

#### Example

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "eligible_for_refund": true,
  "expires_at": "2019-08-24T14:15:22Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "misc_refunded_total_in_cents": 0,
  "order_items": [
    {
      "client_fee_in_cents": 0,
      "code_id": "c6a02b7d-40f4-4982-9c97-607f4e20761a",
      "company_fee_in_cents": 0,
      "created_at": "2019-08-24T14:15:22Z",
      "emoji_id": "🐱🐉🐋🐴🐵",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "item_type": "Discount",
      "order_id": "93101167-9065-4b9c-b98b-5d789a3ed9fe",
      "parent_id": "1c6ca187-e61f-4301-8dcb-0e9749e89eef",
      "quantity": 0,
      "refunded_quantity": 0,
      "unit_price_in_cents": 0,
      "updated_at": "2019-08-24T14:15:22Z"
    }
  ],
  "order_number": "string",
  "organization_id": "7c60d51f-b44e-4682-87d6-449835ea4de6",
  "paid_at": "2019-08-24T14:15:22Z",
  "payment_method_data": {},
  "refunded_total_in_cents": 0,
  "seconds_until_expiry": 0,
  "status": "Cancelled",
  "total_in_cents": 0,
  "updated_at": "2019-08-24T14:15:22Z",
  "user": {
    "alternate_id": "string",
    "created_at": "2019-08-24T14:15:22Z",
    "deactivated_at": "2019-08-24T14:15:22Z",
    "email": "string",
    "first_name": "string",
    "free_limit": 0,
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "is_active": true,
    "last_name": "string",
    "remaining_free_emoji": 0,
    "role": "Admin",
    "source": "string",
    "two_factor_auth": null,
    "updated_at": "2019-08-24T14:15:22Z"
  },
  "user_id": "a169451c-8525-4352-b8ca-070dd449a1a5"
}

```

### DisplayUser

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternate_id|string|false|none|None.|
|created_at|string(date-time)|true|none|None.|
|deactivated_at|string(date-time)|false|none|None.|
|email|string|false|none|None.|
|first_name|string|false|none|None.|
|free_limit|integer(int32)|true|none|None.|
|id|string(uuid)|true|none|None.|
|is_active|boolean|true|none|None.|
|last_name|string|false|none|None.|
|remaining_free_emoji|integer(int32)|true|none|None.|
|role|string|true|none|None.|
|source|string|false|none|None.|
|two_factor_auth|any|false|none|None.|
|updated_at|string(date-time)|true|none|None.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|Admin|
|role|OrgController|
|role|OrgMember|
|role|OrgOwner|
|role|Super|
|role|User|

#### Example

```json
{
  "alternate_id": "string",
  "created_at": "2019-08-24T14:15:22Z",
  "deactivated_at": "2019-08-24T14:15:22Z",
  "email": "string",
  "first_name": "string",
  "free_limit": 0,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "is_active": true,
  "last_name": "string",
  "remaining_free_emoji": 0,
  "role": "Admin",
  "source": "string",
  "two_factor_auth": null,
  "updated_at": "2019-08-24T14:15:22Z"
}

```

### EditRequest

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete|[string]|false|none|Optional: hashes of records to delete.|
|insert|[any]|false|none|Optional: list of records to add.|
|» data|string|true|none|Category data in text format.|
|» tag|string|true|none|Category ID as a hex number.|
|merkle_root|string|false|none|Optional: merkle root (use WASM to generate).|
|signature|string|false|none|Optional: signature (use WASM to generate).|

#### Example

```json
{
  "delete": [
    "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944"
  ],
  "insert": [
    {
      "data": "127.0.0.1",
      "tag": "0x4101"
    }
  ],
  "merkle_root": "916ea8882cdbe350ca9cec48680e4bf37d75930d8d033bed57128c0809537336",
  "signature": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}

```

### EmojiId

The emoji id is the key value used in the Emoji ID key-value lookup system. As the name suggests, the id consists solely of emoji characters from a [carefully curated list](/docs/api-ref/#list-users-emoji-ids) ranging in length from one to six characters. Emoji ids are 'owned' in the sense that there is a private-public keypair associated with the id that granted transfer and write-access rights to anyone with knowledge of the emoji id's private key. The primary use of emoji ids is to associate useful related data with the id. This creates a unified identity around that emoji id. For example, someone may associate a website, a twitter handle and a BTC payment address to an emoji id. Those three disparate entities can then be easily accessed using the same emoji id.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|The emoji id is the key value used in the Emoji ID key-value lookup system.|

#### Example

```json
"🐱🐉🐋🐴🐵"

```

### LoginRequest

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternate_id|string|false|none|Alternate identifier.|
|email|string|false|none|Email.|
|g-recaptcha-response|string|false|none|Response from google Recaptcha.|
|password|string|true|none|Required: Password.|

#### Example

```json
{
  "alternate_id": "string",
  "email": "string",
  "g-recaptcha-response": "string",
  "password": "string"
}

```

### LookupResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|None.|
|» code|string(int64)|true|none|Error code.|
|» reason|string|true|none|None.|
|result|[any]|false|none|Records associated with EmojiID.|
|» data|string|true|none|Category data in text or hex encoded formats.|
|» hash|string|true|none|Hash identifies record, can be used to delete records.|
|» tag|string|true|none|Category as a hex string number.|
|status|boolean|true|none|Response status.|
|views_past_month|integer(int64)|false|none|Number of times emoji viewed during past month.|

#### Example

```json
{
  "error": {
    "code": "404",
    "reason": "string"
  },
  "result": [
    {
      "data": "string",
      "hash": "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944",
      "tag": "0x4001"
    }
  ],
  "status": true,
  "views_past_month": "42"
}

```

### MagicLinkLoginRequest

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email.|
|g-recaptcha-response|string|false|none|Response from google Recaptcha.|
|user_id|string(uuid)|false|none|User ID.|

#### Example

```json
{
  "email": "string",
  "g-recaptcha-response": "string",
  "user_id": "a169451c-8525-4352-b8ca-070dd449a1a5"
}

```

### NewUserInterestParameters

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|emoji_id|string|true|none|Emoji ID to express interest in.|

#### Example

```json
{
  "emoji_id": "🐱🐉🐋🐴🐵"
}

```

### Payload

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[any]|true|none|None.|
|» alternate_id|string|false|none|None.|
|» created_at|string(date-time)|true|none|None.|
|» deactivated_at|string(date-time)|false|none|None.|
|» email|string|false|none|None.|
|» first_name|string|false|none|None.|
|» free_limit|integer(int32)|true|none|None.|
|» id|string(uuid)|true|none|None.|
|» is_active|boolean|true|none|None.|
|» last_name|string|false|none|None.|
|» remaining_free_emoji|integer(int32)|true|none|None.|
|» role|string|true|none|None.|
|» source|string|false|none|None.|
|» two_factor_auth|any|false|none|None.|
|» updated_at|string(date-time)|true|none|None.|
|paging|object|true|none|None.|
|» dir|string|true|none|None.|
|» limit|integer(int32)|true|none|None.|
|» page|integer(int32)|true|none|None.|
|» sort|string|true|none|None.|
|» tags|object|true|none|None.|
|»» **additionalProperties**|object|false|none|None.|
|» total|integer(int64)|true|none|None.|

#### Enumerated Values

|Property|Value|
|---|---|
|role|Admin|
|role|OrgController|
|role|OrgMember|
|role|OrgOwner|
|role|Super|
|role|User|
|dir|Asc|
|dir|Desc|

#### Example

```json
{
  "data": [
    {
      "alternate_id": "string",
      "created_at": "2019-08-24T14:15:22Z",
      "deactivated_at": "2019-08-24T14:15:22Z",
      "email": "string",
      "first_name": "string",
      "free_limit": 0,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "is_active": true,
      "last_name": "string",
      "remaining_free_emoji": 0,
      "role": "Admin",
      "source": "string",
      "two_factor_auth": null,
      "updated_at": "2019-08-24T14:15:22Z"
    }
  ],
  "paging": {
    "dir": "Asc",
    "limit": 0,
    "page": 0,
    "sort": "string",
    "tags": {
      "property1": {},
      "property2": {}
    },
    "total": 0
  }
}

```

### ProxyCallParameters

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|The data to pass through to the proxied service.|
|service|string|true|none|`ProxyService` type.|

#### Enumerated Values

|Property|Value|
|---|---|
|service|RestPack|
|service|Echo|
|service|Scraper|

#### Example

```json
{
  "data": "string",
  "service": "RestPack"
}

```

### ProxyResult

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|The response from the proxied service as a String.|

#### Example

```json
{
  "value": "string"
}

```

### Pubkey

A hexadecimal representation of a 256-bit public key.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|A hexadecimal representation of a 256-bit public key.|

#### Example

```json
"74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f"

```

### RandomResult

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[any]|true|none|Random Emoji IDs.|
|» availability|string|true|none|The availability state of this emoji.|
|» available|boolean|true|none|Whether the Emoji ID is available for purchase.|
|» discounted_price|integer(int64)|true|none|Pricing in US cents, e.|
|» emoji_id|string|true|none|Emoji ID in canonical form.|
|» price|integer(int64)|true|none|Pricing in US cents, e.|
|» views_past_month|integer(int64)|true|none|Total lookups using this API, if someone is viewing this Emoji ID using their own self hosted node, it will not be counted here.|

#### Enumerated Values

|Property|Value|
|---|---|
|availability|Available|
|availability|Taken|
|availability|InCart|
|availability|ComingSoon|
|availability|NoPrice|

#### Example

```json
{
  "result": [
    {
      "availability": "Available",
      "available": true,
      "discounted_price": 0,
      "emoji_id": "🐱🐉🐋🐴🐵",
      "price": 0,
      "views_past_month": 0
    }
  ]
}

```

### RefreshRequest

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refresh_token|string|true|none|Refresh token obtained from login request.|

#### Example

```json
{
  "refresh_token": "string"
}

```

### RegisterUserParameters

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternate_id|string|false|none|Alternate identifier.|
|email|string|false|none|Email address.|
|first_name|string|false|none|Optional: first name.|
|g-recaptcha-response|string|false|none|Response from google Recaptcha.|
|last_name|string|false|none|Optional: last name.|
|password|string|false|none|Optional: password.|
|source|string|false|none|Required when registering with `alternate_id`, source for non custodial user.|

#### Example

```json
{
  "alternate_id": "string",
  "email": "string",
  "first_name": "string",
  "g-recaptcha-response": "string",
  "last_name": "string",
  "password": "string",
  "source": "string"
}

```

### SearchResult

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternates|[any]|true|none|Alternative Emoji IDs.|
|» availability|string|true|none|The availability state of this emoji.|
|» available|boolean|true|none|Whether the Emoji ID is available for purchase.|
|» discounted_price|integer(int64)|true|none|Pricing in US cents, e.|
|» emoji_id|string|true|none|Emoji ID in canonical form.|
|» price|integer(int64)|true|none|Pricing in US cents, e.|
|» views_past_month|integer(int64)|true|none|Total lookups using this API, if someone is viewing this Emoji ID using their own self hosted node, it will not be counted here.|
|result|object|true|none|The specific Emoji ID that the user requests.|
|» availability|string|true|none|The availability state of this emoji.|
|» available|boolean|true|none|Whether the Emoji ID is available for purchase.|
|» discounted_price|integer(int64)|true|none|Pricing in US cents, e.|
|» emoji_id|string|true|none|Emoji ID in canonical form.|
|» price|integer(int64)|true|none|Pricing in US cents, e.|
|» views_past_month|integer(int64)|true|none|Total lookups using this API, if someone is viewing this Emoji ID using their own self hosted node, it will not be counted here.|

#### Enumerated Values

|Property|Value|
|---|---|
|availability|Available|
|availability|Taken|
|availability|InCart|
|availability|ComingSoon|
|availability|NoPrice|
|availability|Available|
|availability|Taken|
|availability|InCart|
|availability|ComingSoon|
|availability|NoPrice|

#### Example

```json
{
  "alternates": [
    {
      "availability": "Available",
      "available": true,
      "discounted_price": 0,
      "emoji_id": "🐱🐉🐋🐴🐵",
      "price": 0,
      "views_past_month": 0
    }
  ],
  "result": {
    "availability": "Available",
    "available": true,
    "discounted_price": 0,
    "emoji_id": "🐱🐉🐋🐴🐵",
    "price": 0,
    "views_past_month": 0
  }
}

```

### SuccessResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|None.|

#### Example

```json
{
  "message": "string"
}

```

### TokenResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|Access token.|
|refresh_token|string|true|none|Refresh token,  only required for 2FA (???).|
|requires_2fa|any|false|none|Whether has 2FA enabled or not.|

#### Example

```json
{
  "access_token": "string",
  "refresh_token": "string",
  "requires_2fa": null
}

```

### UpdateCartRequest

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[any]|true|none|New items to add to cart.|
|» emoji_id|string|true|none|EmojiID to buy.|
|» redemption_code|string|false|none|Redemption Code if applicable.|
|tracking_data|object|false|none|Tracking data.|

#### Example

```json
{
  "items": [
    {
      "emoji_id": "🐱🐉🐋🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
}

```

### UpdateUserParameters

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Optional: Email.|
|first_name|string|false|none|Optional: First name.|
|last_name|string|false|none|Optional: Last name.|

#### Example

```json
{
  "email": "string",
  "first_name": "string",
  "last_name": "string"
}

```

### UserInterest

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|None.|
|emoji_id|string|true|none|None.|
|id|string(uuid)|true|none|None.|
|updated_at|string(date-time)|true|none|None.|
|user_id|string(uuid)|true|none|None.|

#### Example

```json
{
  "created_at": "2019-08-24T14:15:22Z",
  "emoji_id": "🐱🐉🐋🐴🐵",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "updated_at": "2019-08-24T14:15:22Z",
  "user_id": "a169451c-8525-4352-b8ca-070dd449a1a5"
}

```

