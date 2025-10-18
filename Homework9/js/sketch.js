function setup() {
  
  createCanvas(400, 400);

  background(220);
  
  noStroke();

  fill(50, 20, 20);
  
  rect(width / 2 - 125, height / 2 - 100, 250, 200);

  triangle(width / 2 - 125, 100, width / 2 + 125, 100, width / 2, 50);
  
  triangle(width / 2 - 125, 100, width / 2 - 125, 300, width / 2 - 165, 250);
  
  triangle(width / 2 + 125, 100, width / 2 + 125, 300, width / 2 + 165, 250);
  
  fill(255, 230, 196);
  
  rectMode(CENTER);
  
  rect(width / 2, height / 2 + 25, 200, 250);


  fill(255); 
  
  rect(160, 180, 50, 40); 
  
  rect(240, 180, 50, 40); 
  
  fill(0);
  
  ellipse(165, 185, 5, 5); 
  

  ellipse(245, 185, 5, 5); 
  
  fill("pink"); 
  
  arc(width / 2, 250, 80, 20, 0, PI);
  
  fill(255, 230, 196);
  
  rectMode(CORNER);
  
  rect(width / 2 - 2, 70, 5, 30);
  
  textSize(16);
  
  textAlign(RIGHT, BOTTOM);
  
  fill(0);
  
  text("Jadynn Yocum", width - 10, height - 10);
}

function draw() {
}