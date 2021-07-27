
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, wall1,wall2,wall3;
var groundSprite,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = new Ground(400,680,800,20)

    ball = new Paper(100,600,10);

	wall1 = new Dustbin(550,620,20,100);
	wall2 = new Dustbin(610,660,100,20);
	wall3 = new Dustbin(670,620,20,100);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.position,{x:15,y:-15});
	}
}


