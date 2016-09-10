//exercsie 1
// function hextorgb(hex){
//
//
//   var result= hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
// 	if (result){
// 	 var   r= parseInt(result[1],16);
//       var  g= parseInt(result[2],16);
//       var  b= parseInt(result[3],16);
//      return 'rgb('+r+','+g+','+b+')';
// 	}
// }
//
// hextorgb("#3020ff");

// //exercise 2

// // function hextorgb(hex){


// //   var result= hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
// // 	if (result){
// // 	 var   r= parseInt(result[1],16);
// //       var  g= parseInt(result[2],16);
// //       var  b= parseInt(result[3],16);
// //      return 'rgb('+r+','+g+','+b+')';
// // 	}
// // }

// // hextorgb("#3020ff");
// // hextorgb("#32f");
// // hextorgb("3322ff");

//exercise 2

// var usHoliday = {
// "09/05": "Labor Day",
// "01/01": "New Years",
// "12/25": "Christmas"
// };
// var vetHoliday = {
// "02/08": "New Year",
// "06/08": "Family Day"
// };
//
//
// function getDate(en){
// var result = /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(en);
// var month = result[1];
// var day = result[2];
// var year = result[3];
// var usString = 'English US. '+month+"/"+day+"/"+year;
// var vmString = ' Vietnam VET '+month+"/"+day+"/"+year;
//
// return usString+getUsHoliday(month,day)+vmString+getVETHoliday(month,day);
// }
//
// function getUsHoliday(month, day){
// var key = month+"/"+day;
// return usHoliday.hasOwnProperty(key) ? "("+usHoliday[key]+")" : "";
// }
//
// function getVETHoliday(month,day){
// var key = month+"/"+day;
// return vetHoliday.hasOwnProperty(key) ? "("+vetHoliday[key]+")" : "";
// }
//
//
//
// getDate("12/25/2016");
//

//chapter7
//exercise 3
// 1. .abc
// 	ex. 1abc1abc4abc
// 2. a+b?!!1{4}
// 	ex. aab!!1111
// 3. .{3}a.b
// 	ex. 444a3b
// 4. \w
// 	ex. avdfdgddf match any word character [a-z,A-Z,0-9]
// 5. \s
// 	ex. c s a e  all white spaces
// 6. \d
// 	ex. 043 only numbers [0-9]
// 7. (.) matches any characters except new line
// 	ex. .ndks$2ddg
// 8. [abc] match a single character present in the list (case sensitive)
// 	ex. abcabcabcccc
// 9. (abc) 1st Capturing group (case sensitive)
// 	ex. abcabcabcabc
// 10. [a­zA­Z_\$.]+[A­Za­z_\$0­9.]@[a­zA­Z_\$.]+[a­zA­Z_\$0­9.].(com|net|org){1}
// 	ex. A_zzzzzzzzzzZ9@aaaaaazzzzzzzzz9.com
// 		_zzzzzZ9@aaazzz9.com
// 11. ([0oOn]{1}(_|\s)[0oOn]{1})
// 	ex. O_n

//Exercise 4
//
// 1. \w*\s\d{2},\s\d{4}
// 2. [a-zA-Z0-9]+
// 3. [a-zA-Z]+.(java|cpp|txt)
// 4. (.)(.).\2\1
// 5. \b[b-yB-Y]*\b
// 6. <(\w*)>(.*?)<\/\1>



//exercise 5 part 1

function shift(result){
    var every = /(\w)/g;
    var eve = every.exec(result);
    var resultArray = [];
        while(eve){
         resultArray.push(next(eve[0]));
            eve = every.exec(result);
              }
            return resultArray.join("");
              }
            function next(ent){
                switch (ent.charCodeAt(0)) {

              	case 122:
                  return String.fromCharCode(97);

              	case 57:
                  return String.fromCharCode(48);

              	case 90:
                  return String.fromCharCode(65);

              	default:
                  return String.fromCharCode(ent.charCodeAt(0)+1);
              }
      }
      console.log(shift('vL89')); //wm90

























//exercise 5 part 2
//
// var string ="...should never use yolo for any reason...";
//
//   var newstring = string.replace(/yolo/i, <a href ="https://twitter.com/search-home>" "#yolo"/a> );
//      console.log(newstring)


// if I replace the link, it will work.  The only thing not working is the link then.
