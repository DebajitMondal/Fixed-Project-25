class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
          isStatic: true,
          
            
            
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = 175;
        this.height = 175;
        this.image = loadImage("base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}