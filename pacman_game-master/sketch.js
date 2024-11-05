var obstacle0,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12,obstacle13;
var obstacle14,obstacle15,obstacle16,obstacle17,obstacle18,obstacle19,obstacle20,obstacle21,obstacle22,obstacle23,obstacle24,obstacle25,obstacle26;
var obstacle27,obstacle28,obstacle29,pacman,ghost1,ghost2,obstacle30,obstacle31,obstacle32,obstacle33,obstacle34,obstacle35,obstacle36,obstacle37;
var obstacle38,obstacle39,obstacle40,obstacle41,obstacle42,obstacle60,pacmanimage,ghost1image,ghost2image;

function preload(){
  pacmanimage = loadImage("pacmanimage.png");
  ghost1image = loadImage("ghost1image.png");
  ghost2image = loadImage("ghost2image.png");
}

function setup() {
  createCanvas(800,400);
  //top line
  obstacle0 = createSprite(400,50,700,2);
  obstacle1 = createSprite(400,60,680,2);
  //left line
  obstacle2 = createSprite(50,200,2,300);
  obstacle3 = createSprite(60,200,2,280);
  //right line
  obstacle4 = createSprite(750,200,2,300);
  obstacle5 = createSprite(740,200,2,280);
  //bottom line
  obstacle6 = createSprite(400,350,700,2);
  obstacle7 = createSprite(400,340,680,2);
  //start of pacman
  obstacle8 = createSprite(85,200,50,2);
  obstacle9 = createSprite(85,220,50,2);
  obstacle10 = createSprite(110,150,2.70);
  obstacle11 = createSprite(110,270,2,100);
  obstacle12 = createSprite(130,210,2,180);
  //top right start 
  obstacle13 = createSprite(150,100,80,2);
  obstacle14 = createSprite(150,120,40,2);
  obstacle15 = createSprite(190,130,2,60);
  obstacle16 = createSprite(170,163,2,85);
  obstacle17 = createSprite(190,195,2,20);
  obstacle18 = createSprite(180,205,20,2);
  obstacle19 = createSprite(215,160,50,2);
  obstacle20 = createSprite(215,185,50,2);
  obstacle21 = createSprite(240,205,2,40);
  obstacle22 = createSprite(240,150,2,20);
  obstacle24 = createSprite(260,190,2,100);
  obstacle25 = createSprite(210,225,60,2);
  obstacle26 = createSprite(150,225,10,2);
  obstacle27 = createSprite(220,240,80,2);
  obstacle28 = createSprite(150,240,10,2);
  obstacle29 = createSprite(145,232.5,2,14);
  obstacle30 = createSprite(168,225,28,2);
  obstacle31 = createSprite(155,270,2,60);
  obstacle32 = createSprite(180,270,2,60);
  obstacle33 = createSprite(240,120,2,40);
  //obstacle34 = createSprite(260,130,2,20);
  obstacle35 = createSprite(365,100,250,2);
  obstacle36 = createSprite(365,120,210,2);
  obstacle37 = createSprite(490,180,2,160);
  obstacle38 = createSprite(470,200,2,160);
  obstacle39 = createSprite(540,260,100,2);
  obstacle40 = createSprite(530,280,120,2);
  //bottom of start
  obstacle60 = createSprite(143,300,25,2);
  obstacle61 = createSprite(410,300,110,2);
  obstacle62 = createSprite(548,300,127,2);
  obstacle63 = createSprite(360,320,500,2);
  obstacle42 = createSprite(258,300,155,2);
  obstacle41 = createSprite(475,300,20,2);
  obstacle64 = createSprite(610,310,2,20);

  //verticals
  obstacle65 = createSprite(355,210,2,180);
  obstacle66 = createSprite(335,220,2,160);
  obstacle67 = createSprite(298,140,75,2)
  pacman = createSprite(70,210,10,10);
  pacman.addImage("pacman",pacmanimage);
  pacman.scale = 0.05
  ghost1 = createSprite(445,110,10,10);
  ghost1.addImage("ghost1",ghost1image);
  ghost1.scale = 0.07
  ghost2 = createSprite(390,310,10,10);
  ghost2.addImage("ghost2",ghost2image);
  ghost2.scale = 0.07
  obstacleGroup = new Group();
  obstacleGroup.add(obstacle0);
  obstacleGroup.add(obstacle1);
  obstacleGroup.add(obstacle2);
  obstacleGroup.add(obstacle3);
  obstacleGroup.add(obstacle4);
  obstacleGroup.add(obstacle5);
  obstacleGroup.add(obstacle6);
  obstacleGroup.add(obstacle7);
  obstacleGroup.add(obstacle8);
  obstacleGroup.add(obstacle9);
  obstacleGroup.add(obstacle10);
  obstacleGroup.add(obstacle11);
  obstacleGroup.add(obstacle12);
  obstacleGroup.add(obstacle13);
  obstacleGroup.add(obstacle14);
  obstacleGroup.add(obstacle15);
  obstacleGroup.add(obstacle16);
  obstacleGroup.add(obstacle17);
  obstacleGroup.add(obstacle18);
  obstacleGroup.add(obstacle19);
  obstacleGroup.add(obstacle20);
  obstacleGroup.add(obstacle21);
  obstacleGroup.add(obstacle22);
  //obstacleGroup.add(obstacle23);
  obstacleGroup.add(obstacle24);
  obstacleGroup.add(obstacle25);
  obstacleGroup.add(obstacle26);
  obstacleGroup.add(obstacle27);
  obstacleGroup.add(obstacle28);
  obstacleGroup.add(obstacle29);
  obstacleGroup.add(obstacle30);
  obstacleGroup.add(obstacle31);
  obstacleGroup.add(obstacle32);
  obstacleGroup.add(obstacle33);
  //obstacleGroup.add(obstacle34);
  obstacleGroup.add(obstacle35);
  obstacleGroup.add(obstacle36);
  obstacleGroup.add(obstacle37);
  obstacleGroup.add(obstacle38);
  obstacleGroup.add(obstacle39);
  obstacleGroup.add(obstacle40);
  obstacleGroup.add(obstacle41);
  obstacleGroup.add(obstacle42);
  obstacleGroup.add(obstacle60);
  obstacleGroup.add(obstacle61);
  obstacleGroup.add(obstacle62);
  obstacleGroup.add(obstacle63);
  obstacleGroup.add(obstacle64);
  obstacleGroup.add(obstacle65);
  obstacleGroup.add(obstacle66);
  obstacleGroup.add(obstacle67);
}

