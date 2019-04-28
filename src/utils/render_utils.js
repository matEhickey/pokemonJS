import {monDresseur} from './globals';
import render from '../gameloop/main';

function getCanvas(){
    return document.getElementById("ecran");
}
function getContext(){
    return document.getElementById("ecran").getContext("2d");
}

function animate(){
	setInterval(function () {render()}, monDresseur.fps);
}

export {getCanvas, getContext, animate};
