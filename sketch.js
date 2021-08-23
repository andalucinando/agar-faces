var blob; 
var landscape; 
var blobs = []; 



function setup () {

  createCanvas(1000, 1000); 


  blob = new Blob(0, 0, 64);
  for (var i = 0; i < 200; i++) {
    var x = random(-width, width);
    var y = random(-height, height);
    blobs[i] = new Blob(x, y, 16);
  }
}

function draw() {


  // how to set that the blob moves through the landscape
  translate(width/2 - blob.pos.x, height/2 - blob.pos.y); 

  // set the background of the image 

  imageMode(CENTER); 
  image(landscape, width/2, height/2, width, height)
  blob.show(); 
  blob.update(); 



  // setting the blobs

  for (var i=0; i < blobs.length; i++){
    blobs[i].show(); 

  }
}

// close draw


function preload(){
//load the background image
landscape = loadImage('./Images/photo-1628498188873-579210ce622e.jpg')

}