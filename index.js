const bayes = require('./src/bayes');

console.clear();
console.log('---');
console.log('Naive Bayes');
console.log('---\n');

console.log('Read train data from data/train.data');
console.log('---\n');
console.log('Read test data from data/test.data');
console.log('---\n');

console.log('Result:\n');
console.log(bayes.predict('data/train.data', 'data/test.data'));

console.log('\n');

