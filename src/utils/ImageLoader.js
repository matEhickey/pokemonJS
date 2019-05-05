class ImageLoader {}

ImageLoader.load = (img) => {
	const imgElem = document.createElement('img');
	imgElem.src = img;
	return imgElem;
};

export default ImageLoader;
