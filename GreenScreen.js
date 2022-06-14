var img1 = new SimpleImage("drewRobert.png");
var img2 = new SimpleImage("dinos.png");
var img3 = new SimpleImage(1920,1080);

//look at pixel 1 of img1 and if green take pixel 1 of img 2

for (var pixel1 of img1.values()) {  
  if (pixel1.getGreen() > pixel1.getRed() + pixel1.getBlue()) {    
    var pixel1x = pixel1.getX();    
    var pixel1y = pixel1.getY();
    var pixel2 = img2.getPixel(pixel1x, pixel1y);
    img3.setPixel(pixel1x, pixel1y, pixel2);
  }
  else { 
    img3.setPixel(pixel1.getX(),pixel1.getY(),pixel1);
  }
}

print(img3);

//problem is upper left is yellow instead of red
//magenta is 255, 0, 255
//yellow is 255, 255, 0

var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2) {
      px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
    else { 
        if (x >= img.getWidth()/2) {
    px.setGreen(255);
        }
    }
}
print (img);

print(img.getPixel(1,1))
print(img.getPixel(101,1))
