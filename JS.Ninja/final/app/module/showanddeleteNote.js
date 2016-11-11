define(['app/module/saveNote'], function() {
    var saveButton = document.getElementById('save');
    container.addEventListener('click', showanddeleteNote)

    function showanddeleteNote(e) {

        if (e.target.className == 'editButton') {
            currentNode = e.target.parentNode;
            itemForm.style.display = 'block';
            saveButton.innerHTML = 'Edit';
            var todos = document.getElementById('todos')
            title_note.value = parentNode[0].childNodes[6].childNodes[1].innerHTML;
            descriptionNote.value = parentNode[0].childNodes[3].childNodes[1].innerHTML;
            var storeLocal = document.getElementById('container').innerHTML;
            localStorage.setItem('storedItem', localStorage);
        } else if (e.target.className == 'removeButton')

        {


            e.target.parentNode.remove();

            var storeLocal = section.innerHTML;
            localStorage.setItem('storedItem', storeLocal);
            // itemForm.style.position = 'absolute';

            // saveButton.textContent = 'Edit';


        }
    }

    var storedItem = localStorage.getItem('storedItems');
    document.getElementById('container').textContent = storedItem;
});
