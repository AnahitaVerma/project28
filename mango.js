class Mango{

    constructor(x,y){

        var options = {

            isStatic: true,
            restitution:0,
            friction:1
        }

        this.body = Bodies.rectangle(this.x,this.y,1,1,options)
        this.image = loadImage("images/mango.png")
        this.x=x
        this.y=y
        this.width=1
        this.height=1

        World.add(world,this.body)

    }

    display(){

        var pos = this.body.position

        ellipseMode(RADIUS)
        fill("grey")
        ellipse(0,0,this.radius)
        image(this.image,1200,200,50,50)
    }
}
