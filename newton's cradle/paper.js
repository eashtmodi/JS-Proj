class Paper {
  constructor(x,y,radius) {
    var options = {
        isStatic:true,
        density:0.8
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.x=x;
    this.y=y;
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(RADIUS);
    fill("black");
    ellipse(pos.x, pos.y, this.radius);
  }
};