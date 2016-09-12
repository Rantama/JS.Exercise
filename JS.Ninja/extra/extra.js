// Exercise 1 part 1
// Given an array of words, write a function that will sort the array in ascending order. It should also take an optional argument that can customize the sorting order. Custom sorting orders:

// descending
// sort by length ascending/descending
// sort by number of consonants ascending/descending.


// var myArray = ["Long", "John", "Michael", "David", "Patterson", "Christopher"];
// function thisArray(a, b){
//   if (a > b) {
//     return -1;
//   }
//   else
//   if (a < b) {
//     return 1;
//   }
//   else
//   	return 0;
// }
// myArray.sort(thisArray)
// console.log(myArray)

//Exercise 1 part 2

// sort by length ascending/descending

// var myArray = ["Long", "John", "Michael", "David", "Patterson", "Christopher"];
// function thisArray(a, b){
//   if (a.length > b.length) {
//     return -1;
//   }
//   else
//   if (a.length < b.length) {
//     return 1;
//   }
//   else
//   	return 0;
// }
// myArray.sort(thisArray)
// console.log(myArray)


//exercise1 part 3

// var myArray = ["Long", "John", "Michael", "David", "Patterson", "Christopher"];
//   function thisLength(str2){
//   //console.log(part2[0].length);
//     console.log(str2.sort(function(a, b){
//         return cons_count(b) - cons_count(a);
//     }));
//         console.log(str2.sort(function(a, b){
//         return cons_count(a) - cons_count(b);
//     }));
//   }

//   function cons_count(str1){
// 	  	c_count = 0;
//         var cons_list =/([bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ])/g;
//         var cons = str1.match(cons_list);
// 		return cons.length;
//   }

//   thisLength(myArray);



//exercise2 part 1


// Create a function that can limit the execution of other functions to a determined amount of times.

// Example:

  //function limitFunc (fn, num) {
  //	var x = 0;
  //	return function (){
  //		if(num > x) {
  //			x++;
  //			fn()
  //		}
  //		else {console.log("doesn't run");
  //		}

  //	};
  //}
  //var limited = limitFunc (function() {
  //	console.log("running fine");
  //}, 2);
  //limited ();
  //limited ();
  //limited ();

  //exercise 3 part str1

  // <!--	Create a function that will set the color, font­size, and background color of a DOM element.-->

// <!--If there are fewer arguments, it should place a default value.-->
// <!--Use the "this" parameter to access the values of the DOM element. (e.g. this.color or this.style.color)-->

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
// <meta name="viewport" content="width=device-width">
// <title>Change the DOM</title>
// </head>
// <body>
// <div id = "newDOM">
// This will be the new color, new fontsize, and new background color of DOM
// </div>



// <script>

// var div = document.getElementById('newDOM');

// newDOM.changefunction = function(newColor, newFontSize, newBGColor){

//     	if(newColor==null){
//         	newColor='blue';
//     }
//     	if(newFontSize==null){
//         	newFontSize='3em';
//     }
//     	if(newBGColor===null){
//         	newBGColor='pink'
//     }

//     this.style.color = newColor;

//     this.style.fontSize =newFontSize;

//     this.style.backgroundColor =newBGColor;
// }

// //div.changefunction();

// div.changefunction('white','3em','black');


// </script>
// </body>
// </html>


//exercise 5 part 1

// var string = "I was here to do some business, but something happen that made me late."
// function count_vowels(numb){
// 	vowels = numb.match(/[aeiou]/gim);
// 	return vowels.length;
// }


// console.log(count_vowels(string));

//exercise5 part 2

// var number = 545654934859;

// function countNumber(value){

//   var Ndigits =Math.log(number) * Math.LOG10E + 1 | 0;
//   return Ndigits;
// }
// console.log(countNumber(number));


//exercise 6


 //Example of tree structure:

 //           A
 //        /  |  \
 //      a    b    c
 //      |   / \   | \
 //     aa  ba bb  ca  cb
 //                    |
 //                    cba
 // \\Print Example
 //   A
 //     a
 //       aa
 //     b
 //       ba
 //       bb
 //     c
 //       ca
 //       cb
 //         cba


       //var searchFn=function(obj){

       //     function search(obj){
       //         for(var key in obj){
       //             console.log(key);
       //             if(Array.isArray(obj[key])){
       //                 for(var i=0;i<obj[key].length;i++){
       //                     if(Array.isArray(obj[key][i])){
       //                         console.log('    '+obj[key][i]);
       //                     }else{
       //                         console.log('  '+obj[key][i]);

       //                     }
       //                 }

       //             }
       //         }
       //     }
       //     search(obj);
       // };

       // x={
       // 	A:[''],
       //       a:['aa'],
       //       b:['ba','bb'],
       //       c:['ca','cb',['cba']]
       // };


       // searchFn(x)
