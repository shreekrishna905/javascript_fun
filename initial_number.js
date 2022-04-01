
/**
 * Get name initials 
 * The given input is a string of multiple words with a single space between each of them. 
 * Abbreviate the name and return the name initials.
 *  Input = 'George Raymond Richard Martin', Result = 'GRRM'
 */

let getNameInitial = (text) => text.split(' ')
                                   .map(word => word.charAt(0))
                                   .reduce((accumalator, initalValue) => accumalator+initalValue,''); 

const input = 'George Raymond Richard Martin';

let result = getNameInitial(input); 

console.log(result); //GRRM