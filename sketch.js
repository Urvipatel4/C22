const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myengine, myworld,ground, ball;

function setup() {
  var canvas = createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;

  ground = Bodies.rectangle(200,400,20,20);
  World.add(myworld,ground);
}

function draw() {
  background("black");  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,400);
  
  drawSprites();
}