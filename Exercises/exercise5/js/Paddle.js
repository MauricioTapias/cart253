class Paddle {

  move() {
    function handleInput() {

      if (keyIsDown(LEFT_ARROW)) {
        this.vx = -this.speed;
      } else if (keyIsDown(RIGHT_ARROW)) {
        this.vx = this.speed;
      } else {
        this.vx = 0;
      }
    }
  }


constructor(w,h) {
 this.width = w;
 this.height = h;
 this.x = windowWidth/2;
 this.y = height - this.height/2;
 this.vx = 0;
 this.speed = 5;

}


display() {
  push();
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(this.x, this.y, this.width, this.height);
  pop();
}




}
