function isPalindrome(string) {
  // Start coding here
  const lowercaseString = string.toLowerCase();
  const cleanString = lowercaseString.replace(/\s/g, '');
  const stringArray = cleanString.split('');
  const reversedArray = stringArray.slice().reverse();

  return stringArray.join('') === reversedArray.join('');
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false