

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1 = new Box(1000,470,200,30);
    box2 = new Box(910,430,20,100);
    box3 = new Box(1090,430,20,100);
    ball1 = new Ball(100,470,25);
    gd1 = new Ground();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  

  box1.display();
  box2.display();
  box3.display();

  ball1.display();

  gd1.display();


  drawSprites();
 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
      Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
  }
}

