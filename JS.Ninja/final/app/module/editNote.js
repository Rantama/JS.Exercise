define(function edit(no) {

 document.getElementByClass('edit'+no).addEventListener("click", edit_item).style.display="none";
  document.getElementByClass('save'+no).addEventListener("click", save_item).style.display="block"

var title_val=document.getElementsById("new_title_val"+no);
var title_val_data=title_val.innerHTML;

title_val.innerHTML="input type='text' id='title_val_text'"+no+"' value='"+title_val_data+"'>"

});
