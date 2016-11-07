define(function(e){ document.getElementById('add_button').addEventListener('click',function() {
	var value = document.getElementById('title_val').value;
	if (value) addItemTodo(value);

  var storeTodo = document.getElementById('todo').innerHTML;
		localStorage.setItem('todo', storeTodo);
})
});
