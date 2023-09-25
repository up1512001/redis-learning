const client = require('./client');

async function init(){
    // list can be use as stack or queue
    // L -> Insert & L -> Pop => STACK
    // L -> Insert & R -> Pop => QUEUE
    await client.lpush("hey","bbgsdsrezteaesssssssssss");
    await client.rpush("hey","last element");
    console.log("finished");

}

init();