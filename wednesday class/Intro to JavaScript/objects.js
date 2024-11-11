// const students = [
//   { name: "Joseph", age: 23 },
//   { name: "Isaac", age: 22 },
// ];


// for(let i=0; i < students.length; i++){
//     // console.log(students[i]);
//     console.log(students[i].name);
// }


// const students1 = [
//   { name: "Joseph", age: 23 },
//   { name: "Isaac", age: 12 },
//   { name: "Benson", age: 57 },
//   { name: "Hafsa", age: 43 },
//   { name: "Priscilla", age: 100 },
//   { name: "Daniella", age: 200 },
// ];


// for(let i=0; i < students1.length; i++){
//     if (students1[i].age > 50) {
//         console.log(students1[i].name);
//     }
// }


// const product = {
//   name: 'iPhone 14',
//   price: '$1,000',
//   description: 'The latest model',
//   category: 'electronics',
// };

// console.log(product.name);
// console.log(product.price);
// console.log(product.description);
// console.log(product.category);



// How to use the class and constructor to create new values in an object just like a Factory Function
// class Student {

//   constructor (name, age, id, email){
//       this.name = name;
//       this.age = age;
//       this.id = id;
//       this.email = email;
//   }
// }

// const grace = new Student('Grace', 23, 1, 'grace@gmail.com');

// const Joseph = new Student('Joseph', 34, 2, 'joseph@ymail.com');




// class Product {
//   constructor(name, id, class1, category){
//       this.name = name;
//       this.id = id;
//       this.class1 = class1;
//       this.category = category;
//   }
// }

// const rice = new Product('rice', 23, 'lane 11', 'cereal');

// console.log(rice);


// How to use the extend to get values from the parents, here the parent being Person and the child being Employee
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
      super(name, age);
      this.salary = salary;
  }
}

const joseph = new Employee('Joseph', 32, `$${"100,000.00"}`)
console.log(joseph);



