define(function(){


  var formDisplay = document.getElementById('addButton');
  if(localStorage.length >0) {
    (function() {
      var lengths = localStorage.length;
      var itemFormCount = 0;
      for (var i = 0; itemFormCount < lengths; i++) {
        if(localStorage[i]){
          itemFormCount++;
        }
      }
    })
  }
  // (function load(e){
  //   section.innerHTML=storedItem;
  // })();
})
