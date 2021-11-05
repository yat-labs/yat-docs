---
id: register
slug: /register
title: Creating a new user
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
The integration libraries and documentation for Yat are still in _Alpha_. They are not yet feature complete, and there are likely bugs in the implementation.
:::

## Overview

There are 2 paths we can use for integration, with the user-centric path being more “privacy” focused, and the
organization-centric path being more centralized.

In the user-centric approach, each user will register independently and we will return access / refresh tokens to the
calling app which can be used independently to update the users’ Yats.

In the organization-centric approach, the user will be tied to an organization, giving the organization certain control
over their Yats. This would require a centralized server that would route all requests on behalf of the user.

## Signing up a new user

To create a new account at y.at, register a user with a `POST` query to the
[`/users`](/docs/api-ref#users) end-point.

There are three ways to register a new account on y.at:

* **With an email only**. A [magic link](/docs/register#magic-links) is sent to the user via email to complete their registration. The user's email address is marked confirmed as soon as the user has clicked the magic link provided in their email. After clicking the link the user is asked for a password to complete their registration.
* **With an email and password**. Registration is immediate. Logins may use either username-password. An initial email confirmation step where the user must click an provided confirmation [magic link](/docs/register#magic-links) is required to allow access to checkout to complete any yat purchases.
* **With an "alternate id" and a password**. Affiliates and y.at partners will use this approach. The registration and flow is the same as for email/password. With "alternate id" registrations, logins must _always_ use username-password semantics, since there is no email address to receive a magic link.

An example code snippet for registering a new account is given in
[Integrating Yats - Registering a new account](/docs/integration_general#registering-a-new-account).

## What is the `alternate_id`?

Users can be registered using either to their `email` or an `alternate_id`. The latter is a global unique identifier,
which is typically deterministically determined from the user's integration application and device. Such users require
the `source` and `password` fields to be set when registering. To provide a deamless user experience, the password is
also typically determined under the hood by applying a hash function to data unique to the user and her device.

When configured this way, users registered via `alternate_id` can only be authenticated via `password`, and from the app
that carried out the registration (since the user doesn't know their password).

Users can supply their email address in the web interface at any time to complete their profile and enable `email`-based
authentication.

## Authentication flows

Following are 2 distinct authentication flows:
* Login using password via POST to [`/auth/token`](/docs/api-ref#login-via-password)
* Generate [Magic link](#magic-links) for login via POST to [`/auth/magic_link`](/docs/api-ref#generate-magic-link-for-login)

On top of that user account might be enabled with [two factor authentication](#two-factor-authentication),
which would additionally require to pass 2FA code validation.

Conventional login via password can be used with user accounts registered to their `alternate_id`,
whilst for users registered to their email magic link is preferred way.

POST to `/auth/token` would result in `refresh_token`, `access_token` and a flag if two factor authentication is required:
* `refresh_token` is a token which only allows to acquire `access_token` via POST to [`/auth/token/refresh`](#refresh-access-token)
* `access_token` is a regular [JWT](https://tools.ietf.org/html/rfc7519) token used to authenticate all the API
calls providing it in the `Authorization` HTTP Header concatenated after the `"Bearer "` string.
* `requires_2fa` is a flag which indicates if further authentication via 2FA is required, see section below for details.

We will skip example again as it was already provided in the previous section
[Integrating Yats - User authentication](/docs/integration_general#user-authentication).

### Two factor authentication

Users that setup their account with two factor authentication (2FA) via
[`POST /account/2fa`](http://localhost:3000/docs/api-ref#update-two-factor-authentication), followed by confirmation
to [`POST /account/2fa/confirm`](http://localhost:3000/docs/api-ref#confirm-two-factor-authentication-update) will have an extra step during authentication and login.

When 2FA is required, the `requires_2fa` will indicate what type of 2FA is required. For example,

```json
{
  "requires_2fa": "GoogleAuthenticator"
  ...
}
```

You can obtain a `refresh_token` by posting the 2FA code via POST to [`/auth/2fa`](/docs/api-ref#two-factor-authentication). This token can be used as a regular refresh token.

Even after logging in, some sensitive endpoints are marked with 2FA. These endpoints require two factor authentication validation after a certain grace period (usually 15 minutes). This would be indicated with `424 HTTP` response code `FAILED DEPENDENCY`.

When this happens, a new `access_token` should be acquired by submitting a new code
to [`/auth/2fa`](/docs/api-ref#two-factor-authentication) before proceeding with request.

The Yat SDK manages most of the flow for you as can be seen from the example below:

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
const yat = require('yatjs');
const { authenticator } = require('otplib');
const api = new yat.YatJs();
authenticator.options = { encoding: 'hex' };

let alternate_id = 'my-app-user-id-' + Math.random();
let password = 'secret-password';
let SECRET = '';
/**
 * Register a new Yat account
 * @returns {Promise<boolean>}
 */
async function register() {
    try {
        let res = await api.users().createUser({
            'first_name': "Testy",
            'last_name': "McTesty",
            'source': "My nice app",
            'alternate_id': alternate_id,
            'password': password,
        });
        return true;
    } catch (err) {
        const alreadyRegistered = err.status === 422 && err.body.fields.alternate_id && err.body.fields.alternate_id[0].code === "uniqueness";
        if (!alreadyRegistered) {
            console.log(`Could not register an account: `, err);
        }
        return alreadyRegistered;
    }
}

/**
 * Setup account with 2FA enabled
 * @returns {Promise<boolean>}
 */
async function register_with_2fa() {
    try {
        if (!await register()) {
            console.log("Account already registered, will try to login");
        }
        await api.login(alternate_id, password);
        let { ga_secret, ga_qr_code_svg } = await api.users().enable2FA({"provider": "GoogleAuthenticator"});
        // NOTE: qr_code_svg is svg in text which should be shown to user to save in Google Authenticator
        // For the API purposes we will be using secret directly
        SECRET = ga_secret;
        let code = authenticator.generate(ga_secret);
        console.log(`Confirming 2FA with ${code}. Secret ${ga_secret}`);
        await api.users().confirm2FA({code});
        console.log("Confirmed 2FA for user account. Logged out.");
        api.logout();
        return true;
    } catch (err) {
        console.log(`Could not setup 2FA for account: `, err);
        return false;
    }
}

// Basic login demo
async function runDemo() {
    api.basePath = 'http://localhost:3001';
    console.log(`Yat API calls will be made to ${api.basePath}`);
    if (!await register_with_2fa()) return;
    try {
        let res = await api.login(alternate_id, password);
        console.log("Before confirm_2fa: Requires 2FA = ", res.requires_2fa);
        let code = authenticator.generate(SECRET);
        res = await api.confirm_2fa(code);
        console.log("After confirm_2fa: Requires 2FA = ", res.requires_2fa);
        let account = await api.users().getAccount();
        console.log("User profile data:", account.user);
    } catch (res) {
        console.log(`Could not log in`, res);
    }
}

runDemo()
    .then(() => console.log("Bye"))
    .catch(console.error);
```

</TabItem>
<TabItem value="swift5">

```swift
import Foundation
import YatSDK
import OneTimePassword
            
let email = "test\(UUID().uuidString)@y.at"
let password = "coolpassword"

let alternateId = "my-app-user-id-" + UUID().uuidString
let secretPassword = "secretpassword"
var secret = ""

var oneTimePassword: String? {
    get {
        guard let generator = Generator(
            factor: .timer(period: 30),
            secret: YatAPI.hexStringToData(string: secret),
            algorithm: .sha1,
            digits: 6) else {
                print("Invalid generator parameters")
                return nil
            }

        return Token(generator: generator).currentPassword
    }
}

static func hexStringToData(string: String) -> Data {
    let stringArray = Array(string)
    var data: Data = Data()
    for i in stride(from: 0, to: string.count, by: 2) {
        let pair: String = String(stringArray[i]) + String(stringArray[i+1])
        if let byteNum = UInt8(pair, radix: 16) {
            let byte = Data([byteNum])
            data.append(byte)
        } else {
            fatalError()
        }
    }
    return data
}

/**
 * Register a new Yat account.
 */
func register(completion: @escaping (Result<CurrentUser, Error>) -> Void) {
    let details = RegisterUserParameters(alternateId: alternateId,
                                         email: email,
                                         firstName: "Testy",
                                         lastName: "McTesty",
                                         password: password,
                                         source: "My nice app")

    UsersAPI.createUser(body: details, completion: completion)
}

/**
 * Register a new Yat account with Two Factor Authentication.
 */
func registerWith2fa(completion: @escaping (Result<Void, Error>) -> Void) {
    let failure: ((Error) -> Void) = { error in
        print("Could not setup 2FA for account: \(error.localizedDescription)")
        completion(.failure(error))
    }       

    register { [weak self] result in
        guard let `self` = self else { return }

        switch result {
        case .failure:
            print("Account already registered, will try to login")
            fallthrough
        case .success:
            let loginRequest = LoginRequest(password: self.password,
                                            alternateId: self.alternateId,
                                            email: self.email)

            UserAuthenticationAPI.login(body: loginRequest) { [weak self] (loginResult) in
                switch loginResult {
                case .success(let token):
                    YatSDKAPI.yatCredential = YatCredentials(accessToken: token.accessToken, refreshToken: token.refreshToken)
                    let update2FAParameters = Update2FAParameters(requires2fa: Update2FAParameters.Requires2fa.googleAuthenticator)
                    UsersAPI.update2FA(body: update2FAParameters) { (update2FAresult) in
                        switch update2FAresult {
                        case .success(let response):
                        self?.secret = response.secret!
                        // NOTE: qr_code_svg is svg in text which should be shown to user to save in Google Authenticator
                        // For the API purposes we will be using secret directly
                        if let code = self?.oneTimePassword {
                           print("Confirming 2FA with \(code). Secret \(String(describing: self?.secret))")
                           UsersAPI.confirm2FA(body: Confirm2FaUpdate(code: code)) { (confirmResult) in
                                switch confirmResult {
                                case .success:
                                    print("Confirmed 2FA for user account. Logged out")
                                    // logout
                                    YatSDKAPI.yatCredential = nil
                                    completion(.success(()))
                                case .failure(let error):
                                    failure(error)
                                }
                           }
                        }
                        case .failure(let error):
                            failure(error)
                    }
                            }
                case .failure(let error):
                    failure(error)
                }
            }
        }
    }
}

/**
 * Demo function
 */
func runDemo() {
	// Set API base URL.
    YatSDKAPI.basePath = "http://api.y.at"
    registerWith2fa { (result) in
        switch result {
        case .success:
            let loginRequest = LoginRequest(password: self.password,
                                            alternateId: self.alternateId,
                                            email: self.email)
            UserAuthenticationAPI.login(body: loginRequest) { [weak self] (loginResult) in
                switch loginResult {
                case .success(let token):
                    print("Before confirm_2fa: Requires 2FA = \(String(describing: token.requires2fa))")

                    if let code = self?.oneTimePassword {
                        let confirm2Fa = Confirm2Fa(code: code, refreshToken: token.refreshToken)

                        UserAuthenticationAPI.twoFactorAuthentication(body: confirm2Fa) { (twoFAResult) in
                           	switch twoFAResult {
                            case .success(let token):
                                print("Before confirm_2fa: Requires 2FA = \(String(describing: token.requires2fa))")
                                YatSDKAPI.yatCredential = YatCredentials(accessToken: token.accessToken, refreshToken: token.refreshToken)
                                UsersAPI.getAccount { (accountResult) in
                                    switch accountResult {
                                    case .success(let user):
                                        print("User profile data: \(user)")
                                    case .failure(let error):
                                        print("Get Account failure: \(error.localizedDescription)")
                                    }
                                }
                            case .failure(let error):
                                print("Two Factor Authentication failure: \(error.localizedDescription)")
                            }
                        }
                    }
                case .failure(let error):
                    print("Could not login to account: \(error.localizedDescription)")
                }
            }
        case .failure: return
        }
    }
}
```

</TabItem>
<TabItem value="kotlin">

```kotlin
/**
 * Kotlin One-Time Password Library Dependency:
 * https://github.com/marcelkliemannel/kotlin-onetimepassword
 *
 * Gradle (Kotlin):
 * compile("dev.turingcomplete:kotlin-onetimepassword:2.0.1")
 */
import com.yatlabs.yat.apis.UserAuthenticationApi
import com.yatlabs.yat.apis.UsersApi
import com.yatlabs.yat.infrastructure.ApiClient
import com.yatlabs.yat.models.*
import dev.turingcomplete.kotlinonetimepassword.*
import java.util.concurrent.TimeUnit
import kotlin.math.absoluteValue
import kotlin.random.Random

val alternateId = "my-app-user-id-" + Random.nextInt().absoluteValue
const val password = "secret password"
var SECRET = ""

val totpConfig = TimeBasedOneTimePasswordConfig(
    codeDigits = 6,
    hmacAlgorithm = HmacAlgorithm.SHA1,
    timeStep = 30,
    timeStepUnit = TimeUnit.SECONDS
)

fun hexStringToByteArray(hexString: String): ByteArray {
    val bytes = ByteArray(hexString.length / 2)
    var i = 0
    while (i < hexString.length) {
        bytes[i / 2] = hexString.substring(i, i + 2).toInt(16).toByte()
        i += 2
    }
    return bytes
}

fun register(): Boolean {
    val details = RegisterUserParameters(
        firstName = "Testy",
        lastName = "McTesty",
        source = "My nice app",
        alternateId = alternateId,
        password = password
    )
    return try {
        UsersApi.shared.createUser(details)
        true
    } catch (exception: Exception) {
        false
    }
}

fun registerWith2fa(): Boolean {
    try {
        if (!register()) {
            println("Account already registered, will try to login")
        }
        UserAuthenticationApi.shared.login(
            LoginRequest(
                alternateId = alternateId,
                password = password
            )
        )
        val update2FAResult = UsersApi.shared.update2FA(
            Update2FAParameters(
                requires2fa = Update2FAParameters.Requires2fa.googleAuthenticator
            )
        )
        // NOTE: qr_code_svg is svg in text which should be shown to user to save in Google Authenticator
        // For the API purposes we will be using secret directly
        SECRET = update2FAResult.secret!!
        val otpGenerator = TimeBasedOneTimePasswordGenerator(
            hexStringToByteArray(SECRET),
            totpConfig
        )
        val code: String = otpGenerator.generate()
        println("Confirming 2FA with $code. Secret $SECRET")
        UsersApi.shared.confirm2FA(Confirm2FaUpdate(code))
        println("Confirmed 2FA for user account. Logged out.")
        ApiClient.logout()
        return true
    } catch (exception: Exception) {
        println("Could not setup 2FA for account: ${exception.message}")
        return false
    }

}

fun runDemo() {
    ApiClient.baseUrl = "http://localhost:3001"
    println("Yat API calls will be made to ${ApiClient.baseUrl}")
    if (!registerWith2fa()) {
        return
    }
    try {
        var result = UserAuthenticationApi.shared.login(
            LoginRequest(
                alternateId = alternateId,
                password = password
            )
        )
        println("Before confirm_2fa: Requires 2FA = ${result.requires2fa}")
        val otpGenerator = TimeBasedOneTimePasswordGenerator(
            hexStringToByteArray(SECRET),
            totpConfig
        )
        val code: String = otpGenerator.generate()
        result = UserAuthenticationApi.shared.twoFactorAuthentication(
            Confirm2Fa(
                code = code,
                refreshToken = result.refreshToken
            )
        )
        println("After confirm_2fa: Requires 2FA = ${result.requires2fa}")
        val account = UsersApi.shared.getAccount()
        println("User profile data: ${account.user}")
    } catch (exception: Exception) {
        println("Could not log in: ${exception.message}")
    }
}

fun main() {
    runDemo()
    println("Bye")
}
```

</TabItem>
</Tabs>

The script above would output:

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

```text
Yat API calls will be made to http://localhost:3001
Confirming 2FA with 966584. Secret 32JH3WX6T5MX6IAXDRC5TL4NXW5QZQTG
Confirmed 2FA for user account. Logged out.
Before confirm_2fa: Requires 2FA =  GoogleAuthenticator
After confirm_2fa: Requires 2FA =  null
User profile data: CurrentUserUser {
  created_at: 2021-11-04T17:15:12.311Z,
  free_limit: 1,
  id: '9959671c-e45b-4a01-9f7a-e90fda28375e',
  pubkeys: [
    'ac6eb8980ab34b68ad5894108736fab67b422864d0f5d6c7488202bee671f36e'
  ],
  remaining_free_emoji: 1,
  role: 'User',
  two_factor_should_prompt: false,
  updated_at: 2021-11-04T17:15:12.771Z,
  alternate_id: 'my-app-user-id-0.3491619342661756',
  email: null,
  email_verified_at: null,
  first_name: 'Testy',
  last_name: 'McTesty',
  source: 'My nice app',
  two_factor_auth: [ 'GoogleAuthenticator' ],
  two_factor_last_prompted_at: null
}
Bye

```
</TabItem>
<TabItem value="swift5">

```text
Confirming 2FA with 863938. Secret Optional("303c8746462730628eda1a260817ced5ec771066e3")
Confirmed 2FA for user account. Logged out
Before confirm_2fa: Requires 2FA = Optional(YatSDK.TokenResponse.Requires2fa.googleAuthenticator)
Before confirm_2fa: Requires 2FA = nil
User profile data: CurrentUser(
                        globalScopes: [YatSDK.CurrentUser.GlobalScopes.cartShow, YatSDK.CurrentUser.GlobalScopes.cartUpdate, YatSDK.CurrentUser.GlobalScopes.orderReadself, YatSDK.CurrentUser.GlobalScopes.organizationlistRead, YatSDK.CurrentUser.GlobalScopes.paymentmethodDestroy, YatSDK.CurrentUser.GlobalScopes.paymentmethodRead, YatSDK.CurrentUser.GlobalScopes.paymentmethodSetdefault, YatSDK.CurrentUser.GlobalScopes.userDeleteself, YatSDK.CurrentUser.GlobalScopes.userinterestDelete, YatSDK.CurrentUser.GlobalScopes.userinterestRead, YatSDK.CurrentUser.GlobalScopes.userinterestWrite, YatSDK.CurrentUser.GlobalScopes.userWriteself], organizationRoles: [:], 
                        organizationScopes: [:], 
                        pubkeys: ["6c36804893556a6447d4f62b457d9743ba29afcd15689eaca7d0ca1cc33fd523"], 
                        role: YatSDK.CurrentUser.Role.user, 
                        user: YatSDK.CurrentUserUser(createdAt: 2020-10-21 12:36:15 +0000, 
                        emojiIds: [], 
                        freeLimit: 1, 
                        id: 7573CAB4-A4C3-411F-AC1D-D1B3CA4ABE3E, 
                        isActive: true, 
                        pubkeys: ["6c36804893556a6447d4f62b457d9743ba29afcd15689eaca7d0ca1cc33fd523"], 
                        remainingFreeEmoji: 1, 
                        role: YatSDK.CurrentUserUser.Role.user, 
                        updatedAt: 2020-10-21 12:36:19 +0000, 
                        alternateId: Optional("my-app-user-id-41AA1A22-13A6-4FB0-B4BA-5C281CCD17B8"), 
                        deactivatedAt: nil, 
                        email: Optional("test22bdbe8c-0447-4464-92d1-2cd66cf837de@y.at"), 
                        firstName: Optional("Testy"), 
                        lastName: Optional("McTesty"), 
                        source: Optional("My nice app"), 
                        twoFactorAuth: Optional(YatSDK.CurrentUserUser.TwoFactorAuth.googleAuthenticator)))
```

</TabItem>
<TabItem value="kotlin">

```text
Yat API calls will be made to http://localhost:3001
Confirming 2FA with 202086. Secret 30356be8ffea52d11d5a900adb4bab72b93cef38aa
Confirmed 2FA for user account. Logged out.
Before confirm_2fa: Requires 2FA = googleAuthenticator
After confirm_2fa: Requires 2FA = null
User profile data: CurrentUserUser(
    createdAt=2020-10-13T12:26:37.846788Z, 
    emojiIds=[], 
    freeLimit=1, 
    id=a683cd5a-4590-4504-a26b-21747de81d25, 
    isActive=true, 
    pubkeys=[eeaf3aa6c78d5e541daff3af2041e7d223d80024b9ae136b0b01e75f49a92018], 
    remainingFreeEmoji=1, 
    role=user, 
    updatedAt=2020-10-13T12:26:38.936081Z, 
    alternateId=my-app-user-id-373959841, 
    deactivatedAt=null, 
    email=null, 
    firstName=Testy, 
    lastName=McTesty,
     source=My nice app, 
     twoFactorAuth=googleAuthenticator
)
Bye
```

</TabItem>
</Tabs>

### Magic links

What the heck are magic links? I'm glad you asked.

A user only requires an email address for registration. An introductory email is sent which includes a “magic link”. The
calling app can register an intent for the Yat domain, which would trigger an email to the user with a login link to the y.at site. Once the user has associated a password magic links are no longer available for their use and they must use that password going forward. If the user signs up with an email address and password a magic link is sent their way to confirm their email address.