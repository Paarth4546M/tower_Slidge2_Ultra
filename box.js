class Box {
    constructor(x, y, width, height){
     
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        var posi =this.body.position;
        rectMode(CENTER);
        rect(posi.x, posi.y, this.width, this.height);
      }
    }
      
    }
    


  