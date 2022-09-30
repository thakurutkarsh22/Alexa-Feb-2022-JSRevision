//  call apply bind 


function sum(val1, val2,val3) {
    console.log(this.a + this.b + val1 + val2 + val3);
}

let obj = {
    a: 1,
    b: 2
}
Function.prototype.myBind = function(...arguments){

    var functionToBEExec = this;
    var objToBind = arguments[0];
    var parameters = arguments.slice(1);

    return function() {
        functionToBEExec.call(objToBind, ...parameters)
    };
}

let sumFunc = sum.bind(obj, 3,1,4);
sumFunc();

let sumFunc1 = sum.myBind(obj, 3,1,4);
sumFunc1();


function abcd(...val) {
    console.log("hey there va;", ...val, this.a);
}

let abcdObj = {
    a: 12
}

let abcdFunc = abcd.myBind(abcdObj, 1,3,4,5,6,7,8,9,9,99)
abcdFunc();




//  myCall 

// TODO: bjToBind.functobeexecuted(parameters)


Function.prototype.myCall = function(obj, ...arguments) {
    var functionToBEExec = this;
    var parameters = arguments;

    obj.fnName = functionToBEExec;
    obj.fnName(...parameters);
}

console.log(" -------  my call func ------- ")


sum.call(obj, 1,2,3);
sum.myCall(obj, 1,2,3);


// apply ? 

console.log(" -------  my apply func ------- ")



Function.prototype.myApply = function(obj, arguments) {
    var functionToBEExec = this;
    var parameters = arguments;

    obj.fnName = functionToBEExec;
    obj.fnName(...parameters);
}

sum.apply(obj, [1,2,3]);
sum.myApply(obj, [1,2,3]);