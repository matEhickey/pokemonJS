import render from '../gameloop/main';

function getCanvas(){
    return document.getElementById("ecran");
}
function getContext(){
    return document.getElementById("ecran").getContext("2d");
}

function animate(player){
	setInterval(function () {render(player)}, player.fps);
}

export {getCanvas, getContext, animate};
