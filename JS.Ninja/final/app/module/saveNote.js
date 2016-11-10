define(function(e) {
  var noteCount = 0;
    var saveButton = document.getElementById('save');
    return function(e) {
        e.preventDefault();


        if (saveButton.textContent == "Save") {

            itemForm.style.display = 'none';

            var buttons = document.create


        //     var noteStorage = document.createElement('section');
        //     noteStorage.setAttribute('class', 'saveNotehere');
        //
        //     var button = document.createElement('button');
        //     button.setAttribute('class', 'noteEditting');
        //     var img1 = document.createElement('img');
        //     img1.className = "editButton";
        //     img1.src = "images/editbutton.png";
        //     button.appendChild(img1);
        //     noteStorage.appendChild(button);
        //     var section = document.getElementById('container');
        //
        //     var button1 = document.createElement('button');
        //     button1.setAttribute('class', 'removingNote')
        //     var img2 = document.createElement('img');
        //     img2.className = "removeButton";
        //     img2.src = "images/deletebutton.jpeg";
        //     button1.appendChild(img2);
        //     noteStorage.appendChild(button1);
        //     var section = document.getElementById('container');
        //
        //
        //     var todoNote = document.createElement('div');
        //     var NoteItem = document.createElement('strong');
        //     NoteItem.textContent = 'Title: ';
        //     var html = document.createElement('div');
        //     html.textContent = title_note.value;
        //     html.class = 'Item_title';
        //     todoNote.appendChild(NoteItem);
        //     todoNote.appendChild(html);
        //     noteStorage.appendChild(todoNote);
        //
        //
        //     var descriptionNote = document.createElement('div');
        //     var NoteItem = document.createElement('strong');
        //     NoteItem.textContent = 'Description:';
        //     var html = document.createElement('div');
        //     html.textContent = descriptionNote.value;
        //     descriptionNote.appendChild(html);
        //     descriptionNote.appendChild(NoteItem);
        //     noteStorage.appendChild(descriptionNote);
        //
        // } else if (saveButton.textContent = 'Edit') {
        //     itemForm.style.display = 'none';
        //     console.log(currentNode[6]);
        //     currentNode.childNodes[3].childNodes[1].textContent = title_valForm.value;
        //     currentNode.childNodes[4].childNodes[1].textContent = formDescription.value;
        //     currentNode.childNodes[6].innerHTML = '<b>Edited Time:</b> ' + Date();
        //     currentNode = undefined;
        //
        // }
        // new_Div.innerHTML = Date();



        console.log('today');

        var storeLocal = container.innerHTML;
        localStorage.setItem(itemFormCount++, 'storeLocal');
        saveButton.innerHTML = 'Save';

    }


}

});
