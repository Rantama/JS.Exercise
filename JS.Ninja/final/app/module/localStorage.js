define(function get_itemForm(){
  var itemForm = new Array;
  var itemForm_str = localStorage.getItem('todo');
  if itemForm_str !=null){
    itemForms = JSON.parse(itemForm_str);
  }
  return itemForm;
});
