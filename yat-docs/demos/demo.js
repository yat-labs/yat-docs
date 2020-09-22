/*
 * Copyright 2020. Tari Labs Pty. Ltd.
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
const api = new yat.YatJs();

// Basic login demo
async function runDemo() {
    console.log(`Yat API calls will be made to ${api.basePath}`);
    api.basePath = 'http://localhost:3001';
    console.log(`Changed base path. Now Yat API calls will be made to ${api.basePath}`);
    try {
        let res = await api.login("bob@example.com", "wrong_password");
        console.log("Logged in (Should not see this): ", res);
    } catch (res) {
        console.log(`Could not log in: ${res.error}`);
        try {
            await api.users().getAccount();
        } catch (res) {
            console.log(`Cannot access account: ${res.error}`);
        }
    }
    try {
        await api.login("test@tari.com", "real_password");
        console.log("Logged in.");
        let account = await api.users().getAccount();
        console.log("Account data:", account);
    } catch (res) {
        console.log(`Could not log in: ${res.error}`);
    }
}

runDemo()
    .then(() => console.log("Bye"))
    .catch(console.error);