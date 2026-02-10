// What is Currying?

// Currying is a technique where a function that takes multiple arguments is transformed into a series of functions that take one argument at a time.


// In short:
// Currying = breaking a function with many arguments into smaller functions that each take one argument.
// Real-life Analogy

// Think of ordering food 🍔:

// First, you pick the restaurant (a).

// Then, you pick the dish (b).

// Then, you pick the size (c).
// At the end → you get your meal (a + b + c).



// Example f(a,b) into f(a)(b)

// function f(a){
//     return function (b){
//     // console.log(a,b);
//     return`${a}${b}`
// }
// }
// console.log(f(5)(6));

// Question 1 - sum(2)(6)(1)
// function sum(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(6)(1)); // 9

// Question 2

// evaluate("sum")(4)(2)        // 6
// evaluate("multiply")(4)(2)   // 8
// evaluate("divide")(4)(2)     // 2
// evaluate("substract")(4)(2)  // 2

// function evaluate(operation) {
//     return function(a) {
//         return function(b) {
//             if (operation === "sum") return a + b;
//             if (operation === "multiply") return a * b;
//             if (operation === "divide") return a / b;
//             if (operation === "sub") return a - b;
//         };
//     };
// }
// console.log(evaluate("sum")(2)(6))

// "Infinite Currying -> sum(1)(2)(3)....(n)"


// function add(a){
//     return function (b){
//         return function(){
//             return a+b
//         }
//     }
// }
// console.log(add(5)(2))


// function add(a){
//     return function (b){
//         if(b) return add(a+b)
//             return a
//         }
//     }

// console.log(add(5)(2)(4)(8)())

// currying vs partial Application

// | Feature            | Currying                                              | Partial Application                                  |
// | ------------------ | ----------------------------------------------------- | ---------------------------------------------------- |
// | Definition         | Breaks a function into nested funcs, each takes 1 arg | Pre-fills some args, returns a function for the rest |
// | Arguments per call | Always 1                                              | Can be >1                                            |
// | Example            | `f(a)(b)(c)`                                          | `f(a)(b, c)`                                         |
// | Use case           | Function composition, reusability                     | Convenience, reusing functions with fixed args       |


// function sum (a){
// return  function(b,c){
//     return a+b+c
// }
    
// }
// const x= sum(10)
// console.log(x(5,6))
// console.log(x(3,2))

// //or
// console.log(sum(20)(1,4))

// function sum(a){
//     return function(b){
//         return function(c){
//             return function (c){
//                 return a+b+c
//             }
//         }
//     }
// }


//Manupulating dom


// function updateElementText(id){

//     return function(content){
//         document.querySelector("#" + id).textContent = content
//     }
// }
// const updateHeader = updateElementText("heading")
// updateHeader("hello this is sharma")

// curry() implementation
//converts f(a,b,c) into f(a)(b)(c)

function curry(func){
    return function  curriedFunc(...args){
        // console.log(args.length, func.length)
        if(args.length >= func.length ){
            return func(...args)
        }else{
return function (...next){
    return curriedFunc(...args,...next)
}
        }
    }
}



const sum=(a,b,c,d)=> a+b+c+d
const totalSum = curry(sum)
console.log(totalSum(1)(6)(5)(6))

