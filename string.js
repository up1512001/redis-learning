const client = require('./client');

async function init(){
    const result = await client.get("user1");
    console.log(result);
}

init();