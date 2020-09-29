function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(0);
   
  
  //face
  fill(209, 189, 138)
  ellipse(width/2,width/2,75,100)
  
  //sclera fill
  fill(255);
  
  //right eye
  push();
  strokeWeight(1);
  stroke(51);
  translate(width/2 - 17,.47*height);
  ellipse(0,0,15,10);
  fill(173, 134, 33);
  ellipse(0,0,9,9);
  fill(0);
  ellipse(0,0,3,3);
  pop();
  
  //left eye
  push();
  strokeWeight(1);
  stroke(51);
  translate(width/2 + 17,.47*height);
  ellipse(0,0,15,10)
  fill(173, 134, 33);
  ellipse(0,0,9,9);
  fill(0);
  ellipse(0,0,3,3);
  pop();
  
  //mouth
  strokeWeight(1.5);
  stroke(51);
  translate(width/2 - 48, height/2 + 17);
  fill(227, 91, 118);
  rect(30, 10, 40, 10, 20);
  
  //right eyebrow
  fill(42, 44, 46);
  rotate(PI / -2.0);  
  translate(30, 37);
  rect(15, 20, 5, 15, 15);
  
  //left eyebrow
  fill(42, 44, 46);
  rotate(PI / 10.0);  
  translate(-10, -37);
  rect(15, 20, 5, 15, 15);
  
  //body
  rotate(PI / 2.5); 
  translate(125,12);
  rect(-105, 55, 60, 200);
  
  //arm
  translate(10,10);
  rect(-140, 5, 25, 90);
  
  //ball
  fill(217, 135, 63);
  translate(-180,-60);
  ellipse(56, 46, 55, 55);
  
  //shirt brand
  rotate(PI / -2.0); 
  fill(237, 19, 7);
  rect(-155, 75, 15, 40);
  
  
  //hat
  rotate(PI / 2.0);
  translate(40,-65);
  fill(237, 19, 7);
  square(30, 20, 55, 20, 15, 10, 5);
  
  //hat brim
  noStroke();
  rotate(PI / -2.0);
  rect(-75, 75, 15, 40);
  fill(237, 19, 7);
  
  //top teeth
  fill(255);
  rect(-149.5, 40, 4.5, 32);
  
  //bottom teeth
  fill(255);
  rect(-155, 40, 4.5, 32);
  

  
 
  
  
  
  
  
  
  
  
  
}
  