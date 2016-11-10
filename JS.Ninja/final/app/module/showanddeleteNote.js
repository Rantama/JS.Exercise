define(['app/module/saveNote'], function() {
    // container.addEventListener('click', showanddeleteNote);

    function showanddeleteNote(e) {


        if (e.target.className == 'noteEditting') {
            itemForm.style.display = 'none';

            var currentNode;
            currentNode = e.target.parentNode;
            title_note.value = currentNode.childNode[3].childNode[1].innerHTML;
            descriptionNote.value = currentNode.childNode[4].childNode[1].innerHTML;
            saveButton.textContent = 'Edit';

        } else if (e.target.className == 'removingNote') {
            e.target.parentNode.remove();
            var storeLocal = section.innerHTML;
            localStorage.setItem('storedItem', storeLocal);

        }
    }
    console.log("helllolo")

});
