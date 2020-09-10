---
title: Sample Yat API reference v1.0.0
language_tabs:
  - javascript
toc_footers: []
includes: []
search: false
highlight_theme: darkula
headingLevel: 2

---

<h1 id="sample-yat-api-reference">Sample Yat API reference v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

## Authentication

* API Key (apiKey)
    - Parameter Name: **API**, in: header. When user has 2FA configured: JWT token in `Bearer TOKEN` format which has not expired 2FA timeout

<h2 id="sample-yat-api-reference-user-authentication">
  User Authentication
</h2>

From a user experience standpoint, we want encourage the use of magic links <br />                1. Users request a magic link <br />
                2. If 2FA is enabled submit proceed to 2FA
                

### POST /auth/2fa

> Code samples
  `POST /auth/2fa`

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/auth/2fa',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

### POST /auth/magic_link

> Code samples
  `POST /auth/magic_link`

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/auth/magic_link',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

### POST /auth/token

> Code samples
  `POST /auth/token`

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/auth/token',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

### POST /auth/token/refresh

> Code samples
  `POST /auth/token/refresh`

```javascript
const inputBody = '{
  "properties": {
    "refresh_token": {
      "description": "Refresh token obtained from login request",
      "type": "string"
    }
  },
  "required": [
    "refresh_token"
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/auth/token/refresh',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<h2 id="sample-yat-api-reference-cart">
  Cart
</h2>

Cart management endpoints

### GET /cart

> Code samples
  `GET /cart`

```javascript

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

### PUT /cart

> Code samples
  `PUT /cart`

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/cart',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

### POST /cart

> Code samples
  `POST /cart`

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/cart',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

### DELETE /cart

> Code samples
  `DELETE /cart`

```javascript

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

### POST /cart/checkout

> Code samples
  `POST /cart/checkout`

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/cart/checkout',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<h2 id="sample-yat-api-reference-emoji">
  Emoji
</h2>

                Emoji ID endpoints. The most common endpoint will be a lookup `/emoji/{eid}`,
                this is when a user wants to get records associated with an Emoji ID.
            

### GET /emoji

> Code samples
  `GET /emoji`

```javascript

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

### GET /emoji/search

> Code samples
  `GET /emoji/search`

```javascript

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

### GET /emoji/{eid}

> Code samples
  `GET /emoji/{eid}`

```javascript

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

### PATCH /emoji/{eid}

> Code samples
  `PATCH /emoji/{eid}`

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/emoji/{eid}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<h2 id="sample-yat-api-reference-user-interest">
  User Interest
</h2>

User Interest endpoints. Endpoints for users to express interest in Emoji IDs.

### GET /user_interests

> Code samples
  `GET /user_interests`

```javascript

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

### POST /user_interests

> Code samples
  `POST /user_interests`

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/user_interests',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

### GET /user_interests/{eid}

> Code samples
  `GET /user_interests/{eid}`

```javascript

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

### DELETE /user_interests/{eid}

> Code samples
  `DELETE /user_interests/{eid}`

```javascript

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

<h2 id="sample-yat-api-reference-users">
  Users
</h2>

User Management. Only applicable for users with custodial wallets.

### POST /users

> Code samples
  `POST /users`

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

<h2 id="sample-yat-api-reference-key-management">
  Key Management
</h2>

Manage a user's public keys

### GET /pubkeys

> Code samples
  `GET /pubkeys`

```javascript

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

### POST /pubkeys

> Code samples
  `POST /pubkeys`

```javascript

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

### POST /pubkeys/{pubkey}

> Code samples
  `POST /pubkeys/{pubkey}`

```javascript

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

### GET /users/{user_id}/pubkeys

> Code samples
  `GET /users/{user_id}/pubkeys`

```javascript

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

### POST /users/{user_id}/pubkeys/{pubkey}

> Code samples
  `POST /users/{user_id}/pubkeys/{pubkey}`

```javascript

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

<h2 id="sample-yat-api-reference-proxy">
  Proxy
</h2>

### POST /proxy

> Code samples
  `POST /proxy`

