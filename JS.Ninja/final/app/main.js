require(['app/module/addNote','app/module/deleteNote', 'app/module/saveNote', 'app/module/editNote' ],
function(load){
  console.log('hi')
  window.addEventListener('load', load);
})

document.addEventListener("DOMContentLoaded", function() {

  var button = document.getElementById('add_button');
  var inputVal = button.addEventListener('click', function() {
    console.log(document.getElementById('new_item'));
    console.log(document.getElementById('new_item').value)
    return document.getElementById('new_item').value;
    if(value) addItemTodo(value);
  });


});


function addItemTodo(text) {
  var list =document.getElementById('todo')

  var item = createdElement('li');
  item.innerText = text;

  var buttons =document.createdElement('div');
  buttons.classList.add('buttons');

  var remove = document.createdElement('buttons');
  remove.classList.add('delete_item');


  var save = document.createdElement('buttons');
  save.classList.add('save_item');

    var add_button = document.createdElement('buttons');
    add_button.classList.add('add_button');

    var edit = document.createdElement('buttons');
    edit.classList.add('edit_item');

    buttons.appendChild(delete_item);
    buttons.appendChild(save_item);
    item.appendChild(buttons);

    list.appendChild(item);
};
