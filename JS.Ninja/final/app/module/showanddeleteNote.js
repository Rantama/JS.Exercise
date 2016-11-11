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
          //  console.log(currentNode.childNodes);


            // var storeLocal = document.getElementById('container').innerHTML;
            // localStorage.setItem('storedItem', localStorage);
            saveButton.innerHTML = 'Edit';
        } else if (e.target.className == 'removeButton'||e.target.className == 'removingNote')

        {

          if(e.target.className == 'removingNote'){
            e.target.parentNode.remove();
          }else{
            e.target.parentNode.parentNode.remove()
          };
            var storeLocal = section.innerHTML;
            localStorage.setItem('storedItem', storeLocal);
            // itemForm.style.position = 'absolute';

            // saveButton.textContent = 'Edit';


        }
    }

    // var storedItem = localStorage.getItem('storedItems');
    // document.getElementById('container').textContent = storedItem;
});
