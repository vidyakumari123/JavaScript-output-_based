// Ques 2 - What is Event Bubbling?

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", function () {
//   alert("div");
// });

// form.addEventListener("click", function () {
//   alert("form");
// });

// button.addEventListener("click", function () {
//   alert("button");
// });


// Ques 3 - event.target vs this.target vs event.currentTarget

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", func);
// button.addEventListener("click", func);
// form.addEventListener("click", func);

// function func(event) {
//   alert(
//     "currentTarget = " +
//       event.currentTarget.tagName +
//       ", target = " +
//       event.target.tagName +
//       ", this = " +
//       this.tagName
//   );
// }
// Ques 4 - What is Event Capturing / Trickling?

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// // Capturing phase (top → down)

// div.addEventListener(
//   "click",
//   function () {
//     alert("div");
//   },
//   {
//     capture: true,
//   }
// );

// form.addEventListener(
//   "click",
//   function () {
//     alert("form");
//   },
//   {
//     capture: true,
//   }
// );

// button.addEventListener(
//   "click",
//   function () {
//     alert("button");
//   },
//   {
//     capture: true,
//   }
// );



// Ques 5 - How to stop bubbling or capturing?

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("div");
// });

// button.addEventListener("click", function (e) {
//   alert("button");
// });

// form.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("form");
// });


// Ques 6 - What's the Output?

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function (event) {
  alert("div");
});

form.addEventListener("click", function (event) {
  alert("form");

},
{capture : true});

button.addEventListener("click", function (event) {
  alert("button");
});
