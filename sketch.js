const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
var engine;
var world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
    }
   ground=Bodies.rectangle(400,390,800,20,ground_options);
   World.add(world,ground)
  var ball_options={
    restitution:0.8
  }
  ball=Bodies.circle(400,100,40,ball_options);
  World.add(world,ball)

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
}
