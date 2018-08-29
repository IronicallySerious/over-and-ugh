var canvas = document.getElementById('GameWindow');
var context2D = canvas.getContext('2d');

class Renderer
{
	submit(image, width, height) {
		context2D.drawImage(image, width, height);
	}
}
