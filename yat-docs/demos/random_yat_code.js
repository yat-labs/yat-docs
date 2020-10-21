/*
 * Copyright 2020. Yat Labs.
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

// This script has certain prerequisites:
// 1. that user owner@org.com is registered as organization owner
// 2. that user user@email.com is registered as user
// 3. that organization has RandomYat discount code assigned by super admin
// setup script:
// ```sh
// cargo run -- organization create --name goodcorp
// cargo run -- user create --email owner@org.com --password your_password --role OrgOwner --organization-id $ORG_ID
// cargo run -- user create --alternate-id "app-user" --password your_password --role User
// curl http://127.0.0.1:3001/codes -X POST -d '{"name": "random yat", "organization_id": $ORG_ID, "code_type": "RandomYat", "activator": "SecretKey", "discount_as_percentage": 100}'
// ``

const yat = require('yatjs');
const tari_crypto = require('tari_crypto');
const api = new yat.YatJs();
const apiUser = new yat.YatJs();

// Lookup RandomYat code and return first Code object
async function lookup_code(organization_id) {
    // First lookup organization Id
    // Lookup available codes and pick one with RandomYat code_type
    let opts = { 'codeType': 'RandomYat', 'organizationId': organization_id };
    let res = await api.discounts().listCodes(opts);
    if (res.data.length == 0) throw 'Code was not found';
    // res is of type ListOfCodeAvailability
    console.log('Found random yat code: ', JSON.stringify(res.data[0]));
    return res.data[0]
}

async function attach_pubkey(code, pubkey) {
    let codeId = code.id;
    let res = await api.discounts().addPubkeyForCode(codeId, pubkey);
    console.log(`Code pubkey ${pubkey} was attached succesfully`);
}

async function activate_random_yat(user, code, pubkey, secret) {
    let codeId = code.id;
    let body = new yat.RandomYatActivateBody();
    let signature = tari_crypto.sign(secret, user.alternate_id);
    body.nonce = signature.public_nonce;
    body.pubkey = pubkey;
    body.signature = signature.signature;
    let res = await apiUser.discounts().activateRandomYatCode(codeId, body);
    console.log(`Created cart ${res.id}`);
    return res;
}

async function checkout() {
    let res = await apiUser.cart().checkout({ method: "Free" });
    let eid = res.order_items.filter((item) => item.item_type == 'EmojiId')[0].emoji_id;
    console.log('Congratulations with your free emoji: ', eid);
}

async function main() {
    try {
        // Initialize API and login
        api.basePath = 'http://localhost:3001';
        await api.login("owner@org.com", "your_password");
        apiUser.basePath = 'http://localhost:3001';
        await apiUser.login("app-user", "your_password");

        // Retrieve information about current account
        let account = await api.users().getAccount();
        let organization_id = null;
        for (var id in account.organization_roles) {
            if (account.organization_roles[id] == 'OrgOwner') organization_id = id;
        }
        console.log(`User [email=${account.user.email}] is owner of organization [ID=${organization_id}]`);

        // Setup access to code activation via signature
        // Secret key would be stored only on a client side
        // and used for signing messages
        let [secret, pubkey] = tari_crypto.generate_keypair();
        console.log(`Pubkey: ${pubkey} Secret: ${secret}`);
        let code = await lookup_code(organization_id);
        await attach_pubkey(code, pubkey);

        // Now the user part. User need to know secret or signed message.
        let user_account = await apiUser.users().getAccount();
        let cart = await activate_random_yat(user_account.user, code, pubkey, secret)
        console.log("Cart items:");
        for (const oi of cart.order_items) {
            console.log(`${oi.item_type} ${(oi.emoji_id ? ` ${oi.emoji_id}\t` : "\t\t" )} Value=${oi.unit_price_in_cents}`);
        }

        // Finally acquire emoji for user
        await checkout();
    } catch (error) {
        console.error(error);
    }
}


main()
    .then(() => console.log("Bye"))
    .catch(console.error);
