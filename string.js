const client = require('./client');

async function init(){
    await client.set("user:4","hy from nodejs");
    await client.expire("user:4",100); // after 100 s remove from redis data
    const result = await client.get("user:4");
    console.log(result);
}

init();