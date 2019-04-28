window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {	//pour les touches directionnelles
        e.preventDefault();		//enlever comportement par default
    }
    keyPress(e);
}, false);

window.addEventListener("keyup", function(e) {
   releaseKey(e);
}, false);
