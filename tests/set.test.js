import set from '../src/set.js'
import { strict as assert } from 'node:assert';
const obj = {};

const firstTest = set(obj, 'key1', 'value1'); 
assert.deepEqual(firstTest, 'value1');

const secondTest = set(obj, 'key1', 'next value')
assert.deepEqual(secondTest, 'next value');
