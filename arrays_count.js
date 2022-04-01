/**
 * Count the occurrences of distinct elements in the given 2D array. 
 * The given input is an array, the elements of which are arrays of strings.
 *  The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.
 * 
 * */
/** INPUT AND OUTPUT  
  input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];
  {a: 1, b: 1,c: 2, d: 2, f: 2, g: 1,}

  */

let count = (arrays) => {
    return arrays.flat()
          .reduce((accumalator, inital) => {
                if(accumalator[inital]){
                    accumalator[inital] += 1;
                } else {
                    accumalator[inital] = 1;
                }
                return accumalator;
          }, {});
}

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];

let result = count(input);

console.log(result);