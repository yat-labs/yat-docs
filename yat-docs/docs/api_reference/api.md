---
id: index
title: Sample Yat API reference
---

----

## General information

### Description
**Version:** 1.0.0

No description provided.

----
## Authentication

* API Key (apiKey)
    - Parameter Name: **API**, in: header. When user has 2FA configured: JWT token in `Bearer TOKEN` format which has not expired 2FA timeout

----

## User Authentication

From a user experience standpoint, we want encourage the use of magic links <br />                1. Users request a magic link <br />
                2. If 2FA is enabled submit proceed to 2FA
                

###  Two factor authentication

> Code samples
  `POST /auth/2fa`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "code": {
      "description": "Two factor authentication code",
      "type": "string"
    },
    "refresh_token": {
      "description": "Refresh token obtained from login request",
      "type": "string"
    }
  },
  "required": [
    "code",
    "refresh_token"
  ]
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Two factor authentication*

Complete login flow when user requires 2FA. `refresh_token` obtained from a call to `/token` or `/token/refresh` should be used to complete authentication. **Note:** 2FA token has expiration timeout, which is when expired sensitive operations would require authentication via 2fa once again.

> Body parameter

```json
{
  "properties": {
    "code": {
      "description": "Two factor authentication code",
      "type": "string"
    },
    "refresh_token": {
      "description": "Refresh token obtained from login request",
      "type": "string"
    }
  },
  "required": [
    "code",
    "refresh_token"
  ]
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

<aside class="success">
This operation does not require authentication
</aside>

###  Generate magic link for login

> Code samples
  `POST /auth/magic_link`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "email": {
      "description": "Email",
      "type": "string"
    },
    "g-recaptcha-response": {
      "description": "Response from google Recaptcha",
      "type": "string"
    }
  },
  "required": [
    "email"
  ]
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Generate magic link for login*

Will generate and send magic link to provided user's email. Assuming the email address corresponds to a valid user

> Body parameter

```json
{
  "properties": {
    "email": {
      "description": "Email",
      "type": "string"
    },
    "g-recaptcha-response": {
      "description": "Response from google Recaptcha",
      "type": "string"
    }
  },
  "required": [
    "email"
  ]
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

<aside class="success">
This operation does not require authentication
</aside>

###  Login via password

> Code samples
  `POST /auth/token`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "email": {
      "description": "Requred: Email",
      "type": "string"
    },
    "g-recaptcha-response": {
      "description": "Response from google Recaptcha",
      "type": "string"
    },
    "password": {
      "description": "Requred: Password",
      "type": "string"
    }
  },
  "required": [
    "email",
    "password"
  ]
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Login via password*

Login via username/password. Will return access and refresh tokens. NOTE: when `requires_2fa` is not empty in response, provided "refresh_token" should be used to confirm 2FA code via `POST /auth/2fa`.

> Body parameter

