define([], function edit_item(no) {

 document.getElementById('edit_button'+no).addEventListener("click", edit_item).style.display="none";
  document.getElementById('save_button'+no).addEventListener("click", save_item).style.display="block"

var item=document.getElementsById("new_item"+no);
var item_data=item.innerHTML;

item.innerHTML="input type='text' id='item_text'"+no+"' value='"+item_data+"'>"

});
