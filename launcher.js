
class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.0074,
            length: 10
        }
        this.pointB=pointB
        this.launch = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){

        if(this.launch.bodyA){
          
        

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){

        this.launch.bodyA=null

    }
}