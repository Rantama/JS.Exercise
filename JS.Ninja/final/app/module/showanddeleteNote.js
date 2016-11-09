define(['app/module/saveNote'], function () {
  function init() {
  body.addEventListener('click', action);

  function action (e) {
  console.log(e.target);
  if(e.target.className= "removeButton") {

    e.target.parentNode.remove();
    var toDoItem = document.getElementById('container').innerHTML;
    localStorage.setItem('todos', toDoItem);
  }
  else if(e.target.className== 'editButton') {

    itemForm.style.display = 'block';
    var  toDoItem = document.getElementById('container').innerHTML;
    localStorage.setItem('todos', toDoItem);
    save.textContent="Edit";
    currentNode = e.target.parentNode;
  }
  var noteStorage = localStorage.getItem('todos')
  document.getElementById('container') = noteStorage;
}
}
});
