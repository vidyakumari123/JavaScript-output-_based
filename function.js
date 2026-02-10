//function in js
//first class funtion
//a language where function can be treated like
//a variable
//q1Function Declaration

// function square(num){
// return num* num
// }

//Q2 first class funtion
// function displaySquare(fn){
// console.log("Square is" + fn(5));   
// }

// displaySquare(square)
// Q3 - What is Function Expression?

const square = function (num) {
  return num * num;
};

console.log(square(5));

// Q5 WHAT IS IIFE

// (function square(num){
//     console.log(num*num)
// })(5)

// Q5 - IIFE - O/P Based Question?

// (function (x){
//   return (function(y) {
//     console.log(x); 
//   })(2);
// })(1);


// Q6 - Function Scope

// var num1 = 20,
//     num2 = 3,
//     name = "Roadside Coder";

// function multiply() {
//   return num1 * num2;
// }

//  console.log(multiply()); // Returns 60


// A nested function example
// function getScore() {
//   var num1 = 2,
//       num2 = 3;

//   function add() {
//     return name + " scored " + (num1 + num2);
//   }

//   return add();
// }

//  console.log(getScore()); // Returns "Roadside Coder scored 5"

// Q7 - Function Scope - O/P Based Question

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }


// Q8 - Function Hoisting

// functionName();

// function functionName() {
//   console.log(x);
//   var x = 5;
//   console.log("Roadside Coder");
// }
// Functions in JavaScript
// Q9 - Function Hoisting - O/P Based Question

// var x = 21;

// var fun = function () {
//   console.log(x);
//   var x = 20;
// };

// fun();
// Q10 - Params vs Arguments

// function multiply(...nums) {
//   console.log(nums[0] * nums[1]);
// }

// var arr = [5, 6];

// multiply(...arr);


// Q11 - Params vs Arguments - O/P Based Question

// const fn = (a, x, y, ...numbers) => {
//   console.log(x, y);
// };

// fn(5, 6, 3, 7, 8, 9);


// Q13 - Arrow functions vs Regular Function

// 1 - Syntax
function square(num) {
  return num * num;
}

const squareArrow = (num) => {
  return num * num;
};

// 2 - Implicit "return" keyword
const squareArr = (num) => num * num;

// 3 - arguments
// function fn() {
//   console.log(arguments);
// }

//with arrow function
// const fn = () => {
//   console.log(arguments);
// };


// fn(1, 3, 2);

// 4 - "this" keyword
let user = {
  username: "Roadside Coder",

  rc1: () => {
    console.log("Subscribe to " + this.username);
  },

  rc2() {
    console.log("Subscribe to " + this.username);
  },
};

user.rc1();
user.rc2();



