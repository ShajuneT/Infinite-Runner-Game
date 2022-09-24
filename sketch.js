var monkey, monkey_Running
var boy, boy_Running
var bush,bushImg, peel,peelImg, rock, rockImg
var score,backgroundImg,ground,groundImg
var invisibleGround
var PLAY = 1
var END = 0
var gameState = PLAY

function preload(){
monkey_Running = loadAnimation("monkey1.png","monkey2.png","monkey3.png","monkey4.png")
boy_Running = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png","boy5.png")
bushImg = loadImage("bush.png")
peelImg = loadImage("peel.png")
rockImg = loadImage("rock.png")
backgroundImg = loadImage("jungle.jpeg")
grassImg = loadImage("grass.jpeg")
}


function setup() {
 createCanvas(800,500)
 monkey = createSprite(50,340,10,10)
 monkey.addAnimation("monkey",monkey_Running)
 monkey.scale = 0.3

 boy = createSprite(150,350,10,10)
 boy.addAnimation("boy",boy_Running)
 boy.scale = 0.5

grass = createSprite(100,650,500,10)
grass.addImage(grassImg)

invisibleGround = createSprite(400,390,1000,10)
invisibleGround.visible = false
}

function draw() {
 background(backgroundImg)
 if(gameState===PLAY){
    grass.velocityx=-3
   if(grass.x<0){
    grass.x+= grass.width/2
   } 
 }
    drawSprites()

}

function bush() {
    bush = createSprite(250,250,10,10)
    bush.addImage("bush.png")
    bush.scale = 0.2
}