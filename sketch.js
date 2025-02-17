var ball,ballimg,paddle,padimg;
var rand;

function preload() {
  /* preload your images here of the ball and the paddle */
  
  ballimg = loadImage("ball.png");
  
  padimg = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200,20,20);
  
  paddle = createSprite(370,200,5,40);
  /* assign the images to the sprites */
  ball.addImage(ballimg);
  
  paddle.addImage(padimg);
  /* give the ball an initial velocity of 9 in the X direction */
  
ball.velocityX=9
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
if( ball.bounceOff(paddle) ){
randomVelocity();
}
 
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-6;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.velocityY=6;
  }
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
 
  var rand = Math.round(random(-3,6));
   ball.velocityY=rand;
   ball.velocityX=-9;
 
}
