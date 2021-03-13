const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//creating physics engine
var engine,world;
var gun;
var gun1;
var cloud;
//creating all global variables
var grenade;
var people;
var road;
var car;
var gameState;
var Amplitude;
var plane;
var bagImage;



function preload(){
  gunImage = loadImage("animated gun.png");
  cactusImage = loadImage("cactus.png");
  vehicleImage = loadImage("vehicleImage.png");
  grenadeImage = loadImage("grenade.png");
  peopleImage = loadImage("people1.png");
  carImage = loadImage("tank.png");
  pistulImage = loadImage("pistul.png");
  armyImage = loadImage("armyman.png");
  planeImage = loadImage("armyPlane.png");
  narrateImage = loadImage("armyy.png");
  bagImage = loadImage("bagImage.png");
 
}





function setup() {
  var canvas = createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  
  fill("grey");
  strokeWeight(3);
  stroke("red");
  button = new Button(100,100,90,100);
  

  fill("grey");
  strokeWeight(2);
  stroke("red");
  button1 = new Button(100,250,90,100);
  
  stroke("black");
  button2 = new Button(100,400,90,100);

  sun = new Sun(280,100,60);

  
  cloudSprite = createSprite(1000,100,1370,300);
  cloudSprite.shapeColor = "lightBlue";

  vehicleSprite = createSprite(100,220,20,20);
  vehicleSprite.addImage(vehicleImage);
  vehicleSprite.scale = 0.40;
  
  cactus = createSprite(600,630,20,20);
  cactus.addImage(cactusImage);
  cactus.scale = 0.5;

  cactus2 = createSprite(500,520,20,20);
  cactus2.addImage(cactusImage);
  cactus2.scale = 0.5;

  cactus3 = createSprite(450,510,20,20);
  cactus3.addImage(cactusImage);
  cactus3.scale = 0.5;

  cactus4 = createSprite(560,490,20,20);
  cactus4.addImage(cactusImage);
  cactus4.scale = 0.5;

  cactus5 = createSprite(450,580,20,20);
  cactus5.addImage(cactusImage);
  cactus5.scale = 0.5;

  cactus6 = createSprite(400,620,20,20);
  cactus6.addImage(cactusImage);
  cactus6.scale = 0.5;

  cactus7 = createSprite(540,600,20,20);
  cactus7.addImage(cactusImage);
  cactus7.scale = 0.5;

  cactus8 = createSprite(690,700,20,20);
  cactus8.addImage(cactusImage);
  cactus8.scale = 0.5;

  grenade = createSprite(90,380,20,20);
  grenade.addImage(grenadeImage);
  grenade.scale = 0.40;



  stroke("red");
  strokeWeight(2);
  desert = new Desert(1000,490,1320,460);
  

  
  
  gun1 = new Gun(350,200,20,20);
  

  sun1 = new Sun(480,100,60);


  gun = createSprite(105,85,20,20);
  gun.addImage(gunImage);
  gun.scale = 0.6;
  gun.visible = false;
  
  button3 = new Button(100,550,90,100);
  stroke("brown");
  
  people = createSprite(100,530,20,20);
  people.addImage(peopleImage);
  people.scale = 0.25;
  
  road = createSprite(980,280,1350,20);
  road.shapeColor = "black";

  car = createSprite(880,235,20,20);
  car.addImage(carImage);
  car.velocityX = -2;
  car.scale = 0.60;

  plane = createSprite(350,70,20,20);
  plane.addImage(planeImage);
  plane.scale = 0.75;
  


}

function draw() {
  background("black");
  if(keyCode === 32){
    button.display();
    strokeWeight(3.5);
    stroke("black");
    textSize(20);
    text("Guns",80,125);
    button1.display();
    strokeWeight(3.5),
    stroke("orange");
    textSize(20);
    text("Vehicles",68,280);
    button2.display();
    stroke("black");
    strokeWeight(3.5);
    text("Grenades",58,435);

    button3.display();
    textSize(20);
    stroke("lightBlue");
    strokeWeight(3.5);
    text("Crew",70,570);
    gun.visible = true;
    gun.display();
    sun.display();
    sun1.display();
    cactus.display();
    cactus2.display();
    cactus3.display();
    cactus4.display();
    cactus5.display();
    cactus6.display();
    cactus7.display();
    cactus8.display();
    vehicleSprite.display();
    grenade.display();
    road.display();
    desert.display();
    people.display();
    car.display();
    plane.visible = false;
  }  
  
 if(keyCode === LEFT_ARROW){
   

   vehicleSprite.display = false;
   cloudSprite.display = false;

   Amplitude = createSprite(180,290,20,20);
   Amplitude.addImage(pistulImage);
   Amplitude.scale = 0.45;
   Amplitude.display();

   army = createSprite(940,90,20,20);
   army.addImage(armyImage);
   army.scale = 0.65;
   army.display();

   boxed = createSprite(720,50,345,35);
   strokeWeight(3.5);
   stroke("orange");
   boxed.shapeColor = "red";
   boxed.display();

   textSize(40);
   stroke("brown");
   strokeWeight(3.5);
   text("Pick your gun guys",560,60);
   
   blued = createSprite(340,50,340,220);
   blued.shapeColor = "lightBlue";
   blued.display();

   plane.visible = true;
   plane.display();

   narrate = createSprite(980,300,150,20);
   narrate.addImage(narrateImage);
   narrate.scale = 0.55;
   narrate.display();

   buttonBox = createSprite(1300,60,520,120);
   buttonBox.shapeColor = "blue";
   buttonBox.display();


   bag = createSprite(1135,65,20,20);
   bag.addImage(bagImage);
   bag.scale = 0.45;
   bag.display();

  
   textSize(25);
   text("Gun : A110",300,260);
   textSize(15.0);

   ellipse(1350,240,690,120);
   stroke("black");
   strokeWeight(2.5);
   text("Hey! Iam Major Vihan. I am wholly responsible for the success and failures of the Indian"
   ,1015,245);

   textSize(19.0);
   stroke(50,0,12);
   strokeWeight(2.5);

   text("The rookie uses 8.5gm ammo which fireblasts amazingly",285,295);
   textSize(19.0);

   stroke("purple");
   strokeWeight(2.5);
   text("Damage rate(maximum):250",290,325);

   stroke("black");
   strokeWeight(2.5);
   text("Army",1515,280);

   stroke("blue");
   strokeWeight(1.5);
   text("Maximum kills : 50 with a full reload",290,360);

   


 }
   
  

  

 
  
 
    
  
    
  




  drawSprites();
}
