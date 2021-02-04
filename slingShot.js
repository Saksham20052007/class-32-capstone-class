class Slingshot{
    constructor(body1, body2){
        var options={
            bodyA : body1,
            bodyB : body2,
            length:80,
            stiffness:0.3     
            
        }
        this.rope = Constraint.create(options);

        World.add(world, this.rope);
}
display(){
 
    if(this.rope.bodyA){
        line(Ball.body.position.x, Ball.body.position.y, BallPoint.body.position.x, BallPoint.body.position.y)

    }
}


fly(){
    this.rope.bodyA = null;
}

attach(body){
    this.rope.bodyA = body;
}
}
