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

// var usHoliday = {
// "09/05": "Labor Day",
// "01/01": "New Years",
// "12/25": "Christmas"
// };
// var vmHoliday = {
// "02/08": "New Year",
// "06/08": "Family Day"
// };


// function getDate(en){
// var result = /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(en);
// var month = result[1];
// var day = result[2];
// var year = result[3];
// var usString = 'English US '+month+"/"+day+"/"+year;
// var vtString = 'Vietnam VM'+day+"/"+month+"/"+year;

// return usString+getUsHoliday(month,day)+vtString+getVMHoliday(month,day);
// }

// function getUsHoliday(month,day){
// var key = month+"/"+day;
// return usHoliday.hasOwnProperty(key) ? "("+usHoliday[key]+")" : "";
// }

// function getVMHoliday(month,day){
// var key = month+"/"+day;
// return vmHoliday.hasOwnProperty(key) ? "("+vmHoliday[key]+")" : "";
// }



// getDate("01/01/2016");
