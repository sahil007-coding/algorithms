var movingRect , fixedRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 330, 50, 60);
  movingRect=createSprite(400, 330, 50, 30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;


}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

    
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  

  drawSprites();
}