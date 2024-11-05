const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var bg;

var engine, world;
function preload(){
    bg=loadImage("1.jpg");
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    strip =new Ground(500,100,400,20);
    bob1=new Paper(500,300,30);
    bob2=new Paper(380,300,30);
    bob3=new Paper(440,300,30);
    bob4=new Paper(560,300,30);
    bob5=new Paper(620,300,30)
    
    tie1=new Chain(bob1.body,strip.body,0,0);
    tie2=new Chain(bob2.body,strip.body,-105,0);
    tie3=new Chain(bob3.body,strip.body,-65,0);
    tie4=new Chain(bob4.body,strip.body,65,0);
    tie5=new Chain(bob5.body,strip.body,105,0)

}

function draw(){
    background(bg);
    Engine.update(engine);
    strip.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display()

    tie1.display();
    tie2.display();
    tie3.display();
    tie4.display();
    tie5.display();


    
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setStatic(bob1.body,false);
        Matter.Body.setStatic(bob2.body,false);
        Matter.Body.setStatic(bob3.body,false);
        Matter.Body.setStatic(bob4.body,false);
        Matter.Body.setStatic(bob5.body,false);
        Matter.Body.applyForce(bob5.body,bob5.body.position,{x:100,y:-30})
    }
}