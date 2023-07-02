const { createHmac } = require('crypto');

// HMAC -- Hash-based Message Authentication Code
// Hash, but 2 need to have password (key / secret) in order to hash text and compare it 

const key = 'secret-key..23!';
const message = "This is a message that needs to be hashed";

const hmac = createHmac('sha256', key).update(message).digest('hex');

const key2 = 'another0secret';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');


console.log(hmac);
console.log(hmac2);
