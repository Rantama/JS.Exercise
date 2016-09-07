// var x = "These are the cars I like";
// var toStart = setInterval(peak, 1000);
// var cars = {
//
//  1: "pathfinder is a good family car",
//  2: "Murano is a good suv",
//  3: "Altima is a good vehicle for long distance to save gas",
//  4: "BMW just like the car",
//  5: "Lamborgini is a very fast and expensive car",
//  6: "Audi very smooth to drive",
//
// };
//
// min = Math.ceil(6);
// max = Math.floor(1);
// test = 0;
// function peak(){
//  test  = Math.floor(Math.random() * (max-min))+min;
//  console.log(cars[test]);
// }
// function toStop() {
// clearInterval(toStart);
// }
//
// console.log(x)
// console.log(toStart);


// var timers = {
//      timerID: 0,
//      timers: [],
//      time: 1,
//      add: function(fn) {
//          this.timers.push(fn)
//  },
//  start: function() {
//    if(this.timerID) return;
//    (function runNext() {
//      if (timers.timers.length > 0) {
//        for(var i = 0; i < timers.timers.length; i++){
//          if((timers.time%timers.timers[i].interval === 0) || (!timers.timers[i])){
//            if (timers.timers[i].fun() === false){
//              timers.timers.splice(i,1);
//              i--;
//            }
//          }
//        }
//        timers.time++;
//        timers.timersID = setTimeout(runNext,15000);
//      }
//    })();
//  },
//  stop: function() {
//      clearTimeout(this.timerID);
//      this.timerID = 0;
//  }
//  };
//
//  //set time to 30 seconds (2 * 15 = 30)
//  timers.add({
//      fun:
//          function A() {
//              console.log("ready");
//          },
//          interval: 2
//  });
//
//  //set time to 60 seconds (4 * 15 = 60)
//  timers.add({
//      fun:
//          function B() {
//              console.log("aim");
//          },
//          interval: 4
//  });
//  //set time to 75 seconds (5 * 15 = 75)
//  timers.add({
//      fun:
//          function C() {
//              console.log("fire");
//      },
//    interval: 5
//  });
//
//  timers.start();
