var mario,marioimg,mariofire,mariofireimg,mariob,mariobimg;
var bg,bgimg,bg2,bg2img;
var obs1,obs2,obs3,obs4,obs5,obs4,obs5,obs6,obs7,obs1img,obs2img,obs3img,obs4img,obs5img,obs6img,obs7img;
var powerup,powerupimg;
var restart,restartimg;
var gameover,gameoverimg;
var brick1,brick1img,brick2,brick2img,brick3,brick3img;
var fire,fireimg,flower,flowerimg;
var coin,coinimg;
var cloud,cloudimg;
var gameState=PLAY;
var PLAY=1;
var END=0;
var score=0;
var cloudsGroup,obstaclesGroup;


function preload(){
 marioimg=loadAnimation("marios.png");
 mariofireimg=loadImage("mariofire.gif");
 mariobimg=loadImage("bigmario1.png");
 bgimg=loadImage("bg.jpg");
 bg2img=loadImage("bg2.png");
 obs1img=loadImage("insect.png");
 obs2img=loadImage("pipe1.png");
 //obs3img=loadImage("pipe2.png");
 obs4img=loadImage("pipe3.png");
 obs5img=loadImage("pipe4.png");
 obs6img=loadImage("turtle.gif");
 obs7img=loadImage("turtle2.jpg");
 powerupimg=loadImage("powerup.png");
 restartimg=loadImage("restart.png");
gameoverimg=loadImage("gameover.jpg");
brick1img=loadImage("brick1.png");
brick2img=loadImage("brick2.png");
brick3img=loadImage("block.png");
fireimg=loadImage("fire.png");
flowerimg=loadImage("flower.png");        
coinimg=loadImage("coin.jpg");
cloudimg=loadImage("cloud.png");
    }
      
    function setup() {
      createCanvas(800, 600);
     mario = createSprite(50,490,10,10);
     mario.addAnimation("runing",marioimg);
     mario.scale =0.3;
    // mariofire = createSprite(50,490,10,10);
    // mariob = createSprite(50,490,10,10);
     bg=createSprite(0,0,800.600)
     bg.addImage(bgimg);
bg.scale=1.5;

ground=createSprite(50,560,800,40);
ground.addImage(brick2img);
ground.scale=1;
ground.x=ground.width/2;
ground.visible=false;

gameover = createSprite(400,300);
  gameover.addImage(gameoverimg);
  
  restart = createSprite(400,350);
  restart.addImage(restartimg);
  
  gameover.scale = 0.5;
  restart.scale = 0.5;

  gameover.visible = false;
  restart.visible = false;
  
  //invisibleGround = createSprite(200,190,400,10);
  //invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
    }
      function draw() {
     background("red");
     if(gameState===PLAY){
     
     if(ground.x<0){
        ground.x=ground.width/2
}
//if(bg.x<0){
 // bg.x=bg.width/2
//}
        
    // bg.velocityX=-10;
     if(keyDown("space")){
       mario.velocityY=-12;

     }   
        mario.velocityY=mario.velocityY=0.8;
        
     spawnClouds();
     spawnObstacles();

     if(obstaclesGroup.isTouching(mario)){
     gameState=END;

     }
    }
    if(gameState===END){
      ground.velocityX=0;
      bg.velocityX=0;
      mario.velocityY=0;
      obstaclesGroup.setVelocityXEach(0);
      cloudsGroup.setVelocityXEach(0);
      gameover.visible=true;
      restart.visible=true;
    }
    
    
    mario.collide(ground) ;   
        drawSprites();
      
      }
      function spawnClouds() {
        //write code here to spawn the clouds
        if (frameCount % 60 === 0) {
          var cloud = createSprite(800,100,60,20);
          cloud.y = Math.round(random(80,200));
          cloud.addImage(cloudImage);
          cloud.scale = 0.5;
          cloud.velocityX = -5;
          
           //assign lifetime to the variable
          cloud.lifetime = 160;
          
          
          
          //add each cloud to the group
          cloudsGroup.add(cloud);
        }
        
      }
      
      function spawnObstacles() {
        if(frameCount % 60 === 0) {
          var obstacle = createSprite(800,560,40,40);
          //obstacle.debug = true;
          obstacle.velocityX = -(6 + 3*score/100);
          
          //generate random obstacles
          var rand = Math.round(random(1,7));
          switch(rand) {
            case 1: obstacle.addImage(obs1img);
                    break;
            case 2: obstacle.addImage(obs2img);
                    break;
            case 3: obstacle.addImage(obs3img);
                    break;
            case 4: obstacle.addImage(obs4img);
                    break;
            case 5: obstacle.addImage(obs5img);
                    break;
            case 6: obstacle.addImage(obs6img);
                    break;
            case 7: obstacle.addImage(obs7img);
             break;
            default: break;
          }
          
          //assign scale and lifetime to the obstacle           
          obstacle.scale = 0.5;
          obstacle.lifetime = 133;
          //add each obstacle to the group
          obstaclesGroup.add(obstacle);
        }
      }
      