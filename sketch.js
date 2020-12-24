var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ground2,ground3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10,);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var options = {
		restitution:0.5, isStatic:true
	};
	packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	
	World.add(world, packageBody);
	ground1 = new Ground(350,620,200,20);
    ground2 = new Ground(460,580,20,100);
    ground3 = new Ground(260,580,20,100);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
	 World.add(world, ground);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  ground1.display();
  ground2.display();
  ground3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	
    

    
  }
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  helicopterSprite.x=helicopterSprite.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packageBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(packageBody,false);
	  
	}
  }

