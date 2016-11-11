define(function(e) {
    var saveButton = document.getElementById('save');
      var section = document.getElementById('container');
    return function(e) {
        e.preventDefault();


        if (saveButton.textContent == "Save") {

            itemForm.style.display = 'none';

            var title_note = document.getElementById('title');
            var descriptionNote = document.getElementById('description');

            var noteStorage = document.createElement('section');
            noteStorage.setAttribute('class', 'saveNotehere');

            var editButton = document.createElement('button');
            editButton.setAttribute('class', 'noteEditting');
            var img1 = document.createElement('img');
            img1.className = "editButton";
            img1.src = "images/editbutton.png";
            editButton.appendChild(img1);
            noteStorage.appendChild(editButton);
            // var section = document.getElementById('container');


            var removeButton = document.createElement('button');
            removeButton.setAttribute('class', 'removingNote')
            var img2 = document.createElement('img');
            img2.className = "removeButton";
            img2.src = "images/deletebutton.jpeg";
            removeButton.appendChild(img2);
            noteStorage.appendChild(removeButton);


            var todoNote = document.createElement('div');
            var NoteItem = document.createElement('strong');
            NoteItem.textContent = 'Title: ';
            noteStorage.appendChild(todoNote);
            var html = document.createElement('div');
            html.textContent = title_note.value;
            html.class = 'Note_title';
            todoNote.appendChild(NoteItem);
            todoNote.appendChild(html);

            var Notedescription = document.createElement('div');
            var NoteItem = document.createElement('strong');
            NoteItem.textContent = 'Description: ';
            noteStorage.appendChild(Notedescription);
            var html = document.createElement('div');
            html.textContent = descriptionNote.value;
            html.class = 'Description_title';
            Notedescription.appendChild(NoteItem);
            Notedescription.appendChild(html);


            var createdDate = document.createElement('div');
            createdDate.className = 'dateCreation';
            createdDate.innerHTML = '<b>Created Time:</b> ' + Date();
            noteStorage.appendChild(createdDate);

            var editedDate = document.createElement('div');
            editedDate.setAttribute('class', 'dateEdition');
            noteStorage.appendChild(editedDate);
            section.appendChild(noteStorage);

        } else if (saveButton.textContent == 'Edit')
        {
            itemForm.style.display = 'block';


            currentNode.childNodes[6].childNodes[2].textContent = title_note.value;
            currentNode.childNodes[12].childNodes[0].textContent = descriptionNote.value;
            currentNode.childNodes[6].innerHTML = '<b>Edited Time:</b> ' + Date();
            currentNode = undefined;

        }



        console.log(todos.childNodes);
        //
        var storeLocal = container.innerHTML;
        localStorage.setItem('storedItem', localStorage);
        saveButton.innerHTML = 'Save';

    }


});
