/** 1. SLICE */

/**
1. It return an array

2. The returned array contains the element specified by the first argument
   and all subsequent elements up to, but not including, the element specified
   by the second argument.

3.If only one argument is specified, the returned array contains all elements
  from the specified argument position to the end of the array

4. If either argument is negative, it specifies an array element relative to the length of the array.
   An argument of –1, for example, specifies the last element in the array, and an argument of –2 
   specifies the element before that one. 

**/

let array = [1,2,3,4,5];

// return an array with the first three element
console.log(array.slice(0,3)) // 1,2,3

// return last two element of an array
console.log(array.slice(3)) // 4,5

// return element between first and last element

console.log(array.slice(1,-1)) // 2,3,4

// return new array with only third element

console.log(array.slice(2,-2))

/** 2. SPLICE */