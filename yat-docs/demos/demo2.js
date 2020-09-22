const packagePath = '../sdks/nodejs/dist/invokers'

const yat = require(packagePath);
const api = new yat.YatJs();
api.basePath = 'http://localhost:3001';

const email = "tester@y.at";
const password = "yatster";

/**
 * Register a new Yat account
 * @returns {Promise<boolean>}
 */
async function register() {
    let details = new yat.RegisterUserParameters.constructFromObject({
        first_name: "Testy",
        last_name: "McTesty",
        email,
        password
    });
    try {
        let res = await api.users().createUser(details);
        console.log("Registered user response:", res);
        return true;
    } catch (err) {
        const alreadyRegistered = err.status === 422 && err.body.fields.email[0].code === "uniqueness";
        if (!alreadyRegistered) {
            console.log(`Could not register an account: ${err.error}`);
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
        // If login fails after registration, it may be due to y.at still being in closed Alpha. Each registration must be manually
        // approved by an admin before you can continue.
        let res = await api.login(email, password);
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
    await api.cart().clear();
    // This is for demo purposes. There are also endpoints for automatically selecting a random yat and applying a
    // promo code.
    const myYat = selectRandomYat(emojiList, 4);
    console.log(`Checking ${myYat} availability...`);
    let opts = {
        'redemptionCode': "FREEYAT" // String | Redemption code
    };
    const yatInfo = await api.emojiID().search(myYat, opts);
    console.log(yatInfo.result);
    if (!yatInfo.result.available) {
        console.log(`Bad luck :(, ${yat} is not available.`);
    }
    // Add the yat to the cart. This time use the constructor
    const order = new yat.UpdateCartRequest([
        {
            emoji_id: myYat,
            redemption_code: "FREEYAT"
        }
    ]);
    const cart = await api.cart().add(order);
    console.log("Order added to cart: ", cart);
    // Checkout..
    const result = await api.cart().checkout({
        method: {type: "Free"}
    });
    console.log("Checkout succeeded: ", result);
    return myYat;
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
        let records = await api.emojiID().lookup(yat);
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