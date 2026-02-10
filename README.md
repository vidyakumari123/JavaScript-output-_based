# 📘 JavaScript Interview Prep – Key Things to Keep in Mind

This repository is focused on mastering **JavaScript interview concepts through output-based questions and core theory**. While going through these topics, keep the following key ideas in mind:

---

### 🧠 Understand How JavaScript Executes Code
- JavaScript runs inside an **Execution Context**
- Code runs in **two phases**: Memory Creation (Hoisting) and Execution
- The **Call Stack** manages function execution order

---

### 📦 Master Scope & Hoisting
- `var` is **function-scoped** and hoisted with `undefined`
- `let` and `const` are **block-scoped** and exist in the **Temporal Dead Zone (TDZ)**
- Always track **where a variable is declared** before predicting output

---

### 🔁 Functions Are Powerful & Tricky
- Functions are **first-class citizens** (can be passed, returned, stored)
- Closures remember variables from their **lexical scope**
- Arrow functions **do not have their own `this`**

---

### 🎯 Always Think About `this`
- `this` depends on **how a function is called**, not where it is written
- Normal function → `this` can be global or undefined  
- Method call → `this` is the object  
- Arrow function → inherits `this` from parent  
- `call`, `apply`, `bind` → explicitly set `this`

---

## 🧩 Objects Work by Reference (Deep Understanding)

In JavaScript, **objects and arrays are reference types**, which means variables store a **reference (memory address)** to the object, not the actual value.

### 🔹 Assignment Shares Memory
When you assign one object to another, both variables point to the same memory location.

```js
const user1 = { name: "Vidya" };
const user2 = user1;

user2.name = "Kumari";

console.log(user1.name); // Kumari ❗
```

### 🔹 Comparing Objects
Objects are compared by reference, not by value.

```js
const a = { age: 20 };
const b = { age: 20 };

console.log(a === b); // false ❗
```

### 🔹 Shallow Copy vs Deep Copy

#### 🟡 Shallow Copy
Copies only the first level, nested objects are still shared.

```js
const obj1 = { name: "Vidya", address: { city: "Delhi" } };
const obj2 = { ...obj1 };

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Mumbai ❗
```

#### 🔵 Deep Copy
Creates a completely independent copy, including nested objects.

```js
const obj1 = { name: "Vidya", address: { city: "Delhi" } };
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Delhi ✅
```

### 🔹 Arrays Also Work by Reference

```js
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4] ❗
```

### 🔹 Function Parameters & References

```js
function update(obj) {
  obj.name = "Updated";
}

const user = { name: "Vidya" };
update(user);

console.log(user.name); // Updated ❗
```

---

## 🔒 Closures (Very Important Concept)

A **closure** is created when a function remembers variables from its **outer (lexical) scope** even after that outer function has finished execution.

### 🔹 Basic Closure Example

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

The inner function still has access to `count` because of closure.

---

### 🔹 Why Closures Are Important

Closures help in:
- Data privacy  
- Creating function factories  
- Maintaining state in async operations  
- Event handlers and callbacks  

---

### 🔹 Closure for Data Privacy

```js
function createUser() {
  let password = "secret";

  return {
    getPassword: function () {
      return password;
    }
  };
}

const user = createUser();
console.log(user.getPassword()); // secret
```

The variable `password` cannot be accessed directly from outside.

---

### 🎯 Interview Tip for Closures

If a function:
- Returns another function  
- Uses variables from an outer function  
- Remembers old values  

👉 The concept being tested is **closure**.

---

### 🔢 Array Methods Test Logic
- `map()` → transforms, returns new array  
- `filter()` → selects, returns new array  
- `reduce()` → accumulates into single value  
- Understand **callback arguments and return values**

---

### ⚡ Closures & Currying Show Deep Understanding
- Closures allow **data privacy and persistent memory**
- Currying breaks a function into **multiple smaller functions**
- Frequently asked in advanced interviews

---

### 🛠️ Polyfills = Internal JavaScript Knowledge
- Writing polyfills (map, reduce, bind, promise, debounce, throttle) proves you understand **how JS works internally**
- Focus on **how functions are attached to prototypes** and how context is handled

---

### ⏳ Debounce & Throttle = Performance Skills
- Debounce → runs after user stops action  
- Throttle → runs at fixed intervals  
- Common in **real-world frontend performance questions**

---

### 🌐 Event Propagation is Important for DOM
- Events travel in **three phases**: Capturing → Target → Bubbling
- Event delegation improves performance by using **fewer event listeners**

---

### 🏆 Final Interview Mindset

When solving any output-based JavaScript question, always ask yourself:

1️⃣ Where is the variable stored?  
2️⃣ Is it hoisted?  
3️⃣ What is the scope?  
4️⃣ What is the value of `this`?  
5️⃣ Is the data copied or referenced?  
6️⃣ In what order will the code execute?

If you can answer these, you can solve **most JavaScript interview questions with confidence** 💪🔥

---

## 📄 Want to See More Output Examples?

For additional JavaScript output-based questions and explanations, you can check this document:  
👉 **[View Output Practice Document](https://docs.google.com/document/d/1AxeZlRz-oijV-y8-z7XsdIyiu9OHIpmv5ybBNcbNx88/edit?usp=sharing)**

