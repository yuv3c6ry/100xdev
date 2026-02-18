/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   let salect = [
//     "@",
//     "#",
//     "$",
//     "%",
//     "^",
//     "&",
//     "*",
//     "(",
//     ")",
//     "=",
//     "+",
//     "`",
//     "~",

//     " ",
//     "!",
//     ",",
//     ".",
//     "?",
//     "/",
//     ":",
//     ";",
//     "'",
//     "[",
//     "]",
//     "{",
//     "}",
//   ];

//   let newstr = str.split("").filter((e) => {
//     if (salect.includes(e)) {
//       return false;
//     } else {
//       return true;
//     }
//   });
//   let newstrr = newstr.join("").toLowerCase();
//   let reverse = newstr.reverse().join("").toLowerCase();
//   if (newstrr === reverse) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const a = isPalindrome("mam?");
// console.log(a);

function isPalindrome(str) {
  // here my gole is to filter
  let filterstr = "";
  for (let char of str) {
    if (
      (char >= "A" && char <= "Z") ||
      (char >= "a" && char <= "z") ||
      (char >= "0" && char <= "9")
    ) {
      filterstr = filterstr + char.toLowerCase();
    }
  }

  // let newneon = filterstr.split('').reverse().join('');
  // if(filterstr === newneon){
  //   return true
  // }else{
  //   return false
  // }
  let left = 0
  let right = filterstr.length-1;
while(left<right){
     if(filterstr[left] !== filterstr[right]){
      return false
     }
     left++;
     right--;
};
return true;




};




module.exports = isPalindrome;