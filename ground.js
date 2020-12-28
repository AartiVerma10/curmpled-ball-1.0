class Ground{
    constructor(){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body=Bodies.rectangle(600,480,1200,10,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(-20);
        rect(pos.x,pos.y,1200,10);
        pop();
    }

}