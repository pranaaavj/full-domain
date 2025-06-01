const validParenthesis = (paren) => {
  const brackets = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  const stack = [];
  for (const curr of paren) {
    if (brackets[curr]) {
      const lastBracket = stack.pop();
      if (lastBracket !== brackets[curr]) return false;
    } else {
      stack.push(curr);
    }
  }

  return !stack.length;
};

console.log(validParenthesis('[[[]]]'));
