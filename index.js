//using built -in functions to check if is palindrome

function isPalindrome(word) {
  // Write your algorithm here

const arrayValues = word.split('');

//reverse the array values
const reverseArrayValues = arrayValues.reverse();

//convert array to string
const reverseWord = reverseArrayValues.join('');

if(word == reverseWord) {
  return true;
}
else{
  return false;
}

}



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
