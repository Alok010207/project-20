
function preload() {
    //load the images here
    mouse1=loadAnimation("images/mouse1.png");
    cat1=loadAnimation("images/cat1.png");
    mouse_jump=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
    cat33=loadAnimation("images/cat2.png","images/cat3.png");
    ground=loadImage("images/garden.png");
    cat3=loadAnimation("images/cat4.png");

}

function setup(){
    createCanvas(1000,700);
    //create tom and jerry sprites here

    backgroundG=createSprite(500,350);
    backgroundG.addImage(ground);
  
    jerry=createSprite(100,600);
    jerry.addAnimation("sit",mouse1);
    jerry.scale=0.10;

    tom=createSprite(800,600);
    tom.addAnimation("stand",cat1);
    tom.scale=0.20;

    tom.debug=true;

}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<tom.width/2 && jerry.width/2){
        tom.addAnimation("c",cat3);
        tom.changeAnimation("c");
        jerry.addAnimation("m",mouse3);
        jerry.changeAnimation("m");
    
    
       }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        tom.x=tom.x-50;
        tom.addAnimation("t",cat33);
        tom.changeAnimation("t");
        jerry.addAnimation("j",mouse_jump);
        jerry.changeAnimation("j");

    }
  
}
