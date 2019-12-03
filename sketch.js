// Used scene manager library to navigate between scenes, play library for animations - taken from p5 libraries
// Will have up to 6 scenes

var mgr; // variable for scene manager

function setup()
{
    createCanvas(windowWidth, windowHeight);

    mgr = new SceneManager(); // calling scene manager

	  // adding each scene to scene manager class
    mgr.addScene (intro);
    mgr.addScene (scene1);
    mgr.addScene (scene2);
	mgr.addScene (scene3);
	mgr.addScene (scene4);
	mgr.addScene (scene5);
	

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

// function preload()
// {
//     mgr.handleEvent("preload"); // to manage mousePressed functions, taken from p5 scene manager syntax
// } // check to see if ^ function manage works for preload too

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


// Carnival scene, insert music

function scene1() {
	
	var balloon; // for balloon animation
	
	this.setup = function() {
		fill(255);
		createCanvas(windowWidth, windowHeight);
		// for green grass background rectangle
		fill('#08A344');
		noStroke();
		rect(0, windowHeight/2 +300, windowWidth, windowHeight/2);
		// load image and parameters for small tent 1
		loadImage('smalltent.png', img => {
			imageMode(CENTER);
			image(img, windowWidth/2+250, windowHeight/2 +200, 400, 200);
		});
		// load image and parameters for small tent 2
		loadImage('smalltent.png', img => {
			imageMode(CENTER);
			image(img, windowWidth/2+450, windowHeight/2 +225, 300, 150);
		});
		// load image and parameters for ferris wheel
		loadImage('ferriswheel1.png', img => {
			imageMode(CENTER);
			image(img, windowWidth/2-300, windowHeight/2+110, 400, 390);
		});
		
		
		balloon = createSprite(200, 500, 20, 10); // load paramters for balloon animation, check where size parameters come in here (!!!!!!)
		balloon.addAnimation('normal', 'balloon.png'); 
		balloon.velocity.x = 2; // movement for balloon, change to y (!!!!!)
	}
	
	this.draw = function() {
		
		// load and parameters of large tent frame image (keep in draw function for overlay issues)
		loadImage('tent.png', img => {
			imageMode(CENTER);
			image(img, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
		});
	  
		// background(255); // where does this go to prevent lag in image?
		
		
		// how to remove background problems????
		if(balloon.position.x > width)
    balloon.position.x = 0;
		
		drawSprites(); // show sprites
	}
	
	this.mousePressed = function() {
		this.sceneManager.showNextScene(); // navigation for next scene
	}
	
}


// scene for balloon game (pop 3 to proceed to next scene), check how colliders work

function scene2(){
	
	this.setup = function() {
		fill(255);
		createCanvas(windowWidth, windowHeight);
		loadImage('balloon.png', img => {
			imageMode(CENTER);
			image(img, windowWidth/2-300, windowHeight/2+110, 400, 390);
		});

	}

    this.draw = function() {

    }

    this.mousePressed = function() {
			
    }
}


// scene for title screen 'YOU ARE HAPPY :)', insert music, narration

function scene3(){
	
	this.setup = function() {
		fill(0);
		createCanvas(windowWidth, windowHeight);

	}

    this.draw = function() {

    }

    this.mousePressed = function() {
			
    }
}


// ending scene, 'BUT AT WHAT COST??' title screen, music slowing, narration

function scene4(){
	
	this.setup = function() {
		fill(255);
		createCanvas(windowWidth, windowHeight);

	}

    this.draw = function() {

    }

    this.mousePressed = function() {
			
    }
}


// final scene, yelling becomes louder and random on black screen, narration at the end 

function scene5(){
	
	this.setup = function() {
		fill(0);
		createCanvas(windowWidth, windowHeight);

	}

    this.draw = function() {

    }

    this.mousePressed = function() {
			this.sceneManager.showScene(intro);
    }
}
