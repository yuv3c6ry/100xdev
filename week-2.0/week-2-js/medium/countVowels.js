/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let checkpoint = ["a", "e", "i", "o", "u",'A', 'E', 'I', 'O', 'U'];
  let count =0;
    str.split('').forEach((e)=>{
      if(checkpoint.includes(e)){
       count= count+1;
      }
    });
    return count;
};
countVowels("nimuname")

module.exports = countVowels;