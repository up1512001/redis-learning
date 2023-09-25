const client = require('./client');

async function init(){
    // list can be use as stack or queue
    // L -> Insert & L -> Pop => STACK
    // L -> Insert & R -> Pop => QUEUE
    // await client.lpush("hey","bbgsdsrezteaes");
    // await client.rpush("hey","last element");
    // console.log(await client.lpop("hey"));
    // console.log(await client.rpop("hey"));
    console.log(await client.llen("hey"));
    // wait for 10 s or until element get enter`
    // console.log(await client.blpop("hey",10));
    console.log("finished");
    
    // console.log(await client.lrange("hey",0,2));    
    // await client.lpush("hey","utsav");

    // delete item => 0 or 1
    console.log(await client.del("hey_lpush"));

    // keys
    console.log(await client.keys("user:*"));


}

init();