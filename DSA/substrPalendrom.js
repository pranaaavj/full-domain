function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left > right) return true;

  if (str[left] !== str[right]) return false;

  return isPalindrome(str, left + 1, right - 1);
}

function longestSubStr(str) {
  let max = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const subStr = str.slice(i, j);
      if (isPalindrome(subStr) && subStr.length > max.length) {
        max = subStr;
      }
    }
  }

  return max;
}

console.log(longestSubStr('cbbd'));
