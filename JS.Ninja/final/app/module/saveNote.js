define(function saveForm(e) {
    saveButton.addEventListener('click', saveForm);

    if (saveButton.textContent == "Save") {
        itemForm.style.display = 'none';
    }

    var noteStorage = document.createElement('div')
    noteStorage.setAttribute('class', 'savedNoteStorage');

    var img1 = document.createElement('img');
    img1.className = "editButton";
    img1.src = "images/editbutton.png";

    var img2 = document.createElement('img');
    img2.className = "removeButton";
    img2.src = "images/deletebutton.jpeg";

    var todoNote = document.createElement('div');
    var NoteItem = document.createElement('strong');
    NoteItem.textContent = 'Title: ';
    var html = document.createElement('div');
    html.textContent = title_valForm.value;
    html.class = 'Item_title';


    var descriptionForm = document.createElement('div');
    var NoteItem = document.createElement('strong');
    NoteItem.textContent = 'Description:';
    var html = document.createElement('div');
    html.textContent = descriptionForm.value;

    new_Div.innerHTML = Date();
    new_Div.appendChild(img1);
    new_Div.appendChild(img2);
    todoNote.appendChild(NoteItem);
    todoNote.appendChild(html);
    noteStorage.appendChild(todoNote);
    descriptionForm.appendChild(html);
    descriptionForm.appendChild(NoteItem);
    noteStorage.appendChild(descriptionForm);

    console.log('you');

    var storeLocal = container.innerHTML;
    localStorage.setItem('storedValues', storeLocal);
    saveButton.innerHTML = 'Save';
});
