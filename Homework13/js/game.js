var characterX = 100;
var characterY = 100;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;


var obstacleXs = [];
var obstacleYs = [];
var obstacleSizes = [];
var obstacleColors = []; 
var obstacleXSpeeds = [];
var obstacleYSpeeds = [];
var obstacleCount = 5;


var clickedObstaclesX = [];
var clickedObstaclesY = [];
var clickedObstacleSize = 20;


function setup()
{
    createCanvas(500, 600);
    
    colorMode(HSB, 360, 100, 100);
    
    
    for (var i = 0; i < obstacleCount; i++) {
        obstacleXs[i] = random(width);
        obstacleYs[i] = random(height);
        
        obstacleXSpeeds[i] = random(1, 4);
        obstacleYSpeeds[i] = random(1, 4);
       
        obstacleSizes[i] = random(15, 40);
        
        obstacleColors[i] = random(360);
    }
    
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

    
    for (var i = 0; i < obstacleCount; i++) {
        
        fill(obstacleColors[i], 80, 80); 
        noStroke();
        
        
        circle(obstacleXs[i], obstacleYs[i], obstacleSizes[i]);

        
        obstacleXs[i] += obstacleXSpeeds[i];
        obstacleYs[i] += obstacleYSpeeds[i];

        
        if (obstacleXs[i] > width) {
            obstacleXs[i] = 0;
        } else if (obstacleXs[i] < 0) {
            obstacleXs[i] = width;
        }

        if (obstacleYs[i] > height) {
            obstacleYs[i] = 0;
        } else if (obstacleYs[i] < 0) {
            obstacleYs[i] = height;
        }
    }
    
   
    for (var i = 0; i < clickedObstaclesX.length; i++) {
        fill(30, 60, 90); 
        stroke(0, 0, 100); 
        strokeWeight(2);
        
        triangle(clickedObstaclesX[i], clickedObstaclesY[i] - clickedObstacleSize/2,         
                 clickedObstaclesX[i] - clickedObstacleSize/2, clickedObstaclesY[i] + clickedObstacleSize/2,   
                 clickedObstaclesX[i] + clickedObstacleSize/2, clickedObstaclesY[i] + clickedObstacleSize/2);   
    }
    noStroke();
    textAlign(LEFT, TOP); 

    if(characterX > width && characterY > height - 50) 
    {
        fill(60, 100, 100); 
        textSize(36);
        textAlign(CENTER, CENTER); 
        text("You Win!", width/2, height/2);
    }
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

    clickedObstaclesX.push(mouseX);
    clickedObstaclesY.push(mouseY);
}