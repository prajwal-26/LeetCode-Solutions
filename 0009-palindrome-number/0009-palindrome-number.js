/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //convert the number to a string
    var numStr = x.toString();
    //Reverse the String
    var reverseStr = numStr.split('').reverse().join('')
    return numStr === reverseStr;
};
console.log(isPalindrome(121));