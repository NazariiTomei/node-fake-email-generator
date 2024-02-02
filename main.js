// 10/16/2023

const fs = require('fs');
const fakeEmail = require('./fakeEmail');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Example: abc@xyz.com");

readline.question('Email: ', email => {
    let fakes = fakeEmail(email);
    let logger = fs.createWriteStream('./result.txt');

    fakes.forEach((item, idx) => {
        logger.write(item + '\r\n');
    });

    logger.end();
    readline.close();

    console.info('Success');
});