const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('../Keypairs/keypairs');

const message = 'Message to be enccrypted ... ';

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
);

console.log(`Encrypted data: ${encryptedData.toString('hex')}`);

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(`Decrypted data: ${decryptedData.toString('utf-8')}`);