function draw() {
  background(0);
  if (keyIsDown(UP_ARROW)){
    pacman.velocity.y = -2;
    pacman.velocity.x = 0;
  }  
  if(keyIsDown(DOWN_ARROW)){
    pacman.velocity.y = 2;
    pacman.velocity.x = 0;
  }
  if(keyIsDown(LEFT_ARROW)){
    pacman.velocity.x = -2;
    pacman.velocity.y = 0;
  }
  if(keyIsDown(RIGHT_ARROW)){
    pacman.velocity.x = 2;
    pacman.velocity.y = 0;
  }
  pacman.bounceOff(obstacleGroup);
 /* ghost1.bounceOff(obstacleGroup);
  ghost2.bounceOff(obstacleGroup);
  if(ghost2.x > 650 && ghost2.y > 300){
    ghost2.velocity.y = -2;
    ghost2.velocity.x = 0;
  }*/
  text("X " + World.mouseX + "Y " + World.mouseY, World.mouseX,World.mouseY);
  fill("green");
  text("START",65,215);
  fill("green");
  text("END",565,275);
  textSize(40);
  fill("red");
  text("PACMAN",550,100);
 /* ghost1.velocity.x = 2;
  ghost2.velocity.x = 2;
  if(ghost2.x > 650 && ghost2.y > 300){
    ghost2.velocity.y = -2;
    ghost2.velocity.x = 0;
  }
   //if(ghost2.x < 650 && ghost2.y < 95){
    //ghost2.velocity.x = 2;
    //ghost2.velocity.y = 0;
  //}*/
  if(ghost2.isTouching(pacman)|| ghost1.isTouching(pacman)){
    textSize(40);
    fill("blue")
    text("GAME OVER",280,200);
    ghost1.velocity.x = 0;
    ghost1.velocity.y = 0;
    ghost2.velocity.x = 0;
    ghost2.velocity.y = 0;
    pacman.velocity.x = 0;
    pacman.velocity.y = 0;
  }
  drawSprites();
}