define(['app/module/saveNote'], function () {
  function init() {
  body.addEventListener('click', action);

  function action (e) {
  console.log(e.target);
  if(e.target.className= "removeButton") {

    itemForm.style.display = 'block';
    e.target.parentNode.remove();
    var toDoItem = document.getElementById('container').innerHTML;
    localStorage.setItem('todos', toDoItem);
  }
  else if(e.target.className== 'editButton') {


    var  toDoItem = document.getElementById('container').innerHTML;
    localStorage.setItem('todos', toDoItem);
    save.textContent="Edit";
    currentNode = e.target.parentNode;
  }

  var storedItem=section.innerHTML;
      localStorage.setItem('storedValues', storedItem);
}
}
});
