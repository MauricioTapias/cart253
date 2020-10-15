"use strict";

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let outfit1 = {
  x: 0,
  y: 250,
  size:100,
  vx: 0,
  vy:0,
  speed: 5,
};

let outfit2 = {
  x: 0,
  y: 250,
  size:100,
  vx: 0,
  vy:0,
  speed: 5,
};

let stickyman = {
  x: 750,
  y: 350,
  size: 100,
  vx: 0,
  vy:0,
  speed: 5,
};
//**************************//
let state = 'title';
//**************************//

// let user = {
//   x: 250,
//   y:250,
//   size: 100,
//   fill: 255,
// };

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
createCanvas(windowWidth,windowHeight);

outfit1.x = random(0,width);
outfit1.vy = outfit1.speed;

outfit2.x = random(0,width);
outfit2.vy = outfit1.speed;

noCursor();
}

// draw()
//
// background; no stroke; stickyImage; covid 19 movement; user movement; display of user and covid 19;
function draw() {
   background (255, 255, 255);

handleInput();
move();

// outfit1 movement
   outfit1.x = outfit1.x + outfit1.vx;
   outfit1.y = outfit1.y + outfit1.vy;

   if (outfit1.y > height) {
     outfit1.y = 0;
     outfit1.x = random(0,width);
     }

// outfit2 movement
    outfit2.x = outfit2.x + outfit2.vx;
    outfit2.y = outfit2.y + outfit2.vy;

    if (outfit2.y > height) {
      outfit2.y = 0;
      outfit2.x = random(0,width);
      }


// stickyImage movement
  function move() {
    stickyman.x = stickyman.x + stickyman.vx;
    stickyman.y = stickyman.y + stickyman.vy;
  }

     //user movement
     // user.x = mouseX;
     // user.y = mouseY;

// check for bumping with outfit
     let d = dist(stickyman.x,stickyman.y,outfit1.x,outfit1.y);
     if (d < outfit1.size/2 + stickyman.size/2) {
    noLoop();
     }

// display outfit1 & outfit2
   image(outfit1Image, outfit1.x, outfit1.y, outfit1.size);
   image(outfit2Image, outfit2.x, outfit2.y, outfit2.size);

   //Sticky image
   push()
      imageMode(CENTER);
      image(stickyImage, stickyman.x, stickyman.y);
   pop()
}

// Mouse functions: pressed & dragged;

// covid 20 position change
// function mousePressed() {
//   covid20.x = mouseX;
//   covid20.y = mouseY;
// }
//
// // user cursor shrink
// function mouseDragged() {
//   user.size = user.size - 1;
// }

// stickyImage controls
function handleInput() {
  if (keyIsDown (UP_ARROW)) {
    stickyman.vy = -stickyman.speed;
  }
  else if (keyIsDown (DOWN_ARROW)) {
    stickyman.vy = stickyman.speed;
  }
  else {
    stickyman.vy = 0;
  }


  if (keyIsDown (LEFT_ARROW)) {
    stickyman.vx = -stickyman.speed;
  }
  else if (keyIsDown (RIGHT_ARROW)) {
    stickyman.vx = stickyman.speed;
  }
  else {
    stickyman.vx = 0;
  }

//**************************//
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
//**************************//

//**************************//
function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER, CENTER);
  text('LOVE?', width/2, height/2);
  pop();
}

// simulation
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
//**************************//

//**************************//
function mousePressed() {
  if (state === 'title') {
    state = 'simulation';
  }
}
//**************************//

}
