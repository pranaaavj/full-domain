const reverseString = (str) => {
  if (!str) return '';

  return reverseString(str.slice(1)) + str[0];
};

const isPalindrome = (str, left = 0, right = str.length - 1) => {
  if (left >= right) return true;

  if (str[left] !== str[right]) return false;

  return isPalindrome(str, left + 1, right - 1);
};

const factorial = (n) => {
  if (n == 1) return 1;

  return n * factorial(n - 1);
};

const sum = (n) => {
  if (n <= 1) return 1;

  return n + sum(n - 1);
};

// 1 1 2 3 5 8 13
const fibonacci = (n) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciSequence = (n) => {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(fibonacci(i));
  }

  return result;
};

const countZero = (num, count = 0) => {
  if (num <= 0) return count;

  if (num % 10 === 0) count++;

  return countZero(num / 10, count);
};

const powerOfNumber = (num, pow) => {
  if (pow == 1) return num;

  return num * powerOfNumber(num, pow - 1);
};

console.log(powerOfNumber(2, 3));
