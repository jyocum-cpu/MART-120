var playerBat;
var sickBats = [];
var cures = [];
var score = 0;
var gameOver = false;
var MAX_SICK_BATS = 10;
var MAX_CURES = 5;


function Bat(x, y, isSick) {
  this.x = x;
  this.y = y;
  this.r = 15; 
  this.isSick = isSick || false;
  this.speedX = this.isSick ? random(-2, 2) : 0;
  this.speedY = this.isSick ? random(-2, 2) : 0;
  this.color = this.isSick ? color(255, 150, 150) : color(100, 150, 255); // Reddish for sick, bluish for healthy

  this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
   
    if (this.isSick) {
        fill(255);
        ellipse(this.x, this.y, this.r * 0.5, this.r * 0.5);
    }
  };

  this.move = function() {
    if (this.isSick) {
      this.x += this.speedX;
      this.y += this.speedY;

      
      if (this.x < this.r || this.x > width - this.r) {
        this.speedX *= -1;
      }
      if (this.y < this.r || this.y > height - this.r) {
        this.speedY *= -1;
      }
    } else {
      
      if (keyIsDown(LEFT_ARROW)) this.x -= 5;
      if (keyIsDown(RIGHT_ARROW)) this.x += 5;
      if (keyIsDown(UP_ARROW)) this.y -= 5;
      if (keyIsDown(DOWN_ARROW)) this.y += 5;

      
      this.x = constrain(this.x, this.r, width - this.r);
      this.y = constrain(this.y, this.r, height - this.r);
    }
  };
}


function Cure(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10; 
  this.color = color(0, 255, 0); 

  this.display = function() {
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.r * 2, this.r * 2); 
  };
}

function setup() {
  createCanvas(600, 400);
  playerBat = new Bat(width / 2, height / 2);

  
  for (var i = 0; i < MAX_SICK_BATS; i++) {
    sickBats.push(new Bat(random(width), random(height), true));
  }

  
  for (var i = 0; i < MAX_CURES; i++) {
      cures.push(new Cure(random(width), random(height)));
  }
}

function draw() {
  background(220, 220, 255); 

  if (!gameOver) {
    playerBat.move();
    playerBat.display();

    
    for (var i = sickBats.length - 1; i >= 0; i--) {
      sickBats[i].move();
      sickBats[i].display();
      
      
      var d = dist(playerBat.x, playerBat.y, sickBats[i].x, sickBats[i].y);
      if (d < playerBat.r + sickBats[i].r) {
        gameOver = true; 
      }
    }

    
    for (var i = cures.length - 1; i >= 0; i--) {
        cures[i].display();
        var d = dist(playerBat.x, playerBat.y, cures[i].x, cures[i].y);
        if (d < playerBat.r + cures[i].r) {
            score++;
            cures.splice(i, 1); 
            
            cures.push(new Cure(random(width), random(height)));
            if (sickBats.length > 0) {
                sickBats.pop(); 
            }
        }
    }

    
    fill(0);
    textSize(16);
    textAlign(LEFT);
    text('Cures Collected: ' + score, 10, 20);
    text('Healthy Bats Needed: ' + sickBats.length, 10, 40);
    textSize(12);
    text('Use arrow keys to move. Avoid red bats, collect green squares.', 10, height - 10);
    
    
    if (sickBats.length === 0 && cures.length > 0) {
        gameOver = true;
        
    }

  } else {
   
    background(50, 150); 
    fill(255);
    textSize(32);
    textAlign(CENTER);
    if (sickBats.length === 0) {
        text("You Cured the Colony! Victory!", width / 2, height / 2);
    } else {
        text("Game Over! The Virus Spread.", width / 2, height / 2);
    }
    textSize(16);
    text("Press R to Restart", width / 2, height / 2 + 40);
  }
}


function keyPressed() {
    if (keyCode === 82 && gameOver) { 
        restartGame();
    }
}

function restartGame() {
    playerBat = new Bat(width / 2, height / 2);
    sickBats = [];
    cures = [];
    score = 0;
    gameOver = false;
    for (var i = 0; i < MAX_SICK_BATS; i++) {
        sickBats.push(new Bat(random(width), random(height), true));
    }
    for (var i = 0; i < MAX_CURES; i++) {
        cures.push(new Cure(random(width), random(height)));
    }
}