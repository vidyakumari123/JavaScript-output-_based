/*  Memory trick:

call → comma

apply → array

bind → bind and save for later */




/* 1. call()

Calls the function immediately.

Takes arguments separately. */


// var obj = {name: "Piyush"};
// function sayHello(age){
//   return "Hello " + this.name + "is"+age;
// }
//  console.log(sayHello.call(obj,24)); 
//Hello Piyushis24


///////////////////////////////////////////////////////

/* 2. apply()

Calls the function immediately.

Takes arguments as an array. */

// function sayHello(day,status){
//   return "Hello " + this.name + " today is " + day + " and feel "+ status;
// }

// var obj = {name: "Piyush"};

//  console.log(sayHello.apply(obj,["tuesday", "good"])); // 'Hello Piyush today is tuesday'



//////////////////////////////////////


/* 3. bind()

Doesn’t call immediately.

Returns a new function with this fixed. */


/* function sayHello(){
  return "Hello " + this.name;
}

var obj = {name: "Piyush"};

const helloFn = sayHello.bind(obj);

console.log(helloFn());
 */

////////////////////////////////////////////

// 1. Give the output of the following question.

/* const person = { name: 'Piyush' };

function sayHi(age) {
  return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24)); //It will give "Piyush is 24 years"
console.log(sayHi.bind(person, 24));//It will return the function "sayHi"
 */


//////////////////////////////////////////////////
// Give the output of the following code snippet

// const age = 10;
// var person = {
//     name: "Piyush",
//   age: 20,
//   getAge: function(){
//     return this.age;
//   }
// }

// var person2 = {age:  24};
//  console.log(person.getAge.call(person2)); // 24

 /* Explaination

First of all what do you think will be the output of the following line.

console.log(person.getAge());
Hmm.....🤔
getAge() is a method of a person object. Where would this point to?
 Obviously it will point to the age variable of person object so it will
  output 20.

What if we want to use the getAge() 
method to fetch age from another object? Well, 
here comes call() to the rescue. WOhoo!

console.log(person.getAge().call(person2));

This will call getAge() with person2 object and 
will print 24 since it has the age variable.

Let's try with bind() and apply() too.

console.log(person.getAge().apply(person2));

Where is the arguments array? 😡
 Umm well getAge() doesn't require any 
 arguments so this line of code will print 24

console.log(console.log(person.getAge().bind(person2)()) */



////////////////////////////////////////////////////


// 3. What will the output of the below code snippet?

// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);

/*Explaination

The value of the this keyword is dependent on where you use it.

In a method, like the getStatus method, the this keyword refers to the object that the
 method belongs to. The method belongs to the data object, so this refers to the data object.
  When we log this.status, the status property on the data object gets logged, which is "🥑".

With the call method, we can change the object to which the this keyword refers.

In functions, the thiskeyword refers to the the object that the function belongs to.

We declared the setTimeout function on the global object, so within the setTimeout function,
 the this keyword refers to the global object. On the global object, there is a variable 
 called status with the value of "😎". When logging this.status, "😎" gets logged

 */


////////////////////////////////////////////////////

// 4. write printAnimals() in such a way that 
// it prints all animals in object below.
// const animals = [
//   { species: 'Lion', name: 'King' },
//   { species: 'Whale', name: 'Queen' }
// ];

// function printAnimals(i) {
//     this.print = function() {
//       console.log('#' + i + ' ' + this.species
//                   + ': ' + this.name);
//     }
//     this.print();
//   }

// for (let i = 0; i < animals.length; i++) {
//   printAnimals.call(animals[i], i); 
// } 

  ////////////////////////////////////////////////////////

// 5. How to append an array to another array.


// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push.apply(array,elements);
// console.log(array) 

//////////////////////////////////////////


// 6. Find min/max in an array and use apply to enhance a built-in function.
// const numbers = [5, 6, 2, 3, 7];
//  console.log(Math.max.apply(null,numbers))
// // using Math.min/Math.max apply

// let max = Math.max.apply(null, numbers); // equal to Math.max

// let min = Math.min.apply(null, numbers); // equal to Math.min 

// // vs. simple loop based algorithm

// max = -Infinity, min = +Infinity;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

///////////////////////////////////////////////


// 7. Create a bound function

// function f() {
//   alert( this ); // window object
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();


///////////////////////////////////////
// Why Arrow 14: Explicit Binding with Arrow Function

// const age = 10;

// var person = {
//   name: "Piyush",
//   age: 20,
//   getAgeArrow: () => console.log(this),
//   getAge: function () {
//     console.log(this.age);
//   },
// };

// var person2 = { age: 24 };

// person.getAgeArrow.call(person2); 
// person.getAge.call(person2);      // 24

// POLYFILL
//CALL()

// Function.prototype.myCall = function (context, ...args) {
//   // if context is null/undefined, use global object
//   context = context || globalThis;

//   // create unique property
//   const fnSymbol = Symbol();
//   context[fnSymbol] = this;

//   // invoke function
//   context[fnSymbol](...args);

//   // cleanup
//   delete context[fnSymbol];
// };

// function greet(city) {
//   console.log(this.name + " from " + city);
// }

// const user = { name: "Vidya" };

// greet.myCall(user, "Bangalore");


//APPLY
// APPLY POLYFILL
// Function.prototype.myApply = function (context, argsArray) {
//   context = context || globalThis;

//   const fnSymbol = Symbol();
//   context[fnSymbol] = this;

//   context[fnSymbol](...(argsArray || []));

//   delete context[fnSymbol];
// };

// // Function
// function greet(city) {
//   console.log(this.name + " from " + city);
// }

// // Object
// const user = {
//   name: "Vidya"
// };

// // Call myApply
// greet.myApply(user, ["Bangalore"]);

//BIND


Function.prototype.myBind = function (context, ...bindArgs) {
  const originalFn = this;

  return function (...callArgs) {
    return originalFn.apply(context, [...bindArgs, ...callArgs]);
  };
};
function greet(city, country) {
  console.log(this.name + " from " + city + ", " + country);
}

const user = {
  name: "Vidya"
};

const boundGreet = greet.myBind(user, "Bangalore");
boundGreet("India");








