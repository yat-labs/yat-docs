/*
 * Copyright 2020. Yat Labs
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
 * following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following
 * disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the
 * following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote
 * products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 * INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
 * USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

const yat = require('yatjs');
const { totp } = require('otplib');
const api = new yat.YatJs();

let alternate_id = 'my-app-user-id-' + Math.random();
let password = 'secret password';
let SECRET = '';
totp.options = {
    encoding: 'hex'
};

/**
 * Register a new Yat account
 * @returns {Promise<boolean>}
 */
async function register() {
    let details = new yat.RegisterUserParameters.constructFromObject({
        first_name: "Testy",
        last_name: "McTesty",
        source: "My nice app",
        alternate_id,
        password,

    });
    try {
        let res = await api.users().createUser(details);
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
        let { secret, qr_code_svg } = await api.users().update2FA({"requires_2fa": "GoogleAuthenticator"});
        // NOTE: qr_code_svg is svg in text which should be shown to user to save in Google Authenticator
        // For the API purposes we will be using secret directly
        SECRET = secret;
        let code = totp.generate(SECRET);
        console.log(`Confirming 2FA with ${code}. Secret ${secret}`);
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
        let code = totp.generate(SECRET);
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
