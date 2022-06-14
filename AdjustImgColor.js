var img = new SimpleImage("astrachan.jpg");
print(img);

for (var pixel of img.values()) {
    if (pixel.getX() <= 80) {
    pixel.setRed(pixel.getRed()*2);
}
else {
    pixel.setGreen(pixel.getGreen()*2);
}
}
print(img);
