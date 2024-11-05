var bg1,bg2;
var current_img;
var gameState ="start";
var greeting;
var magnifier,magnifier_img;
var item1;
var visible = 255;

function preload(){
bg1 =loadImage("images/bg1.jpeg");
bg2 =loadImage("images/bg2.jpg");
detective_img= loadImage("images/detective.png")
magnifier_img = loadImage("images/search.png")
item1 = loadImage("images/item1.png")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-100);
detective = createSprite(200,200,50,50)
detective.addImage("man", detective_img)
search = createSprite(200,200,50,50)
search.addImage("magnifier", magnifier_img)
search.scale = 0.25
search.visible = false;
current_img =bg1;
greeting =createElement('h3');
greeting.html("Hello");
greeting.position(displayWidth/2-300,displayHeight/2 + 400);
var button1 =createButton("play");
button1.position(displayWidth/2 -150,displayHeight/2); 
title = createElement('h1')
title.html("Welcome to the world of Detective Thomas")
title.position(displayWidth/2,displayHeight/2)

button1.mousePressed(()=>{
  changeBg1()
  button1.hide()
  title.hide()
  greeting.hide()
  detective.visible = false;
  
  
})

}

function draw() {
  
  background(current_img);  
 
  search.x = mouseX;
  search.y = mouseY

if(current_img===bg2){
push()
invisible()
pop()

}

 
  drawSprites();
}

function changeBg1(){
current_img = bg2;
search.visible = true



}

function invisible(){
 
  visible = visible -5;
  tint(255,visible)
  image(item1,200,200)
 

}

