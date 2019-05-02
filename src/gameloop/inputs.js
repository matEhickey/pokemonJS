import BUTTON from '../gameloop/touches';

function keyPress(player, event) {
  player.actions(event.keyCode);
}

function releaseKey(player, event){
	player.dresseur.position = 5;
}

function initInput(player){
	window.addEventListener("keydown", function(e) {
	    // space and arrow keys
	    if([BUTTON.UP, BUTTON.DOWN, BUTTON.LEFT, BUTTON.RIGHT, BUTTON.PAUSE, BUTTON.CONFIRM, BUTTON.BACK, BUTTON.C, BUTTON.H].indexOf(e.keyCode) > -1) {	//pour les touches directionnelles
	        e.preventDefault();		//enlever comportement par default
					keyPress(player, e);
	    }
	}, false);

	window.addEventListener("keyup", function(e) {
	   releaseKey(player, e);
	}, false);
}


export default initInput;
