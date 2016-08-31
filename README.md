```

Chapter 2 
Exercise 1
var pound = "";
for (var i = 0; i < 7; i++){
	console.log(pound += "#");
}


Exercise 2

for(var i = 0; i < 100; i++) {
	var number = i +1;
	var result = "";
	//This is the remainder of 3.  Any number that is mutliple of 3 will receive the word fizz.
	if(number %3 === 0){
	result = "fizz";
}
	//This is the remainder of 5.  Any number that is multiple of 5 will receive the word buzz.
	if(number %5 === 0) {
		result += "buzz";
	}
	if(!result) {
		result = i + 1;
	}

console.log(result);
}


Exercise 3

var size = 8;
for (var i = 0; i < size; i++) {
	var square = " ";
	for (var j = 0; j < size; j++) {
	var total = i + j;
		if (total % 2 === 0){
			square += "#";
		}
		else {
			square += " ";
		}
}
	console.log(square);	
}
