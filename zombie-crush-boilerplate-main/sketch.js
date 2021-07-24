const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var w1,w2;
var link;
var stone;
var stones = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  bridge=new Bridge(9,{x:70,y:700});
  w1=new Wall(width-1350,500,600,300)
  w2=new Wall(1350,500,600,300)
  link=new Link(bridge,w2);
  Matter.Composite.add(bridge.body,w2)
  for (var i = 0; i <= 8; i++) 
  { var x = random(width / 2 - 200, width / 2 + 300);
     var y = random(-10, 140); 
     var stone = new Stone(x, y, 15); 
     stones.push(stone);
  }
  
  
  
}

function draw() {
  background(51);
  bridge.show();
  w1.show();
  w2.show();
  stones[0].show();
  Engine.update(engine);
}
