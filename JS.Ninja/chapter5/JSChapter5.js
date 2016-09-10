//exercise 1

//bank info
// // A set of clients where each can:
// // hold money of their own;
// // deposit money into the bank (to any account);
// // retrieve money from the bank (from personal account only);
// // view current balance in bank (from personal account only)
// // A client cannot deposit more money than what it has;
// // A client cannot retrieve more money that what is in its account;
// // All financial information must be private
// // Use of closures
// function Bank(name){
// 	this.name=name;
// 	return name;
// }
//
// var bankInstance = new Bank("myBank")
// var acc1 = bankInstance.newAccount("Long", 200, "pw1")
// var acc2 = bankInstance.newAccount("John", 300, "pw2")
// function Bank(name) {
// 	var accounts = {};
// 	var id = 0;
// 	this.newAccount = function account(acc, balance, key) {
// 		var accId = id++;
// 		accounts[accId] = {
// 			name:acc,
// 			balance:balance
// 		};
// 		return {
// 			getName: function (key1) {
// 				if(key === key1)
// 				return {
// 					name: accounts[accId].name
// 				}
// 				else {
// 					return "This is not your account";
// 				}
// 			},
// 			getBalance: function (key1, amount) {
// 				if (key === key1){
// 				return accounts[accId].balance;
// 				}
// 				else {
// 				return "This is the wrong password";
// 			}
// 			},
// 			getDeposit: function(key1, amount) {
// 				if(key === key1) {
// 				accounts[accId].balance += amount;
// 				return accounts[accId].balance;
// 				}
//
// 				else {
// 				return "This is not your account"
// 				}
// 			},
// 			getWithdrawl: function (key1, amount) {
// 				if(key === key1) {
// 						if(amount > accounts[accId].balance){
// 					return "Insufficient funds";
// 						}
// 					accounts[accId].balance -= amount;
// 					return accounts[accId].balance;
// 				}
//
//
//
// 	}
// 		}
// };
// }
//
// console.log(acc1.getName("pw1"));
// console.log(acc1.getName("pw3"));
// console.log(acc1.getBalance("pw1"));
// console.log(acc1.getBalance("pw2"));
// console.log(acc1.getWithdrawl("pw1", 201));
// console.log(acc1.getDeposit("pw1", 50));

 //exercise 2

///exercise 2
// Implement the following:

// A large building has many people and pieces of equipment. A new tech­support employee has been hired to help out solve users’ problems and fix broken equipment. The new employee is still unfamiliar with the layout but is doing his best to keep track of where everyone and everything is.

// Implement a structure that represents the building.
// Must contain data types representing equipment and users. ii. Equipment can be associated with rooms or specific people
// Each piece of equipment and person is associated with a specific floor and room.
// The new tech­support employee must be able to find users and equipment as quickly as possible.
// Use of memoization and implementation of a simple searching algorithm.
//
//   var building={
//   F1:{
//       R1:["pc","mouse", "Keyboard", "Monitor", "Suzie"],
//       R2:["MAC","mouse", "Keyboard", "Monitor", "John"],
//       R3:["Printer", "Copy Machine"]  },
//   F2:{
//       R1:["pc","mouse", "Keyboard", "Monitor", "Kristina"],
//       R2:["MAC","mouse", "Keyboard", "Monitor", "Jose"],
//       R3:["Printer", "Copy Machine"]
//   },
//   F3:{
//       R1:["pc","mouse", "Keyboard", "Monitor", "Donovan"],
//       R2:["MAC","mouse", "Keyboard", "Monitor", "Jaime"],
//       R3:["Printer", "Copy Machine"]
//   },
//   F4:{
//       R1:["pc","mouse", "Keyboard", "Monitor", "Angela"],
//       R2:["MAC","mouse", "Keyboard", "Monitor", "David"],
//       R3:["Printer", "Copy Machine"]
//   },
//   F5:{
//       R1:["pc","mouse", "Keyboard", "Monitor", "Hilary"],
//       R2:["MAC","mouse", "Keyboard", "Monitor", "Trump"],
//       R3:["Printer", "Copy Machine"]
//   }
// };

// Function.prototype.memoized = function(key){
// 	this._value =this._value ||{};
// 	return this._values[key]!== undefined ?
// 	this._values[key] :
// 	this._values[key] = this.apply(this, arguments);
// };
// Function.prototype.memoize = function(){
//     var fn = this;
//     return function(){
//       return fn.memoized.apply( fn, arguments );
//     };
// };
// var searchFn= (function(obj,value){
// var room;
// // var floor;
// // var result=[];
// // function search(obj,value){
// //     for(var key in obj){
// //         if(Array.isArray(obj[key])){
// //             room=key;
// //             for(var i=0;i<obj[key].length;i++){
// //                 if(obj[key][i]==value){
// //                     result.push(value + ": (Room: "+room+" Floor "+floor);
// //                 }
// //             }
// //         }else if(typeof obj[key]== 'object'){
// //             floor=key;
// //             search(obj[key],value);
// //         }
// //     }
// // }
// // search(obj,value);
// // return result;
// // })memoize();
// // console.log(building);
// // console.log(searchFn(building, "MAC"));
// // console.log(searchFn(building, "mouse"));
// // console.log(searchFn(building, "pc"));
// // console.log(searchFn(building, "Monitor"));
// // console.log(searchFn(building, "Keyboard"));
// // console.log(searchFn(building, "Copy Machine"));
