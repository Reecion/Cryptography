const { createSign, createVerify, sign } = require('crypto');
const { publicKey, privateKey } = require('../Keypairs/keypairs');

const message = 'Message that needs to be signed';

// SIGN
const signer = createSign('rsa-sha256');

signer.update(message);

const signature = signer.sign(privateKey, 'hex');


// VERIFY
const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(isVerified ? 'Message is verified' : 'Message is not verified / Seal was broken');