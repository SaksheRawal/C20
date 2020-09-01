var fixedrect , movingrect , object1, object2;
 function setup() {
  createCanvas(800,400);

   fixedrect = createSprite(400, 200, 100, 50);
   movingrect = createSprite(400,400,50,100); 

   object1 = createSprite(200,200,10,10);
   object2 = createSprite(300,200,10,10);

   object1.velocityX = 5;
   object2.velocityX = -5;

   fixedrect.shapeColor = "green";
   movingrect.shapeColor = "lightblue";

  fixedrect.debug = true;
 movingrect.debug = true;
 }

function draw() {
  background(0,0,128); 

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if (movingrect.x - fixedrect.x <= fixedrect.width/2 + movingrect.width/2 && 
      fixedrect.x - movingrect.x <= fixedrect.width/2 + movingrect.width/2 && 
      movingrect.y - fixedrect.y <= fixedrect.height/2 + movingrect.height/2 &&
      fixedrect.y - movingrect.y <= fixedrect.height/2 + movingrect.height/2 ) { 
     fixedrect.shapeColor = "red"; movingrect.shapeColor = "red";
     }
              
     else { fixedrect.shapeColor = "green"; movingrect.shapeColor = "lightblue"; } 

if( object1.x - object2.x <= object2.width/2 + object1.width/2 &&
   object2.x - object1.x <= object1.width/2 + object2.width/2){

    object1.velocityX = (-1)*object1.velocityX;
    object2.velocityX = (-1)*object2.velocityX;
}
 drawSprites(); }