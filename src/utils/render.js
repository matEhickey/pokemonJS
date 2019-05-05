import render from '../gameloop/main';

function getCanvas() {
	return document.getElementById('ecran');
}
function getContext() {
	return document.getElementById('ecran').getContext('2d');
}

function animate(player) {
	const renderFunction = () => { render(player); };
	setInterval(renderFunction, player.fps);
}

export { getCanvas, getContext, animate };
