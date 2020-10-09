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
  speed: 3,
};

let circle2 ={
  x: 0,
  y:0,
  size: 100,
  vx:0,
  vy:0,
  speed: 4,
};

let state = 'title';

// setup()
function setup() {
  createCanvas(500,500);
  setupCircles();
}

function setupCircles() {
  // Position circles separated from one another
  circle2.x = width/3;

  //start circles moving in a random direction
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
}




// draw()
function draw() {
  background(0);

  handleInput();
  move();
  display();
}

//TITLES
if (state === 'title') {
  title();
}
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'love') {
    love();
  }
  else if (state === 'sadness') {
    sadness();
  }


function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER, CENTER);
  text('LOVE?', width/2, height/2);
  pop();
}


simulation();

function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}

function love() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER, CENTER);
  text('LOVE', width/2, height/2);
  pop();
}

function sadness() {
  push();
  textSize(64);
  fill(150,150,255);
  textAlign(CENTER, CENTER);
  text('RIP', width/2, height/2);
  pop();
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

//MOVEMENT
function move() {
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

//WHAT HAPPENS WHEN CIRCLES TOUCH
function checkOffscreen() {
  //check if the circles have gone offscreen
  if (isOffscreen(circle2)) {
    state = 'sadness';
  }
}

function isOffscreen(circle2) {
  if (circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height){
  return true;
}
else {
    return false;
  }
}

function checkOverlap() {
  //check if the circles overlap
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = 'love';
  }
}


//DISPLAY
function display() {
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed() {
  if (state === 'title') {
    state = 'simulation';
  }
}
