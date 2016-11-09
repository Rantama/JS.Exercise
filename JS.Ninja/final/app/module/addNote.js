define(function() {
formDisplay.addEventListener('click', addingItems);
console.log('hello');
  function addingItems(e) {
    itemForm.style.display='block';
    itemFormCount ++;
    if (itemFormCount>0) {
      title_valForm.value='';
      formDescription.value='';

    }

  };

});
