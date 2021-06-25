var garden,rabbit,apple,leave;
var gardenImg,rabbitImg,appleimg,leaveimg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  leaveimg = loadImage("leave.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  //rabbit.velocityX=mouse.X;
  var leorap=Math.round(random(1,2));
  if (frameCount%80===0){
    if (leorap===1){spawnapples();
    }
    else if(leorap===2){
      leaves();
    }
    
  }
rabbit.x=mouse.x;
  drawSprites();
}
function spawnapples(){
  
  if(frameCount % 60===0){
     apple= createSprite(random(50,350),40,10,10);
     apple.addImage(appleimg);
    apple.velocityY=4;
    apple.lifetime=200;
    apple.scale=0.1;
  }
}
 function leaves(){
   if(frameCount % 60 ===0){
    leave= createSprite(random(50,350),40,10,10);
    leave.addImage(leaveimg);
   leave.velocityY=4;
   leave.lifetime=200;
   leave.scale=0.1;
   }
 }