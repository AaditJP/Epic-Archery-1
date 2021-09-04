const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player1,playerBase1;
var computer1,computerBase1;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

   computerBase1 = new computerBase(width-300,450,180,150);
   playerBase1 = new playerBase(300,450,180,150);

   computer1 = new computer(width-320,300,50,180);
   player1 = new player(320,300,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   playerBase1.display()
   computerBase1.display()
   
  //display Player and computerplayer

  player1.display()
  computer1.display()


}
