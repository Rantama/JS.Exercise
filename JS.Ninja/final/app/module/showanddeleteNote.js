define(['app/module/saveNote'], function() {

          container.addEventListener('click',showanddeleteNote)
            function showanddeleteNote(e){
              console.log(e.target)

              if(e.target.className=="removeButton"){


                e.target.parentNode.remove();
                var storeLocal = section.innerHTML;
                      localStorage.setItem('storedItem', storeLocal);
              }
              if (e.target.className=="editButton"){
                itemForm.style.display = 'block';
                // itemForm.style.position = 'absolute';

                var storeLocal = document.getElementById('container').innerHTML;
                localStorage.setItem('storedItem', localStorage);
            save.textContent="Edit";
            currentNode = e.target.parentNode;

          }

        }
        var storedItem=localStorage.getItem('storedItems');
        document.getElementById('container').textContent = storedItem;
    });
