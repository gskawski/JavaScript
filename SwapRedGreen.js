function swapRedGreen(pixel) {
  var red = pixel.getRed();
  var green = pixel.getGreen();
  pixel.setRed(green);
  pixel.setGreen(red);
}

var img = new SimpleImage("drewRobert.PNG");

for (var pixel of img.values()) {
    swapRedGreen(pixel);
}

print(img);
