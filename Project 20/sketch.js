var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,200)
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(isTouching(car,wall)) {
    var deformation = (0.5 * weight * speed)/22500
    if(deformation<100) {
      car.shapeColor = "green";
      car.velocityX = 0;
    } else if(deformation<180) {
      car.shapeColor = "yellow";
      car.velocityX = 0;
    } else {
      car.shapeColor = "red";
      car.velocityX = 0;
    }
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  }
}