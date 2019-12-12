// Used scene manager library to navigate between scenes, sound library for sound effects - taken from p5 libraries
// Will have up to 6 scenes

var music; // variable for bg music

// preloading audio file and all images
function preload() {
	music = loadSound("jester.mp3"); // for bg music
	gameballoon = loadImage('balloon.png'); // balloon
	smalltent = loadImage('smalltent.png'); // small tent
	ferriswheel1 = loadImage('ferriswheel1.png'); // ferris wheel
	tent = loadImage('tent.png'); // big bg tent
	spotlight = loadImage('spotlight.jpg') // spotlight in last scene
	child = loadImage('child.png') // child silhouette
	help = loadSound("help.ogg"); // final scene sound effect
}

function setup()
{
    createCanvas(windowWidth, windowHeight);
	
	  music.play(); // setting general bg music for tone

    mgr = new SceneManager(); // calling scene manager

	  // adding each scene to scene manager class
    mgr.addScene (intro);
    mgr.addScene (scene1);
    mgr.addScene (scene2);
	  mgr.addScene (scene3);
	  mgr.addScene (scene4);
	  mgr.addScene (scene5);
	  mgr.addScene (scene6);
	

    mgr.showNextScene(); // navigation bw scenes
}

function draw()
{
    mgr.draw(); // manage draw functions of each scene
}

function mousePressed()
{
    mgr.handleEvent("mousePressed"); // to manage mousePressed functions, taken from p5 scene manager syntax
}






// scene for intro page

function intro(){
	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
    fill(0);
		smooth();
	}

    this.draw = function() {
			// parameters for intro text
			textSize(35);
			textFont("Times New Roman");
			text("welcome to", width/2, height/2 - 70);
			textSize(72);
			text("Salem, Oregon", width/2, height/2);
    }

    this.mousePressed = function() {
			this.sceneManager.showNextScene(); // to navigate to next scene
    }
}







// Carnival scene

// function for background images to be used in draw loop for this scene

function balloonscene() {
	// for green grass background rectangle
	fill('#08A344');
	noStroke();
	rect(0, windowHeight/2 +300, windowWidth, windowHeight/2);
	imageMode(CENTER);
	// calling preloaded image and parameters for small tent 1
	image(smalltent, windowWidth/2+250, windowHeight/2 +200, 400, 200);
	// calling preloaded and parameters for small tent 2
	image(smalltent, windowWidth/2+450, windowHeight/2 +225, 300, 150);
	// calling preloaded and parameters for ferris wheel
	image(ferriswheel1, windowWidth/2-300, windowHeight/2+110, 400, 390);
}


function scene1() {
	
	let redballoons2 = []; // array for generated balloons
	
	this.setup = function() {
		fill(255);
		createCanvas(windowWidth, windowHeight);
		
		// generating 10 balloons to push them into the array
		for (i = 0; i < 10; i++) {
			balloons2 = new balloonclass2(random(width), random(height)); // creating a balloon at a random location
      redballoons2.push(balloons2); //adding this balloon to the array
		}
		
	}
	
	this.draw = function() {
		background(0);
	  // load and parameters of large tent frame image (keep in draw function for overlay issues)
	  imageMode(CENTER);
	  image(tent, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
	  
	  balloonscene();	// calling upon above function for background drawing
		
		for (i = 0; i < redballoons2.length; i++) {
				 redballoons2[i].display2(); // calling preloaded and parameters for gameballoon
         redballoons2[i].move2(); // vertical motion of balloons from class
         redballoons2[i].bounce2(); // limited movement for balloons
		}
	}
	
	this.mousePressed = function() {
		this.sceneManager.showNextScene(); // navigation for next scene
	}
	
}

// class for managing floating balloons
class balloonclass2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xDir = 1;
    this.yDir = 1;
    this.xSpeed = 4;
    this.ySpeed = 2;
  }

  display2() {
    image(gameballoon, this.x, this.y, 100, 150); // parameter for balloon image
  }

  move2() {
    this.y += this.ySpeed*this.yDir; // vector 
  }

  bounce2() {
    if (this.y>height) {
      this.yDir = this.yDir * -1; // fly past of above cieling 
    }
  }
}






