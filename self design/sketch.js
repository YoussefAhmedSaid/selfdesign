var flappyBird
var bG
var pipes
var pipes1
var pipesGroup
var pipesGroup1
var gameOver
var gameState = "play"


function preload(){
  flappyBirdImg = loadImage("flappybirdcharacter-removebg-preview.png")
  bG = loadImage("flappybirdbackground.jpg")
  pipeImage = loadImage("flappybirdpipes-removebg-preview.png")
  gameOverImg = loadImage("gameoverimage.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  flappyBird = createSprite(40, 200, 50, 50);
  flappyBird.addImage ("bird", flappyBirdImg)
  flappyBird.scale = 0.3
  invisibleGround = createSprite(200,height-50,400,10);
  invisibleGround.visible = false;
  pipesGroup = new Group()
  pipesGroup1 = new Group()
  gameOver = createSprite(width/2, height/2)
  gameOver.addImage("game Over", gameOverImg)

}



function draw() {

  if (gameState === "play"){

  background(bG);  
  if(keyDown("space")&& flappyBird.y >= 100) {
    flappyBird.velocityY = -12;
}

spawnPipes()

//add gravity
flappyBird.velocityY = flappyBird.velocityY + 0.8  
flappyBird.collide(invisibleGround);
  drawSprites();
  if (flappyBird.isTouching (pipesGroup)) {
    //flappyBird.velocityY = 0
    //pipesGroup.destroyEach()
    //background(gameOverImg)
   }
  }
}

function spawnPipes() {
  if (frameCount %60 === 0) {
    pipes = createSprite(width, height/2);
    pipes.debug = true
    pipes.setCollider("rectangle",0,87,30,100)
    
    pipes.velocityX = -13
    pipes.addImage(pipeImage)
    pipes.scale = 3
    pipes.depth = flappyBird.depth;
    flappyBird.depth = flappyBird.depth + 1;
    pipesGroup.add(pipes)

    pipes.lifetime = 500

    
  }
}

function spawnPipes1() {
  if (frameCount %60 === 0) {
    pipes1 = createSprite(width, height/2);
    pipes1.debug = true
    pipes1.setCollider("rectangle",0,200,30,100)
    
    pipes1.velocityX = -13
    pipes1.addImage(pipeImage)
    pipes1.scale = 3
    pipesGroup1.add(pipes1)

    pipes1.lifetime = 500


   
  }
}