const sumOfN = (...args) => {
  let sum = 0;
  args.forEach((value) => (sum += value));
  return sum;
};

console.log(sumOfN(1, 2, 3, 4, 5));
