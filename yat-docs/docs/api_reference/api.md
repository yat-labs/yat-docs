---
id: index
title: API reference
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

----

## General information

### Description
**Version:** 

No description provided.

----
## Authentication

* API Key (JWT)
    - Parameter Name: **Authorization**, in: header. Use format `Bearer TOKEN`

* API Key (apiKey)
    - Parameter Name: **Authorization**, in: header. When user has 2FA configured: JWT token in `Bearer TOKEN` format which has not expired 2FA timeout

----

## User Authentication

From a user experience standpoint, we want encourage the use of magic links <br />                1. Users request a magic link <br />
                2. If 2FA is enabled submit proceed to 2FA
                

###  Two factor authentication

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Two factor authentication*

Complete login flow when user requires 2FA. `refresh_token` obtained from a call to `/token` or `/token/refresh` should be used to complete authentication. **Note:** 2FA token has expiration timeout, which is when expired sensitive operations would require authentication via 2fa once again.

> Body parameter

```json
{
  "code": "string",
  "refresh_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Confirm2Fa](#schemaconfirm2fa)|true|none|

> Example responses

> 200 Response

<h4 id="post__auth_2fa-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TokenResponse](#schematokenresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="success">
This operation does not require authentication
</aside>

###  Generate magic link for login

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Generate magic link for login*

Will generate and send magic link to provided user's email. Assuming the email address corresponds to a valid user

> Body parameter

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
|body|body|[MagicLinkLoginRequest](#schemamagiclinkloginrequest)|true|none|

> Example responses

> 200 Response

<h4 id="post__auth_magic_link-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[MagicLinkLoginResponse](#schemamagiclinkloginresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="success">
This operation does not require authentication
</aside>

###  Login via password

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Login via password*

Login via username/password. Will return access and refresh tokens. NOTE: when `requires_2fa` is not empty in response, provided "refresh_token" should be used to confirm 2FA code via `POST /auth/2fa`.

> Body parameter

```json
{
  "email": "string",
  "g-recaptcha-response": "string",
  "password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoginRequest](#schemaloginrequest)|true|none|

> Example responses

> 200 Response

<h4 id="post__auth_token-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TokenResponse](#schematokenresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="success">
This operation does not require authentication
</aside>

###  Refreshes access token

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Refreshes access token*

Will return updated access and refresh tokens. NOTE: when `requires_2fa` is not empty in response, provided "refresh_token" should be used to confirm 2FA code via `POST /2fa`

> Body parameter

```json
{
  "refresh_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RefreshRequest](#schemarefreshrequest)|true|none|

> Example responses

> 200 Response

<h4 id="post__auth_token_refresh-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TokenResponse](#schematokenresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="success">
This operation does not require authentication
</aside>

----

## Cart

Cart management endpoints

###  Return cart content

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Return cart content*

User requires scope `CartShow`.

<h4 id="get__cart-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Replace cart items

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
      "eid": "🐱🐲🐳🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
};
const headers = {
  'Content-Type':'application/json',
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Replace cart items*

User requires scope `CartUpdate`.

> Body parameter

```json
{
  "items": [
    {
      "eid": "🐱🐲🐳🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateCartRequest](#schemaupdatecartrequest)|true|none|

<h4 id="put__cart-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Update cart items

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
      "eid": "🐱🐲🐳🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
};
const headers = {
  'Content-Type':'application/json',
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Update cart items*

Will add new items to the cart. User requires scope `CartUpdate`.

> Body parameter

```json
{
  "items": [
    {
      "eid": "🐱🐲🐳🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateCartRequest](#schemaupdatecartrequest)|true|none|

<h4 id="post__cart-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Clean up cart

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Clean up cart*

User requires scope `CartUpdate`.

<h4 id="delete__cart-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Checkout cart

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Checkout cart*

Submit order with provided payment details.

> Body parameter

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
|body|body|[CheckoutCartRequest](#schemacheckoutcartrequest)|true|none|

<h4 id="post__cart_checkout-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

----

## Emoji

                Emoji ID endpoints. The most common endpoint will be a lookup `/emoji/{eid}`,
                this is when a user wants to get records associated with an Emoji ID.
            

###  List emojis

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
  'Authorization':'API_KEY'
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* List emojis*

If no parameters provided will return all emojis of current user. When `user_id` or `organization_id` specified will return emojis owned by specified user or organization, requires Admin or organization power user access. Result is array of emojis `["🍗","🌈"]`

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|organization_id|query|string(uuid)|false|Lookup emojis owned by `organization_id`, requires organization power user role|
|user_id|query|string(uuid)|false|Lookup emojis owned by `user_id`, requires Admin role|

<h4 id="get__emoji-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Search for EmojiID

#### Example
  `GET /emoji/search`

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

fetch('/emoji/search?eid=string',
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Search for EmojiID*

Returns price, availability and other information on emoji and its alternates (similar EmojiIDs that are currently available)

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eid|query|string|true|Emoji ID in percent url-encoded form|
|redemption_code|query|string|false|Redemption code|

> Example responses

> 200 Response

<h4 id="get__emoji_search-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[SearchResult](#schemasearchresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="success">
This operation does not require authentication
</aside>

###  Lookup EmojiId

#### Example
  `GET /emoji/{eid}`

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

fetch('/emoji/{eid}',
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Lookup EmojiId*

Will filter and return data from supplied tags, If tags filter is not supplied will return all tags attached. It will also try to get views for the past month, if not available will return -1. This method is called when a user wants to look up an EID's records such as a crypto address or a redirect

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|query|string|false|Comma-separated list of tags to display, skip it to display all, e.g. `?tags=0x0001,0x1001`|
|eid|path|string|true|none|

> Example responses

> 200 Response

<h4 id="get__emoji_{eid}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[LookupResponse](#schemalookupresponse)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="success">
This operation does not require authentication
</aside>

###  Edit EmojiId

#### Example
  `PATCH /emoji/{eid}`

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

fetch('/emoji/{eid}',
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Edit EmojiId*

Add and remove records in EmojiId, update merkle_root and signature too. Access notes: user expected to own the emoji's pubkey, have Admin role or be power member of organization if pubkey belongs to organization, otherwise operation will fail.

> Body parameter

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
|body|body|[EditRequest](#schemaeditrequest)|true|none|
|eid|path|string|true|none|

> Example responses

> 200 Response

<h4 id="patch__emoji_{eid}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<h4 id="patch__emoji_{eid}-responseschema">Response Schema</h4>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
</aside>

----

## User Interest

User Interest endpoints. Endpoints for users to express interest in Emoji IDs.

###  Returns a paginated list of user interest records associated with the user

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Returns a paginated list of user interest records associated with the user*

User requires scope `UserInterestRead`.

<h4 id="get__user_interests-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Create new interest in emoji to be notified when available

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
  "eid": "🐱🐲🐳🐴🐵"
};
const headers = {
  'Content-Type':'application/json',
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Create new interest in emoji to be notified when available*

User requires scope `UserInterestWrite`.

> Body parameter

```json
{
  "eid": "🐱🐲🐳🐴🐵"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewUserInterestParameters](#schemanewuserinterestparameters)|true|none|

<h4 id="post__user_interests-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Given an EmojiId returns information about the user interest if a record exists for this user

#### Example
  `GET /user_interests/{eid}`

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
  'Authorization':'API_KEY'
};

fetch('/user_interests/{eid}',
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Given an EmojiId returns information about the user interest if a record exists for this user*

User requires scope `UserInterestRead`.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eid|path|string|true|none|

<h4 id="get__user_interests_{eid}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Destroys the user interest preventing this eid's notification emails from being sent for this user

#### Example
  `DELETE /user_interests/{eid}`

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
  'Authorization':'API_KEY'
};

fetch('/user_interests/{eid}',
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Destroys the user interest preventing this eid's notification emails from being sent for this user*

User requires scope `UserInterestDelete`.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eid|path|string|true|none|

<h4 id="delete__user_interests_{eid}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

----

## Users

User Management. Only applicable for users with custodial wallets.

###  Current user account

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Current user account*

Displays the currently logged in user account details.

<h4 id="get__account-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Update the currently logged in user

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Update the currently logged in user*

> Body parameter

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
|body|body|[UpdateUserParameters](#schemaupdateuserparameters)|true|none|

<h4 id="patch__account-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
</aside>

###  List users

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* List users*

This is an admin endpoint

<h4 id="get__users-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Register a User

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
  "email": "string",
  "first_name": "string",
  "g-recaptcha-response": "string",
  "last_name": "string",
  "password": "string"
};
const headers = {
  'Content-Type':'application/json'
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Register a User*

Create a user and a custodial wallet

> Body parameter

```json
{
  "email": "string",
  "first_name": "string",
  "g-recaptcha-response": "string",
  "last_name": "string",
  "password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterUserParameters](#schemaregisteruserparameters)|true|none|

<h4 id="post__users-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="success">
This operation does not require authentication
</aside>

###  Delete a user

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Delete a user*

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h4 id="delete__users_{id}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Update a user as an admin

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Update a user as an admin*

Note: Requires UserWrite Scope

> Body parameter

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
|body|body|[AdminUpdateUserParameters](#schemaadminupdateuserparameters)|true|none|
|id|path|string(uuid)|true|none|

<h4 id="patch__users_{id}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
</aside>

----

## Key Management

Manage a user's public keys

###  Retrieve pubkeys

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Retrieve pubkeys*

Retrieves pubkeys owned by currently authenticated user. This call expects empty body.

> Example responses

> 200 Response

<h4 id="get__pubkeys-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<h4 id="get__pubkeys-responseschema">Response Schema</h4>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pubkey](#schemapubkey)]|false|none|[Public key]|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Generate custodial wallet

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Generate custodial wallet*

Generates custodial wallet with pubkey for currently authenticated user. This call expects empty body.

> Example responses

> 200 Response

<h4 id="post__pubkeys-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Pubkey](#schemapubkey)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
</aside>

###  Add pubkey for current user

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Add pubkey for current user*

This call expects empty body

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pubkey|path|string|true|none|

<h4 id="post__pubkeys_{pubkey}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
</aside>

###  Retrieve pubkeys by user_id

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Retrieve pubkeys by user_id*

NOTE: user should have scope `UserPubkeyList`

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string(uuid)|true|none|

> Example responses

> 200 Response

<h4 id="get__users_{user_id}_pubkeys-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<h4 id="get__users_{user_id}_pubkeys-responseschema">Response Schema</h4>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pubkey](#schemapubkey)]|false|none|[Public key]|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

###  Add pubkey for user by user_id

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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Add pubkey for user by user_id*

NOTE: user should have scope `UserPubkeyWrite` This call expects empty body

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|Public key to add|
|pubkey|path|string(uuid)|true|`user_id` to grant public key ownership to|

<h4 id="post__users_{user_id}_pubkeys_{pubkey}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT, apiKey
</aside>

----

## Proxy

###  Calls a pre-defined proxy service with the provided data

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
  "service": "Microlink"
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
// PUT A KOTLIN TEMPLATE HERE
```

</TabItem>

<TabItem value="swift5">

```swift5
// PUT A SWIFT5 TEMPLATE HERE
```

</TabItem>

</Tabs>

* Calls a pre-defined proxy service with the provided data*

Returns the response from the proxied service as a string

> Body parameter

```json
{
  "data": "string",
  "service": "Microlink"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ProxyCallParameters](#schemaproxycallparameters)|true|none|

> Example responses

> 200 Response

<h4 id="post__proxy-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ProxyResult](#schemaproxyresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad request: Request body or parameters are not in the expected format.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized: Access token not found or invalid.|None|
|422|[Unprocessable Entity](https://tools.ietf.org/html/rfc2518#section-10.3)|Unprocessable Entity: Duplicate record.|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal server error.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT
</aside>

----

## Schemas

### AdminUpdateUserParameters

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

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|free_limit|integer(int32)|false|none|none|
|is_active|boolean|false|none|none|
|user_parameters|object|true|none|none|
|» email|string|false|none|none|
|» first_name|string|false|none|none|
|» last_name|string|false|none|none|

### CheckoutCartRequest

```json
{
  "method": "Default",
  "pubkey": "74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f",
  "tracking_data": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|true|none|Payment method|
|pubkey|string|false|none|Optional: user public key|
|tracking_data|object|false|none|Optional: tracking data|

#### Enumerated Values

|Property|Value|
|---|---|
|method|Default|
|method|Free|

### Confirm2Fa

```json
{
  "code": "string",
  "refresh_token": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Two factor authentication code|
|refresh_token|string|true|none|Refresh token obtained from login request|

### EditRequest

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

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete|[string]|false|none|Optional: hashes of records to delete|
|insert|[any]|false|none|Optional: list of records to add|
|» data|string|true|none|Category data in text format|
|» tag|string|true|none|Category ID as a hex number|
|merkle_root|string(binary)|false|none|Optional: merkle root (use WASM to generate)|
|signature|string(binary)|false|none|Optional: signature (use WASM to generate)|

### LoginRequest

```json
{
  "email": "string",
  "g-recaptcha-response": "string",
  "password": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Requred: Email|
|g-recaptcha-response|string|false|none|Response from google Recaptcha|
|password|string|true|none|Requred: Password|

### LookupResponse

```json
{
  "response": {
    "error": {
      "code": "string",
      "reason": "string"
    },
    "result": [
      {
        "data": "string",
        "hash": "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944",
        "tag": "0x4001"
      }
    ],
    "status": true
  },
  "views_past_month": 0
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|response|object|true|none|none|
|» error|object|false|none|none|
|»» code|string|true|none|Error code|
|»» reason|string|true|none|none|
|» result|[any]|false|none|Records associated with EmojiID|
|»» data|string|true|none|Category data in text or hex encoded formats|
|»» hash|string(binary)|true|none|Hash identifies record, can be used to delete records|
|»» tag|string|true|none|Category as a hex string number|
|» status|boolean|true|none|Response status. If true, the requested data will be in the result field, null otherwise|
|views_past_month|integer(int64)|true|none|Number of times emoji viewed during past month|

### MagicLinkLoginRequest

```json
{
  "email": "string",
  "g-recaptcha-response": "string",
  "user_id": "a169451c-8525-4352-b8ca-070dd449a1a5"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|Email|
|g-recaptcha-response|string|false|none|Response from google Recaptcha|
|user_id|string(uuid)|false|none|User ID|

### MagicLinkLoginResponse

```json
{
  "message": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

### NewUserInterestParameters

```json
{
  "eid": "🐱🐲🐳🐴🐵"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eid|string|true|none|EmojiID to express interest in|

### ProxyCallParameters

```json
{
  "data": "string",
  "service": "Microlink"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|The data to pass through to the proxied service|
|service|string|true|none|`ProxyService` type|

#### Enumerated Values

|Property|Value|
|---|---|
|service|Microlink|
|service|Echo|

### ProxyResult

```json
{
  "value": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|The response from the proxied service as a String|

### Pubkey

```json
"74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f"

```

Public key

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Public key|

### RefreshRequest

```json
{
  "refresh_token": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refresh_token|string|true|none|Refresh token obtained from login request|

### RegisterUserParameters

```json
{
  "email": "string",
  "first_name": "string",
  "g-recaptcha-response": "string",
  "last_name": "string",
  "password": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Required: email address|
|first_name|string|false|none|Optional: first name|
|g-recaptcha-response|string|false|none|Response from google Recaptcha|
|last_name|string|false|none|Optional: last name|
|password|string|false|none|Optional: password|

### SearchResult

```json
{
  "alternates": [
    {
      "available": true,
      "discounted_price": 0,
      "eid": "🐱🐲🐳🐴🐵",
      "price": 0,
      "views_past_month": 0
    }
  ],
  "result": {
    "available": true,
    "discounted_price": 0,
    "eid": "🐱🐲🐳🐴🐵",
    "price": 0,
    "views_past_month": 0
  }
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternates|[any]|true|none|Alternative Emoji IDs|
|» available|boolean|true|none|Whether the EID is available for purchase|
|» discounted_price|integer(int64)|true|none|Pricing in US cents, e.g. 1024 is 10.24 USD. Discounted price is 0 if the emoji is not available|
|» eid|string|true|none|Emoji ID in percent url-encoded form|
|» price|integer(int64)|true|none|Pricing in US cents, e.g. 1024 is 10.24 USD. Price is 0 if the emoji is not available|
|» views_past_month|integer(int64)|true|none|Total lookups using this API, if someone is viewing this EID using their own self hosted node, it will not be counted here|
|result|object|true|none|The specific Emoji ID that the user requests|
|» available|boolean|true|none|Whether the EID is available for purchase|
|» discounted_price|integer(int64)|true|none|Pricing in US cents, e.g. 1024 is 10.24 USD. Discounted price is 0 if the emoji is not available|
|» eid|string|true|none|Emoji ID in percent url-encoded form|
|» price|integer(int64)|true|none|Pricing in US cents, e.g. 1024 is 10.24 USD. Price is 0 if the emoji is not available|
|» views_past_month|integer(int64)|true|none|Total lookups using this API, if someone is viewing this EID using their own self hosted node, it will not be counted here|

### TokenResponse

```json
{
  "access_token": "string",
  "refresh_token": "string",
  "requires_2fa": null
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|Access token|
|refresh_token|string|true|none|Refresh token,  only required for 2FA (???)|
|requires_2fa|any|false|none|Whether has 2FA enabled or not|

### UpdateCartRequest

```json
{
  "items": [
    {
      "eid": "🐱🐲🐳🐴🐵",
      "redemption_code": "string"
    }
  ],
  "tracking_data": {}
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[any]|true|none|New items to add to cart|
|» eid|string|true|none|EmojiID to buy|
|» redemption_code|string|false|none|Redemption Code if applicable|
|tracking_data|object|false|none|Tracking data|

### UpdateUserParameters

```json
{
  "email": "string",
  "first_name": "string",
  "last_name": "string"
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|

