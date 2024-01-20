function isPalindrome(word) {
  // Initialize two pointers, start at the beginning of the word and end at the last character.
  let start = 0;
  let end = word.length - 1;

  // While the start pointer is less than the end pointer:
  while (start < end) {
    // If the characters at the start and end pointers are not equal, return false (not a palindrome).
    if (word[start] !== word[end]) {
      return false;
    }

    // Move the start pointer to the right.
    start++;

    // Move the end pointer to the left.
    end--;
  }

  // If the loop completes without returning false, the word is a palindrome, so return true.
  return true;
}

// Test cases
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
