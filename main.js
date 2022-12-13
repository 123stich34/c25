var  bg,tower,ti,e,w,cb,c,cannon,cbi,cbl,angle,balls

function preload(){
bg=loadImage ("./Assets/background.gif")
ti=loadImage("./Assets/tower.png")
cb=loadImage("./Assets/cannon_base.png")
c=loadImage("./Assets/CANON.png")
cbi=loadImage("./Assets/cannonball.png")




console.log("preload")

}



function setup(){
    createCanvas (1200,600)
    e=Matter.Engine.create()                            
    w=e.world
    tower=Matter.Bodies.rectangle(160,310,120,400,{isStatic:true})
    Matter.World.add(w,tower)
    imageMode(CENTER)
    cannon=new Cannon(195,50,140,110,15)
   
    console.log("setup")
    angleMode(DEGREES)
    angle=15
    balls=[]
    boat=new Boat(width-100,height-50,150,150,0)

}
function draw(){
    background(0)
    Matter.Engine.update(e)
image(bg,width/2,height/2,width,height)
boat.display()

cannon.display() 
for(var i=0;i<balls.length;i++){
    showcbl(balls[i],i)
}

image(ti,tower.position.x,tower.position.y,120,400)       






text(mouseX+","+mouseY,mouseX,mouseY)

}
 function keyPressed(){
    if(keyCode==DOWN_ARROW){
 //       console.log(51)
 //       cbl.shoot()
 cbl=new Canonball(cannon.x,cannon.y)
 balls.push(cbl)
    }
 }
 function showcbl(c,i){
    if(c){
        c.display()
    }

 }
function keyReleased(){
    if(keyCode==DOWN_ARROW){
        balls[balls.length-1].shoot()
    }
}
