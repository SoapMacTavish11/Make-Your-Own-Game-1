const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var car1, car2,car3,car4,car5,car6,car7;
var car1I,car2I,car3I,car4I,car5I,car6I,car7I;
var track,trackI;
function preload() {

   trackI=loadImage("Images/Track.jpg");

   car1I=loadImage("Images/Car 1.png");
   car2I=loadImage("Images/Car 2.png");
   car3I=loadImage("Images/Car 3.png");
   car4I=loadImage("Images/Car 4.png");
   car5I=loadImage("Images/Car 5.png");
   car6I=loadImage("Images/Car 6.png");
   car7I=loadImage("Images/Car 7.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight*20);

  database=firebase.database();

  game=new Game();
  game.getState();
  game.start();

  car1=createSprite(250,21450,50,50);
  car1.addImage(car1I);
  car1.scale=0.2;

  car2=createSprite(475,21450,50,50);
  car2.addImage(car2I);
  car2.scale=1;

  car3=createSprite(700,21450,50,50);
  car3.addImage(car3I);
  car3.scale=0.7;

  car4=createSprite(900,21450,50,50);
  car4.addImage(car4I);
  car4.scale=0.6;
  
  car5=createSprite(1100,21450,50,50);
  car5.addImage(car5I);
  car5.scale=1.2;

  car6=createSprite(1350,21450,50,50);
  car6.addImage(car6I);
  car6.scale=0.65;

  car7=createSprite(1700,21450,50,50);
  car7.addImage(car7I);
  car7.scale=0.75;

}

function draw() {
 
  if (playerCount===7) {
    game.update(1)
  }

  if (gameState===1) {
    clear()
    game.play()
  }

  if (gameState===2) {
    game.end();
  }
  drawSprites();
}