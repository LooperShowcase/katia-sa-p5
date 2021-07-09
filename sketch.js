function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.center();
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  rotate(-90);
  strokeWeight(6);
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  let millisecond = millis();
  stroke("#a2d2ff");
  noFill();
  ellipse(0, 0, 300, 300);
  let secondAngle = map(seconds, 0, 60, 0, 360);
  stroke("#C634D8");
  arc(0, 0, 250, 250, 0, secondAngle);

  let minuteAngle = map(minutes, 0, 60, 0, 360) + map(seconds, 0, 60, 0, 10);
  stroke("#F498FF");
  arc(0, 0, 210, 210, 0, minuteAngle);

  let hourAngle = map(hours % 12, 0, 12, 0, 360);
  stroke("pink");
  arc(0, 0, 170, 170, 0, hourAngle);

  push();
  rotate(hourAngle);
  stroke("pink");
  line(0, 0, 70, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#F498FF");
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(secondAngle);
  stroke("#C634D8");
  line(0, 0, 110, 0);
  pop();

  fill(255, 255, 255, 100);
  let millisAngle = map(millisecond, 0, 1000, 0, 360);
  stroke("#ffc6ff");
  arc(-150, 150, 50, 50, 0, millisAngle);

  stroke("#a2d2ff");
  strokeWeight(0.5);
  rotate(90);
  text("12", 0, -170);
  text("3", 170, 0);
  text("6", 0, 170);
  text("9", -170, 0);
  textSize("18");
  textFont("Great Vibes");
  text("Made by Katia Salman", -180, 200);
}
