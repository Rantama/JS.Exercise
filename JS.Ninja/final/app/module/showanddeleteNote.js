define(['app/module/saveNote'], function() {
container.addEventListener('click', showanddeleteNote);

function showanddeleteNote(e) {

if (e.target.className =='noteEditting')
{
  itemForm.style.display = 'block';

  currentNode = e.target.parentNode;
  title_valForm.value=currentNode.childNode[3].childNode[1].innerHTML;
  formDescription.value=currentNode.childNode[4].childNode[1].innerHTML;
  saveButton.innerHTML = 'edit';

}
else if (e.target.className =='removingNote') {
e.target.parentNode.remove();
var storeLocal=section.innerHTML;
    localStorage.setItem('storedItem', storeLocal);

}
}
console.log("helllolo")

  });
