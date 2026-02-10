// vae vs let vs const
// scope

function  name (){
    //funtion scope
}

{
    // block scope
}
// var a =5; // global scope

// console.log(a)
{
    // let a=5
    // console.log(a) // same with const 
}//accesiisble only inside block


//variable shadowing
// function test(){
//     let a ="hello";

//     if(true){
//         let a = "hi"
//         console.log(a)
//     }
//     console.log(a);
// }
// test()
// function test(){
//     var a= "hello"
//     let b ="hello";

//     if(true){
//         let a = "hi"
//         var b = "goodbye"
//         console.log(a)
//         console.log(b);
        
//     }
// }
// test() // Illegal shadowing



//DECLARATION

// var a
// var a 
// let b
// let b

// const a
// const a //Missing initializer in const declaration


//Declaration without intialisation
// var a //correct
// let a //fine
// const a //Missing initializer in const declaration
// const a=5//correct



//Re-Intialisation
// var a = 5;
// a =6 // fine

// let a = 5
// a =5 //fine

// const a =5
// a = 6 // Assignment to constant variable.


//hoisting

//during creation phase js moves your variables and fucntion declaration
// to the top of your code

// console.log(count);
// var count  = 1; // undefined

// var count;
// console.log(count);
// count = 1

// console.log(count);
//  let count = 1 //ReferenceError: Cannot access 'count' before initialization
//temporal dead zone=it is the time between declaration and the 
// intialization of let and const variable
//they are in the scope but they have not been declared yet


//question

function abc(){
    console.log(a)
    var a  = 10
}
abc()// undefined

// function abc(){
//     console.log(a,b,c)
//     const c = 30
//     let b = 20
//     var a  = 10
// }
// abc()//ReferenceError: Cannot access 'b' before initialization

