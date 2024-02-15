let circleY = 0;
let ySpeed = 1;
let radius = 50;
let x = 100;
let xSpeed = 1;
let circleColor = '#E79AFE'
let backgroundColor = '#FFB2F9'
let rectX = 200
let rectY = 100;
let rectXSpeed = 1;
let rectYSpeed = 1;

function setup() {
  createCanvas(400, 400);


}

function draw() {
  background(backgroundColor);
  
  noStroke();
  
  fill('#9AFEC1')
  quad(radius, rectX, x, 100, 100, 38, 14, 50);  

  if(rectX >= 350 || rectX < 0){
    rectXSpeed *= -1;
  }
  if(rectY >= 350 || rectY < 0){
    rectYSpeed *= -1;
  }
  
  if(circleColor == '#FFB2F9'){
   rectX = rectX + rectXSpeed;
   rectY = rectY + rectYSpeed;
  }
  
  noStroke();
  fill(circleColor);
  circle(x, circleY, radius);
  
  circleY = circleY + ySpeed;
  x = x + xSpeed;

  if(circleY < 0 || circleY > height) {
    ySpeed = ySpeed * -1;
    radius += 10;
    circleColor = '#E79AFE'
    backgroundColor = '#FFB2F9'
  }
  
  if(x < 0 || x > width) {
    xSpeed = xSpeed * -1;
    radius += 10;
    circleColor = '#FFB2F9'
    backgroundColor = '#E79AFE'
  }
  
  if (radius > 400){
    radius = 50;
  }
    
  
  fill('#9AE6FE');
  rect(rectX,rectY,radius);
  

}
