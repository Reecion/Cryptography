const { createHash } = require('crypto');

// Hashing algorithm scrumbles orginal text 

function hash(input){
    return createHash('sha256').update(input).digest('hex');
}

let myPassword = 'Testing';
const hash1 = hash(myPassword);
console.log(hash1);

let anotherPassword = 'Testing';
const hash2 = hash(anotherPassword);
console.log(hash2);

console.log(hash1 === hash2 ? "Passwords match" : "Passwords do not match")