// scene for balloon game (pop 5 to proceed to next scene)


let redballoons = []; // array for generated balloons

let score = 0; // score tally for game


function scene2(){
	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);

    // generating 20 balloons to push them into the array
    for (i = 0; i < 20; i++) {
    balloons = new balloonclass(random(width), random(height)); // creating a balloon at a random location
    redballoons.push(balloons); // adding that balloon to the array
		}
	}

    this.draw = function() {
			background(0);
			// text for game instructions
      textSize(32);
	    fill(255);
			textFont("Times New Roman");
	    textAlign(CENTER);
      text("pop five balloons to unlock the rest of the story.", width/2, 30);

       for (i = 0; i < redballoons.length; i++) {
				 redballoons[i].display(); // calling preloaded and parameters for gameballoon
         redballoons[i].move(); // vertical motion of balloons from class
         redballoons[i].bounce(); // limited movement for balloons

         // removes the current element on click by calculating distance between mouse pointer and edge of the balloons that pops uo
         if (mouseIsPressed && dist(mouseX, mouseY, redballoons[i].x, redballoons[i].y) < 100) {
					 redballoons.splice(i, 1);
           score++;
				}		
		}

    this.mousePressed = function() { // mouse press condition for next scene
			if (score >= 4) {
				this.sceneManager.showNextScene();
			}
    }
	}
}

// similar to balloonclass class, except this one has slightly different different parameters
class balloonclass {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xDir = 1;
    this.yDir = 1;
    this.xSpeed = 10;
    this.ySpeed = 2;
  }

  display() {
    image(gameballoon, this.x, this.y, 150, 200);
  }

  move() {
    this.y += this.ySpeed*this.yDir;
  }

  bounce() {
    if (this.y<0 || this.y>height) {
      this.yDir = this.yDir * -1;
    }
  }
}





// scene for title screen 'YOU ARE HAPPY :)'

function scene3(){
	
	this.setup = function() {
	  background(255);
		createCanvas(windowWidth, windowHeight);

	}

    this.draw = function() {
			textSize(50);
			textFont("Times New Roman");
			textAlign(CENTER);
			text("YOU ARE HAPPY :)", width/2, height/2);	

    }

    this.mousePressed = function() {
			this.sceneManager.showNextScene();
    }
}





// // ending scene, 'BUT AT WHAT COST??' title screen


function scene4(){
	
	this.setup = function() {
		background(255);
		createCanvas(windowWidth, windowHeight);

	}

    this.draw = function() {
			textSize(50);
			textFont("Times New Roman");
			textAlign(CENTER);
			text("BUT AT WHAT COST?", width/2, height/2);
    }

    this.mousePressed = function() {
			this.sceneManager.showNextScene();
    }
}




// Text screen, text gliding across screen

function scene5(){
	
	let x, y; // variables for text box movement
	
	// variable for text
	let s = "Every year, there is a carnival held in Omelas, the perfect utopian society. People live there in perfect harmony and peace, but at the cost of a life. There is a child, that sits alone in a dark room, barely fed, just kept alive. All the citizens of Omelas knows of its existence, but they all chose to ignore it. However, there are some young residents who look into that cold, dark room carrying the cost of their happiness, and chose to walk away from Omelas.                                                                                     The ones who walks away from Omelas.";

	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
		x = windowWidth/2;
    y = windowHeight + 700;
	}

  this.draw = function() {
		background (0);
		// paramters for text display
	  fill(255);
	  textSize(30);
	  textAlign(CENTER);
	  textFont("Times New Roman");
	  rectMode(CENTER); // to align text box
	  text(s, x, y, x*2 - 800, y); // paramters for location and warp of text box
		
	  y = y - 0.7; // to move the text box up

  }
	
	this.mousePressed = function() {
			this.sceneManager.showNextScene();
  }
}





// Ending scene with finding the child

function scene6(){
	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
		image(spotlight, 0, 0, 1000, 800); // parameters for spotlight image
		help.setVolume(0.1); // reducing volume of loud file
    help.play(); // play sound
	}

  this.draw = function() {
		image(child, 620, 500, 100, 170); // child image paramters
  }
	
	this.mousePressed = function() {
			background(0);
  }
}
