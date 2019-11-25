var stars = [];
ang = 0, ang2 = 0, ang3 = 0, ang4 = 0;
px = 0, py = 0, pz = 0;
flapSpeed = 0.2;

function setup() {
  createCanvas(500, 500, WEBGL);
  frameRate(50);
  noStroke();
}

function nightsky() {
	// stars
  fill(255, 255, 255, 200);
  for (var i = 0; i < 1000; i++) {
    var star = {
      xStar: random(-250, 250),
      yStar: random(-250, 250)
    }
    stars.push(star);
  }
  for (var i = 0; i < 1000; i++) {
    ellipse(stars[i].xStar, stars[i].yStar, 2, 2);
  }
	// moon
  fill(255);
  ellipse(-100, -100, 150, 150);
  push();
  fill(195, 196, 192, 40);
  ellipse(-150, -120, 30, 30);
  ellipse(-100, -90, 20, 20);
  ellipse(-135, -80, 40, 40);
  pop();

}

// bird and rotation
function bird() {
  camera();
  push();
	// rotation of cube
  px = sin(radians(ang3)) * 170;
  py = cos(radians(ang3)) * 300;
  pz = sin(radians(ang4)) * 500;
  translate(100 / 2 + px, 100 / 2 + py, -700 + pz);
  rotateX(sin(radians(ang2)) * 120);
  rotateY(sin(radians(ang2)) * 50);
  rotateZ(sin(radians(ang2)) * 65);
	// body
  fill('#D8D1E8');
  box(20, 100, 20);
	// wings
  fill('#E7E6FF');
  push();
	// left wing
  rotateY(sin(radians(ang)) * -20);
  rect(-75, -50, 75, 100);
  pop();
  push();
	// right wing
  rotateY(sin(radians(ang)) * 20);
  rect(0, -50, 75, 100);
  pop();
	// flapping
  ang += flapSpeed;
  if (ang >= 3) {
    flapSpeed *= -1;
  }
  if (ang <= -3) {
    flapSpeed *= -1;
  }
  ang2 += 0.01;
  ang3 += 2.0;
  ang4 += 0.75;

  pop();
}

// dissociation
function draw() {
  background(0);
  nightsky();
  bird();
  if (mouseIsPressed) {
		background(0);
    fill(255, 255, 255, 200);
    for (var i = 0; i < 1000; i++) {
      var star = {
        xStar: random(-250, 250),
        yStar: random(-250, 250)
      }
      stars.push(star);
    }
    fill('#114A73');
		stroke(0);
		strokeWeight(5);
    for (var i = 0; i < 100; i++) {
      for (var j = 0; j < 100; j++) {
        ellipse(stars[i].xStar + j, stars[i].yStar + j, 2 + j, 2 + j);
      }
    }
  }
}