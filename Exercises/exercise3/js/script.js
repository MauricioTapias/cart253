/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let circle1 = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

// setup()
function setup() {
  createCanvas(500,500);
}


// draw()
function draw() {
  background(0);

  handleInput();
  move();
  display();
}


//CONTROLS FOR CIRCLE1
function handleInput() {
  if (keyIsDown(UP_ARROW)) {
    circle1.vy = -circle1.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    circle1.vy = circle1.speed;
  }
  else {
    circle1.vy = 0;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    circle1.vx = circle1.speed;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    circle1.vx = -circle1.speed;
  }
  else {
    circle1.vx = 0;
  }
}

function move() {
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;
}

function display() {
  ellipse(circle1.x, circle1.y, circle1.size);
}
