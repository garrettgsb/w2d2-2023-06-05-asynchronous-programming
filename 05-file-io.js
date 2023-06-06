const fs = require('fs');

console.log('Start');
fs.readFile('./counter', { encoding: 'utf-8' }, (_error, currentCounterValue) => {
  fs.writeFile('./counter', String(Number(currentCounterValue) + 1), () => {
    console.log('File write finished');
    fs.readFile('./counter', { encoding: 'utf-8' }, (_error, newCounterValue) => console.log(newCounterValue));
  });
});

console.log('End');
