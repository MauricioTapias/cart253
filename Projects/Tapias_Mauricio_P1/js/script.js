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

let user = {
  x: 250,
  y:250,
  size: 100,
  fill: 255,
};

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

//Sticky image
   imageMode(CENTER);
   image(stickyImage, mouseX, mouseY);


   // covid 19 movement
   outfit1.x = outfit1.x + outfit1.vx;
   outfit1.y = outfit1.y + outfit1.vy;

   if (outfit1.y > height) {
     outfit1.y = 0;
     outfit1.x = random(0,width);
     }


     //user movement
     user.x = mouseX;
     user.y = mouseY;

     // check for bumping covid19
     let d = dist(user.x,user.y,outfit1.x,outfit1.y);
     if (d < outfit1.size/2 + user.size/2) {
    noLoop();
     }

     // display covid 19
   image(outfit1Image, outfit1.x, outfit1.y, outfit1.size);


}
// Mouse functions: pressed & dragged;

// covid 20 position change
function mousePressed() {
  covid20.x = mouseX;
  covid20.y = mouseY;
}

// user cursor shrink
function mouseDragged() {
  user.size = user.size - 1;
}


function keyPressed() {
  if (keycode === UP_ARROW) {
    covid19.y = y - 10;
  } else if (keycode === DOWN_ARROW) {
    covid19.y = y + 10;
  }
  if (keycode === LEFT_ARROW) {
    covid19.x = x - 5;
  } else if (keycode === RIGHT_ARROW) {
    covid19.x = x + 5;
  }
}