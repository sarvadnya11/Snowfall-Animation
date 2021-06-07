var snowStar,snow_Img;
var ground;
var backgroundImage;
var snowStar2,snowStar2_Img;
var christmasMusic;
var star,starImg;
var fairy,fairyImage;

function preload(){
 
  
  backgroundImage = loadImage("images/snow3.jpg");
  snow_Img = loadImage("images/snow5.webp");
  snowStar2_Img = loadImage("images/snow4.webp");
  christmasMusic = loadSound("sound/Christmas.mp3");
  starImg = loadImage("images/star.png");
  fairyImage = loadImage("images/fairyImage.png");
 
}

function setup(){
  createCanvas(1200,700);

  //creating ground
  ground = createSprite(width/2,height,width,20);
  ground.shapeColor = "brown";

  //creating snowstars and adding image to it
  snowStar1 = createSprite(700,20);
  snowStar1.addImage(snow_Img);
  snowStar1.scale = 0.1;
  
  snowStar2 = createSprite(120,20);
  snowStar2.addImage(snowStar2_Img);
  snowStar2.scale = 0.1;

  snowStar3 = createSprite(300,40);
  snowStar3.addImage(snowStar2_Img);
  snowStar3.scale = 0.1;

  snowStar4 = createSprite(30,30);
  snowStar4.addImage(snowStar2_Img);
  snowStar4.scale = 0.1;

  snowStar5 = createSprite(400,18);
  snowStar5.addImage(snow_Img);
  snowStar5.scale = 0.1;

  snowStar6 = createSprite(80,70);
  snowStar6.addImage(snow_Img);
  snowStar6.scale = 0.1;
  

  //creating star
  star1 = createSprite(200,60);
  star1.addImage(starImg);
  star1.scale = 0.2;

  star2 = createSprite(1159,30);
  star2.addImage(starImg);
  star2.scale = 0.2;

  star3 = createSprite(600,70);
  star3.addImage(starImg);
  star3.scale = 0.2;

  star4 = createSprite(500,30);
  star4.addImage(starImg);
  star4.scale = 0.2;

  star5 = createSprite(800,69);
  star5.addImage(starImg);
  star5.scale = 0.2;

  star6 = createSprite(900,50);
  star6.addImage(starImg);
  star6.scale = 0.2;
  
  //creating fairy
  fairy = createSprite(20,90);
  fairy.addImage(fairyImage);
  fairy.scale = 0.1;
  
}

function draw(){
  background(backgroundImage);

  textSize(18);
  stroke("red");
  text("Press Space To Make Stars Fall Down",7,680);

  
  

  if(keyDown("space")){
    christmasMusic.play();      
    star1.velocityY = 4;
    star2.velocityY = 2;
    star3.velocityY = 2;
    star4.velocityY = 3;
    star5.velocityY = 3;
    star6.velocityY = 5;
    snowStar1.velocityY = 3;
    snowStar2.velocityY = 4;
    snowStar3.velocityY = 2;
    snowStar4.velocityY = 5;
    snowStar5.velocityY = 3;
    snowStar6.velocityY = 4;
    fairy.velocityX = 4;

 }

  

  

  drawSprites();

}





