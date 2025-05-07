export default function reverse(str) {
    const result = str.split('')
    .reverse()
    .join('');
    return result;
};