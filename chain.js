class CHAIN {

    constructor(a, b) {
        var options = { bodyA: a, bodyB: b, length: 100, stiffness: 0.6 };
        this.body = Matter.Constraint.create(options);
        Matter.World.add(world, this.body);


    }

    display() {
        var posA = this.body.bodyA.position;
        var posB = this.body.bodyB.position;
        push()
        strokeWeight(10);
        line(posA.x, posA.y, posB.x, posB.y)
        pop()


    }


}