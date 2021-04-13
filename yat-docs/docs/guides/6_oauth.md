---
id: oauth
slug: /oauth
title: OAuth integration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

This guide will guide you through implementing authorization for your users via Yat Oauth service.

## OAuth state in Yat

Yat service provides `authorization_code` grant as specified in [RFC-6749 p 4.1](https://tools.ietf.org/html/rfc6749#section-4.1)
with a Yat's applied specific of that Yat users authorize via magic link.


In general flow is same as in RFC, with addition that user would leave User-Agent to receive
authorization token in a link via email:

```

     +-----------+
     | Yat sends |
     | magic     |<--------------------------------------
     | link      |                                      |
     +-----------+                                      |
          ^                                            (B)
          |                                       Request magic link
         (C)                                            |
     +----|-----+          Client Identifier      +---------------+
     |         -+----(A)-- & Redirection URI ---->|               |
     |  User-   |                                 | Authorization |
     |  Agent  -+----(B)-- User enters email ---->|     Server    |
     |    &&    |                                 |               |
     |  Mail-  -+----(D)-- User picks Yat    ---->|               |
     |  Agent   |                                 |               |
     |         -+----(E)-- Authorization Code ---<|               |
     +-|----|---+                                 +---------------+
       |    |                                         ^      v
      (A)  (E)                                        |      |
       |    |                                         |      |
       ^    v                                         |      |
     +---------+                                      |      |
     |         |>---(F)-- Authorization Code ---------'      |
     |  Client |          & Redirection URI                  |
     |         |                                             |
     |         |<---(G)----- Access Token -------------------'
     +---------+       (w/ Optional Refresh Token)
```

Figure 1. Flow where Client is your service, user-agent && mail-agent is your user's application
and Authorization server is OAuth web service provided by Yat.

   The flow illustrated in Figure 1 includes the following steps:

- (A)  The client initiates the flow by directing user-agent to the authorization endpoint.
The client includes its client identifier, requested scope, local state, and a
redirection URI to which the authorization server will send the user-agent back
once access is granted (or denied or in the case of error in the middle).
Note that client state is passed through all the steps and is included
in the code, hence Authorization service applies limitation of 50 characters for the state.

- (B)  The authorization server requests user's email address for magic link
and establishes whether the supplied `client_id` and `redirect_uri` match
client setup, and user with email is already active in the Yat system.

- (C)  Assuming that user is active and registered and all client settings match request,
the Yat server will send magic link to user's registered email. Link would point to
Authorization server with a token for a full user access, which still need to be limited
down to a yat-token.

- (D)  User opening a link would be suggested to pick one of their yats. If user having
only one yat it will be picked automatically.

- (E)  After user selected yat Authorization server creates `authorization_code` token,
which is a special kind of short living refresh token and can be used by client to
obtain `access_token` and longer living `refresh_token`.

- (F)  The client requests an access token from the authorization server's token endpoint
by including the authorization code received in the previous step.
When making the request, the client authenticates with the authorization server.  
The client includes the redirection URI used to obtain the authorization code
for verification.

- (G)  The authorization server authenticates the client, validates the authorization code,
and ensures that the redirection URI received matches the URI used to redirect the
client in step (B).  If valid, the authorization server responds back with
an access token and a refresh token.

After obtaining access token it can be used to access a limited subset of y.at API.
For instance https://a.y.at/emoji_id endpoint will return a yat which user authorized.

## Example

Authorization Code grant flow:

- A. Client is redirecting User Agent to authorization page:
-- `/authorize?response_type=code&client_id=abc12&state=xyz&redirect_uri=...&scope=yat`
- A.1. Success obtaining refresh token from cookie - open yat selector page D
- A.2. Failed Validating Cookie - render login page for magic link (B)
- B. When user request magic link, they will be redirected to the Client
callback with `status=pending_magic_link`
- C. User is opening URL from magic link:
-- `/magic_link?refresh_token=xxx&redirect_uri=...&state=xyz&client_id=123&scope=yat`
- C.1 refresh token is stored in the cookie for the oauth site
- D. User picks a yat
- D.1. If user has multiple yats: user picks a yat from a page
- D.2. If user has single yay it will be picked automatically
- E. User is sent to
-- `/authorize?response_type=code&client_id=abc12&state=xyz&redirect_uri=...&scope=yat&yat=🦀🦀🦀`
- E.1. User redirected to `redirect_uri` with `code=...&state=xyz`.
Code encodes client_id, redirect_uri AND yat signed by the server
- F. Client sending POST /token request supplying obtained `code`
- G. Access Token and Refresh Token are returned in the response, these are of YatAccessToken type

Client can obtain yat via `GET /emoji_id` with YatAccessToken from yat api


Main Client page with a link to authorization

```html
<html>
    <head>
        <script lang="JavaScript">
            function initForm() {
                let origin = document.location.origin;
                let elements = document.getElementById("login").elements;
                elements["state"].value = new Date();
                elements["redirect_uri"].value = `${origin}/auth`;
            }
        </script>
    </head>
    <body onload="initForm()">
        <h1>Welcome to Creepers!</h1>
        <p>
        <form id="login" method="get" action="https://auth.y.at/authorize">
            <input type="hidden" name="response_type" id="response_type" value="code"></input>
            <input type="hidden" name="scope" id="scope" value="yat"></input>
            <input type="hidden" name="state" id="state"></input>
            <input type="hidden" name="client_id" id="client_id" value="creepers"></input>
            <input type="hidden" name="redirect_uri" id="redirect_uri"></input>
            <input type="submit" value="Login with Yat"/>
        </form>
        </p>
    </body>
</html>

```

Authorization callback page `/auth` installed on a client site:

```html
<html>
    <head>
    </head>
    <body>
        <h1>Welcome to Creepers!</h1>
        <p id="msg"></p>
        <script lang="JavaScript">
            let params = new URLSearchParams( document.location.search );
            if (params.get("status") === "pending_magic_link") {
                document.write("Link with authentication token was sent to your email...");
            } else if (params.get("code")) {
                let code = params.get("code");
                fetchTokens(code)
                    .then(fetchYat)
                    .then((yat) => { document.getElementById("msg").textContent = `Nice to see you ${yat}!` } )
                    .catch((err) => { document.write(err); console.log(err) })
            } else {
                document.write("Authorization by different means...")
            }

            function fetchTokens(code) {
                let token_url = "https://auth.y.at/token";
                let body = new URLSearchParams();
                body.append("grant_type", "authorization_code");
                body.append("code", code);
                body.append("redirect_uri", `${origin}/auth`);
                body.append("client_id", "creepers");
                body.append("client_secret", "secret");
                let req = fetch(token_url, {
                    method: "POST",
                    body,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded",
                    }
                });
                return req.then((resp) => Promise.all([Promise.resolve(resp.status), resp.json()]))
                .then(([status, json]) => {
                    if(status == 200) { 
                        return json; 
                    } else { 
                        throw new Error(`${status}: ${json.error_description}`); 
                    }});
            }

            function fetchYat(token) {
                let req = fetch("/yat", {
                    headers: {
                        Authorization: `Bearer ${token.access_token}`,
                        Accept: "application/json",
                    }
                });
                return req.then((resp) => resp.json()).then((body) => body[0]);
            }
        </script>
    </body>
</html>

```

Please note y.at server has strict CORS policy rules,
hence to make requests client server should proxy them,
like in the example ExpressJS route below:

```javascript
app.get("/yat", (req, res) => {
  if !req.headers.authorization) {
    res.status(401);
    return res.json({ error: "access denied" });
  }
  fetch("https://y.at/emoji_id", {
    headers: {
      Authorization: req.headers.authorization,
      "Content-Type": "application/json",
    },
  })
    .then((yats) => yats.json())
    .then((yats) => res.json(yats))
    .catch((err) => {
      console.error(err);
      response.status(500);
      response.send(err);
    });
});

(
```
