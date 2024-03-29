

function Blob(x, y, r) {
    
    this.pos = createVector(x, y);
    this.r = r;
    this.vel = createVector(0, 0);
    this.speed = 20; 
    this.blob = blob; 
    this.smallBlob = this.smallBlob; 

  
// create a vector (arrow that points from the mouse to the blob and set the 
// direction of the blob, and moves the background in return )

    




    this.update = function() {

    // here we substract the center of the windows to not overlap

      var newvel = createVector(mouseX - width / 2, mouseY - height / 2);
      newvel.setMag(this.speed);
      this.vel.lerp(newvel, 0.9);
      this.pos.add(this.vel);
    };




  // the function that eats, if the radius of the blob is bigger than the blobs when they colide it eats it

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
  
    this.show = function() {

    //
    
      //fill('red') 

      //ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
      if (this.type === "spaceship") {
        image(this.image, this.pos.x, this.pos.y, this.r*2, this.r*2)
      }
      if (this.type === "smallerblob") {
        image(this.image, this.pos.x, this.pos.y, this.r*2, this.r*2)

      }
    };

  }

  