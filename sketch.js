
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground =new Ground(width/2,height-35,1200,20);
	
	box= new Dustbin(800,height-50);

	ball= new PaperBall(100,200,20);

	


  
}


function draw() {

  background(0);
  
  Engine.update(engine);
  ground.display();
  box.display();
  ball.display();

 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-85});
	}	
}													
