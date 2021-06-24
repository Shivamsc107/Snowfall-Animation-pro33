class Snow{
    constructor(x,y){
        var options={friction:0.01,restitution:0.1}
      this.snow=Bodies.circle(x,y,10,options) 
      World.add(world,this.snow)
    }
   display(){
       ellipseMode(CENTER)
       ellipse(this.snow.position.x,this.position.y,10,10)
   }
}