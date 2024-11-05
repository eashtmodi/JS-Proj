var car1,speed1,weight1,deformation1,stop1;
var car2,speed2,weight2,deformation2,stop2;
var car3,speed3,weight3,deformation3,stop3;

function setup() {
  createCanvas(800,700);
  car1=createSprite(700, 200, 50, 50);
  car1.shapeColor="#ffffff";
  stop1=createSprite(100,200,50,50);
  stop1.shapeColor="#ffffff";
  
  car2=createSprite(700, 400, 50, 50);
  car2.shapeColor="#ffffff";
  stop2=createSprite(100,400,50,50);
  stop2.shapeColor="#ffffff";
  
  car3=createSprite(700, 600, 50, 50);
  car3.shapeColor="#ffffff";
  stop3=createSprite(100,600,50,50);
  stop3.shapeColor="#ffffff";

  speed1=random(50,100);
  speed2=random(50,100);
  speed3=random(50,100);

  weight1=random(1000,3000);
  weight2=random(1000,3000);
  weight3=random(1000,3000);

  car1.velocityX=speed1/-5;
  car2.velocityX=speed2/-5;
  car3.velocityX=speed3/-5;

  deformation1=(0.5*weight1*speed1*speed1)/22500;
  deformation2=(0.5*weight2*speed2*speed2)/22500;
  deformation3=(0.5*weight3*speed3*speed3)/22500;

}

function draw() {
  background(0);  

  if(car1.x-stop1.x<car1.width/2+stop1.width/2){
    car1.velocityX=0;
    if(deformation1>180){
      car1.shapeColor="red";
      textSize(30);
      text("car1 is lethal for the passenger",300,200);
    }
    if(deformation1<180 && deformation1>80){
      car1.shapeColor="yellow";
      textSize(30);
      text("car1 is average for the passenger",300,200);
    }
    if(deformation1<80){
      car1.shapeColor="green";
      textSize(30);
      text("car1 is great for the passenger",300,200);
    }
  }

  if(car2.x-stop2.x<car2.width/2+stop2.width/2){
    car2.velocityX=0;
    if(deformation2>180){
      car2.shapeColor="red";
      textSize(30);
      text("car2 is lethal for the passenger",300,400);
    }
    if(deformation2<180 && deformation2>80){
      car2.shapeColor="yellow";
      textSize(30);
      text("car2 is average for the passenger",300,400);
    }
    if(deformation2<80){
      car2.shapeColor="green";
      textSize(30);
      text("car2 is great for the passenger",300,400);
    }
  }

  if(car3.x-stop3.x<car3.width/2+stop3.width/2){
    car3.velocityX=0;
    if(deformation3>180){
      car3.shapeColor="red";
      textSize(30);
      text("car1 is lethal for the passenger",300,600);
    }
    if(deformation3<180 && deformation3>80){
      car3.shapeColor="yellow";
      textSize(30);
      text("car3 is average for the passenger",300,600);
    }
    if(deformation3<80){
      car3.shapeColor="green";
      textSize(30);
      text("car1 is great for the passenger",300,600);
    }
  }
  drawSprites();
}