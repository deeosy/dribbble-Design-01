// Array Method Challenges
// Challenge 1
// Instructions:
// Take the people array and create an array called youngPeople that stores objects with ONLY name and email properties of all the people that are 25 and under. The name property should have their first and last name.

const people = [
{
firstName: 'John',
lastName: 'Doe',
email: 'john@gmail.com',
phone: '111-111-1111',
age: 30,
},
{
firstName: 'Jane',
lastName: 'Poe',
email: 'jane@gmail.com',
phone: '222-222-2222',
age: 25,
},
{
firstName: 'Bob',
lastName: 'Foe',
email: 'bob@gmail.com',
phone: '333-333-3333',
age: 45,
},
{
firstName: 'Sara',
lastName: 'Soe',
email: 'Sara@gmail.com',
phone: '444-444-4444',
age: 19,
},
{
firstName: 'Jose',
lastName: 'Koe',
email: 'jose@gmail.com',
phone: '555-555-5555',
age: 23,
},
];


const youngPeople =people.filter((person) => {

  return person.age < 25;

})

// Expected Result:
console.log(youngPeople);
[
{name: 'Jane Poe', email:'jane@gmail.com'},
{name: 'Sara Soe', email:'sara@gmail.com'},
{name: 'Jose Koe', email:'jose@gmail.com'}
]


const myString = 'developer'

console.log(myString.charAt(0).toUpperCase() + myString.slice(1,myString.length));


const arr = [1,2,3,4,5]

console.log(arr.reverse())


const arr1 =[1,2,3,4,5];
const arr2 =[5,6,7,8,9,10];
arr1.pop();

// spread operator (...arr) it makes a copy of the items in an array 
// how to use the spread operator
const arr3 = [...arr1, ...arr2];
console.log(arr3);


