class box{
    
    constructor(x, y, width, height){

        var options={
            'density' : 1.2,
            'friction' : 0.8,
            'restitution' :0.5, 
            
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
        
    }
}