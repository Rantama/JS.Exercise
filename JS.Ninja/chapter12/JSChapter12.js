// <div id=’a’ class=’square’ style=’display:inline­block’ val=’something important’></div>
// <p id=’newP’ class=’square’  carl=’import’></p>



//Example:
// var el = document.getElementById("a");
// printAttr (el, [‘id’, ‘class’, ‘style’, ‘val’]);
// should print out:
// a
// square
// display:inline­block
// something important

// printAttr (el, [‘id’, ‘var’]);
// should print out:
//a
//something important
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>\
    </title>
  </head>
  <body>

<div id = 'a' class = 'square' style = 'display:inlineblock' val = 'something important'></div>
<p id=’newP’ class=’square’  carl=’import’></p>

<script type = "text/>javascript">


function printAttr (el, array) {
  for (i = 0; i < array.length; i++)
  return array.length[i];

  console.log(array)
}




function style(element,name,value){
    name = name.replace(/-([a-z])/ig,
                        function(all,letter){
                          return letter.toUpperCase();
                        });

    if (typeof value !== 'undefined') {
      element.style[name] = value;
    }

    return element.style[name];
  }

  window.onload = function() {
    var div = document.getElementByTagName(div)[0]
    var el = document.getElementById("a"),
    assert(true, div.getAttribute('id'));
    assert(true, div.getAttribute('class'));
    assert(true, div.getAttribute('style'));
    assert(true, div.getAttribute('val'));
    printAttr (el, [‘id’, ‘class’, ‘style’, ‘val’]);

  }
</script>
</body>
</html>
