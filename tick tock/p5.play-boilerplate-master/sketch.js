var hr,min,sec
var hrAngle,minAngle,secAngle





function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background("black");  
  translate(200,200)
  rotate(-90)
  hr=hour();
  min=minute();
  sec=second();
  hrAngle=map(hr%12,0,12,0,360)
  minAngle=map(min,0,60,0,360)
  secAngle=map(sec,0,60,0,360)
  push()
  rotate(hrAngle)
  stroke("lightblue")
  strokeWeight(6)
  line(0,0,50,0)
  pop()
  push()
  rotate(minAngle)
  stroke("lightgreen")
  strokeWeight(6)
  line(0,0,75,0)
  pop()
  push()
  rotate(secAngle)
  stroke("lightpink")
  strokeWeight(6)
  line(0,0,100,0)
  pop()
  noFill();
  strokeWeight(10)
  stroke("blue")
  arc (0,0,300,300,0,secAngle)
  stroke("red")
  arc (0,0,280,280,0,minAngle)
  stroke("green")
  arc (0,0,260,260,0,hrAngle)
  drawSprites();
}