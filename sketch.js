var cat, catImage, catImage2, catImage3;
var mouse, mouseImage, mouseImage2, mouseImage3;
var background, backgroundImage;


function preload() {
    //load the images here
backgroundImage = loadImage("garden.png");

catImage = loadImage("cat1.png");
catImage2 = loadAnimation("cat2.png","cat3.png");
catImage3 = loadImage("cat4.png");

mouseImage = loadImage("mouse1.png");
mouseImage2 = loadAnimation("mouse2.png","mouse3.png");
mouseImage3 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    background = createSprite(0,0,1000,800);
    background.addImage("background",backgroundImage);
    background.scale = 0.3;

    cat = createSprite(900,700,20,20);
    cat.addImage("cat",catImage);
    cat.scale = 0.3;

    mouse = createSprite(100,700,20,20);
    mouse.addImage("mouse",mouseImage);
    mouse.scale = 0.3;

}

function draw() {
//Write condition here to evalute if tom and jerry collide

  keyPressed();

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catLastImage",catImage3);
        cat.changeAnimation("catLastImage");
    
        mouse.addAnimation("mouseLastImage",mouseImage3);
        mouse.changeAnimation("mouseLastImage");
    
  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImage2);
        cat.changeAnimation("catRunning");

        mouse.addAnimation("mouseTeasing",mouseImage2);
        mouse.changeAnimation("mouseTeasing");
    }
}
