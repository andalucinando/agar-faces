var mode; 
let testImage;
var blob;
let spaceship;
var blobBackground; 
var blobs = [];
var smallImage; 
var zoom = 1;
let backgroundImage;
let counter = 0;  
let intro; 
var drops = [];
let shooter; 




function preload () {

  backgroundImage = loadImage("Images/photo-1628498188873-579210ce622e.jpg")
  spaceship = loadImage("Images/spiked ship3.small.blue_.PNG")
  smallImage = loadImage("Images/Asteroid Brown.png")
  intro = loadImage("Images/stars wars shit.gif")
  shooter = loadImage("Images/SHOOTERstart.gif")

  

}



function setup() {

mode = 0; 
createCanvas(windowHeight,windowWidth); 
background('red')
textSize(50); 

console.log(windowHeight, windowWidth)

  // creating the canvas

  createCanvas(windowWidth, windowHeight);



  // creating the main blob

  blob = new Blob(0, 0, 100);
  blob.type = "spaceship"; 
  blob.image = spaceship; 

  // drops 

  


  // creating the mini-blobs and displaying how many do we want

  for (var i = 0; i < 2000; i++) {
 
  // incrememnted the space where the blobs where to make it a much open world
    var x = random(-width, width*80);
    var y = random(-height, height*80);

    // displaying the size of the blob

    let smallBlob = new Blob(x, y, 300);
    smallBlob.image = smallImage; 
    blobs[i] = smallBlob; 
    smallBlob.type = "smallerblob"; 
  }

}

function draw() {



clear(); 

if (mode===0){

  background(intro, 0, 0, windowWidth, windowHeight)
  
  //
  textSize(30)
  textStyle(BOLD)
  text('SPACE SHOOTERS: THE GAME', 1180, 700,);
  text('PRESS ENTER', 1300, 750,);


  //
 
  


}


if (mode===1){




  // the background of the canvas

  image(backgroundImage, 0, 0, windowWidth, windowHeight)

// text container settings MAIN INTRODUCTION TEXT

    let s = 'WELCOME TO AGAR.IO FOR FACES';
    fill('#ED225D');
    textStyle(BOLD)
    textSize(30)
    text(s, 50, 30, 900, 900); // Text wraps within text box


    let Y = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    fill('#ED225D');
    textStyle(ITALIC)
    textSize(18)
    text(Y, 50, 70, 600, 900); // Text wraps within text box


    //counter
    let counterText = "Is your Score, GET THEM ALL"
    text(counter + "  " + counterText, 50, 260, 600, 900);
    textSize(23)
    



 // shif the origin, shif the view


  translate(width / 2, height / 2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);


  // setting when the blob eats another blob its size and the speed
  for (var i = blobs.length - 1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 2)
      counter += 1;
    }
  }




  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    console.log(drops)
    drops[i].move();
  
    //for (var j = 0; j < blobs.length; j++) {
      //if (drops[i].eats(blobs[j])) {
       // blobs[j].evaporate();
       
       //drops[i].evaporate();
      }
 

  
  for (var i = drops.length - 1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
  





blob.show();

  // calling the update function

blob.update();



}




}

function keyPressed(){

  if(keyCode === ENTER){
    mode=1; 
  }

  if (key === ' ') {
    var drop = new Drop(blobs.x, height);
    drops.push(drop);
  }

  if(keyCode === 82) {
    mode=0;
  
 }

}



