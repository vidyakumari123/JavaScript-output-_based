//function that references variables in the outer scope from its inner scope

//lexical scope =refers to current context of your code

// var name ="vidya"

// //global scope
// function local(){
//     //local scope
//     console.log(name);
    
// }
// local()

//global scope
// function subscribe(){
//     var name ="vidya"
// //innner scope2
//     function displayName(){
//         //inner scope
//         alert(name)
//     }
//     displayName()
// }
// subscribe()
/////////////////////////////////////////////////////////////////

// What is a closure?

// function makeFunc() {
//   var name = "Mozilla";

//   function displayName() {
//     console.log(name);
//   }

//   return displayName;
// }

// makeFunc()();
//////////////////////////////////////////////////

// Closure Scope Chain

// global scope
// var e = 10;

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // log 20


// Ques 1: What will be logged to console?

// let count = 0;

// (function printCount() {
//   if (count === 0) {
//     let count = 1; // shadowing
//     console.log(count); // 1
//   }

//   console.log(count); // 0
// })();

// Ques 2: Write a function that would allow you to do this
// function createBase(num){
//     return function(innerNum){
//         console.log(innerNum + num);
//     }
// }
// var addSix = createBase(6)
// addSix(10)
// addSix(21)

// Ques 3: Time Optimization

// function find() {
//   let a = [];

//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find();

// console.time("6");
// closure(6);
// console.timeEnd("6");

// console.time("50");
// closure(50);
// console.timeEnd("50");


// Question 2: setTimeout Output

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, i * 1000);
//   }
// }

// a();

// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, i * 1000);
//   }
// }

// a();
// Ques 4: Block scope and setTimeout

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function log() {
//       console.log(i); // what is logged?
//     }, i * 1000);
//   }

//   inner(i);
// }



// Ques 6: What is Module Pattern?

// var Module = (function () {
//   function privateMethod() {
//     // do something
//     console.log("private");
//   }

//   return {
//     publicMethod: function () {
//       console.log("public");
//     },
//   };
// })();

// Module.publicMethod();
// Module.privateMethod();


// Ques 7: Make this run only once

// let view;

// function likeTheVideo() {
//   let called = 0;

//   return function () {
//     if (called > 0) {
//       console.log("Already Subscribed to Roadside Coder");
//     } else {
//       view = "Roadside Coder";
//       console.log("Subscribe to", view);
//       called++;
//     }
//   };
// }

// let isSubscribed = likeTheVideo();

// isSubscribed();
// isSubscribed();
// isSubscribed();
// isSubscribed();

// Ques 8: Once polyfill

// function once(func, context) {
//   let ran;

//   return function () {
//     if (func) {
//       ran = func.apply(context || this, arguments);
//       func = null;
//     }

//     return ran;
//   };
// }

// const hello = once((a,b) => console.log("hello",a,b));

// hello(1,2);
// hello(1,2);
// hello(1,2);
// hello(1,2);
// hello(1,2);
// hello(1,2);

//////////////////////////////////////////////////////////////////////

// Question 3: Implement Caching/Memoize Function

// const clumsySquare = (num1, num2) => {
//   for (let i = 1; i <= 100000000; i++) {}

//   return num1 * num2;
// };

// console.time("First call");
// console.log(clumsySquare(9467, 7649));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(clumsySquare(9467, 7649));
// console.timeEnd("Second call");

//solution
function myMemoize(fn, context) {
  const res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    } else {
      return res[argsCache];
    }

    return res[argsCache];
  };
}

const clumsySquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}

  return num1 * num2;
};

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}

  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("First call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("Second call");











