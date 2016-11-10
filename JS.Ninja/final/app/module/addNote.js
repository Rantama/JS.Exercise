define(function() {
  var formDisplay = document.getElementById('add');
console.log('hello');

    return function add(e) {
      e.preventDefault();
        itemForm.style.display = 'block';
        itemFormCount++;
        if (itemFormCount > 0) {
            title_note.value = '';
            descriptionNote.value = '';

        }

    };

});
