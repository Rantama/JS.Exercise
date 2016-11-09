define(function (e) {
  var saveButton = document.getElementById('save');
  return function(e){
    e.preventDefault();
      if (saveButton.textContent == "Save") {
          itemForm.style.display = 'none';

          var noteStorage = document.createElement('div');
          noteStorage.setAttribute('class', 'savedNoteStorage');

          var buttons = document.createElement('button');
          buttons.setAttribute('class', 'noteEditting');
          var img1 = document.createElement('img');
          img1.className = "editButton";
          img1.src = "images/editbutton.png";
          buttons.appendChild(img1);

          var buttons = document.createElement('button');
          buttons.setAttribute('class', 'removingNote')
          var img2 = document.createElement('img');
          img2.className = "removeButton";
          img2.src = "images/deletebutton.jpeg";
          buttons.appendChild(img2);

          var todoNote = document.createElement('div');
          var NoteItem = document.createElement('strong');
          NoteItem.textContent = 'Title: ';
          var html = document.createElement('div');
          html.textContent = title_valForm.value;
          html.class = 'Item_title';
          todoNote.appendChild(NoteItem);
          todoNote.appendChild(html);
          noteStorage.appendChild(todoNote);


          var descriptionForm = document.createElement('div');
          var NoteItem = document.createElement('strong');
          NoteItem.textContent = 'Description:';
          var html = document.createElement('div');
          html.textContent = descriptionForm.value;
          descriptionForm.appendChild(html);
          descriptionForm.appendChild(NoteItem);
          noteStorage.appendChild(descriptionForm);

          new_Div.innerHTML = Date();







          console.log('you');

          var storeLocal = container.innerHTML;
          localStorage.setItem('storedItems', storeLocal);
          saveButton.innerHTML = 'Save';
      }
    }




});
