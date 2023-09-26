const fieldsAdded = await client.hSet(
    'bike:1',
    {
        model: 'Deimos',
        brand: 'Ergonom',
        type: 'Enduro bikes',
        price: 4972,
    },
)
console.log(`Number of fields were added: ${fieldsAdded}`);
// Number of fields were added: 4

const model = await client.hGet('bike:1', 'model');
console.log(`Model: ${model}`);
// Model: Deimos

const price = await client.hGet('bike:1', 'price');
console.log(`Price: ${price}`);
// Price: 4972

const bike = await client.hGetAll('bike:1');
console.log(bike);
