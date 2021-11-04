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
const api = new yat.YatJs();
api.basePath = 'http://localhost:3001';

const alternate_id = "tester";
const password = "secret-password";

/**
 * Register a new Yat account
 * @returns {Promise<boolean>}
 */
 async function register() {
    let details = yat.RegisterUserParameters.constructFromObject({
        first_name: "Testy",
        last_name: "McTesty",
        source: "yat-docs",
        alternate_id: alternate_id,
        password: password,
    });

    try {
        await api.users().createUser(details);

        console.log("Registered user")
        return true;
    } catch (err) {
        const alreadyRegistered = err.status === 422 && err.body.fields.email[0].code === "uniqueness";
        if (!alreadyRegistered) {
            console.log(`Could not register an account: ${err.error}`);
        } else {
            console.log(`User was already registered, continuing`);
        }
        return alreadyRegistered;
    }
}

/**
 * Generate a random yat of length `len` from the given list of emoji
 * @returns {string}
 */
function selectRandomYat(list, len) {
    const yat = [];
    for (let i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * list.length);
        yat.push(list[index]);
    }
    return yat.join("");
}

/**
 * Login into the yat API
 * @returns {Promise<void>}
 */
async function login() {
    try {
        let res = await api.login(alternate_id, password);
    } catch (res) {
        console.log(`Could not log in: ${res.error}`);
        throw new Error("Could not login");
    }
}

/**
 * Attempt to procure a free yat using the given promo code
 * @returns {Promise<string>}
 */
 async function purchaseYat() {
    // Request the set of supported emoji
    const emojiList = await api.emoji().emojiList();
    // Clear the cart
    await api.cart().clearCart();
    // This is for demo purposes. There are also endpoints for automatically selecting a random yat and applying a
    // promo code.
    const myYat = selectRandomYat(emojiList, 4);
    console.log(`Checking ${myYat} availability...`);
    let opts = {
        'redemptionCode': "FREEYAT" // String | Redemption code
    };
    const yatInfo = await api.emojiID().searchEmojiID(myYat, opts);
    console.log(yatInfo.result);
    if (!yatInfo.result.available) {
        console.log(`Bad luck :(, ${yat} is not available.`);
    }
    
    // Add the yat to the cart. This time use the constructor
    const order = new yat.AddItemsCartRequest([
        {
            emoji_id: myYat,
        }
    ]);
    const cart = await api.cart().addItems(order);
    console.log("Order added to cart: ", cart);
    // Checkout, currently to add a promo method the cart must be in a pending payment state
    await api.cart().checkout({ method: "Stripe"});
    
    let promoCodeResult = await api.cart().applyPromoCode({
        'code': "FREEYAT" // String | Redemption code
    });
    console.log("Apply promo code request succeeded: ", promoCodeResult);

    let checkoutFreeResult = await api.cart().checkout({ method: "Free" });
    console.log("Checkout succeeded: ", checkoutFreeResult);
    await new Promise(r => setTimeout(r, 5000));

    return myYat;
}

/**
 * List the yats the user owns
 * @returns {Promise<*>}
 */
async function getMyYats() {
    let yats = await api.emojiID().listEmojiIDs();
    console.log("These are my yats: ", yats);
    return yats;
}

/**
 * Add a url record to my Yat
 * @returns {Promise<*>}
 */
async function addYatRecord(yat, url) {
    const req = {
        insert: [{
            tag: "0x4001",
            data: url
        }]
    };
    try {
        await api.emojiID().edit(yat, req);
        console.log("URL added to yat.");
    } catch (err) {
        console.log("Error Result of adding record request: ", err.body);
    }
    return yat;
}

/**
 * Display all the records associated with the given yat
 * @param yat
 * @returns {Promise<void>}
 */
async function printYatRecords(yat) {
    try {
        let records = await api.emojiID().lookupEmojiID(yat);
        console.log(records);
    } catch (err) {
        console.log("Error fetching yat data: ", err.body)
    }
}

// Main script
register()
.then(login)
.then(getMyYats)
.then(yats => {
    if (yats.length === 0) return purchaseYat();
    return yats[0];
})
.then(yat => {
    return addYatRecord(yat, "http://api-docs.y.at/docs/sdks/nodejs/sdk_nodejs_index");
})
.then(printYatRecords)
.catch(res => {
    console.log('Error:', JSON.stringify(res.body));
}).then((res) => {
    console.log("Bye!")
});