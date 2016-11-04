// require(['module/addNote','module/deleteNote', 'module/saveNote', 'module/editNote','module/localStorage' ],
// function(start){
//   window.addEventListener('start', start);
// })

document.addEventListener("DOMContentLoaded", function() {

  var button = document.getElementById('add_button');
  var inputVal = button.addEventListener('click', function() {
    console.log(document.getElementById('title_val'));
    console.log(document.getElementById('title_val').value)
    return document.getElementById('title_val').value;
  });
  console.log(inputVal)

});
