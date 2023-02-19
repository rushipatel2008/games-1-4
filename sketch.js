var person
var border,border2
var wall1,wall2,wall3,wall4,wall5,wall6
var bulletGroup
var gameState="play"
var backgroundImg
var bullet1
var duckImag,robotImg
var wallImg
function preload(){
backgroundImg=loadImage('download-5.jpg')
bullet1=loadImage('bullet1.png')
duckImg=loadImage('duck.png')
robotImg=loadImage('robot.png')
wallImg=loadImage('wood.png')
}
function setup(){
createCanvas (700,400)
person=createSprite(100,190,10,10)
person.addImage(duckImg)
person.scale=0.1

border=createSprite(350,100,800,10)
border2=createSprite(350,325,800,10)

wall1=createSprite(170,140,10,70)
wall2=createSprite(340,140,10,70)
wall3=createSprite(500,140,10,70)
wall4=createSprite(250,290,10,70)
wall5=createSprite(420,290,10,70)
wall6=createSprite(600,290,10,70)

wall1.addImage(wallImg)
wall1.scale=0.2

wall2.addImage(wallImg)
wall2.scale=0.2

wall3.addImage(wallImg)
wall3.scale=0.2

wall4.addImage(wallImg)
wall4.scale=0.2

wall5.addImage(wallImg)
wall5.scale=0.2

wall6.addImage(wallImg)
wall6.scale=0.2
robot=createSprite(660,200,25,60)

robot.addImage(robotImg)
robot.scale=0.2
bulletGroup=new Group()
}

function draw(){
background(backgroundImg)
console.log(mouseY)

if(gameState==='play'){



if(keyDown(RIGHT_ARROW)){
  person.x=person.x+5
}
if(keyDown(DOWN_ARROW)){
  person.y=person.y+5
}
if(keyDown(UP_ARROW)){
  person.y=person.y-5
}


person.bounce(wall1)
person.bounce(wall2)
person.bounce(wall3)
person.bounce(wall4)
person.bounce(wall5)
person.bounce(wall6)
spawnBullets()

if(bulletGroup.isTouching(person)){
  gameState='end'
}
}
if(gameState=='end'){
  bulletGroup.destroyEach()
 background('black')
 textSize(20)
 text('Game Over',200,200)
}
drawSprites()


}

function spawnBullets(){
  if(frameCount%80==0){
    var bullet=createSprite(650,random(200,250),20,20)
    bullet.velocityX=-5
    bullet.shapeColor='red'
    bullet.addImage(bullet1)
    bulletGroup.add(bullet)
    bullet.scale=0.2
   
    bullet.setCollider('rectangle',0,0,bullet.width-40,150)
  }
}







