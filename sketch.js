//Create variables here 
var dogImg, happyDogImg, dog, lastFed, fedTime, feed, input;
var database;
var foodS, foodStock, addFood, food1, foodObj, foodCount;
var milk, milkImg;

function preload() {
  //load the images
  dogImg = loadImage('images/dogImg.png');
  happyDogImg = loadImage('images/dogImg1.png');
  milkImg = loadImage('images/Milk.png');
}

function setup() {
  createCanvas(1000, 500);
  database = firebase.database();

  dog = createSprite(650, 250);
  dog.scale = 0.3;
  dog.addImage(dogImg);

  milk = createSprite(565, 300);
  milk.addImage(milkImg);
  milk.scale = 0.1;
  milk.visible = false;
  milk.rotation = 55;
  
  food1 = new Food();
  food1.start();

  addFood = createButton("Add food");
  addFood.position(800, 60);
  addFood.mousePressed(addFoods);

  feed = createButton("Feed your Dog");
  feed.position(900, 60);
  feed.mousePressed(feedDog);
}

function draw() {  
  background(46, 139, 87);

  food1.display();

  drawSprites();
}

function feedDog() {
  food1.getFoodStock();
  food1.updateFedTime();

  if(foodCount === 0) {
    foodCount = 0;
    milk.visible = false;
    dog.addImage(dogImg);
  } else {
    food1.updateFoodStock(foodCount - 1);
    milk.visible = true;
    dog.addImage(happyDogImg);
  }
}

function addFoods() {
 food1.getFoodStock();

 food1.updateFoodStock(foodCount + 1); 
}