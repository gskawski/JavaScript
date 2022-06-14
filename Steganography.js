var shownImg = new SimpleImage("dinos.png");
print(shownImg.getPixel(100,100));
var hiddenImg = new SimpleImage("drewRobert.png");
print(hiddenImg.getPixel(100,100));

var S1 = chop2hide(shownImg);
print(S1.getPixel(100,100));
var H1 = shift(hiddenImg);
print(H1.getPixel(100,100));
var final = combine(S1,H1);
print(final.getPixel(100,100));
print(final);

function chop2hide(shown) {
    //get first 4 of shown
    for (var pixel of shown.values()) {
        var newRed = (Math.floor(pixel.getRed()/16))*16;
        var newGreen = (Math.floor(pixel.getGreen()/16))*16;
        var newBlue = (Math.floor(pixel.getBlue()/16))*16;
        pixel.setRed(newRed);
        pixel.setGreen(newGreen);
        pixel.setBlue(newBlue);
    }
    return shown;
}

function shift(hidden) {
    //get first 4 of hidden
    for (var pixel of hidden.values()) {
        var newRed = (Math.floor(pixel.getRed()/16));
        var newGreen = (Math.floor(pixel.getGreen()/16));
        var newBlue = (Math.floor(pixel.getBlue()/16));
        pixel.setRed(newRed);
        pixel.setGreen(newGreen);
        pixel.setBlue(newBlue);
    }
    return hidden;
}

function combine(shown, hidden) {
    for (var pixel of shown.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        var pixelH = hidden.getPixel(x,y);
           pixel.setRed(pixel.getRed()+pixelH.getRed());
           pixel.setGreen(pixel.getGreen()+pixelH.getGreen());
           pixel.setBlue(pixel.getBlue()+pixelH.getBlue());
        }
        return shown
    }

//var oldImg = new SimpleImage("universe.jpg");
//print(shownImg.getPixel(423,333));
//print(oldImg.getPixel(423,333));