```javascript
const inputBody = '{
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
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'*/*'
};

fetch('/proxy',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

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

## Schemas

<h3 id="tocS_CheckoutCartRequest">CheckoutCartRequest</h3>

<!-- backwards compatibility -->

<a id="schemacheckoutcartrequest"></a>
<a id="schema_CheckoutCartRequest"></a>
<a id="tocScheckoutcartrequest"></a>
<a id="tocscheckoutcartrequest"></a>

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

### Properties

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

<h3 id="tocS_Confirm2Fa">Confirm2Fa</h3>

<!-- backwards compatibility -->

<a id="schemaconfirm2fa"></a>
<a id="schema_Confirm2Fa"></a>
<a id="tocSconfirm2fa"></a>
<a id="tocsconfirm2fa"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|Two factor authentication code|
|refresh_token|string|true|none|Refresh token obtained from login request|

<h3 id="tocS_EditRequest">EditRequest</h3>

<!-- backwards compatibility -->

<a id="schemaeditrequest"></a>
<a id="schema_EditRequest"></a>
<a id="tocSeditrequest"></a>
<a id="tocseditrequest"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete|[string]|false|none|Optional: hashes of records to delete|
|insert|[any]|false|none|Optional: list of records to add|
|» data|string|true|none|Category data in text format|
|» tag|string|true|none|Category ID as a hex number|
|merkle_root|string(binary)|false|none|Optional: merkle root (use WASM to generate)|
|signature|string(binary)|false|none|Optional: signature (use WASM to generate)|

<h3 id="tocS_LoginRequest">LoginRequest</h3>

<!-- backwards compatibility -->

<a id="schemaloginrequest"></a>
<a id="schema_LoginRequest"></a>
<a id="tocSloginrequest"></a>
<a id="tocsloginrequest"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Requred: Email|
|g-recaptcha-response|string|false|none|Response from google Recaptcha|
|password|string|true|none|Requred: Password|

<h3 id="tocS_LookupResponse">LookupResponse</h3>

<!-- backwards compatibility -->

<a id="schemalookupresponse"></a>
<a id="schema_LookupResponse"></a>
<a id="tocSlookupresponse"></a>
<a id="tocslookupresponse"></a>

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

### Properties

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

<h3 id="tocS_MagicLinkLoginRequest">MagicLinkLoginRequest</h3>

<!-- backwards compatibility -->

<a id="schemamagiclinkloginrequest"></a>
<a id="schema_MagicLinkLoginRequest"></a>
<a id="tocSmagiclinkloginrequest"></a>
<a id="tocsmagiclinkloginrequest"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Email|
|g-recaptcha-response|string|false|none|Response from google Recaptcha|

<h3 id="tocS_MagicLinkLoginResponse">MagicLinkLoginResponse</h3>

<!-- backwards compatibility -->

<a id="schemamagiclinkloginresponse"></a>
<a id="schema_MagicLinkLoginResponse"></a>
<a id="tocSmagiclinkloginresponse"></a>
<a id="tocsmagiclinkloginresponse"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|none|

<h3 id="tocS_NewUserInterestParameters">NewUserInterestParameters</h3>

<!-- backwards compatibility -->

<a id="schemanewuserinterestparameters"></a>
<a id="schema_NewUserInterestParameters"></a>
<a id="tocSnewuserinterestparameters"></a>
<a id="tocsnewuserinterestparameters"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eid|string|true|none|EmojiID to express interest in|

<h3 id="tocS_ProxyCallParameters">ProxyCallParameters</h3>

<!-- backwards compatibility -->

<a id="schemaproxycallparameters"></a>
<a id="schema_ProxyCallParameters"></a>
<a id="tocSproxycallparameters"></a>
<a id="tocsproxycallparameters"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|string|false|none|The data to pass through to the proxied service|
|service|string|true|none|`ProxyService` type|

#### Enumerated Values

|Property|Value|
|---|---|
|service|Microlink|
|service|Echo|

<h3 id="tocS_ProxyResult">ProxyResult</h3>

<!-- backwards compatibility -->

<a id="schemaproxyresult"></a>
<a id="schema_ProxyResult"></a>
<a id="tocSproxyresult"></a>
<a id="tocsproxyresult"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|The response from the proxied service as a String|

<h3 id="tocS_Pubkey">Pubkey</h3>

<!-- backwards compatibility -->

<a id="schemapubkey"></a>
<a id="schema_Pubkey"></a>
<a id="tocSpubkey"></a>
<a id="tocspubkey"></a>

```json
"74dfa32b2c227ca2aa9ce3922a735669835443c1c36596795de1f48dbfaf7b2f"

```

Public key

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|Public key|

<h3 id="tocS_RefreshRequest">RefreshRequest</h3>

<!-- backwards compatibility -->

<a id="schemarefreshrequest"></a>
<a id="schema_RefreshRequest"></a>
<a id="tocSrefreshrequest"></a>
<a id="tocsrefreshrequest"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refresh_token|string|true|none|Refresh token obtained from login request|

<h3 id="tocS_RegisterUserParameters">RegisterUserParameters</h3>

<!-- backwards compatibility -->

<a id="schemaregisteruserparameters"></a>
<a id="schema_RegisterUserParameters"></a>
<a id="tocSregisteruserparameters"></a>
<a id="tocsregisteruserparameters"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|Required: email address|
|first_name|string|false|none|Optional: first name|
|g-recaptcha-response|string|false|none|Response from google Recaptcha|
|last_name|string|false|none|Optional: last name|
|password|string|false|none|Optional: password|

<h3 id="tocS_SearchResult">SearchResult</h3>

<!-- backwards compatibility -->

<a id="schemasearchresult"></a>
<a id="schema_SearchResult"></a>
<a id="tocSsearchresult"></a>
<a id="tocssearchresult"></a>

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

### Properties

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

<h3 id="tocS_TokenResponse">TokenResponse</h3>

<!-- backwards compatibility -->

<a id="schematokenresponse"></a>
<a id="schema_TokenResponse"></a>
<a id="tocStokenresponse"></a>
<a id="tocstokenresponse"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|Access token|
|refresh_token|string|true|none|Refresh token,  only required for 2FA (???)|
|requires_2fa|any|false|none|Whether has 2FA enabled or not|

<h3 id="tocS_UpdateCartRequest">UpdateCartRequest</h3>

<!-- backwards compatibility -->

<a id="schemaupdatecartrequest"></a>
<a id="schema_UpdateCartRequest"></a>
<a id="tocSupdatecartrequest"></a>
<a id="tocsupdatecartrequest"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[any]|true|none|New items to add to cart|
|» eid|string|true|none|EmojiID to buy|
|» redemption_code|string|false|none|Redemption Code if applicable|
|tracking_data|object|false|none|Tracking data|

