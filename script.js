// -----------------------  SCOPE --------------

// 1. Global scope  (done by js Browser )
// 2. Function creation.

// const a = 12;
// var aa = 80;
// console.log("hellow world", a);

// console.log(aa);

// if (true) {
//   var aa = 12;
// }

// console.log("line:16", aa);

// function sum(value1, value2) {
//   const a = 90;
//   // aa = 23;  this is bad code..
//   console.log("line:21", aa);
//   return value1 * a + value2;
// }

// const ValOfsum = sum(7, 9);
// console.log("line:26", aa);
// console.log(ValOfsum);

//  dont use var ...
//  have good variable names.

// hoisting

// let cont var, functoin  all are hoisted

// -----------------------  this/Callbacks -----------------

// bind the context js use 2 mechanisms
//1. Implicit
// 2. explicit

let obj = {
  name: "ranjan",
  age: "12",
  getAge: function (obj) {
    console.log("hey my age is:", this.age, " and my name is: ", this.name);
  }
};

const obj1 = {
  class: "9th",
  rolNo: "89",
  getAge: function () {
    console.log("hey my age is:", this.age, " and my name is: ", this.name);
  }
};

// Implicit binding

// console.log(obj.getAge(obj1));
// console.log(obj1.getAge());

// pitfalls of using implicit
//  loose the implicit binding ......
// 1. it depends on a CallSite.

//  Good example ...

let sumObj = {
  sum: function sum(a, b) {
    return a + b;
  }
};

const mySumFunction = sumObj.sum;

console.log("sum", sumObj.sum(6, 7));
console.log("mySumFuncton", mySumFunction(6, 7));

// bad example  ...  implecit binding will be lost

const myGetAgeFunction = obj.getAge;

console.log(obj.getAge());
console.log(myGetAgeFunction());

function abcd() {
  this.a = 12;
}

abcd();

// ------------------ explicit binding --------------

// call apply bind
//  we as a user are giving instruction to my js b how to resolve the context and not giving
// js the power to decide the context.

const myGetAgeFunction1 = obj.getAge.bind(obj);

console.log("line 106");
myGetAgeFunction1();
