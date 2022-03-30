
var trex ,trex_running;
var Ground,GroundMove,InvisaGround

function preload()
{
  trex_running=loadAnimation("trex1.png", "trex3.png", "trex4.png")
GroundMove=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(200,170,50,50)
 trex.scale=0.5
  trex.addAnimation("Gui",trex_running)
Ground=createSprite(200,170,400,20)
Ground.addImage("Ground", GroundMove)
InvisaGround=createSprite(200,180,400,20);
InvisaGround.visible=false
}

function draw(){
  background("white")
  Ground.velocityX=-3
  
  if(Ground.x<0)
  {
    Ground.x=Ground.width/2
  }
  
  
  if (trex.collide(InvisaGround)){
    if(keyDown("space")){
    trex.velocityY=-10
  }

}
  trex.velocityY=trex.velocityY +0.8
  

  drawSprites()

}

