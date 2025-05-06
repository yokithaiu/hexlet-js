import set from '../src/set.js'

const obj = {};

set(obj, 'key1', 'value1') 
if (obj.key1 !== 'value1') {
    throw new Error('Function works wrong!')
}

set(obj, 'key1', 'next value')
if (obj.key1 !== 'next value') {
    throw new Error('Function works wrong!');
}
console.log('All tests finished correct!');
