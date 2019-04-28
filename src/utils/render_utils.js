function getContext(){
    return document.getElementById("ecran").getContext("2d");
}

function animate(){
	setInterval(function () {render()}, monDresseur.fps);
}
