var bg;

var hasDocked;

var iss, issImg;

var spaceCraft, craftImg, craft2Img, craft3Img, craft4Img;

var p;

function preload(){

  bg = loadImage("spacebg.jpg");

  issImg = loadImage("iss.png");

  craftImg = loadImage("spacecraft1.png");

  craft2Img = loadImage("spacecraft2.png");

  craft3Img = loadImage("spacecraft3.png");

  craft4Img = loadImage("spacecraft4.png");

}

function setup(){

  createCanvas(1000, 750);

  spaceCraft = createSprite(100, 660);
  spaceCraft.addImage("craftImg", craftImg);
  spaceCraft.scale = 0.4;

  iss = createSprite(620, 300);
  iss.addImage("issImg", issImg);
  iss.scale = 1.2;

  p = createSprite(535, 300, 10, 10);
  p.visible = false;

}

function draw(){

  background(bg);

  spaceCraft.addImage("craftImg", craftImg);

  if(!hasDocked){

    spaceCraft.x = spaceCraft.x + random(-1, 1);

    if(keyDown("UP_ARROW")){

      spaceCraft.y = spaceCraft.y - 3;

    }

    if(keyDown("LEFT_ARROW")){

      spaceCraft.addImage(craft3Img);

      spaceCraft.x = spaceCraft.x - 2;

    }

    if(keyDown("RIGHT_ARROW")){

      spaceCraft.addImage(craft4Img);

      spaceCraft.x = spaceCraft.x + 2;

    }

    if(keyDown("DOWN_ARROW")){

      spaceCraft.addImage(craft2Img);

    }

  }

  if(spaceCraft.isTouching(p)){

    textSize(22);

    fill("white");

    text("Docking Successfull!!", 600, 270);

    hasDocked = true;

  }
  

  drawSprites();

}
