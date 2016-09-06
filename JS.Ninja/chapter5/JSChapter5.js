//exercise 1

//bank info
    // var bankInstance = new Bank("mybank");
    // var acc = bankInstance.createAccount("long",1,"hi");
    // acc.getNumber("hi");
    // var anishacct = bankInstance.createAccount("Anish", 100000,"gohome");
    // anishacct.getNumber("gohome");
    // function Bank(name){
    // 	var accounts={};
    // 	var id=1;
    // 	this.name=name;
    // 	this.createAccount=function account(name, balance,key) {
    // 		var accId=id++;
    // 		accounts[accId]={
    // 			name:name,
    // 			amount:balance
    // 		}
    // 	return {
    // 		getNumber: function (key1) {
    // 			if(key==key1)
    // 			return {
    // 				name: accounts[accId].name,
    // 				amount: accounts[accId].amount
    // 			};
    // 		},
    // //balance
    // 		getBalance: function(key1) {
    // 			if(key==key1)
    // 			return accounts[accId].balance;
    // 		},
    // //deposit
    // 		deposit: function(money) {
    // 			balance += money;
    // 			return balance;
    // 		},
    // //withdraw
    // 		withdraw: function(cash) {
    // 			if (balance > cash){
    // 				balance -= cash
    // 				return balance;
    // 			}
    // 		return "Insufficient funds"
    // 		}
    // 	};
    // }
    // }

 //exercise 2

//  building={
//   F1:{
//       R1:["pc","mouse"],
//       R2:["pc","mouse"]
//   },
//   F2:{
//       R1:["pc","mouse"],
//       R2:["asa","mouse"]
//   },
//   F3:{
//       R1:["pc","mouse"],
//       R2:["asa","mouse"]
//   },
//   F4:{
//       R1:["pc","mouse"],
//       R2:["asa","mouse"]
//   },
//   F5:{
//       R1:["pc","mouse"],
//       R2:["asa","mouse"]
//   }
// };

// var searchFn=function(obj,value){
// var room;
// var floor;
// var result=[];
// function search(obj,value){
//     for(var key in obj){
//         if(Array.isArray(obj[key])){
//             room=key;
//             for(var i=0;i<obj[key].length;i++){
//                 if(obj[key][i]==value){
//                     result.push("Room: "+room+" Floor "+floor);
//                 }
//             }
//         }else if(typeof obj[key]== 'object'){
//             floor=key;
//             search(obj[key],value);
//         }
//     }
// }
// search(obj,value);
// return result;
// };

// console.log(searchFn(building,'pc'));
