function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(100);
  colorMode(HSL);
}

function draw() {
  background('black');
  text ('HOPELESS.', windowWidth/2, windowHeight/2);
  fill (255);
  
  if (mouseIsPressed) {
    textSize(5);
  }

  
    
}