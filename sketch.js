var  dog, happyDog, database, foodS, foodStock

function preload()
{

}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,250)
  dog.addImage("images/dogImg.png")

  foodStock=database.ref('food')
  foodStock.on("value",readstock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage("images/dogImg1.png")
}
  drawSprites();
  //add styles here

}



