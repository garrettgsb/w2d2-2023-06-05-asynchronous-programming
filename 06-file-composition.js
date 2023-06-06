const fs = require('fs');

// Run this five times... Notice any difference?
fs.readFile('./female-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => getData('fNames', JSON.parse(data), generateName));
fs.readFile('./male-first-names-en-dataset.json', { encoding: 'utf8' }, (err, data) => getData('mNames', JSON.parse(data), generateName));
fs.readFile('./1000-most-common-surnames.txt', { encoding: 'utf8' }, (err, data) => getData('surnames', data.split(',\n'), generateName));

const names = {
  fNames: undefined,
  mNames: undefined,
  surnames: undefined,
};

function getData(key, data, callback) {
  names[key] = data;
  if (Object.values(names).includes(undefined)) return;
  callback();
}

function generateName() {
  const firstNameListKey = `${Math.random() > 0.5 ? 'm' : 'f'}Names`;
  const firstNameIdx = Math.floor(Math.random() * names[firstNameListKey].length);
  const surnameIdx = Math.floor(Math.random() * names.surnames.length);
  console.log(`${names[firstNameListKey][firstNameIdx]} ${names.surnames[surnameIdx]}`);
}
