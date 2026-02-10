//map,filter,reduce

//map()

// const nums=[ 1,2,3,4]
// const multiplyThree = nums.map((num,i,arr)=>{
//  return num*3*i
// })
// console.log(multiplyThree);


//filter()
// const nums=[ 1,2,3,4]
// const moreThanTwo = nums.filter((num)=>{
//  return num>2
// })
// console.log(moreThanTwo);


//Reduce
// const nums=[ 1,2,3,4]
// const sum = nums.reduce((acc,curr,i)=>{
//     return acc + curr
// },0)
// console.log(sum);

// polyfill

// Array.prototype.myMap = function(callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };

// Example
// let num1 = [1, 2, 3];
// let doubled = num1.myMap(n => n * 2);
// console.log(doubled); // [2, 4, 6]


// Array.prototype.myFilter = function(callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// }; 

// Example
// let num2 = [1, 2, 3, 4];
// let evens = num2.myFilter(n => n % 2 === 0);
// console.log(evens); // [2, 4]


// Array.prototype.myReduce = function(callback, initialValue) {
//   let acc = initialValue !== undefined ? initialValue : this[0];
//   let start = initialValue !== undefined ? 0 : 1;

//   for (let i = start; i < this.length; i++) {
//     acc = callback(acc, this[i], i, this);
//   }
//   return acc;
// };

// Example
// let nums = [1, 2, 3, 4];
// let sum = nums.myReduce((acc, n) => acc + n, 0);
// console.log(sum); // 10



//  INTERVIEW QUESTION
// question 1: map vs forEach

// const arr =[2,5,3,4,7]


//  const mapResult = arr.map((ar)=>{
//     return ar + 2
// })

// const forEachResult = arr.forEach((ar)=>{
//     return ar + 2
// })

//MODIFIED ARRAY
// const forEachResult = arr.forEach((ar,i)=>{
//     arr[i]= ar + 3
// })

// console.log(mapResult,forEachResult,arr)

//map,filter and reduce -o/p Based Question
//question 1= Return only name of students in capital

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
]

// let names =[]
// for(let i =0; i<students.length;i++){
//     names.push(students[i].name.toUpperCase())
// }
// console.log(names)

// WITH MAP

// const names =students.map((stu)=> stu.name.toUpperCase())

// console.log(names)

//question 2-Return only details of those who scored more than 60 marks

// const details = students.filter((stu)=>stu.marks>60)
// console.log(details)



/*question 2-Return only details of those who scored more than 60 marks
and rollnumber greater then 14*/

// const details = students.filter((stu)=>stu.marks>60 && stu.rollNumber>15)

// console.log(details)

/*sum pf marks of alll students*/

//  const sum =students.reduce((acc,curr)=>acc+curr.marks,0)
// console.log(sum)

// Question 5 - Return only names of students who scored more than 60
// const names = students
//   .filter((stu) => stu.marks > 60)
//   .map((stu) => stu.name);
//   console.log(names)

  // Question 6 - Return total marks for students with marks greater than 60
// after 20 marks have been added to those who scored less than 60


const totalMarks = students.map((stu) => {
  if (stu.marks < 60) {
    stu.marks += 20;
  }
  return stu;
}).filter((stu)=> stu.marks>60)
.reduce((acc,curr)=> acc + curr.marks,0)

console.log(totalMarks);