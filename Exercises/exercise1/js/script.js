/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let bg = {
  r: 0,
  g: 0,
  b:0
};
let circle1 = {
  x: 0,
  y: 250,
  size: 0,
  growthRate: 0.05,
  speed: 0.25,
  fill: 255,
  alpha: 255
};
let square1 = {
  x: 500,
  y: 150,
  size: 0,
  sizeRatio: 0.5,
  speed: -0.25,
  fill: 255,
  alpha: 255
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
  noStroke();
  // circle1.y = height/2;
  // circle2.x = width;
  // circle2.y = hright/2;

}

// draw()
//
// Description of draw() goes here.
function draw() {
   background(bg.r,bg.g,bg.b);
   bg.b = map(circle1.x, 100, width, 0,255);

   //triangle
   fill(255,255);
   triangle(0, 500, 500, 500, 250, 250);

   //moving circle (direction: right)
   circle1.x = circle1.x + circle1.speed;
   // circle1.x = constrain(circle1.x, 0, width/2)
   circle1.size = circle1.size + circle1.growthRate;
   circle1.size = constrain(circle1.size, 0, width)
   fill(circle1.fill, circle1.alpha);
   ellipse(circle1.x, circle1.y, circle1.size)

   //moving square (direction: left)
   square1.x = square1.x + square1.speed;
   square1.size = circle1.size * square1.sizeRatio;
   fill(square1.fill, square1.alpha);
   square(square1.x, square1.y, square1.size)



}
