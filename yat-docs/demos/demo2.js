const packagePath = '../sdks/nodejs/dist/invokers'
async function runDemo() {
    const yat = require(packagePath);
    const api = new yat.YatJs();
    api.basePath = 'http://localhost:3001';
    try {
        let res = await api.login("test@tari.com", "test123");
        console.log("Logged in");
    } catch (res) {
        console.log(`Could not log in: ${res.error}`);
    }
    try {
        const yats = await api.emoji().list();
        console.log("My yats:", yats);
    } catch (res) {
        console.log(`Cannot access account: ${res.error}`);
    }
}

runDemo()
    .then(() => console.log("Bye"))
    .catch(console.error);