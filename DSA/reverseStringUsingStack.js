const str = 'pranav';

function reverseString(str) {
  let reversed = '';
  const stack = [];

  for (const letter of str) stack.push(letter);
  for (const _ of str) reversed += stack.pop();

  return reversed;
}

console.log(reverseString(str));
