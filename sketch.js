const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;
var snow=[];
var maxsnow=100
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create()
  world=engine.world
  if(frameCount % 150 === 0){ for(var i=0; i<maxsnow; i++){ snow.push(new Snow(random(0,400), random(0,400))); } }
}
function preload(){
snow = loadImage("snow2.jpg")
}

function draw() {
  background(snow);
  Engine.update(engine)
for(var i=0;i<maxsnow;i++){
  snow[i].display()
}
  drawSprites();

}