import {monDresseur} from '../utils/globals';
import BUTTON from '../gameloop/touches';

function keyPress(event) {
		    var touche = event.keyCode;
		    monDresseur.actions(touche);
}

function releaseKey(event){
	monDresseur.dresseur.position = 5;
}

function init_inputs(){
	window.addEventListener("keydown", function(e) {
	    // space and arrow keys
	    if([BUTTON.UP, BUTTON.DOWN, BUTTON.LEFT, BUTTON.RIGHT, BUTTON.PAUSE, BUTTON.CONFIRM, BUTTON.BACK, BUTTON.C, BUTTON.H].indexOf(e.keyCode) > -1) {	//pour les touches directionnelles
	        e.preventDefault();		//enlever comportement par default
					keyPress(e);
	    }
	}, false);

	window.addEventListener("keyup", function(e) {
	   releaseKey(e);
	}, false);
}


export default init_inputs;
