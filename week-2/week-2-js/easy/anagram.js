/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   const str = str1.toLowerCase().split('').sort().join('');
   const strr = str2.toLowerCase().split('').sort().join('');
   console.log(str1.split().sort())
   if(str === strr){
    return true
   }else{
    return false
   }
};
isAnagram("man" , "amn")


module.exports = isAnagram;
