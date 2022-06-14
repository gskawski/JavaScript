var img = new SimpleImage("chapel.png");
print(img);
var x = img.getPixel(28,40);
print(x);
function timestwo(x) {
    var ans = 2 * x
    return ans
};
print(timestwo(8));

var img = new SimpleImage(200,200);
print(img);
for (var pixel of img.values()) {
    var RedP = 255;
    var GreenP = 255;
    pixel.setRed(RedP);
    pixel.setGreen(GreenP);
};
print(img);
