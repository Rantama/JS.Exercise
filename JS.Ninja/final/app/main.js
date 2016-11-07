require(['app/module/addNote','app/module/deleteNote'],
  function(addNote, deleteNote, load){
    window.addEventListener('load', load);
  });

var removeIMG = '<img src="images/deletebutton.jpeg" class="smalls">';
var saveIMG = '<img src="images/saveicon.png" class="smalls">';
var editIMG = '<img src="images/editbutton.png" class="smalls">';



// document.getElementById('add_button').addEventListener('click',function() {
// 	var value = document.getElementById('title_val').value;
// 	if (value) addItemTodo(value);
//
//
// });

//move to delete folder


function removeItem (e) {
		var title_val = this.parentNode.parentNode;
		var parent = title_val.parentNode;

		parent.removeChild(title_val);
}


function addItemTodo(text) {



	var task = document.getElementById('todo');
	var getDate = new Date();
	var listItem = document.createElement('li')
	var title_val = document.createElement('li');
	title_val.innerText = text;
	var buttons = document.createElement('div');
	buttons.classList.add('buttons');
	var new_Div = document.createElement('div');
	var remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeIMG;
	remove.addEventListener('click', removeItem);
	var edit = document.createElement('button');
	edit.classList.add('edit');
	edit.innerHTML = editIMG;
	var save = document.createElement('button');
	save.classList.add('save');
	save.innerHTML = saveIMG;

	buttons.appendChild(remove);
	buttons.appendChild(save);
	buttons.appendChild(edit);
	title_val.appendChild(buttons);

	task.appendChild(title_val);



	// var storeTodo = localStorage.getItem('todo');
	// document.getElementById('body-container').innerHTML = storeTodo;

};
// require([],
// function(){
