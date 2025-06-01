import fs from 'fs';

const read = fs.createReadStream('./test.txt', 'utf-8');
const write = fs.createWriteStream('./test1.txt');

read.addListener('data', (chunk) => {
  console.log('Data being added');
  console.log(chunk);
});

read.on('data', (chunk) => console.log(chunk));

// read.pipe(write);
