
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1
var ground1
var stone1
var boy,boyimg
var mango1

function preload()
{
   boyimg = loadImage("images/boy.png")
}

function setup() {
	createCanvas(1275, 606);


	engine = Engine.create();
	world = engine.world;

 
  //Create the Bodies Here.
  
   
   tree1 = new Tree(1000,450)

   ground1 = new Ground(637,550,1275,20)

   stone1 = new Stone(150,435)

   mango1 = new Mango(900,200)
   mango2= new Mango(950,200)

   sling1 = new slingshot(Stone.body,{x:150,y:435})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  stone1.display();
  mango1.display();
  mango2.display ()
  tree1.display();
  ground1.display();
  
  boy =createSprite(200, 485, 10,10);
  boy.addImage(boyimg)
  boy.scale=0.1

  
  drawSprites();
 
}

function mouseDragged() {

  Matter.Body.setPosition(stone.body,{x:MousrX,y:MouseY})
  
}

function mouseReleased() {

  stone.fly()
  
}



