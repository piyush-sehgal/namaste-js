//Example 1

// function a(){
//     console.log(b); //Prints 10
// }
// var b = 10;
// a();


//Example 2

// function a(){
//     c();
//     function c(){
//         console.log(b); //Prints 10
//     }
// }
// var b = 10;
// a();



//Example 3

function a(){
    var b = 10;
    c();
    function c(){

    }
}
console.log(b); //not defined