var blob;

var blobs = [];
var zoom = 1;
let dingdong; 

function preload (){

}



function setup() {

  dingdong = loadSound('./mixkit-chewing-something-crunchy-2244.mp3')


  // creating the canvas

  createCanvas(1500, 800);



  // for the sounds

  

  // creating the main blob

  blob = new Blob(0, 0, 64);


  // creating the mini-blobs and displaying how many do we want

  for (var i = 0; i < 100; i++) {

  // incrememnted the space where the blobs where to make it a much open world
    var x = random(-width, width*7);
    var y = random(-height, height*7);

    // displaying the size of the blob

    blobs[i] = new Blob(x, y, 50);
  }

}

function draw() {

  // the background of the canvas

  background('red');

    // shif the origin, shif the view


  translate(width / 2, height / 2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  for (var i = blobs.length - 1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }

  blob.show();

  // calling the update function
  blob.update();
}







function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html('pause music');
  } else {
    song.pause();
    button.html('play music');
  }
}