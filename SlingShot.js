class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.09,
            length: 25
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        
       image(this.sling1,200,25);

       image(this.sling2,170,25);

       
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();

        if(pointA.x<220){
            strokeWeight(2);
            line(pointA.x-15, pointA.y, pointB.x+20, pointB.y-10);
            line(pointA.x-15, pointA.y, pointB.x-20, pointB.y-5);
            image(this.sling3,pointA.x-20,pointA.y-15,10,30)   
           }else {
            strokeWeight(2);
            line(pointA.x+15, pointA.y, pointB.x+20, pointB.y-10);
            line(pointA.x+15, pointA.y, pointB.x-20, pointB.y-5);
            image(this.sling3,pointA.x+15,pointA.y-15,10,30);   
            
            pop();
        }
     }
    }
    
}