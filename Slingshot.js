class Slingshot {
    constructor(body1, coordinates) {
        var option = {
            bodyA: body1,
            pointB: coordinates,
            stiffness: 0.04,
            length: 15
        }
        this.sling = Constraint.create(option);
        World.add(world, this.sling);
    }
    display() {
        if(this.sling.bodyA) {
            var start = this.sling.bodyA.position;
            var end = this.sling.pointB;
            
            strokeWeight(4);
            
            line(start.x, start.y, end.x, end.y);   
        }
    }
    fly() {
        this.sling.bodyA = null;
    }
};