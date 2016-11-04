define(['module/saveNote'], function edit_item(no) {

 document.getElementById('edit_button'+no).addEventListener("click", edit_item).style.display="none";
  document.getElementById('save_button'+no).addEventListener("click", save_item).style.display="block"


};
