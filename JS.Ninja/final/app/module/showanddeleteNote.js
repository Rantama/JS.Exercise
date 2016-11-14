define(['app/module/saveNote'], function(saveNote) {
    var saveButton = document.getElementById('save');
    container.addEventListener('click', showanddeleteNote)

    function showanddeleteNote(e) {

        if (e.target.className == 'editButton') {
            currentNode = e.target.parentNode.parentNode;
            itemForm.style.display = 'block';
            saveNote.editObj.title = currentNode.childNodes[2].childNodes[1];
            saveNote.editObj.description = currentNode.childNodes[3].childNodes[1];
            title.textContent = 'long';

            var storedItem = JSON.stringify(todos);
            localStorage.setItem('todos', storedItem);

            saveButton.innerHTML = 'Edit';
        } else if (e.target.className == 'removeButton' || e.target.className == 'removingNote')

        {

            if (e.target.className == 'removingNote') {
                e.target.parentNode.remove();
            } else {
                e.target.parentNode.parentNode.remove()
            };

            var storeLocal = section.innerHTML;
            localStorage.setItem('storedItems', storeLocal);
            // function saveTodos()
            // {
            //     var storedItem = JSON.stringify(todos);
            //     localStorage.removeItem('container', storedItem);
            //
            //     console.log(localStorage.setItem('container'));
            // }


            // function getTodos() {
            //   var str = localStorage.getItem('todos');
            //   todos = JSON.parse(str);
            //   if(!todos) {
            //     todos = []
            //   }
            // }
            // getTodos();
            // var storeLocal = section.innerHTML;
            // localStorage.setItem('storedItems', storeLocal);
        }




    }
    // var storedItem = localStorage.getItem('todos');
    // document.getElementById('container').innerHTML=storedItem;

});
