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
  fill: {
    r: 255,
    g:50,
    b:120,
  }
};

let covid20 = {
  x: 750,
  y: 350,
  size: 100,
  vx: 0,
  vy:0,
  speed: 5,
};

// let user = {
//   x: 250,
//   y:250,
//   size: 100,
//   fill: 255,
// };

let stickyImage;
let outfit1Image;
function preload() {
stickyImage = loadImage("assets/images/logo.png");
outfit1Image = loadImage("assets/images/stickman-outfit1.png");
}


// setup()
//
// Canvas; covid19 positions; no cursor;
function setup() {
createCanvas(windowWidth,windowHeight);

outfit1.x = random(0,width);
outfit1.vy = outfit1.speed;

noCursor();
}

// draw()
//
// background; no stroke; stickyImage; covid 19 movement; user movement; display of user and covid 19;
function draw() {
   background (255, 255, 255);

handleInput();
move();

//Sticky image
   imageMode(CENTER);
   image(stickyImage, covid20.x, covid20.y);


   // covid 19 movement
   outfit1.x = outfit1.x + outfit1.vx;
   outfit1.y = outfit1.y + outfit1.vy;

   if (outfit1.y > height) {
     outfit1.y = 0;
     outfit1.x = random(0,width);
     }

function move() {
  covid20.x = covid20.x + covid20.vx;
  covid20.y = covid20.y + covid20.vy;
}



     //user movement
     // user.x = mouseX;
     // user.y = mouseY;

     // check for bumping covid19
     let d = dist(covid20.x,covid20.y,outfit1.x,outfit1.y);
     if (d < outfit1.size/2 + covid20.size/2) {
    noLoop();
     }

     // display outfit1
   image(outfit1Image, outfit1.x, outfit1.y, outfit1.size);


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


function handleInput() {
  if (keyIsDown (UP_ARROW)) {
    covid20.vy = -covid20.speed;
  }
  else if (keyIsDown (DOWN_ARROW)) {
    covid20.vy = covid20.speed;
  }
  else {
    covid20.vy = 0;
  }


  if (keyIsDown (LEFT_ARROW)) {
    covid20.vx = -covid20.speed;
  }
  else if (keyIsDown (RIGHT_ARROW)) {
    covid20.vx = covid20.speed;
  }
  else {
    covid20.vx = 0;
  }
}
