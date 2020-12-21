const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine;
var myworld;
var object;

function setup() {
  createCanvas(400,400);
 
myengine = Engine.create();
myworld = myengine.world

var options={
  isStatic:true
}
object = Bodies.rectangle(200, 380, 500, 10,options);
World.add(myworld,object);
var optionsb = {restitution:1}
ball = Bodies.circle(200,200,25,optionsb)

World.add(myworld,ball)
console.log(object)
console.log(object.position.y)
}

function draw() {
  background(0); 
  Engine.update(myengine)
  rectMode(CENTER)

  rect(object.position.x,object.position.y,500,10) 
  circle(ball.position.x,ball.position.y,50)
  drawSprites();
}


