const nestedArray = [1, [2, [3, [4, 5]], 6], 7];

function flatArray(arr) {
  const result = [];

  for (const nestArr of arr) {
    if (Array.isArray(nestArr)) {
      result.push(...flatArray(nestArr));
    } else {
      result.push(nestArr);
    }
  }

  return result;
}

console.log(flatArray(nestedArray));
