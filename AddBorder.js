function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}

function addBorder(image,thickness) {
    var img = new SimpleImage(image);
    var width = img.getWidth();
    var height = img.getHeight();
    var thck = thickness;
    for (var pixel of img.values()) {
        if (pixel.getX() <= thck || pixel.getX() >= width - thck || pixel.getY() <= thck || pixel.getY() >= height - thck) {
            setBlack(pixel);
        }
    }
    print(img)
}

addBorder("drewgreen.png",10)
