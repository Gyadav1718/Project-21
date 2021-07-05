var wall,Bullet,Thickness;
var speed,weight;

function setup() {
  createCanvas(800,400);
 
Bullet = createSprite(50,200,50,50);
Thickness = random (22,83);

wall = createSprite(700,200,Thickness,height/2);
wall.shapeColor= "blue";
speed = random(223,321);
weight = random(28,50);
Bullet.velocityX= speed;


}

function draw() {
  background(255,255,255); 
  if(hasCollided(Bullet,wall)){
  
    Bullet.velocityX = 0;
    var damage = 0.5 * weight * speed* speed/(Thickness*Thickness*Thickness);
    
    if(damage>10){
      Bullet.shapeColor = "red";
    }
    
    if(damage<10){
      Bullet.shapeColor = "green";
    }
}
     
  drawSprites();
}
function hasCollided (Bullet1,wall1){
  BulletRightEdge=Bullet1.x+Bullet1.width;
  wallLeftEdge = wall1.x;
  if(BulletRightEdge>=wallLeftEdge){
    return true
  }
    return false
}
