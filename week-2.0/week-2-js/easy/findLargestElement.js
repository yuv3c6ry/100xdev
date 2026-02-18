/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let large = numbers[0]
//   for (let a = 0; a < numbers.length; a++) {
//       if(large<numbers[a]){
//         large = numbers[a]
//       }
//   }
//   return large

    numbers.forEach(element => {
         if(large<element){
            large = element
         }
    });
    return large
}
const a = findLargestElement([2.3, 4, 3, 2, 5]);
console.log(a);

module.exports = findLargestElement;
