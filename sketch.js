
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,bin1,bin2,bin3,img;
var engine,world,B;

function preload()
{

img=loadImage("dustbingreen.png")



}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(100,350,20);
	
	bin1 = new Bin(550,650,150,20);

	bin2 = new Bin(485,570,20,150);

	bin3 = new Bin(615,570,20,150);

	ground = new Ground(600,670,1200,20)

	b = createSprite(550,559,150,180);
	b.addImage("dustbin",img)
	b.scale=0.63
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 keyPressed();

  ball1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  drawSprites();
}






function keyPressed(){
	if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:130,y:-140});

	}
}



