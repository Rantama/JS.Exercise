// 1. Create a function that will multiply two numbers. The function must return the result in base 13.
//
//     Example:
//     ```javascript
//     var answer = mul (9, 6); // 42
//     ```
//     Basic function creation together with built­in JS Math functionality.

// function multi(a, b){
//     var base= a * b;
//     return (base.toString(13));
// }
//
// var answer = multi (9,6);
// console.log(answer);

// 2. Create a function that will return the addition of N numbers.
//
//     Example:
//     ```javascript
//     var answer = add (1, 2) + add ( 1, 4, 6, 7, 2);
//     ```
//     Dynamic argument list handling with JS

//Exercise 2

// var a = [1,2];
// var b = [1,4,6,7,2];
// function sum(array){
// 	for(i = 0; i < b.length; i++)
// 	for(j = 0; j < a.length; j++)
// 	total = a[i] + b[j];
// 	return total
// }
// console.log(total)
//
// var answer = add (1,2) + add (1,4,6,7,2);
// console.log()
//
// var list= [1, 4, 6, 7, 2];
// var total= 0;
// function add(array){
// function subadd(array){
//     for(var i =0; i < list.length; i++)
//     total=total+list[i];
//     return total;
// }
// return subadd(array);
// }
// console.log(add(list));

// Exercise 3
// var a = myMath.add (1, 2, 3); //6
// var b = myMath.mul (1, 2, 3); // 6
// var c = myMath.fact ( 3); // 6

// var myMath = {
// 	add: function () {
// 		var add = 0;
// 		for(var i = 0; i < arguments.length; i++) {
// 		add = add + arguments[i];
//
// 	}
// 		return add;
//
// },
// 	mul: function () {
// 		var mul = 1;
// 		for (var i = 0; i < arguments.length; i++) {
// 			mul = mul * arguments[i];
// 		}
// 		return mul;
// 	},
// 	fact: function (f) {
// 		var fact = 1;
// 		for (var i = f; i > 1; i--){
// 		fact = fact * i;
// 		}
// 		return fact;
// 	}
//
// };
// var a = myMath.add (1, 2, 3); //6
// var b = myMath.mul (1, 2, 3); // 6
// var c = myMath.fact ( 3);
// console.log(a);
// console.log(b);
// console.log(c)


// example 4

function Image (data, height, width, name) {
	this.data = data;
	this.height = height;
	this.width =  width;
	this.name = name;

}
Image.prototype.pixelData = function (a, b) {
	return this.data [a * this.width + b]
}
var data2 = new Array (16);
var data = new Array (1600); // 40 x 40 px dummy image data
var img = new Image (data, 40, 40, "myImage");
var img2 = new Image (data, 4, 4, "myImage2");
img2.height;
img.width; // 40
img.height; // 40
img.name; // ‘myImage’


img.pixelData (20, 4); // returns the color of the pixel at that position.



//exercise 5
// Create a function that will print out the properties of an object.

// a. If one parameter is provided, it should print out all of the properties accessible by that object.

// b. If a second, boolean value, parameter is provided, it should only print out the values that belong to the object instance itself if true.



// function CustomObject (a, b) {
//   this.a = a;
//   this.b = b;
// }
// CustomObject.prototype.c = function () { return this.a + this.b; };
// var obj = new CustomObject (1, 2);

// function printObjProp (obj, sample) {
// 	var lock = "";
// 	if(!sample) {
// 		for(var key in obj) {
// 			lock = lock+ " " +key;
// 			console.log(lock);


// 		}

// 	}
// 	else
// 	if (sample) {
// 		for(key in obj) {
// 			if(obj.hasOwnProperty(lock))
// 			lock = lock+ " " +key;
// 			console.log(lock);
// 		}
// 	}
// }




// printObjProp (obj); // output: a, b, c
// printObjProp (obj, false); // output: a, b, c
// printObjProp (obj, true); // output: a, b



























//exercise 5
// Create a function that will print out the properties of an object.

// a. If one parameter is provided, it should print out all of the properties accessible by that object.

// b. If a second, boolean value, parameter is provided, it should only print out the values that belong to the object instance itself if true.



function CustomObject (a, b) {
  this.a = a;
  this.b = b;
}
CustomObject.prototype.c = function () { return this.a + this.b; };
var obj = new CustomObject (1, 2);

function printObjProp (obj, sample) {
	var lock = "";
	if(!sample) {
		for(var key in obj) {
			lock = lock+ " " +key;



		}
	console.log(lock);
	}
	else
	if (sample) {
		for(key in obj) {
			if(obj.hasOwnProperty(key))
			// lock = lock+ " " +key;
			console.log(key);
		}
	}

}




printObjProp (obj); // output: a, b, c
printObjProp (obj, false); // output: a, b, c
printObjProp (obj, true); // output: a, b
