class Boat{
    constructor(x,y,w,h,o){
        this.w=w
        this.h=h
        this.o=o
        this.body=Matter.Bodies.rectangle(x,y,w,h
            //,{restitution:0.8,friction:1,density:1
       // }
        )
        Matter.World.add(w,this.body)
        this.img=loadImage("Assets/boat.png")



        
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.img,0,this.o,this.w,this.h)
        pop()
    }
}
