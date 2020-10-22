"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let school = [];
let schoolSize = 10;

let ed = {
  x: 750,
  y: 350,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

let edImage

function preload() {
  edImage = loadImage("assets/images/ed.png");
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < schoolSize; i++) {
    let fish = createFish(random(0,width), random(0,height));
    school.push(fish);
  }
}

function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return fish;
}
// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }
}

function simulation() {
  move();
  handleInput();

  image(edImage, ed.x, ed.y, ed.size);

  push()
  imageMode(CENTER);
  image(edImage, ed.x, ed.y);
  pop()
}


function moveFish(fish) {
  let change = random(0,1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function move() {
  ed.x = ed.x + ed.vx;
  ed.y = ed.y + ed.vy;
}

function mousePressed() {
  let fish = createFish(mouseX, mouseY);
  school.push(fish);
}


// Ed CONTROLS
function handleInput() {
  if (keyIsDown(UP_ARROW)) {
    ed.vy = -ed.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    ed.vy = ed.speed;
  } else {
    ed.vy = 0;
  }


  if (keyIsDown(LEFT_ARROW)) {
    ed.vx = -ed.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    ed.vx = ed.speed;
  } else {
    ed.vx = 0;
  }
}
