var characterX = 100;
var characterY = 100;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;


var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;


var obstacleX;
var obstacleY;
var obstacleXSpeed;
var obstacleYSpeed;


var mouseShapeX;
var mouseShapeY;


function setup()
{
    createCanvas(500, 600);
    colorMode(HSB, 360, 100, 100);
    
    
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    
    
    obstacleX = 450;
    obstacleY = 150;
    obstacleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    createCharacter(200, 350);
}

function draw()
{
    background(240, 50, 20);
    
    createBorders(10);

    textSize(16);
    fill(0, 0, 100); 
    text("EXIT", width-50, height-50);

    drawCharacter();
    characterMovement();

    
    fill(120, 80, 70); // Green color
    noStroke();
    rect(shapeX, shapeY, 20, 20);

    
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    
    
    if(shapeX > width || shapeX < 0)
    {
        shapeX = (shapeX > width) ? 0 : width;
    }
    if(shapeY > height || shapeY < 0)
    {
        shapeY = (shapeY > height) ? 0 : height;
    }

  
    fill(0, 90, 90); 
    obstacleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    obstacleX += obstacleXSpeed;
    obstacleY += obstacleYSpeed;

    if(obstacleX > width || obstacleX < 0)
    {
        obstacleX = (obstacleX > width) ? 0 : width;
    }
    if(obstacleY > height || obstacleY < 0)
    {
        obstacleY = (obstacleY > height) ? 0 : height;
    }
    
    circle(obstacleX, obstacleY, 30); 

    
    if(characterX > width && characterY > height - 50) 
    {
        fill(60, 100, 100); 
        noStroke();
        textSize(36);
        textAlign(CENTER, CENTER); 
        text("You Win!", width/2, height/2);
    }

    fill(30, 60, 90); 
    stroke(0, 0, 100); 
    strokeWeight(2);
    
    triangle(mouseShapeX, mouseShapeY - 15,         
             mouseShapeX - 15, mouseShapeY + 15,   
             mouseShapeX + 15, mouseShapeY + 15);   
    
    noStroke();
    textAlign(LEFT, TOP); 
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 5;
    }
    if(keyIsDown(s))
    {
        characterY += 5;
    }
    if(keyIsDown(a))
    {
        characterX -= 5;
    }
    if(keyIsDown(d))
    {
        characterX += 5;
    }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

function drawCharacter()
{
    fill(0, 80, 90); 
    stroke(0, 0, 100); 
    strokeWeight(3);

    rectMode(CENTER);
    rect(characterX, characterY, 25, 25);
    rectMode(CORNER); 
}

function createBorders(thickness)
{
    fill(0, 0, 100); 
    noStroke();

    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}