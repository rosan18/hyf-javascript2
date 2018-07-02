function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000) // 1

function foo(func) {
 console.log('who are you?') ;
}

function bar() {
console.log('Hello, I am bar!');
}

foo(bar);

// THIS IS FAKE CODE 
// function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
//     // make array 
//     // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next  
// }
// threeFive(10, 15, sayThree, sayFive);

// // Should create an array [10,11,12,13,14,15]
// // and call sayFive, sayThree, sayThree, sayFive  - please make sure you see why these calls are made before you start coding

function threeFive(startIndex,stopIndex,threeCallback,fiveCallback) {
  let myArray=[];  
}
myArray.map(num=>{
if(num % 3 ==0){
 threeCallback(num);
}
 if(num % 5 ==0) {
 fiveCallback(num);

 }
});

threeFive(10,15,sayThree,sayFive)

  

function sayThree() {
console.log(3)
}
function sayFive() {
console.log(5)
};

// free code camp exercises
function repeatStringNumTimes(str, num) {
  let newString ="";
  for(let i=0; i<newString; i++);
   newString+= str;
  return str;
}

repeatStringNumTimes("abc", 3);

// two similar functions
let x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x); // pass by value


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y); // pass by reference

function createBase(num1) {
    return function(num2) {
      return num1 + num2;
    }
  }
  let addSix = createBase(6);
  console.log(addSix(10));
  console.log(addSix(21));
  
