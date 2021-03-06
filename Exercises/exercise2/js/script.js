/**************************************************
Exercise 02
MAuricio Tapias

Here is an exercise where a white square tries to evade one covid19
while covid20 grows and obstructs the users' vision. Kermit sits back and follows the white square through his escape.
By holding the mouse button the user can make the white square smaller in order to escape more easily.
The user can also place covid20 on another location by clicking the mouse on the desired spot.

**************************************************/

let covid19 = {
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

let kermitImage;

function preload() {
kermitImage = loadImage("assets/images/kermit.png")
}


// setup()
//
// Canvas; covid19 positions; no cursor;
function setup() {
createCanvas(windowWidth,windowHeight);

covid19.y = random(0,height);
covid19.vx = covid19.speed;

noCursor();
}

// draw()
//
// background; no stroke; kermitimage; covid 19-20 movement & growth; user movement; display of user and covid 19-20;
function draw() {
   background (50, 255, 50);

//shape outline
   noStroke()

//kermit image
   imageMode(CENTER);
   image(kermitImage, mouseX, mouseY);


   // covid 19 movement
   covid19.x = covid19.x + covid19.vx;
   covid19.y = covid19.y + covid19.vy;

   if (covid19.x > width) {
     covid19.x = 0;
     covid19.y = random(0,height);
     }

     //covid 19 growth
    if (covid19.x < width/1.002){
      covid19.size = covid19.size + 3;
      }
      else {
        covid19.size = 100;
      }

      // covid 20 movement
      covid20.x = covid20.x + covid20.vx;
      covid20.y = covid20.y + covid20.vy;

      if (covid20.x > width) {
        covid20.x = 0;
        covid20.y = random(0,height);
        }

        //covid 20 growth
       if (covid20.x < width/1.002){
         covid20.size = covid20.size + 1;
         }
         else {
           covid20.size = 100;
         }

     //user movement
     user.x = mouseX;
     user.y = mouseY;

     // check for bumping covid19
     let d = dist(user.x,user.y,covid19.x,covid19.y);
     if (d < covid19.size/2 + user.size/2) {
    noLoop();
     }

     // display covid 19
   fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
   ellipse(covid19.x, covid19.y, covid19.size);

   // display covid 20
   fill(covid20.fill.r, covid20.fill.g, covid20.fill.b);
   ellipse(covid20.x, covid20.y, covid20.size);

   // display user
   fill(user.fill);
   square(user.x, user.y, user.size);

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
