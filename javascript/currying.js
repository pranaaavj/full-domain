function first(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const final = first(10)(20);

console.log(final(30));
