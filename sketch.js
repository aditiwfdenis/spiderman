var spiderman
var spidermanimg
var track
function preload()
{
  track=loadImage("Images/Rail.jpg")
  spidermanimg=loadImage("Images/Spiderman.jpg")
}

function setup() {
	canvas=createCanvas(windowWidth-10,windowHeight-10)
 
  spiderman=createSprite(20,30,40,40)
  spiderman.addImage(spidermanimg)
  spiderman.scale=0.3
}



function draw() { 
  background("white")
  image(track,width/2,0)
  move()
  drawSprites() 
}
function move(){
  if(keyDown("left")){
    spiderman.x=spiderman.x-50
    
  }
  if(keyDown("right")){
    spiderman.x+=50
  }
  
  if(keyDown("up")){
    spiderman.y-=50
  }
}

