//exercise 6 tree


var A = {
		A: {
			a: {
				aa: 'aa'
			},
			b: {
				ba: 'ba',
				bb: 'bb'
			},
			c: {
				ca: 'ca',
				cb: {
					cba: 'cba'
				}

			}
		}
};
var numb = 0;
function buildTree(tree) {
	//var numb = 0; // did not work, moving var outside of function

	for( var k in tree) {

		if(typeof tree[k] == "object" && tree[k] !== null){

			//console.log(k); //moved grand children but not the children
			console.log(" " . repeat(numb) + (k));
			numb++;
			buildTree(tree[k]);

		} else {

			 //console.log(tree[k])  // did not move all of the children to the next point
			console.log(" " . repeat(numb) + [k]);  //moved all the children to the correct spaces
		}


	}
	numb--;
}
buildTree(A);
