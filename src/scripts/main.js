var canvas = document.getElementById('GameWindow');
var context2D = canvas.getContext('2d');

var image = resource_loader.loadImage("res/lul.png");
context2D.drawImage(image, 10, 10);
