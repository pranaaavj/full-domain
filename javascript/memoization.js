function memoize(func) {
  const memoize = {};
  return (n) => {
    if (memoize[n]) {
      console.log('Retrieving from memoize');
      return memoize[n];
    }

    const answer = func(n);
    memoize[n] = answer;
    return answer;
  };
}

function getMul(num) {
  let ans = 0;
  for (let i = 0; i < 100000; i++) {
    num += i;
  }

  return num;
}

const memoizedGetNum = memoize(getMul);

const test1 = performance.now();

console.log(memoizedGetNum(100));

const test2 = performance.now();
console.log('first ', test2 - test1);

console.log(memoizedGetNum(100));

const test3 = performance.now();
console.log('second ', test3 - test2);
