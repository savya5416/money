
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
stroke("white");
textSize(20);
fill("white");
text("score:  "+ score, 500,50);
var survivalTime = 0;
stroke("blsck");
textSize(20);
fill("black");
survivalTime=Math.cel(frameCount/frameRate())
text("survival TIme : "+ survivalTime, 100,50);
var invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,29,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
ground = createSprite(80,325,29,20);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
}


function draw() {
  
  function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100)
   var rand = Math.round(random(1,6));
  
    }
   
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
    obstacleGroup.add( obstacle);
 }

  background ("white");

 drawSprites(); 
}






