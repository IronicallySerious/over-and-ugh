class ResourceLoader
{
	loadImage(path) {
		var back = new Image();
		back.src = path;

		return back;
	}
};
