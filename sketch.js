let counter = 0;
let counter2 = 1;
let foams, city, beanie, af1, durag
let evilsc = 1
let evilrot = 0
let speedx, speedy, lox, loy

function preload(){
foams = loadImage('foams1.png')
city = loadImage('city.jpg')
beanie = loadImage('hat.webp')
af1 = loadImage('baf.png')
durag = loadImage('yankee.png')
}



function setup() {
  createCanvas(500, 500);3
  background(150);
  rectMode(CENTER);
  imageMode(CENTER)
  speedx = random(-5,5)
  speedy =  random(-5,5)
  lox = height/3;
  loy = width/2;
}

function draw() {
  background(150);
  image(city, 250, 250, 600, 600)
  penguin(250, 350, counter, counter2)
  textSize(25)
  fill(255)
  rect(135, 190, 200, 50)
  fill(0)
  text('on foenem grave.', 45, 200)

if (keyIsPressed && key === '3'){

  penguin2(lox, loy, evilrot, evilsc)
  fill(255)
  rect(175, 190, 290, 50)
  fill(0)
  text('ah hell nah my evil twin', 45, 200)

}

  if (mouseIsPressed) {
    image(city, 250, 250, 600, 600)
    fill(255)
    rect(135, 190, 200, 50)
    fill(0)
    textSize(20)
    text('put me down foenem!', 40, 200)
    penguin(mouseX, mouseY, 0, 1)
    console.log("Penguin clicked!");

  }
if (keyIsPressed && key === '1'){
  counter -= 10
  counter2 -= 0.005
  fill(255)
  rect(135, 190, 200, 50)
  fill(0)
  text('banishing......', 40, 200)
}

if (counter2 < 0.001){
  fill(255)
  rect(135, 190, 200, 50)
  fill(0)
  text('yeah he gone', 40, 200)
  counter2 = 0
}
if (keyIsPressed && key === '2'){
  fill(255)
  rect(155, 190, 250, 50)
  fill(0)
  text('hol on he comin back', 40, 200)
  counter2 += 0.005
  counter += 10
}

if (lox < 40 || lox > 460){
  speedx =-speedx
}
if (loy < 100 || loy > 400){
  speedy =-speedy
}

lox += speedx;
loy += speedy;



}

function penguin(x, y, rot, sc) {
  push();
  translate(x, y);
  rotate(radians(rot));
  scale(sc);
  rightArm();
  feet(); // Draw right arm first (behind body)
  body();
  belly();
  leftArm(); // Draw left arm last (in front)
  eyes();
  eyebrows();
  beak();
  hat();
  pop();
}

function body() {
  noStroke();
  fill(0);
  ellipse(0, 0, 150, 180); // Upper body
  rect(0, 50, 150, 120, 5); // Lower body
}

function belly() {
  fill(255);
  ellipse(15, 10, 120, 150); // Upper belly
  rect(15, 50, 120, 100, 5); // Lower belly
}

function rightArm() {
  fill(0);
  ellipse(60, 50, 50, 100); // Right arm (Behind body)
}

function leftArm() {
  fill(0);
  ellipse(-60, 50, 50, 100); // Left arm (Front)
}

function eyes() {
  // Left eye
  fill(255);
  stroke(0);
  ellipse(10, -10, 40); // White base
  fill(0);
  ellipse(15, -10, 30); // Pupil
  fill(255);
  ellipse(23, -17, 7); // Sparkle

  // Right eye
  fill(255);
  ellipse(60, -10, 40); // White base
  fill(0);
  ellipse(65, -10, 30); // Pupil
  fill(255);
  ellipse(71, -17, 7); // Sparkle
}

function eyebrows() {
  fill(0);
  arc(10, -25, 40, 15, PI, 0); // Left eyebrow
  arc(60, -25, 40, 15, PI, 0); // Right eyebrow
}

function beak() {
  fill('orange');
  triangle(35, 25, 75, 10, 35, -5);
}

function feet() {
  image(foams, 50+10, 110, 110, 140); 
  image(foams, -30+10, 110, 110, 140); // Left foot
 // Right foot
}
function hat(){
  image(beanie, -1, -90 + 15, 200, 80)
}

function penguin2(x, y, rot, sc) {
  push();
  translate(x, y);
  rotate(radians(rot));

  // Flip only the body
  scale(-sc, sc);
  rightArm2();
  feet2();
  body2();
  belly2();
  leftArm2();
  pop();

  // Draw facial features without flipping
  push();
  translate(x, y);
  rotate(radians(rot));
  eyes2();
  eyebrows2();
  beak2();
  hat2();
  pop();
}

function body2() {
  noStroke();
  fill(0);
  ellipse(0, 0, 130, 170);
  rect(0, 50, 140, 110, 5);
}

function belly2() {
  fill(255);
  ellipse(10, 15, 110, 140);
  rect(10, 50, 110, 90, 5);
}

function hat2() {
  image(durag, 20, -60, 170, 170);
}

function rightArm2() {
  fill(0);
  ellipse(50, 40, 45, 90);
}

function leftArm2() {
  fill(0);
  ellipse(-50, 40, 45, 90);
}

function eyes2() {
  fill(255);
  stroke(0);
  ellipse(10-60, -15, 35); // Left eye
  fill('red');
  ellipse(15-70, -15, 25);
  fill(255);
  // ellipse(20-70, -20, 6);

  fill(255);
  ellipse(60-60, -15, 35); // Right eye
  fill('red');
  ellipse(65-70, -15, 25);
  fill(255);
  // ellipse(70-70, -20, 6);
}

function eyebrows2() {
  fill(0);
  arc(10 - 60, -30, 35, 12, PI, 0);
  arc(60 - 60, -30, 35, 12, PI, 0);
}

function beak2() {
  fill('orange');
  triangle(35-60, 20, -5 -60, 5, 35-60, -10);
}

function feet2() {
  image(af1, 50, 105, 100 - 20, 130-60);
  image(af1, -30, 105, 100 - 20, 130-60);
}


