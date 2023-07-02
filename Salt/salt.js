const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');


// Salt hashing algorithm scrumbles orginal text and uses 'salt' to randomize hash (set seed)

let users = [];

function signup(email, password){
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64);

    const user = { email, password: `${salt}:${hashedPassword.toString('hex')}`}

    users.push(user);

    return user
}

function login(email, password){
    const user = users.find(v => v.email === email);

    const [salt, privateKey] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    console.log(`Hashed password: ${privateKey.toString('hex')}`);

    const keyBuffer = Buffer.from(privateKey, 'hex');

    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if(match){
        return 'Login successful !';
    } else {
        return 'Login failed !';
    }

}

signup('testing@gmail.com', 'myPass');

console.log(login('testing@gmail.com', 'myPass'));