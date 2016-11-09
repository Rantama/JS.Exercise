define(function() {

    console.log('hello');

    return function addingItems(e) {
      e.preventDefault();
        itemForm.style.display = 'block';
        itemFormCount++;
        if (itemFormCount > 0) {
            title_valForm.value = '';
            formDescription.value = '';

        }

    };

});
