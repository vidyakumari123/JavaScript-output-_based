// Debouncing and Throttling in Javascript

// Ques 1 - Create a button UI and add debounce as follows =>
// --> Show Button Pressed X times every time button is pressed
// --> Increase "Triggered Y times" count after 800ms of debounce
// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// const debounceCount = _.debounce(()=>{
// count.innerHTML = ++triggerCount;
// },800)

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debounceCount ()
  
// });


// Ques 2 - Create a button UI and add throttle as follows =>
// --> Show Button Pressed X times every time button is pressed
// --> Increase "Triggered Y times" count after 800ms of throttle


// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// let pressedCount = 0;
// let triggerCount = 0;

// const throttleCount = _.throttle(() => {
//   count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttleCount();
// });

// Ques 3 - Create Debounce() Polyfill Implementation

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var triggerCount = 0;
// var pressedCount = 0;

// const myDebounce = (cb,d) => {
//     let timer;
//     return function (...args){
//         if(timer)clearTimeout(timer)
//  timer = setTimeout(()=>{
// cb(...args)
//  },d)
//     }
// };

// const debouncedCount = myDebounce(() => {
//   triggerCount += 1;
//   count.innerHTML = triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debouncedCount()
// });


// Ques 4 - Create Throttle() Polyfill Implementation

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");
var triggerCount = 0;
var pressedCount = 0;

const mythrottle = (cb, d) => {
  let last = 0; // 2500
  return (...args) => {
    let now = new Date().getTime();

    if (now - last < d) return; // 2500 - 1100 = 1400

    last = now;
    return cb(...args);
  };
};

const throttle = mythrottle(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttle()
});
