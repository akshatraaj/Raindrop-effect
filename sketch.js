var drop,dropGroup;

function setup() {
  createCanvas(600,400);
  dropGroup = createGroup();
}

function draw() {
  background(0,0,0); 
  spawnDrop();
  drawSprites();
}
  function spawnDrop(){
    if (frameCount % 10 === 0){
      var droop = createSprite(300,0,2,80);
      droop.x = Math.round(random(0,600));
      droop.scale = 0.5;
      droop.velocityY = 10;
      droop.shapeColor = "Blue";

      droop.lifetime = 400;

      dropGroup.add(droop);
    }
  }
