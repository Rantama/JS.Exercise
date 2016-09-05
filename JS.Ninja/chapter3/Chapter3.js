// 1. Create a function that will multiply two numbers. The function must return the result in base 13.
//
//     Example:
//     ```javascript
//     var answer = mul (9, 6); // 42
//     ```
//     Basic function creation together with built­in JS Math functionality.

function multi(a, b){
    var base= a * b;
    return (base.toString(13));
}

var answer = multi (9,6);
console.log(answer);

// 2. Create a function that will return the addition of N numbers.
//
//     Example:
//     ```javascript
//     var answer = add (1, 2) + add ( 1, 4, 6, 7, 2);
//     ```
//     Dynamic argument list handling with JS

//Exercise 2

var a = [1,2];
var b = [1,4,6,7,2];
function sum(array){
	for(i = 0; i < b.length; i++)
	for(j = 0; j < a.length; j++)
	total = a[i] + b[j];
	return total
}
console.log(total)

var answer = add (1,2) + add (1,4,6,7,2);
console.log()

var list= [1, 4, 6, 7, 2];
var total= 0;
function add(array){
function subadd(array){
    for(var i =0; i < list.length; i++)
    total=total+list[i];
    return total;
}
return subadd(array);
}
console.log(add(list));

// Exercise 3
//
// 3. Create an object that will hold methods for adding, multiplying, and factorial operations.
//
//     Example:
//     ```javascript
//     var a = myMath.add (1, 2, 3); //6 var b = myMath.mul (1, 2, 3); // 6
//
//     var c = myMath.fact ( 3); // 6
//     ```
//
//     Use of anonymous functions and functions as object properties (methods.)
