// 10/16/2023

const fs = require('fs');
const fakeEmail = require('./fakeEmail');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Email: ', email => {
    let fakes = fakeEmail(email);
    let logger = fs.createWriteStream('./result.txt');

    fakes.forEach((item, idx) => {
        logger.write(idx + ': ' + item + '\r\n');
    });

    logger.end();
    readline.close();

    console.info('Success');
});