"use strict";

/**************************************************
The Teen Vogue Party
Mauricio Tapias

Stickyman was invited for tonight's Teen Vogue Party
but he has to chose an outfit. Move stickyman's head
to the top of the outfits with the the arrow keys.

The outfits fall from above at different heights, positions and speeds.
Stickyman will randomly display a comment about the outfits by pressing the spacebar.

To start the simulation click the mouse.
**************************************************/

let bg;

let outfit1 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  minspeed: 2,
  maxspeed: 15,
};

let outfit2 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  minspeed: 2,
  maxspeed: 15,
};

let outfit3 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  minspeed: 2,
  maxspeed: 15,
};


let stickyman = {
  x: 750,
  y: 350,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};


let state = 'title';


let comment = {
  string: 'These outfits are fire!!!',
  x: 0,
  y: 250,
}


let stickyImage;
let outfit1Image;
let outfit2Image;
let outfit3Image;

function preload() {
  outfit1Image = loadImage("assets/images/outfit1.png");
  outfit2Image = loadImage("assets/images/outfit2.png");
  outfit3Image = loadImage("assets/images/outfit3.png");
  stickyImage = loadImage("assets/images/stickymanSMALL.png");

}


// setup()
//
// Canvas & loadimage for background; outfits' positions; no cursor;
function setup() {
  bg = loadImage('assets/images/background.png');
  createCanvas(windowWidth, windowHeight);

  outfit1.x = random(0, width);
  outfit1.vy = outfit1.speed;

  outfit2.x = random(0, width);
  outfit2.vy = outfit1.speed;

  outfit3.x = random(0, width);
  outfit3.vy = outfit1.speed;

  noCursor();
}

// draw()
//
// background image; stickyImage movement; outfits' movement; display of stickyman and outfits;
function draw() {
  background(bg);

  //TITLES
  if (state === 'title') {
    title();
  } else if (state === 'simulation') {
    simulation();
  } else if (state === 'love') {
    love();
  }

}
//COMMENT INTERACTIVE POSITION VIA SPACEBAR
function keyPressed() {
if (keyCode === 32) {
     comment.x = random(0,width);
     comment.y = random(0,height);
     }
}

//TITLE SCREEN POSTION + STYLE
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

//SIMULATION
function simulation() {
  move();
  handleInput();

  // OUTFIT 1 MOVEMENT
  outfit1.x = outfit1.x + outfit1.vx;
  outfit1.y = outfit1.y + outfit1.vy;

  if (outfit1.y > height) {
    outfit1.y = random(0, -200);
    outfit1.x = random(0, width);
    outfit1.vy = random (outfit1.minspeed, outfit1.maxspeed);
  }

  // OUTFIT 2 MOVEMENT
  outfit2.x = outfit2.x + outfit2.vx;
  outfit2.y = outfit2.y + outfit2.vy;

  if (outfit2.y > height) {
    outfit2.y = random(0, -200);
    outfit2.x = random(0, width);
    outfit2.vy = random (outfit2.minspeed, outfit2.maxspeed);
  }

  // OUTFIT 3 MOVEMENT
  outfit3.x = outfit3.x + outfit3.vx;
  outfit3.y = outfit3.y + outfit3.vy;

  if (outfit3.y > height) {
    outfit3.y = random(0, -200);
    outfit3.x = random(0, width);
    outfit3.vy = random (outfit3.minspeed, outfit3.maxspeed);
  }


  // BUMPING WITH OUTFITS
  let d = dist(stickyman.x, stickyman.y, outfit1.x, outfit1.y);
  if (d < outfit1.size / 2 + stickyman.size / 2) {
    state = 'love';
  }

   d = dist(stickyman.x, stickyman.y, outfit2.x, outfit2.y);
  if (d < outfit2.size / 2 + stickyman.size / 2) {
    state = 'love';
  }

  d = dist(stickyman.x, stickyman.y, outfit3.x, outfit3.y);
 if (d < outfit3.size / 2 + stickyman.size / 2) {
   state = 'love';
 }



  // DISPLAY OUTFIt 1-2-3
  image(outfit1Image, outfit1.x, outfit1.y, outfit1.size);
  image(outfit2Image, outfit2.x, outfit2.y, outfit2.size);
  image(outfit3Image, outfit3.x, outfit3.y, outfit3.size);


  //STICKYMAN IMAGE
  push()
  imageMode(CENTER);
  image(stickyImage, stickyman.x, stickyman.y);
  pop()

//COMMENT TEXT POSTION + STYLE
  text(comment.string, comment.x, comment.y)
  textSize(35);
  fill(255, 180, 50);
  textStyle(BOLD);
  stroke(200, 50, 50);
  strokeWeight(17);
  textAlign(CENTER, CENTER);
}


// STICKYMAN CONTROLS
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

//END SCREEN POSTION + STYLE
function love() {
  push();
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

// STICKYMAN MOVEMENT
function move() {
  stickyman.x = stickyman.x + stickyman.vx;
  stickyman.y = stickyman.y + stickyman.vy;
}

// MOUSE FUNCTIONS: PRESSED;
function mousePressed() {
  if (state === 'title') {
    state = 'simulation';
  }
}
//**************************//
