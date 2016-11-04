define(function new_item(event) {
  displayForm.addEventListener('click', addingNotes);
  var item = document.getElementById('item').value;

  var todos = get_todos();
  todos.push(item);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
});
