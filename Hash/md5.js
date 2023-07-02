const msg = "hello";




function md5(message){
    // Original message as Buffer (list of bytes)
    const messageBuffer = Buffer.from(message, "utf-8");
    // Message length in bits
    const messageLength = messageBuffer.byteLength * 8;
    // Amount of multiplication of 512 bits for whole mesage
    const amountOf512bits = Math.floor((messageLength + 64) / 512) + 1;
    // Amount of padding bytes
    const paddingBytes = ((512 * amountOf512bits) - messageLength - 64) / 8;
    // Creating pading Buffer
    const paddingBuffer = Buffer.alloc(paddingBytes);
    // Creating Buffer of 64 bits containing length of input message
    const lengthBuffer = Buffer.alloc(8);
    const large =  BigInt(messageLength);
    lengthBuffer.writeBigInt64BE(large);
    // Concat original message, padding and length Buffers
    const arr = [messageBuffer, paddingBuffer, lengthBuffer]
    const wholeMessageBuffer = Buffer.concat(arr);


    /* 
                                                    \/ [possible error]
    The padding works as follows: first, a single bit, 1, is appended to the end of the message. 
    This is followed by as many zeros as are required to bring the length of the message up to 64 bits fewer than a multiple of 512. 
    The remaining bits are filled up with 64 bits representing the length of the original message

    */

    
    console.log(wholeMessageBuffer);

}

md5(msg);





