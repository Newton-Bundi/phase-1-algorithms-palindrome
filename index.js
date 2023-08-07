function isPalindrome(word) {

  function stringReverse(str) {
   var stringSplit = str.split("");
   var reverseArr = stringSplit.reverse();
   var joinArr = reverseArr.join("");
   return joinArr;
}

  if (stringReverse(word)===word){
    return true;
}else{
    return false;
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
