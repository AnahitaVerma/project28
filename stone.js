class Stone{

    constructor(x,y,){

     var options = {

        isStatic : true,
        restitution : 0,
        friction:1,
        density:1.2
     }

     this.body = Bodies.rectangle(x,y,20,20,options)
     this.image = loadImage("images/stone.png")
     this.x=x
     this.y=y
     this.width=20
     this.height=20

     World.add(world,this.body)
    }

    display(){

        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        var pos = this.body.position
        rectMode(CENTER)
        fill("black")
        rect(pos.x,pos.y,20,20)
        image(this.image,130,399, 50,50);
    }
}