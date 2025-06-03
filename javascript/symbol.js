const symbol = Symbol('id');

const obj = {};

obj[symbol] = 'Hello';

console.log(symbol.valueOf());

console.log("don't");
