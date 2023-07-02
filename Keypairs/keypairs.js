const { generateKeyPairSync } = require('crypto');

// RSA - Rivest Shamir Adleman
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, // The length of the key in bits
    publicKeyEncoding: {
        type: 'spki', // recommended by Node.js doc
        format: 'pem', // Privacy Enhanced Mail
    },
    privateKeyEncoding: {
        type: 'pkcs8', // recommended by Node.js doc
        format: 'pem',
        // cipher: 'aes-256-cbc',
        // passphrase: 'top secret'
    },
});

console.log(publicKey);
console.log(privateKey);

module.exports = {
    privateKey, publicKey
};