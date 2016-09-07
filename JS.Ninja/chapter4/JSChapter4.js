//exercise 1

// function fb(number){
// 	if (number <= 2) {
// 		return 1;
// 	}
// 	else {
// 		return fb(number - 2) + fb(number - 1);
// 	}
// }
// console.log(fb(9));

//exercise 2

// var arr = [1, 3, 5, 7];
// var sum = addRec(arr);
// function addRec(arr) {
//     console.log(arr)
//     return arr.length > 1 ? arr.pop() + addRec(arr) : arr[0];
// }

// console.log(sum);

//exercise 3

// function store(number) {
//     var x;
//     setter(number);

//     function getter() {
//         return x;
//     }

//     function setter(number) {
//         if (!isNaN(number)) {
//             x = number;
//             return x;
//         } else
//             return "this is not a number";
//     }

//     return {
//         getFn: getter,
//         setFn: setter
//     };

// }

// var storeVal = store(5);
// console.log(storeVal);
// console.log(storeVal.getFn());
// console.log(storeVal.setFn("string"));

//exercise 4

// function datatype(){
//       	for(var i=0; i<=arguments.length; i++){
//       		if((arguments[i] - (Math.floor(arguments[i]) <= 0))){
//       		console.log('float');
//       		}
//       		else if(Array.isArray(arguments[i]))
//       		{
//       		console.log('array');
//       		}
//       		else{
//       		console.log(typeof (arguments[i]));
//       		}
//       	}
//       }
//       datatype(1, 6.2831, "pi*2",[2,1],{},  function(){});

//exercise 5

// //Chapter 4 exercise 5
// var x1 = 1, y1 = 2, z1 = 1;
// var x2 = 2, y2 = 2, z2 = 4;
//
// // function distance2d () {
// // return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
//
// // }
// // console.log(distance2d());
//
// // function distance3d () {
// // return Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2 -y1), 2) + Math.pow((z2 - z1), 2));
// // }
// // console.log(distance3d());
//
// function distance(x1, x2, y1, y2, z1, z2) {
// 	if (arguments.length < 4){
// 		return "Insuficient parameter"
// 	}
// 	return Math.sqrt(Math.pow((x2-x1), 2));
// }
//
// console.log(distance(x1, x2));
//
// function distance3d1(x1, x2, y1, y2, z1, z2) {
// 	if (arguments.length < 6){
// 		return "Insuficient parameter"
// 	}
// 	return Math.sqrt(Math.pow((x2-x1), 2));
// }
//
// console.log(distance3d1(x1, x2));


// exercise 6


// function distance(x1, x2, y1, y2){

// 	if((x1	===	null)	||	(x2 === null) || (y1 === null) || (y2 === null)){
//   		return console.log("This is not a number");
// }
// 	if(isNaN(x1)||(isNaN(x2))||(isNaN(y1))||(isNaN(y2))){
//  		return console.log("Insufficient data");
// }
// 		return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
// }

// console.log(distance(1, 2, 2, 2));
