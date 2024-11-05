class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.8,
            length:200,
            pointB:{x:this.offsetX,y:this.offsetY}

        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        
        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        pop();
    }
}