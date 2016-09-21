// // Use Object.create to instantiate a new Team
// var yourTeam = Object.create( myTeam );




var myTeam = {

	// name: "Red Wings", // Did not need to have this line

 	Sport: function(hockey) {
 		this.hockey = hockey;

 	},

  	Play: function () {
    console.log( 'I am skating with the ' + this.hockey);
  },

  	Panic: function () {
    console.log( "Help!!! How do you hockey stop?" );
  },



};

// Use Object.create to instantiate a new Team
var yourTeam= Object.create( myTeam );
yourTeam.Sport('Red Wings');
yourTeam.Play();
yourTeam.Panic();

// Now we can see that one is a prototype of the other
console.log( yourTeam.hockey);
