var moving, fixed
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400,200,50,70);
  fixed.shapeColor = "blue";
  moving = createSprite(200,200,70,50);
  moving.shapeColor = "red"
}

function draw() {
  background(0);  
  moving.x = World.mouseX ;
  moving.y = World.mouseY ;
  if(moving.x - fixed.x < fixed.width/2 + moving.width/2
    && fixed.x - moving.x < fixed.width/2 + moving.width/2
    && fixed.y - moving.y < fixed.height/2 + moving.height/2
    && moving.y - fixed.y < fixed.height/2 + moving.height/2){
    moving.shapeColor = "lime";
    fixed.shapeColor = "orange"
  }
  else {
    fixed.shapeColor = "blue";
    moving.shapeColor = "red";

  }
  drawSprites();
}