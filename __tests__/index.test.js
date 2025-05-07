import reverse from "../src/index.js";
import set from '../src/set.js';

test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh')
    expect(reverse('')).toEqual('')
})
