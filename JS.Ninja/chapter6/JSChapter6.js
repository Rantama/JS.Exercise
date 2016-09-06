// function Shape(color){
// this.pEdges= 0;
// this.fnDisplay = true;
// this.color = color;
// }
// //children
// function Quadrilateral(color){
// fnArea = "Area of a Quadrilateral";
// fnPerimeter = "Perimeter of a Quadrilateral";
// Shape.call(this, color);
// }
// function Triangle(color){
// this.size = 'medium';
// this.color = color;
// Shape.call(this, color);{
// this.pEdges = 3;
// }
// }
// //grandchild
// function Square(color){
// this.size= "med";
// this.color = color;
// Quadrilateral.call(this, color);
// this.pEdges = 4;
// }
//
//
// Quadrilateral.prototype = new Shape();
// Square.prototype = new Quadrilateral();
//
// Shape.prototype.test=function(){
// return " These are polygons";
// };
// var sqr = new Square('blue');
// var tri = new Triangle('tan');
// console.log(sqr);
// console.log(tri);
// console.log(sqr.test());
