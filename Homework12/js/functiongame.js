var playerX = 100;
var playerY = 100;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var obstacle1X;
var obstacle1Y;
var obstacle1XSpeed;
var obstacle1YSpeed;

var obstacle2X;
var obstacle2Y;
var obstacle2XSpeed;
var obstacle2YSpeed;

var mouseObjectX;
var mouseObjectY;

function setup() {
    createCanvas(500, 600);
    colorMode(HSB, 360, 100, 100);
    createPlayer(200, 350);
    initializeObstacles();
}

function draw() {
    background(240, 50, 20);
    drawBorders(10);
    drawExit();
    drawPlayer();
    movePlayer();
    drawMouseObject();
    drawObstacles();
    moveObstacles();
    checkWinCondition();
}


function createPlayer(x, y) {
    playerX = x;
    playerY = y;
}

function drawPlayer() {
    fill(0, 80, 90); 
    stroke(0, 0, 100); 
    strokeWeight(3);
    rectMode(CENTER);
    rect(playerX, playerY, 25, 25);
    rectMode(CORNER); 
}

function movePlayer() {
    if(keyIsDown(w)) {
        playerY -= 5;
    }
    if(keyIsDown(s)) {
        playerY += 5;
    }
    if(keyIsDown(a)) {
        playerX -= 5;
    }
    if(keyIsDown(d)) {
        playerX += 5;
    }
}


function initializeObstacles() {
    obstacle1X = 30;
    obstacle1Y = 50;
    obstacle1XSpeed = Math.floor(Math.random() * 5) + 1;
    obstacle1YSpeed = Math.floor(Math.random() * 5) + 1;

    obstacle2X = 450;
    obstacle2Y = 150;
    obstacle2XSpeed = Math.floor(Math.random() * 5) + 1;
    obstacle2YSpeed = Math.floor(Math.random() * 5) + 1;
}

function drawObstacles() {
    fill(120, 80, 70); 
    noStroke();
    rect(obstacle1X, obstacle1Y, 20, 20);

    fill(0, 90, 90); 
    circle(obstacle2X, obstacle2Y, 30);
}

function moveObstacles() {
    obstacle1X += obstacle1XSpeed;
    obstacle1Y += obstacle1YSpeed;
    if(obstacle1X > width || obstacle1X < 0) {
        obstacle1XSpeed *= -1;
    }
    if(obstacle1Y > height || obstacle1Y < 0) {
        obstacle1YSpeed *= -1;
    }
    
    obstacle2X += obstacle2XSpeed;
    obstacle2Y += obstacle2YSpeed;
    if(obstacle2X > width || obstacle2X < 0) {
        obstacle2XSpeed *= -1;
    }
    if(obstacle2Y > height || obstacle2Y < 0) {
        obstacle2YSpeed *= -1;
    }
}


function drawBorders(thickness) {
    fill(0, 0, 100); 
    noStroke();
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height-50);
}

function drawExit() {
    textSize(16);
    fill(0, 0, 100); 
    text("EXIT", width-50, height-50);
}

function checkWinCondition() {
    if(playerX > width && playerY > height - 50) {
        displayWinMessage();
    }
}

function displayWinMessage() {
    fill(60, 100, 100); 
    noStroke();
    textSize(36);
    textAlign(CENTER, CENTER); 
    text("You Win!", width/2, height/2);
}

function mouseClicked() {
    mouseObjectX = mouseX;
    mouseObjectY = mouseY;
}

function drawMouseObject() {
    fill(30, 60, 90); 
    stroke(0, 0, 100); 
    strokeWeight(2);
    triangle(mouseObjectX, mouseObjectY - 15,         
             mouseObjectX - 15, mouseObjectY + 15,   
             mouseObjectX + 15, mouseObjectY + 15);   
    noStroke();
    textAlign(LEFT, TOP); 
}