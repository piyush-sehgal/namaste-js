//Variable declerations are hoisted, while variable definitions are not
//   Refer example 1               , Refer exapmle 4 and 5
//Example 1
console.log('Example 1');
var x = 10;

function getName () {
    console.log("Piyush");
}

console.log(x); //Prints 10
getName();// Prints Piyush


//Example 2
console.log('\n\n\n\nExample 2');

console.log(a); //Prints undefined
example2(); //Prints inside exapmle 2

var a = 10;
function example2 () {
    console.log('Inside example 2');
}

//Example 3
console.log('\n\n\n\nExample 3');

example3(); //Prints inside ex 3
//Gives error, bc b is not defined in execution context
//console.log(b); 
function example3 () {
    console.log('Inside example 3');
}

//Example 4
console.log('\n\n\n\nExample 4');

//Gives an error, bc example 4 is stored as a variable in global execution context

//example4();


var example4 = function() {
    console.log('Inside example 4');
}

//Example 5
console.log('\n\n\n\nExample 5');

//Gives an error, bc example 5 is stored as a variable(udefined) in global execution context

//example5();

//Gives an error, as example 5 is not a function
console.log(example5());

var example5 = function() {
    console.log('Inside example 5');
}