```json
{
  "properties": {
    "email": {
      "description": "Requred: Email",
      "type": "string"
    },
    "g-recaptcha-response": {
      "description": "Response from google Recaptcha",
      "type": "string"
    },
    "password": {
      "description": "Requred: Password",
      "type": "string"
    }
  },
  "required": [
    "email",
    "password"
  ]
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

<aside class="success">
This operation does not require authentication
</aside>

###  Refreshes access token

> Code samples
  `POST /auth/token/refresh`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "refresh_token": {
      "description": "Refresh token obtained from login request",
      "type": "string"
    }
  },
  "required": [
    "refresh_token"
  ]
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Refreshes access token*

Will return updated access and refresh tokens. NOTE: when `requires_2fa` is not empty in response, provided "refresh_token" should be used to confirm 2FA code via `POST /2fa`

> Body parameter

```json
{
  "properties": {
    "refresh_token": {
      "description": "Refresh token obtained from login request",
      "type": "string"
    }
  },
  "required": [
    "refresh_token"
  ]
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

<aside class="success">
This operation does not require authentication
</aside>

----

## Cart

Cart management endpoints

###  Return cart content

> Code samples
  `GET /cart`

```nodejs
const fetch = require('node-fetch');

fetch('/cart',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Return cart content*

User requires scope `CartShow`.

<h4 id="get__cart-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

###  Replace cart items

> Code samples
  `PUT /cart`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "items": {
      "description": "New items to add to cart",
      "type": "array",
      "items": {
        "description": "Buy emoji",
        "properties": {
          "eid": {
            "description": "EmojiID to buy",
            "type": "string",
            "example": "🐱🐲🐳🐴🐵"
          },
          "redemption_code": {
            "description": "Redemption Code if applicable",
            "type": "string"
          }
        },
        "required": [
          "eid"
        ]
      }
    },
    "tracking_data": {
      "description": "Tracking data",
      "type": "object"
    }
  },
  "required": [
    "items"
  ]
};
const headers = {
  'Content-Type':'application/json'
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Replace cart items*

User requires scope `CartUpdate`.

> Body parameter

```json
{
  "properties": {
    "items": {
      "description": "New items to add to cart",
      "type": "array",
      "items": {
        "description": "Buy emoji",
        "properties": {
          "eid": {
            "description": "EmojiID to buy",
            "type": "string",
            "example": "🐱🐲🐳🐴🐵"
          },
          "redemption_code": {
            "description": "Redemption Code if applicable",
            "type": "string"
          }
        },
        "required": [
          "eid"
        ]
      }
    },
    "tracking_data": {
      "description": "Tracking data",
      "type": "object"
    }
  },
  "required": [
    "items"
  ]
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateCartRequest](#schemaupdatecartrequest)|true|none|

<h4 id="put__cart-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

###  Update cart items

> Code samples
  `POST /cart`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "items": {
      "description": "New items to add to cart",
      "type": "array",
      "items": {
        "description": "Buy emoji",
        "properties": {
          "eid": {
            "description": "EmojiID to buy",
            "type": "string",
            "example": "🐱🐲🐳🐴🐵"
          },
          "redemption_code": {
            "description": "Redemption Code if applicable",
            "type": "string"
          }
        },
        "required": [
          "eid"
        ]
      }
    },
    "tracking_data": {
      "description": "Tracking data",
      "type": "object"
    }
  },
  "required": [
    "items"
  ]
};
const headers = {
  'Content-Type':'application/json'
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Update cart items*

Will add new items to the cart. User requires scope `CartUpdate`.

> Body parameter

```json
{
  "properties": {
    "items": {
      "description": "New items to add to cart",
      "type": "array",
      "items": {
        "description": "Buy emoji",
        "properties": {
          "eid": {
            "description": "EmojiID to buy",
            "type": "string",
            "example": "🐱🐲🐳🐴🐵"
          },
          "redemption_code": {
            "description": "Redemption Code if applicable",
            "type": "string"
          }
        },
        "required": [
          "eid"
        ]
      }
    },
    "tracking_data": {
      "description": "Tracking data",
      "type": "object"
    }
  },
  "required": [
    "items"
  ]
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateCartRequest](#schemaupdatecartrequest)|true|none|

<h4 id="post__cart-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

###  Clean up cart

> Code samples
  `DELETE /cart`

```nodejs
const fetch = require('node-fetch');

fetch('/cart',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Clean up cart*

User requires scope `CartUpdate`.

<h4 id="delete__cart-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

###  Checkout cart

> Code samples
  `POST /cart/checkout`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "method": {
      "description": "Payment method",
      "type": "string",
      "enum": [
        "Default",
        "Free"
      ]
    },
    "pubkey": {
      "description": "Optional: user public key",
      "type": "string",
      "example": "74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f"
    },
    "tracking_data": {
      "description": "Optional: tracking data",
      "type": "object"
    }
  },
  "required": [
    "method"
  ]
};
const headers = {
  'Content-Type':'application/json'
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Checkout cart*

Submit order with provided payment details.

> Body parameter

```json
{
  "properties": {
    "method": {
      "description": "Payment method",
      "type": "string",
      "enum": [
        "Default",
        "Free"
      ]
    },
    "pubkey": {
      "description": "Optional: user public key",
      "type": "string",
      "example": "74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f"
    },
    "tracking_data": {
      "description": "Optional: tracking data",
      "type": "object"
    }
  },
  "required": [
    "method"
  ]
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CheckoutCartRequest](#schemacheckoutcartrequest)|true|none|

<h4 id="post__cart_checkout-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

----

## Emoji

                Emoji ID endpoints. The most common endpoint will be a lookup `/emoji/{eid}`,
                this is when a user wants to get records associated with an Emoji ID.
            

###  List emojis

> Code samples
  `GET /emoji`

```nodejs
const fetch = require('node-fetch');

fetch('/emoji',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

###  Search for EmojiID

> Code samples
  `GET /emoji/search`

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*'
};

fetch('/emoji/search?eid=type,string',
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

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

<aside class="success">
This operation does not require authentication
</aside>

###  Lookup EmojiId

> Code samples
  `GET /emoji/{eid}`

```nodejs
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

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

<aside class="success">
This operation does not require authentication
</aside>

###  Edit EmojiId

> Code samples
  `PATCH /emoji/{eid}`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "delete": {
      "description": "Optional: hashes of records to delete",
      "type": "array",
      "items": {
        "description": "Hash which identifies emoji record.",
        "type": "string",
        "format": "binary",
        "example": "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944"
      }
    },
    "insert": {
      "description": "Optional: list of records to add",
      "type": "array",
      "items": {
        "description": "Data record stored in emoji.",
        "properties": {
          "data": {
            "description": "Category data in text format",
            "type": "string",
            "example": "127.0.0.1"
          },
          "tag": {
            "description": "Category ID as a hex number",
            "type": "string",
            "example": "0x4101"
          }
        },
        "required": [
          "data",
          "tag"
        ]
      }
    },
    "merkle_root": {
      "description": "Optional: merkle root (use WASM to generate)",
      "type": "string",
      "format": "binary",
      "example": "916ea8882cdbe350ca9cec48680e4bf37d75930d8d033bed57128c0809537336"
    },
    "signature": {
      "description": "Optional: signature (use WASM to generate)",
      "type": "string",
      "format": "binary",
      "example": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
    }
  }
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Edit EmojiId*

Add and remove records in EmojiId, update merkle_root and signature too. Access notes: user expected to own the emoji's pubkey, have Admin role or be power member of organization if pubkey belongs to organization, otherwise operation will fail.

> Body parameter

```json
{
  "properties": {
    "delete": {
      "description": "Optional: hashes of records to delete",
      "type": "array",
      "items": {
        "description": "Hash which identifies emoji record.",
        "type": "string",
        "format": "binary",
        "example": "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944"
      }
    },
    "insert": {
      "description": "Optional: list of records to add",
      "type": "array",
      "items": {
        "description": "Data record stored in emoji.",
        "properties": {
          "data": {
            "description": "Category data in text format",
            "type": "string",
            "example": "127.0.0.1"
          },
          "tag": {
            "description": "Category ID as a hex number",
            "type": "string",
            "example": "0x4101"
          }
        },
        "required": [
          "data",
          "tag"
        ]
      }
    },
    "merkle_root": {
      "description": "Optional: merkle root (use WASM to generate)",
      "type": "string",
      "format": "binary",
      "example": "916ea8882cdbe350ca9cec48680e4bf37d75930d8d033bed57128c0809537336"
    },
    "signature": {
      "description": "Optional: signature (use WASM to generate)",
      "type": "string",
      "format": "binary",
      "example": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
    }
  }
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

<h4 id="patch__emoji_{eid}-responseschema">Response Schema</h4>

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, apiKey
</aside>

----

## User Interest

User Interest endpoints. Endpoints for users to express interest in Emoji IDs.

###  Returns a paginated list of user interest records associated with the user

> Code samples
  `GET /user_interests`

```nodejs
const fetch = require('node-fetch');

fetch('/user_interests',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Returns a paginated list of user interest records associated with the user*

User requires scope `UserInterestRead`.

<h4 id="get__user_interests-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

###  Create new interest in emoji to be notified when available

> Code samples
  `POST /user_interests`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "eid": {
      "description": "EmojiID to express interest in",
      "type": "string",
      "example": "🐱🐲🐳🐴🐵"
    }
  },
  "required": [
    "eid"
  ]
};
const headers = {
  'Content-Type':'application/json'
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Create new interest in emoji to be notified when available*

User requires scope `UserInterestWrite`.

> Body parameter

```json
{
  "properties": {
    "eid": {
      "description": "EmojiID to express interest in",
      "type": "string",
      "example": "🐱🐲🐳🐴🐵"
    }
  },
  "required": [
    "eid"
  ]
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewUserInterestParameters](#schemanewuserinterestparameters)|true|none|

<h4 id="post__user_interests-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

###  Given an EmojiId returns information about the user interest if a record exists for this user

> Code samples
  `GET /user_interests/{eid}`

```nodejs
const fetch = require('node-fetch');

fetch('/user_interests/{eid}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Given an EmojiId returns information about the user interest if a record exists for this user*

User requires scope `UserInterestRead`.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eid|path|string|true|none|

<h4 id="get__user_interests_{eid}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

###  Destroys the user interest preventing this eid's notification emails from being sent for this user

> Code samples
  `DELETE /user_interests/{eid}`

```nodejs
const fetch = require('node-fetch');

fetch('/user_interests/{eid}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Destroys the user interest preventing this eid's notification emails from being sent for this user*

User requires scope `UserInterestDelete`.

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eid|path|string|true|none|

<h4 id="delete__user_interests_{eid}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

----

## Users

User Management. Only applicable for users with custodial wallets.

###  Register a User

> Code samples
  `POST /users`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "email": {
      "description": "Required: email address",
      "type": "string"
    },
    "first_name": {
      "description": "Optional: first name",
      "type": "string"
    },
    "g-recaptcha-response": {
      "description": "Response from google Recaptcha",
      "type": "string"
    },
    "last_name": {
      "description": "Optional: last name",
      "type": "string"
    },
    "password": {
      "description": "Optional: password",
      "type": "string"
    }
  },
  "required": [
    "email"
  ]
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Register a User*

Create a user and a custodial wallet

> Body parameter

```json
{
  "properties": {
    "email": {
      "description": "Required: email address",
      "type": "string"
    },
    "first_name": {
      "description": "Optional: first name",
      "type": "string"
    },
    "g-recaptcha-response": {
      "description": "Response from google Recaptcha",
      "type": "string"
    },
    "last_name": {
      "description": "Optional: last name",
      "type": "string"
    },
    "password": {
      "description": "Optional: password",
      "type": "string"
    }
  },
  "required": [
    "email"
  ]
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterUserParameters](#schemaregisteruserparameters)|true|none|

<h4 id="post__users-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

----

## Key Management

Manage a user's public keys

###  Retrieve pubkeys

> Code samples
  `GET /pubkeys`

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*'
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Retrieve pubkeys*

Retrieves pubkeys owned by currently authenticated user. This call expects empty body.

> Example responses

> 200 Response

<h4 id="get__pubkeys-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|

<h4 id="get__pubkeys-responseschema">Response Schema</h4>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pubkey](#schemapubkey)]|false|none|[Public key]|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

###  Generate custodial wallet

> Code samples
  `POST /pubkeys`

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*'
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Generate custodial wallet*

Generates custodial wallet with pubkey for currently authenticated user. This call expects empty body.

> Example responses

> 200 Response

<h4 id="post__pubkeys-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[Pubkey](#schemapubkey)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, apiKey
</aside>

###  Add pubkey for current user

> Code samples
  `POST /pubkeys/{pubkey}`

```nodejs
const fetch = require('node-fetch');

fetch('/pubkeys/{pubkey}',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Add pubkey for current user*

This call expects empty body

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pubkey|path|string|true|none|

<h4 id="post__pubkeys_{pubkey}-responses">Responses</h4>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, apiKey
</aside>

###  Retrieve pubkeys by user_id

> Code samples
  `GET /users/{user_id}/pubkeys`

```nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'*/*'
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

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

<h4 id="get__users_{user_id}_pubkeys-responseschema">Response Schema</h4>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Pubkey](#schemapubkey)]|false|none|[Public key]|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

###  Add pubkey for user by user_id

> Code samples
  `POST /users/{user_id}/pubkeys/{pubkey}`

```nodejs
const fetch = require('node-fetch');

fetch('/users/{user_id}/pubkeys/{pubkey}',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

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
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None, apiKey
</aside>

----

## Proxy

###  Calls a pre-defined proxy service with the provided data

> Code samples
  `POST /proxy`

```nodejs
const fetch = require('node-fetch');
const inputBody = {
  "properties": {
    "data": {
      "description": "The data to pass through to the proxied service",
      "type": "string"
    },
    "service": {
      "description": "`ProxyService` type",
      "type": "string",
      "enum": [
        "Microlink",
        "Echo"
      ]
    }
  },
  "required": [
    "service"
  ]
};
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
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

```kotlin
PUT A KOTLIN TEMPLATE HERE

```

```swift5
PUT A SWIFT TEMPLATE HERE

```

* Calls a pre-defined proxy service with the provided data*

Returns the response from the proxied service as a string

> Body parameter

```json
{
  "properties": {
    "data": {
      "description": "The data to pass through to the proxied service",
      "type": "string"
    },
    "service": {
      "description": "`ProxyService` type",
      "type": "string",
      "enum": [
        "Microlink",
        "Echo"
      ]
    }
  },
  "required": [
    "service"
  ]
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

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

----

## Schemas

### CheckoutCartRequest

```json
{
  "properties": {
    "method": {
      "description": "Payment method",
      "type": "string",
      "enum": [
        "Default",
        "Free"
      ]
    },
    "pubkey": {
      "description": "Optional: user public key",
      "type": "string",
      "example": "74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f"
    },
    "tracking_data": {
      "description": "Optional: tracking data",
      "type": "object"
    }
  },
  "required": [
    "method"
  ]
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
  "properties": {
    "code": {
      "description": "Two factor authentication code",
      "type": "string"
    },
    "refresh_token": {
      "description": "Refresh token obtained from login request",
      "type": "string"
    }
  },
  "required": [
    "code",
    "refresh_token"
  ]
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
  "properties": {
    "delete": {
      "description": "Optional: hashes of records to delete",
      "type": "array",
      "items": {
        "description": "Hash which identifies emoji record.",
        "type": "string",
        "format": "binary",
        "example": "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944"
      }
    },
    "insert": {
      "description": "Optional: list of records to add",
      "type": "array",
      "items": {
        "description": "Data record stored in emoji.",
        "properties": {
          "data": {
            "description": "Category data in text format",
            "type": "string",
            "example": "127.0.0.1"
          },
          "tag": {
            "description": "Category ID as a hex number",
            "type": "string",
            "example": "0x4101"
          }
        },
        "required": [
          "data",
          "tag"
        ]
      }
    },
    "merkle_root": {
      "description": "Optional: merkle root (use WASM to generate)",
      "type": "string",
      "format": "binary",
      "example": "916ea8882cdbe350ca9cec48680e4bf37d75930d8d033bed57128c0809537336"
    },
    "signature": {
      "description": "Optional: signature (use WASM to generate)",
      "type": "string",
      "format": "binary",
      "example": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
    }
  }
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
  "properties": {
    "email": {
      "description": "Requred: Email",
      "type": "string"
    },
    "g-recaptcha-response": {
      "description": "Response from google Recaptcha",
      "type": "string"
    },
    "password": {
      "description": "Requred: Password",
      "type": "string"
    }
  },
  "required": [
    "email",
    "password"
  ]
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
  "properties": {
    "response": {
      "properties": {
        "error": {
          "properties": {
            "code": {
              "description": "Error code",
              "type": "string"
            },
            "reason": {
              "type": "string"
            }
          },
          "required": [
            "code",
            "reason"
          ]
        },
        "result": {
          "description": "Records associated with EmojiID",
          "type": "array",
          "items": {
            "description": "Emoji tags data",
            "properties": {
              "data": {
                "description": "Category data in text or hex encoded formats",
                "type": "string"
              },
              "hash": {
                "description": "Hash identifies record, can be used to delete records",
                "type": "string",
                "format": "binary",
                "example": "5aaf5eac326102cf208e397f15534f0b89747b2263f47857b1d797275ce7e944"
              },
              "tag": {
                "description": "Category as a hex string number",
                "type": "string",
                "example": "0x4001"
              }
            },
            "required": [
              "data",
              "hash",
              "tag"
            ]
          }
        },
        "status": {
          "description": "Response status. If true, the requested data will be in the result field, null otherwise",
          "type": "boolean"
        }
      },
      "required": [
        "status"
      ]
    },
    "views_past_month": {
      "description": "Number of times emoji viewed during past month",
      "type": "integer",
      "format": "int64"
    }
  },
  "required": [
    "response",
    "views_past_month"
  ]
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
  "properties": {
    "email": {
      "description": "Email",
      "type": "string"
    },
    "g-recaptcha-response": {
      "description": "Response from google Recaptcha",
      "type": "string"
    }
  },
  "required": [
    "email"
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email|
|g-recaptcha-response|string|false|none|Response from google Recaptcha|

### MagicLinkLoginResponse

```json
{
  "properties": {
    "message": {
      "type": "string"
    }
  },
  "required": [
    "message"
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

### NewUserInterestParameters

```json
{
  "properties": {
    "eid": {
      "description": "EmojiID to express interest in",
      "type": "string",
      "example": "🐱🐲🐳🐴🐵"
    }
  },
  "required": [
    "eid"
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eid|string|true|none|EmojiID to express interest in|

### ProxyCallParameters

```json
{
  "properties": {
    "data": {
      "description": "The data to pass through to the proxied service",
      "type": "string"
    },
    "service": {
      "description": "`ProxyService` type",
      "type": "string",
      "enum": [
        "Microlink",
        "Echo"
      ]
    }
  },
  "required": [
    "service"
  ]
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
  "properties": {
    "value": {
      "description": "The response from the proxied service as a String",
      "type": "string"
    }
  },
  "required": [
    "value"
  ]
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
  "properties": {
    "refresh_token": {
      "description": "Refresh token obtained from login request",
      "type": "string"
    }
  },
  "required": [
    "refresh_token"
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refresh_token|string|true|none|Refresh token obtained from login request|

### RegisterUserParameters

```json
{
  "properties": {
    "email": {
      "description": "Required: email address",
      "type": "string"
    },
    "first_name": {
      "description": "Optional: first name",
      "type": "string"
    },
    "g-recaptcha-response": {
      "description": "Response from google Recaptcha",
      "type": "string"
    },
    "last_name": {
      "description": "Optional: last name",
      "type": "string"
    },
    "password": {
      "description": "Optional: password",
      "type": "string"
    }
  },
  "required": [
    "email"
  ]
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
  "properties": {
    "alternates": {
      "description": "Alternative Emoji IDs",
      "type": "array",
      "items": {
        "properties": {
          "available": {
            "description": "Whether the EID is available for purchase",
            "type": "boolean"
          },
          "discounted_price": {
            "description": "Pricing in US cents, e.g. 1024 is 10.24 USD. Discounted price is 0 if the emoji is not available",
            "type": "integer",
            "format": "int64"
          },
          "eid": {
            "description": "Emoji ID in percent url-encoded form",
            "type": "string",
            "example": "🐱🐲🐳🐴🐵"
          },
          "price": {
            "description": "Pricing in US cents, e.g. 1024 is 10.24 USD. Price is 0 if the emoji is not available",
            "type": "integer",
            "format": "int64"
          },
          "views_past_month": {
            "description": "Total lookups using this API, if someone is viewing this EID using their own self hosted node, it will not be counted here",
            "type": "integer",
            "format": "int64"
          }
        },
        "required": [
          "available",
          "discounted_price",
          "eid",
          "price",
          "views_past_month"
        ]
      }
    },
    "result": {
      "description": "The specific Emoji ID that the user requests",
      "properties": {
        "available": {
          "description": "Whether the EID is available for purchase",
          "type": "boolean"
        },
        "discounted_price": {
          "description": "Pricing in US cents, e.g. 1024 is 10.24 USD. Discounted price is 0 if the emoji is not available",
          "type": "integer",
          "format": "int64"
        },
        "eid": {
          "description": "Emoji ID in percent url-encoded form",
          "type": "string",
          "example": "🐱🐲🐳🐴🐵"
        },
        "price": {
          "description": "Pricing in US cents, e.g. 1024 is 10.24 USD. Price is 0 if the emoji is not available",
          "type": "integer",
          "format": "int64"
        },
        "views_past_month": {
          "description": "Total lookups using this API, if someone is viewing this EID using their own self hosted node, it will not be counted here",
          "type": "integer",
          "format": "int64"
        }
      },
      "required": [
        "available",
        "discounted_price",
        "eid",
        "price",
        "views_past_month"
      ]
    }
  },
  "required": [
    "alternates",
    "result"
  ]
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
  "properties": {
    "access_token": {
      "description": "Access token",
      "type": "string"
    },
    "refresh_token": {
      "description": "Refresh token,  only required for 2FA (???)",
      "type": "string"
    },
    "requires_2fa": {
      "description": "Whether has 2FA enabled or not"
    }
  },
  "required": [
    "access_token",
    "refresh_token"
  ]
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
  "properties": {
    "items": {
      "description": "New items to add to cart",
      "type": "array",
      "items": {
        "description": "Buy emoji",
        "properties": {
          "eid": {
            "description": "EmojiID to buy",
            "type": "string",
            "example": "🐱🐲🐳🐴🐵"
          },
          "redemption_code": {
            "description": "Redemption Code if applicable",
            "type": "string"
          }
        },
        "required": [
          "eid"
        ]
      }
    },
    "tracking_data": {
      "description": "Tracking data",
      "type": "object"
    }
  },
  "required": [
    "items"
  ]
}

```

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[any]|true|none|New items to add to cart|
|» eid|string|true|none|EmojiID to buy|
|» redemption_code|string|false|none|Redemption Code if applicable|
|tracking_data|object|false|none|Tracking data|

