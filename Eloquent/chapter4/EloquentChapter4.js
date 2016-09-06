//exercise 1

// function range(start, end, step) {
//   if (step === null)
//   {step = 1;}
//   var array = [];
//   if (step > 0) {
//     for (var i = start; i <= end; i += step){
//       array.push(i);}
//   } else {
//     for (i = start; i >= end; i += step)
//       array.push(i);
//   }
//   return array;
// }
// function sum(array) {
//   var total = 0;
//   for (var i = 0; i < array.length; i++)
//     total += array[i];
//   return total;
// }
// console.log(range(1, 10,2));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));

//Exercise 2

// var array = [1, 2, 3, 4, 5];
// var newArray = [];
// function reverseArray() {
// 	var c = 1;
// 	var t = 6;
// 	for(var i = array.length; i >= 0; i--){
// 		newArray.push(newArray[i]);
// 		c++;
// 	}
// 	return newArray.splice;
// }
// console.log(array);
// console.log(reverseArray);

// Exercise 3

// var list={
//     value:3,
//       next: {
//         value:4,
//           next: {
//             value:5,
//               next: null
//             }
//         }
//     }
// function nth(list, l){
//     if(l === 0)
//       return list
//         else {
//           return nth(list.next, l - 1)
//         }
//     }

// console.log(nth(list,2));

//Exercise 4

// var obj1 = {
//   name: "",
//   lastname: "",
//   location: {
//     country: "USA",
//     state: "Michigan",
//     city: "Troy"
//   },
//   joined: 2016
// }
// var obj2 = {
//   name: "",
//   lastname: "",
//   location: {
//     country: "USA",
//     state: "North Carolina",
//     city: "Cherry Point"
//   },
//   joined: 2016
// }

// function deepEqual(obj1,obj2){
// 	for(var key1 in obj1){
// 		console.log(`Object1.${key1}=${obj1[key1]}`);
// 		if ((typeof obj1[key1]=="object") && (obj2.hasOwnProperty(key1))
// 				&& (typeof obj2[key1]=="object")){

// 				if(!deepEqual(obj1[key1], obj2[key1]))
// 					return false;

// 				}
// 		else if(obj1[key1]!=obj2[key1]){
// 			console.log(`Object 2 does not have the same value '${key1}'`);
// 			return false;
// 		}
// 	}
// 	//Could wrap this into a function, and call twice.
// 		for(var key2 in obj2){
// 		console.log(`Object2.${key2}=${obj2[key2]}`);
// 		if ((typeof obj2[key2]=="object") && (obj1.hasOwnProperty(key2))
// 				&& (typeof obj1[key2]=="object")){

// 				if(!deepEqual(obj1[key2], obj2[key2]))
// 					return false;

// 				}
// 		else if(obj2[key2]!=obj1[key2]){
// 			console.log(`Object 1 does not have the same value '${key2}'`);
// 			return false;
// 		}
// 	}

// 	return true;
// }

// console.log(deepEqual(obj1,obj2))
