requirejs(['app/module/addNote',  'app/module/saveNote','app/module/showanddeleteNote', 'app/module/localStorage'], function(addNote, saveNote, showanddeleteNote, localStorage, load) {
  window.addEventListener('load',load);
  ;
});

var new_Div = document.createElement('div');
var formDisplay = document.getElementById('addingItem');
var title_valForm = document.getElementById('title_val');
var itemForm = document.getElementById('todos');
var editInput = document.createElement('input');
var removeButton = document.createElement('button');
var body = document.getElementById('container');
var saveButton = document.getElementById('save')
var addItems = document.getElementById('addItem');
var formDescription = document.getElementById('description');
var body = document.getElementById('container').innerHTML;
var storedItem = document.getElementById('storedItem');
var section = document.getElementById('container');
