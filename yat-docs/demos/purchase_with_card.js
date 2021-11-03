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

 // Prerequisites:
 // cargo run -- user create --alternate-id "tester" --password yatster --role User

const yat = require('yatjs');
const api = new yat.YatJs();
api.basePath = 'http://localhost:3001';

const alternate_id = "tester";
const password = "yatster";

/**
 * List the yats the user owns
 * @returns {Promise<*>}
 */
async function placeNewCart(items) {
    let request = new yat.UpdateCartRequest(items);
    console.log("Sending replace cart request: ", request);
    let cart = await api.cart().replaceItems(request);
    console.log(`Created cart ${cart.id} with items `, cart.order_items.map((rec, i) => `${i+1}. ${rec.emoji_id} - ${rec.unit_price_in_cents}`));
    return cart;
}

/**
 * List the yats the user owns
 * @returns {Promise<*>}
 */
async function getMyYats() {
    let yats = await api.emojiID().list();
    console.log("These are my yats: ", yats);
    return yats;
}

async function main() {
    try {
        await api.login(alternate_id, password);
        // Pick random yats
        const emojis = await api.emojiID().random();
        console.log("Random emoji suggestions:", emojis.result.map((rec, i) => `${i+1}. ${rec.emoji_id} - ${rec.price}`));
        // Pick 2 yats from the middle and place into the cart
        let items = emojis.result.map((rec) => new yat.UpdateCartRequestItems(rec.emoji_id)).splice(2, 2);
        await placeNewCart(items);

        // Checkout via creadit card. We use test token in this case "tok_visa"
        // For actual payment Stripe token shall be acquired as described https://stripe.com/docs/api/tokens/create_card
        // Yat's Stripe public API key should be used for communication with Stripe
        let result = await api.cart().checkout({ method: "Card", provider: "Stripe", token: "tok_visa", save_payment_method: true, set_default: true });
        if (result.status == "Paid") {
            console.log("Congratulations!");
        }
        console.log(`Order is ${result.status}. Total: ${result.total_in_cents}.`);

        // Now we have setup Default payment method which can be used. Let's buy 2 more emojis
        items = emojis.result.map((rec) => new yat.UpdateCartRequestItems(rec.emoji_id)).splice(5, 2);
        await placeNewCart(items);
        result = await api.cart().checkout({ method: "Default" });
        console.log(`Order is ${result.status}. Total: ${result.total_in_cents}.`);

        // List all emojis for the user (NOTE: it might be more than we just bought)
        await getMyYats();
    } catch(err) {
        console.log("Failed: ", err)
    }
}

// Main script
main()
.catch(res => {
    console.log('Error:', JSON.stringify(res.body));
}).then((res) => {
    console.log("Bye!")
});
