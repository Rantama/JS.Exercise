//https://repl.it/DdD6/0


function Flight () {

	this.cost = function () {
		return 500;
	};
}

// Decorator 1
function firstClass ( SouthWest ) {

	var v = SouthWest.cost();
	SouthWest.cost = function () {
		return v +200;
	};
}

// Decorator 2
function Food ( SouthWest ) {

	var v = SouthWest.cost();
	SouthWest.cost = function () {
		return v + 30;
	};

}

// Decorator 3
function Alcohol ( SouthWest ) {

	var v = SouthWest.cost();
	SouthWest.cost = function () {
		return v + 25;
	};

}

var sw = new Flight();
firstClass ( sw );
Food ( sw );
Alcohol ( sw );

// Outputs: 1522
console.log (sw.cost ());
