/* The value of this is determined by how a function is called (runtime binding). 
So, there are two types of binding when it comes to object binding in JS, one is implicit and other is explicit.

Implicit Binding
Implicit Binding is applied when you invoke a function in an Object using the dot notation. 
this in such scenarios will point to the object using which the function was invoked. 
Or simply the object on the left side of the dot.

Explicit Binding
In Explicit Binding, you can force a function to use a certain object as its this.
 Explicit Binding can be applied using call(), apply(), and bind(). */


//  the ‘this’ keyword is used to reference something — an object!
///////////////////////////////////////////////

/* Global
So for example if we console.log this here, we get the window object. */

// let a =5
// console.log(this.a) //undefined


// this.a=5
// console.log(this.a)//5

// this.a=5
// console.log(this)  // Window object

/////////////////////////////////////////////////////

/* This inside a function
Normally it targets the window object.
In it, this points to the owner of the function call,
 I repeat, THE FUNCTION CALL, and NOT the function 
 itself. The same function
can have different owners in different scenarios.

 */
// this.a =5
// function getParam(){
//     console.log(this.a)
// }
// getParam()// 5

//arrow function

// this.a =5
// const getParam =() =>{
//     console.log(this.a)
// }
// getParam()//5


////////////////////////////////////////////////////
/* 
**What about Arrow Functions? **
It takes it's this from the outer “normal” function, 
this won't make much sense now, 
since as you can see it’s also 
pointing to window objec */


//////////////////////////////////////////////////

// So lets see the behaviour of this inside of an Object

// Method inside object

// let user = {
//   name: "Piyush",
//   age: 24,
//     getDetails() {
//         console.log(this.name); //Piyush
//     }
// };

// user.getDetails()

///////////////////////////////////////////////////
// What happens when we have functions inside a nested object key?

// let user = {
//   name: "Piyush",
//   age: 24,
//     childObj:{
//         newName:"Roadside Coder",
//         getDetails() {
//             console.log(this.newName, "and" ,this.name);
//         }
//     }
// };
// user.childObj.getDetails()

////////////////////////////////////////////////////

// What if the same functions are arrow functions inside the object?

// let user = {
//   name: "Piyush",
//   age: 24,
//     getDetails: () => {
//         console.log(this); 
//     }
// };
// user.getDetails()// window on=bject

/////////////////////////////////////////////////

// Does user.getDetails() give you any output? Well it is empty since it points to window object

// let user = {
//   name: "Piyush",
//   age: 24,
//     getDetails() {
//         const nestedArrow = () => console.log(this.name); //Piyush
//         nestedArrow();
//     }
// };
// user.getDetails()// Piyush

////////////////////////////////////////////////////

// # Class/Constructor
// class user {
//     constructor(n){
//         this.name = n
//     }
//     getName(){
//         console.log(this.name);
//     }
// }

// const User = new user("Piyush") // => This will generate a user object from the above class
// User.getName();//piyush


//////////////////////////////////////////

// Question -2 Give the output of the following snippet.

// const user = {
//   firstName: 'Piyush!',
//   getName() {
//     const firstName = 'Jen!';
//     return this.firstName;
//   }
// };
// console.log(user.getName());//piyush

/* Piyush! is logged to the console. user.getName() is a method invocation, that's why this inside the method equals object.

There's also a variable declaration const firstName = 'Jen!' inside the method. The variable doesn't influence anyhow the value of this.firstName
 */

/////////////////////////////////////////////////////////


// Question 3 -What is the result of accessing its ref? Why?


// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert( user.ref.name ); // What's the result?

/* Answer: an error.

That’s because rules that set this do not look at object definition. Only the moment of call matters.

Here the value of this inside makeUser() is undefined, because it is called as a function, 
not as a method with “dot” syntax.

The value of this is one for the whole function, code blocks and object literals do not affect it.

So ref: this actually takes current this of the function.

We can rewrite the function and return the same this with undefined value: */

/* Follow up -
How do u make it work? */

// function makeUser() {
//   return {
//     name: "Piyush Agarwal",
//     ref() {         
//       return this;
//     }
//   };
// }

// let user = makeUser();

// alert( user.ref().name ); // Piyush Agarwal
// You make ref a method and then there will be no error. You will get the output as Piyush Agarwal.

/////////////////////////////////////////////////////

// Question 5 - Create an object calculator

// let calculator = {
//   read() {
//     this.a = +prompt("a =", 0);
//     this.b = +prompt("b =", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   }
// };

// calculator.read();

// console.log(calculator.sum());
// console.log(calculator.mul());

// Question 6 - What will be the Output?

// var length = 4;

// function callback() {
//   console.log(this.length); // What is logged?
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };

// object.method(callback);


// Question 6 - What will be the Output?

var length = 4; 
// Global variable. In browsers, global vars become properties of window.
// So window.length = 4

function callback() {
  console.log(this.length); 
  // 'this' depends on HOW the function is called
}
const object = {
  length: 5,
  method() {
    console.log(arguments); 
    // arguments is an array-like object:
    // {
    //   0: callback,
    //   1: 2,
    //   2: 3,
    //   length: 3
    // }
    arguments[0](); 
    // This calls callback like a method of 'arguments'
    // So inside callback → this = arguments object
  },
};

// We pass 3 arguments → callback, 2, 3
object.method(callback, 2, 3);

/*
STEP-BY-STEP:

1️⃣ callback is NOT called as object.callback()
2️⃣ It is called as arguments[0]()
3️⃣ So 'this' inside callback refers to the 'arguments' object
4️⃣ arguments.length = 3
5️⃣ console.log(this.length) → console.log(3)

FINAL OUTPUT: 3
*/

// Question 7 - Implement calc

const calc = {
  total: 0,

  add(a) {
    this.total += a;
    return this; // allows method chaining
  },

  multiply(a) {
    this.total *= a;
    return this; // allows method chaining
  },

  subtract(a) {
    this.total -= a;
    return this; // allows method chaining
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);

console.log(result.total);
