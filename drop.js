function Drop (x, y, r) {
    
    this.pos = [100,100];
    this.r = r;
    this.vel = createVector(0, 0);
    this.speed = 20;
    this.toDelete = false;
  
    this.show = function() {
      noStroke();
      circle(this.pos[0], this.pos[1], 100); 
      fill('red');
   
    };
  
    this.evaporate = function() {
      this.toDelete = true;
    };
  

  
    this.move = function() {

      this.pos = this.blob; 
      this.y = this.y - 5;
      console.log("moving")
    };
  }
  
  