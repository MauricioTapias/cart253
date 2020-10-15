"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let outfit1 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

let outfit2 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  minspeed: 2,
  maxspeed: 20,
};

let stickyman = {
  x: 750,
  y: 350,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

//**************************//
let state = 'title';
//**************************//

let hello = {
  string: 'Hello,world',
  x: 0,
  y: 250,
}



let stickyImage;
let outfit1Image;
let outfit2Image;

function preload() {
  outfit1Image = loadImage("assets/images/outfit1.png");
  outfit2Image = loadImage("assets/images/outfit2.png");
  stickyImage = loadImage("assets/images/stickyman.png");

}


// setup()
//
// Canvas; covid19 positions; no cursor;
function setup() {
  createCanvas(windowWidth, windowHeight);

  outfit1.x = random(0, width);
  outfit1.vy = outfit1.speed;

  outfit2.x = random(0, width);
  outfit2.vy = outfit1.speed;

  noCursor();
}

// draw()
//
// background; no stroke; stickyImage; covid 19 movement; user movement; display of user and covid 19;
function draw() {
  background(255, 255, 255);


  //**************************//
  //TITLES
  if (state === 'title') {
    title();
  } else if (state === 'simulation') {
    simulation();
  } else if (state === 'love') {
    love();
  }

}

function keyPressed() {
if (keyCode === 32) {
     hello.x = random(0,width);
     hello.y = random(0,height);
     }
}


function title() {
  push();
  background(255, 255, 255);
  textSize(60);
  fill(0, 0, 0);
  textStyle(BOLD);
  stroke(255, 200, 50);
  strokeWeight(17);
  textAlign(CENTER, CENTER);
  text('The Teen Vogue Party', width / 2, height / 2);
  textSize(30);
  stroke(0, 255, 50);
  text('TIME: TONIGHT', width / 2, height / 1.6);
  text('MISSION: FIND AN OUTFIT FOR THE NIGHT!', width / 2, height / 1.4);
  pop();
}

function simulation() {
  move();
  handleInput();

  // outfit1 movement
  outfit1.x = outfit1.x + outfit1.vx;
  outfit1.y = outfit1.y + outfit1.vy;

  if (outfit1.y > height) {
    outfit1.y = random(0, -200);
    outfit1.x = random(0, width);
  }

  // outfit2 movement
  outfit2.x = outfit2.x + outfit2.vx;
  outfit2.y = outfit2.y + outfit2.vy;

  if (outfit2.y > height) {
    outfit2.y = random(0, -200);
    outfit2.x = random(0, width);
    outfit2.vy = random (outfit2.minspeed, outfit2.maxspeed);
  }


  // check for bumping with outfit
  let d = dist(stickyman.x, stickyman.y, outfit1.x, outfit1.y);
  if (d < outfit1.size / 2 + stickyman.size / 2) {
    state = 'love';
  }

   d = dist(stickyman.x, stickyman.y, outfit2.x, outfit2.y);
  if (d < outfit2.size / 2 + stickyman.size / 2) {
    state = 'love';
  }


  // display outfit1 & outfit2
  image(outfit1Image, outfit1.x, outfit1.y, outfit1.size);
  image(outfit2Image, outfit2.x, outfit2.y, outfit2.size);

  //Sticky image
  push()
  imageMode(CENTER);
  image(stickyImage, stickyman.x, stickyman.y);
  pop()


  text(hello.string, hello.x, hello.y)

}


// stickyImage controls
function handleInput() {
  if (keyIsDown(UP_ARROW)) {
    stickyman.vy = -stickyman.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    stickyman.vy = stickyman.speed;
  } else {
    stickyman.vy = 0;
  }


  if (keyIsDown(LEFT_ARROW)) {
    stickyman.vx = -stickyman.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    stickyman.vx = stickyman.speed;
  } else {
    stickyman.vx = 0;
  }
}

function love() {
  push();
  // background (255, 255, 255);
  textSize(35);
  fill(255, 50, 255);
  textStyle(BOLD);
  stroke(0, 200, 255);
  strokeWeight(17);
  textAlign(CENTER, CENTER);
  text('I LOVE THIS OUTFIT!', width / 2, height / 2);
  text('IT GOT SOME BLUE GOING ON!', width / 2, height / 1.6);
  pop();
}

// stickyImage movement
function move() {
  stickyman.x = stickyman.x + stickyman.vx;
  stickyman.y = stickyman.y + stickyman.vy;
}

// Mouse functions: pressed;
function mousePressed() {
  if (state === 'title') {
    state = 'simulation';
  }
}
//**************************//
