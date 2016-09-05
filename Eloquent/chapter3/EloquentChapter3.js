//Exercise 1

//var min = function(x, y) {
//	if (x <= y) {
//		return x;
//	}
//	else
//		if (x > y) {
//			return y;

//	}
//}

//console.log (min(4,7));
//console.log(min(15,25));
//console.log(min(32,1));


//Exercise 2

//function isEven(n) {
//       if (n === 0)
//         return true;
//       else if (n === 1)
//         return false;
//       else if (n < 0)
//         return isEven(-n);
//       else
//         return isEven(n - 2);
//     }

//     console.log(isEven(35));
//     console.log(isEven(30));
//     console.log(isEven(8));



//Exercise 3

//function countChar(string, ch) {
//       var countB= 0;
//       for (var i = 0; i < string.length; i++)
//         if (string.charAt(i) == ch)
//           countB ++;
//       return countB;
//     }
//     function countBs(string) {
//       return countChar(string, "C");
//     }
//     console.log(countBs("BBC"));
//     console.log(countChar("kakkerlak", "k"));


//Exercise 1

//var min = function(x, y) {
//	if (x <= y) {
//		return x;
//	}
//	else
//		if (x > y) {
//			return y;

//	}
//}

//console.log (min(4,7));
//console.log(min(15,25));
//console.log(min(32,1));


//Exercise 2

//function isEven(n) {
//       if (n === 0)
//         return true;
//       else if (n === 1)
//         return false;
//       else if (n < 0)
//         return isEven(-n);
//       else
//         return isEven(n - 2);
//     }

//     console.log(isEven(35));
//     console.log(isEven(30));
//     console.log(isEven(8));



//Exercise 3

//function countChar(string, ch) {
//       var countB= 0;
//       for (var i = 0; i < string.length; i++)
//         if (string.charAt(i) == ch)
//           countB ++;
//       return countB;
//     }
//     function countBs(string) {
//       return countChar(string, "C");
//     }
//     console.log(countBs("BBC"));
//     console.log(countChar("kakkerlak", "k"));


//Exercise 4

//  function fb(n){
//         var current = 1;
//         var back = 0;
//         var future = 2;
//             for(j = 0; j < n;j){
//                 future = current + back;
//                 back = current;
//                 current = future;
//                 n--;
//             }

//         console.log(current);

//         }

// fb(10);
