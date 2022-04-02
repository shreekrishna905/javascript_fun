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

/** 
a. It can delete elements from an array, insert new elements into an array, or
perform both operations at the same time. 

b. The first argument to splice() specifies the array position at which the insertion and/or deletion is to begin.

c. The second argument specifies the number of elements that should be deleted from (spliced out of) the array. 

d. If this second argument is omitted, all array elements from the start element to the end of the array are removed.

e. The first two arguments to splice() specify which array elements are to be deleted.
   These arguments may be followed by any number of additional arguments that specify elements
   to be inserted into the array, starting at the position specified by the first argument.

**/

console.log("Splice operations")

let a = [1,2,3,4,5,6,7,8];
a.splice(4) // => [5,6,7,8]; a is now [1,2,3,4]
console.log(a);
a.splice(1,2); // => [2,3]; a is now [1,4]
console.log(a);
a.splice(1,1)
console.log(a);


// inserting with splice

let x = [1,2,3,4,5];
x.splice(2,0,"a","b") 
console.log(x); // deletes => []; x is now [1,2,"a","b",3,4,5]
x.splice(2,2,[1,2],3) 

console.log(x) // deletes => ["a","b"]; x is now [1,2,[1,2],3,3,4,5]


