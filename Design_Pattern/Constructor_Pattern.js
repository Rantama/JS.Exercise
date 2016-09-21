
//https://repl.it/Dd93/2

var newObject = Object.create(Object.prototype);

function StanleyCup(team, year) {

	this.team = team;
	this.year = year;

	this.toString = function () {
		return this.team + " Won the Stanley Cup in "  + this.year;
	};
}

var Redwings = new StanleyCup("Detroit Redwings", 1998);
var Oilers = new StanleyCup("Edmonton Oilers", 1984);

console.log(Redwings.toString());
console.log(Oilers.toString());
