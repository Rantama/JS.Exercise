define(function(e) {
    var saveButton = document.getElementById('save');
    return function(e) {
        e.preventDefault();

        var title_note = document.getElementById('title');
        var descriptionNote = document.getElementById('description');
        if (saveButton.textContent == "Save") {

            itemForm.style.display = 'none';


            var noteStorage = document.createElement('section');
            noteStorage.setAttribute('class', 'saveNotehere');

            var button = document.createElement('button');
            button.setAttribute('class', 'noteEditting');
            var img1 = document.createElement('img');
            img1.className = "editButton";
            img1.src = "images/editbutton.png";
            button.appendChild(img1);
            noteStorage.appendChild(button);

            var br = document.createElement('br');
            noteStorage.appendChild(br);

            var button1 = document.createElement('button');
            button1.setAttribute('class', 'removingNote')
            var img2 = document.createElement('img');
            img2.className = "removeButton";
            img2.src = "images/deletebutton.jpeg";
            button1.appendChild(img2);
            noteStorage.appendChild(button1);
            var section = document.getElementById('container');


            var todoNote = document.createElement('div');
            var NoteItem = document.createElement('strong');
            NoteItem.textContent = 'Title: ';
            noteStorage.appendChild(todoNote);
            var html = document.createElement('div');
            html.textContent = title_note.value;
            html.class = 'Note_title';
            todoNote.appendChild(NoteItem);
            todoNote.appendChild(html);

            var descriptionNote = document.createElement('div');
            var NoteItem = document.createElement('strong');
            NoteItem.textContent = 'Description:';
            noteStorage.appendChild(descriptionNote);
            var html = document.createElement('div');
            html.textContent = descriptionNote.value;
            descriptionNote.appendChild(html);
            descriptionNote.appendChild(NoteItem);

            var createdDate = document.createElement('div');
            createdDate.className = 'dateCreation';
            createdDate.innerHTML = '<b>Created Time:</b> ' + Date();
            noteStorage.appendChild(createdDate);

            var editedDate = document.createElement('div');
            editedDate.setAttribute('class', 'dateEdition');
            noteStorage.appendChild(editedDate);
            section.appendChild(noteStorage);

        } else if (saveButton.textContent == 'Edit') {
            itemForm.style.display = 'none';


            currentNode.childNodes[3].childNodes[1].textContent = title_note.value;
            currentNode.childNodes[4].childNodes[1].textContent = descriptionNote.value;
            currentNode.childNodes[6].innerHTML = '<b>Edited Time:</b> ' + Date();
            currentNode = undefined;

        }




        console.log('today');

        var storeLocal = container.innerHTML;
        localStorage.setItem(itemFormCount++, 'storeLocal');
        saveButton.innerHTML = 'Save';

    }




});
