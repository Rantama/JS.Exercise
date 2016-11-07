var removeIMG = '<img src="images/deletebutton.jpeg" class="smalls">';

var saveIMG = '<img src="images/saveicon.png" class="smalls">'

var editIMG = '<img src="images/editbutton.png" class="smalls">'

document.getElementById('add_button').addEventListener('click',function() {
	var value = document.getElementById('title_val').value;
	if (value) addItemTodo(value);


});

function addItemTodo(text) {

	var list = document.getElementById('todo');

	var title_val = document.createElement('li');
	item.innerHTML = text;

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeIMG;

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

	list.appendChild(title_val);
}
// require([],
// function(){
//
//
//
// 	  var button = document.getElementById('add_button');
// 	  var inputVal = button.addEventListener('click', function() {
// 	    console.log(document.getElementById('item'));
// 	    console.log(document.getElementById('item').value)
// 	    return document.getElementById('item').value;
// 	    if(value) addItemTodo(value);
//
//
// 	  });
//
// 		// console.log('goto')
// 		// window.addEventListener('load', load);
//
// // })
//
// function addItemTodo(item){
// 	console.log(item)
// };
