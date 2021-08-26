function Drop (x, y, r) {
    
    this.pos = this.blob.pos; 
    this.r = r;
    this.vel = createVector(0, 0);
    this.speed = 20;
    this.toDelete = false;
  
    this.show = function() {
      noStroke();
      fill('red');
      circle(blob.pos.x)
    };
  
    this.evaporate = function() {
      this.toDelete = true;
    };
  
    this.eats = function(other) {
        var distance = p5.Vector.dist(this.pos, other.pos);
        if (distance < this.r + other.r) {
          // we need to multiply it with PI to understand the PI is a mathematical constant with the value  ratio of the
          // circumference of a circle to its diameter
  
          var sum = PI * this.r * this.r + PI * other.r * other.r;
          
  
  
          // devide it by the square root
  
          this.r = sqrt(sum / PI);
          return true;
             
        } else {
          return false;
        }
  
  
  
      };
  
    this.move = function(smallBlob) {
      this.y = this.y - 5;
    };
  }
  