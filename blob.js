function blob (x, y, r) {
this.pos = createVector(x, y, r); 
this.r = r; 


this.update = function(){
    var velo = createVector(mouseX - width / 2, mouseY - height / 2); 
    velo.sub(this.pos); 
    velo.setMag(3); 
    this.pos.add(velo); 
}

this.show = function(){
    fill(255); 
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2 );   
}
}