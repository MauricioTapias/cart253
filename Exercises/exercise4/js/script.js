"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let school = [];
let schoolSize = 20;
let img;

let user = {
  x: 300,
  y: 100,
  size: 0,
  vx: 0,
  vy: 0,
  speed: 5,
};

let robberImage;

function preload() {
  user.Image = loadImage("assets/images/edsheeran.png");
}

// setup()
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  rectMode(CENTER);

//fishes
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
function draw() {
  background(0);

  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }

usermove();
displayUser();
pop()
;

function usermove() {
  push()
  if (keyIsDown(LEFT_ARROW)) {
    user.vx = -user.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    user.vx = user.speed;
  } else {
    user.vx = 0;
  }
  if (keyIsDown(UP_ARROW)) {
    user.vy = -user.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    user.vy = user.speed;
  } else {
    user.vy = 0;
  }
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height)
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
  fill(250, 255, 86, 70);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

function displayUser() {
  push()
  image(user.image, user.x, user.y, user.size, user.size);
  pop()
}

function mousePressed() {
  let fish = createFish(mouseX, mouseY);
  school.push(fish);
}
