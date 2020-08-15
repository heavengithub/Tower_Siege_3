class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,1600,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("grey");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1600,20);
    }
}