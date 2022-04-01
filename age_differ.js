/**
 * Age difference from the youngest and oldest
Find the difference in age between the oldest and youngest family members,
and return their respective ages and the age difference.

const input = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];

  Result=  [13, 67, 54]
 */



let get_ages = (input) => input.map(person => person.age);

const input = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];

let ages = get_ages(input);

let result = [Math.min(...ages),Math.max(...ages), Math.max(...ages) - Math.min(...ages)];

console.log(result);
