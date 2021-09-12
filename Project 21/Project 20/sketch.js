var wall, bullet;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
 
 speed = Math.round(random(223, 321));
 weight = Math.round(random(30, 52));
 thickness = Math.round(random(22,83))
 console.log("Speed: "+speed);
 console.log("Weight: "+weight);
 console.log("Thickness: "+thickness)

  text(speed, 400, 75, 10,10);
wall = createSprite(1200, 200, thickness, 200);
 wall.shapeColor = "white";

 bullet = createSprite(100, 200, 40, 10)
 bullet.shapeColor = "white";
 bullet.velocityX = speed;
}

function draw() {
  background(80,80,80);  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0 
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

    if (damage > 10) {
      wall.shapeColor = rgb(255,0,0);
    }
    else if (damage <= 10) {
      wall.shapeColor = rgb(0,255,0);
    }
    console.log(damage);
  }
  drawSprites();
}