requirejs(['app/module/addNote',  'app/module/saveNote','app/module/showanddeleteNote', 'app/module/localStorage'], function(addNote, saveNote, showanddeleteNote, localStorage) {
  var saveButton = document.getElementById('save');
  saveButton.addEventListener('click', saveNote);
  var formDisplay = document.getElementById('addingItem');
  formDisplay.addEventListener('click', addNote);
  ;
});

var new_Div = document.createElement('div');

var title_valForm = document.getElementById('title_val');
var itemForm = document.getElementById('todos');
var editInput = document.createElement('input');
var removeButton = document.createElement('button');
var body = document.getElementById('container');

var addItems = document.getElementById('addItem');
var formDescription = document.getElementById('description');
var body = document.getElementById('container').innerHTML;
var storedItem = document.getElementById('storedItem');
var section = document.getElementById('container');



var itemFormCount=0;
var currentNode;
