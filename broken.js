"use strict";

const sum = (a, b) => {
  return a + b;
};

const brokenSum = (a,b,c) => {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const brokeMinus = (b - a) => {
  return b;
};

const multiply = (a, b) => {
  return a * b;
};

console.log(sum(2, 2)); // returns 4
console.log(sum(2, 5)); // returns 7
console.log(sum("a", "b")); // returns ab
console.log(brokenSum(2,2));
console.log(brokeMinus(2,8))
