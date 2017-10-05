//Declare
var xPos = 5;
var speed = 5;
var yPos = 60
var dPos = 5

function setup () {
  createCanvas (600, 400);
}

function draw () {
  background (250,250,100);

  fill (250, 200, 200);
  ellipse (xPos, 100, 100, 100);

  fill (250, 200, 200);
  ellipse (100, yPos, 100, 100);

  fill (250, 200, 200);
  ellipse (dPos, dPos, 100, 100);

  xPos = xPos+speed;
  // xPos += speed; (another way of typing whats above)

  yPos = yPos+speed;

  dPos += speed;

  if (xPos > 600 || xPos < 0) {
    speed = speed * -1;
    //speed *= -1; (another way of typing whats above)

    // Another way to do this with another if statement

    // if (xPos < 10) {
    //   speed = 5;
    // }
  }
  if (yPos > 400 || yPos < 0) {
    speed = speed * -1;
  }
// function mousePressed () {
//   xPos = 0;
// }


//mouse moving to change images on screen

 // if (mouseX > 300) {
 //   line (0,0,600,400);
 // } else if (mouseX > 200) {
 //   fill(255,0,0);
 //   rect (200, 200, 100, 100);
 // } else if (mouseX > 100) {
 //   fill (0,255,0);
 //   triangle (300,400,200,150,600,400);
 // } else {
 //   fill (0,0, 255);
 //   ellipse (40,40,200,200);
 // }

  // fill (200,250,200);
  // rect (400, 100, 50, 50);

  // console.log (mouseX);
}
