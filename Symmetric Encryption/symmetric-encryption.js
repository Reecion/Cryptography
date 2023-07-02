const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

// Way to encrypt message
// 2 people need to know the key and IV behorehand in order to encrypt/decrypt message

const message = 'Message to encryption';
const key = randomBytes(32);
// Initialization vector -- prevents identical hash for the same message
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);
const decipher = createDecipheriv('aes256', key, iv);

const encryptedMessage = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');

console.log('Encrypted message: ' + encryptedMessage);
console.log(`Decripted message: ${decryptedMessage.toString('utf-8')}`);