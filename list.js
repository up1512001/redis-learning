const client = require('./client');

async function init(){
    // list can be use as stack or queue
    // L -> Insert & L -> Pop => STACK
    // L -> Insert & R -> Pop => QUEUE
    // await client.lpush("hey","bbgsdsrezteaesssssssssss");
    // await client.rpush("hey","last element");
    console.log(await client.lpop("hey"));
    console.log(await client.rpop("hey"));
    console.log(await client.llen("hey"));
    // wait for 10 s or until element get enter`
    console.log(await client.blpop("hey",10));
    console.log("finished");
    // await client.lpush("hey","utsav");
}

init();