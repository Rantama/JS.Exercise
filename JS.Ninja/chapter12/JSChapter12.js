function printAttr (el, array) {
  for (var i = 0; i < array.length; i++){
  //return array[i].length;
  console.log(el.getAttribute(array[i]))
  }

}

  var el = document.getElementById('a');

console.log( printAttr (el, ['id', 'class', 'style', 'val']));
