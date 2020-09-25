/**************************************************
E1: I like to move it move it!
Mauricio Tapias

This is my  first exercise for CART253. Here, I illustrate a simple square and a circle on the road.
In this exercise, the shapes and the background color interact with the user's mouse.
Furthermore, the shapes also seem to get closer to the audience as they grow in size with time.
**************************************************/
//Variables: Background(bg); moving circle (circle1); moving square (square1); triangle: road (triangle1); horizon line (line1).
let bg = {
  r: 250,
  g: 100,
  b:0
};
let circle1 = {
  x: 250,
  y: 250,
  size: 0,
  growthRate: 0.05,
  speed: 0.5,
  fill: 255,
  alpha: 255
};
let square1 = {
  x: 250,
  y: 250,
  size: 0,
  sizeRatio: 0.5,
  speed: -0.25,
  fill: 0,
  alpha: 255
};
let triangle1 = {
  x1: 0,
  y1: 500,
  x2: 500,
  y2: 500,
  x3: 250,
  y3: 250,
  fill: 255,
  alpha: 255
};
let line1 = {
  x1: 0,
  y1: 250,
  x2: 500,
  y2: 250,
  fill: 255,
};

// setup()
//
// Canvas dimensions, noStroke & rectMode.
function setup() {
  createCanvas(500,500);
  noStroke();
rectMode(CENTER)
}

// draw()
//
// Drawn shapes (circle, triangle, square, line).
function draw() {
   background(bg.r,bg.g,bg.b);
   bg.b = map(mouseY, 0, width, 0,255);

   //horizon line
   line(line1.x1,line1.y1,line1.x2,line1.y2)
   stroke(line1.fill)

   //triangle: road
   fill(triangle1.fill,triangle1.alpha);
   triangle(triangle1.x1, triangle1.y1, triangle1.x2, triangle1.y2, triangle1.x3, triangle1.y3);

   //moving square (direction: left)
   square1.y = square1.y + square1.speed;
   square1.size = circle1.size * square1.sizeRatio;
   square1.y = constrain(mouseY, 0, width/2)
   fill(square1.fill, square1.alpha);
   square(square1.x, square1.y, square1.size)

   //moving circle (direction: right)
   circle1.x = mouseX;
   circle1.size = circle1.size + circle1.growthRate;
   circle1.size = constrain(circle1.size, 0, width)
   fill(circle1.fill, circle1.alpha);
   ellipse(circle1.x, circle1.y, circle1.size)

}
