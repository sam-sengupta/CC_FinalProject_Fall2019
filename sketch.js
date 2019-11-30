let myFont;
function preload() {
  myFont = loadFont('Skia.ttf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  fill(0);
  textFont(myFont);
  textSize(35);
	text("welcome to", width/2, height/2 - 70);
	textSize(72);
  text("Salem, Oregon", width/2, height/2);
}
