for (var i = 0; i < 9; i++) {
  // console.log(i);
  setTimeout(() => {
    console.log(i);
  }, 0);
}

//  IIFE
//  Immediatly invoked function exxpresson ...
((i) => {
  console.log("hey there", i);
})(7);

for (var i = 0; i < 9; i++) {
  // console.log(i);
  ((value) => {
    setTimeout(() => {
      console.log("IIFE", value);
    }, 0);
  })(i);
}

for (let j = 0; j < 9; j++) {
  setTimeout(() => {
    console.log("let const", j);
  }, 0);
}

function sum(a, b) {
  console.log("sum function ");
  return a + b;
}

function diffAlias() {
  return (a, b) => {
    return a - b;
  };
}

console.log(diffAlias()(5, 4));

let ik = 30;
{
  let ik = 200;
  console.log("herer is the i 46", ik);
}

{
  let ik = 10;
  console.log("herer is the i, 50", ik);
}

console.log("herer is the i, 53", ik);

//  polyfill of bind myBind.......

let objj = {
  name: "utalrsh",
  sum: function () {
    console.log("inside sum function", this.name);
  }
};

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (...args) {
    let obj = this;
    console.log("inside the myBind this", obj);
    let params = args.slice(1);
    console.log("inside the myBind params", params);

    let context = args[0];
    console.log("inside the myBind context", context);

    return function () {
      obj.apply(context, params);
    };
  };
}

let lateFunction = objj.sum.myBind(objj);
let lateFunction1 = objj.sum.bind(objj);

lateFunction();
lateFunction1();
