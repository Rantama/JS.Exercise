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

<div id = 'a' class = 'square' style = 'display:inlineblock' val = 'something important'></div>
<p id=’newP’ class=’square’  carl=’import’></p>

<script type = "text/>javascript">
  window.onload = function() {
    var div = document.getElementByTagName(div)[0]
    var el = document.getElementById("a"),
    id = document.getElementById("id"),
    class1 = document.getElementById('class'),
    style = document.getElementById("style"),
    val = document.getElementById('val');
    assert(true, div.getAttribute('id'));
    assert(true, div.getAttribute('class'));
    assert(true, div.getAttribute('style'));
    assert(true, div.getAttribute('val'));

  }
</script>
