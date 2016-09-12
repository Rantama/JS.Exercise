// chapter 6
// Create a set of object types that describe a series of related objects that may share behavior and/or attributes. Code the example and another set of classes different from the example. Add properties/methods as needed.

// Example:

// Shape //{ pEdges, fnDisplay }
// Quadrilateral is Shape //{ fnArea, fnPerimeter}
// Square is Quadrilateral //{ }
// Triangle is Shape //{fnArea, fnPerimeter}
// Use of inheritance, prototype, and function overwriting.




function Shape(color, fnArea, fnPerimeter){
this.pEdges= 0;
this.color = color;
this.basic ="What Shape";
this.pEdges = 0;
this.fnDisplay = 'shown';
}
//children
function Quadrilateral(color, fnArea, fnPerimeter){
this.fnArea = "Area of a Quadrilateral";
this.fnPerimeter = "P = (AB+ BC + CD + DA)";
this.shape = "Quadrilateral"
Shape.call(this, color);
}
function Triangle(color, fnArea, fnPerimeter){
this.shape = 'Triangle';
this.fnArea= "A = (h *b)/2";
this.fnPerimeter = "P = A + B + C"
this.size = 'large';
this.color = color;
Shape.call(this, color);{
this.pEdges = 3;
}
}
//grandchild
function Square(color, fnArea, fnPerimeter){
this.subShape = "Square"
Quadrilateral.call(this, color, fnArea, fnPerimeter);
this.pEdges = 4;
}


Quadrilateral.prototype = Object.create(Shape.prototype);
Square.prototype = Object.create(Quadrilateral.prototype);
Triangle.prototype = Object.create(Shape.prototype);

Shape.prototype.test=function(){
return " Triangles are not Quadrilateral";
};
var sqr = new Square('black');
var tri = new Triangle('red');
console.log(sqr);
console.log(tri);
console.log(tri.test());
// 
