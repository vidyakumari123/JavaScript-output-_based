// const user ={
//     name :"vidya",
//     age:25
// }

// // user.name="vidya sharma"
// delete user.age
// console.log(user.name);

// const user ={
//     name :"vidya",
//     age :24,
//     "like me":true
// }

// console.log(user["like me"]);

// add
// const property ="firstname";
// const name ="vidya"
// const user ={
//     [property]:name
// }
// console.log(user.firstname);


//through loop

// const user ={
//     name :"vidya",
//     age:24,
//     isTotallyAwesome:true
// }

// for(key in user){
//     console.log(user[key]);
    
// }

//output


// const obj ={
//     a: "one",
//     b: "two",
//     a: "three",
// }
//     console.log(obj)// a: "three" b:two


// **Q2. Create a function ```
// multiplyByTwo(obj)
// ``` that multiplies all numeric property
//  values of obj by 2.**
//  let nums = { a: 100, 
//     b: 200, 
//     title: "My nums" 
// }
// multiplyByTwo(nums)
// function multiplyByTwo(obj){
//     for(key in obj){
//         if (typeof obj[key] === "number"){
//             obj[key] *=2
//         }
//     }
// }
// console.log(nums)

// // Find the output of the following code snippet.
// const a = {}; 
// const b = { key: 'b' }; 
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b])
/* Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.

However, when we stringify an object, it becomes `"[object Object]"`. So what we are saying here, 
is that `a["[object Object]"] = 123`. Then, we can try to do the same again. 
`c` is another object that we are implicitly stringifying. So then, `a["[object Object]"] = 456`.

Then, we log `a[b]`, which is actually `a["[object Object]"]`. We just set that to `456`, so it returns `456`.

 */


//Q4 -  What is JSON.Stringify and JSON.parse ?**//

// const  user ={
//     name : "vidya",
//     age : 24
// }

//  const strObj = JSON.stringify(user)
//  console.log(strObj)
// console.log(JSON.stringify(user))
//  back to object
//  const strObj = JSON.stringify(user)
//  console.log(JSON.parse(strObj))

// Q5 - Spread Operator

// console.log([..."vidya"])


// Q6- What's the output
// const user = { name: 'Lydia',age: 21 }; 
// const admin = { admin: true, ...user };

// console.log(admin);

// Q7 - What's the output of the following code snippet?
/* The second argument of `JSON.stringify` is the *replacer*. The replacer can either be a function or an array,
 and lets you control what and how the values should be stringified.

If the replacer is an *array*, only the property names included in the array will be added to the JSON string. 
In this case, only the properties with the names `"level"` and `"health"` are included, `"username"` is excluded.
 `data`is now equal to `"{"level":19, "health":90}"`.

If the replacer is a *function*, this function gets called on 
every property in the object you're stringifying. The value returned from 
this function will be the value of the property when it's added to the JSON string. If the value is `undefined`,
 this property is excluded from the JSON string.
 */
// const settings = {
//  username: 'lydiahallie', 
//  level: 19, 
//  health: 90,
//  };

// const data = JSON.stringify(settings, ['level', 'health']);
//  console.log(data);// "{"level":19, "health":90}"


// Q8 - What's the output?

// const shape = { 
// radius: 10, diameter()
// { return this.radius * 2; },
//  perimeter: () => 2 * Math.PI * this.radius, };

// console.log(shape.diameter()); 
// console.log(shape.perimeter());

/* Note that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function.

With arrow functions, the `this` keyword refers to its current surrounding scope, 
unlike regular functions! This means that when we call `perimeter`, 
it doesn't refer to the shape object, but to its surrounding scope (window for example).

There is no value `radius` on that object, which returns `NaN */



// Destructuring and renaming

/* Suppose you go to a grocery store which has so many items displayed on the shelves but you buy items which are required.
In the same way we take out specific properties from an object which is required. */

// Let's see an example

// let user={ 
// name:"Piyush", 
// age:24 }

// const {name}= user;

// console.log(name);

// const { name: myName } = { name: 'Lydia' };

// console.log(name); //undefined
/* When we unpack the property `name` from the object on the right-hand side, we assign its value 
`"Lydia"` to a variable with the name `myName`.

With `{ name: myName }`, we tell JavaScript that we want to create a new variable called 
`myName` with the value of the `name` property on the right-hand side.

Since we try to log `name`, a variable that is not defined, 
`undefined` is returned on the left side assignment. Later, 
the value of `Lydia` is stored through the destructuring assignment
 */


//  q10 What's the output?

// function getItems(fruitList, favoriteFruit,...args) 
// { return [...fruitList, ...args,favoriteFruit] }

//  console.log(getItems(["banana", "apple"], "pear", "orange") //SyntaxError
// )

// Q - What's the output of the following code snippet?
// let v = { greeting: 'Hey!' };
// let d;

// d = v;
// v.greeting = 'Hello';
// console.log(d.greeting); // Hello

/* Solution
In JavaScript, all objects interact by
 reference when setting them 
 equal to each other.
 When you change one object, 
you change all of them. */



// Q - What is the output of the following code snippet?


// console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});
/* Solution
false
false
In JavaScript, Objects are compared based on references.

In the above statement, we are comparing two different objects so their references will be different. Hence, we get the output as false for both of the statements. */

// What's the output of the following code snippet? 
// ( Referencing is not always there )

// let person = { name: 'Lydia' };
// const members = [person];
// person = null;

// console.log(members);

/* Solution
[{ name: "Lydia" }]
First, we declare a variable person with the value of an object that has a name property.

Then, we declare a variable called members. We set the first element of that array 
equal to the value of the person variable. 
Objects interact by reference when setting them equal to each other. 
When you assign a reference from one variable to another, 
you make a copy of that reference. (note that they don't have the same reference!)

Then, we set the variable person equal to null.

We are only modifying the value of the person variable, and not the first element in the array,
 since that element has a different (copied) reference to the object. 
 The first element in members still holds its reference to the original object. 
 When we log the members array, the first element still holds the value of the object, which gets logged.
 */
// What's the output of the following code snippet?

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();//20
// multiply();//20
// multiply(value);//20
// multiply(value);//40

/* Explaination

In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, 
if no other value has been passed to the function, or if the value of the parameter is "undefined". 
In this case, we spread the properties of the value object into a new object, so x has the default value of { number: 10 }.

The default argument is evaluated at call time! Every time we call the function,
 a new object is created. We invoke the multiply function the first two times without passing a value: x has the default value of { number: 10 }. 
 We then log the multiplied value of that number, which is 20.

The third time we invoke multiply, we do pass an argument: the object called value.
 The *= operator is actually shorthand for x.number = x.number * 2: we modify the value of x.number, and log the multiplied value 20.

The fourth time, we pass the value object again. x.number was previously modified to 20, so x.number *= 2logs 40 */


// What is the output of the following code snippet?

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//       name: 'John',
//       age: 50
//     };

//     return person;
// }

// const personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?

// Solution

// { name: 'Alex', age: 25 }
// { name: 'John', age: 50 }
// The function first changes the property age on the original object it was passed in. 
// It then reassigns the variable to a brand new object and returns that object. Here’s what the two objects are logged out


// Q - Difference between shallow copy vs deep copy
// https://roadsidecoder.hashnode.dev/javascript-interview-questions-objects-output-based-destructuring-object


// Q - How to clone an object without referencing its keys to original object? 
/* Solution
4 ways to clone an object 👇🏻
const obj = {a: 1 ,b: 2}
const objclone = Object.assign({},obj);
const objclone = JSON.parse(JSON.stringify(employee));
const objclone = { ...obj }
 */


