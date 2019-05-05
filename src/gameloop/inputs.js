import BUTTON from './touches';

function keyPress(player, event) {
	player.actions(event.keyCode);
}

function releaseKey(player) {
	player.dresseur.idle = true;
}

function initInput(player) {
	window.addEventListener('keydown', (e) => {
		if (
			[BUTTON.UP,
				BUTTON.DOWN,
				BUTTON.LEFT,
				BUTTON.RIGHT,
				BUTTON.PAUSE,
				BUTTON.CONFIRM,
				BUTTON.BACK,
				BUTTON.C,
				BUTTON.H].indexOf(e.keyCode) > -1) {
			e.preventDefault();
			keyPress(player, e);
		}
	}, false);

	window.addEventListener('keyup', (e) => {
		releaseKey(player, e);
	}, false);
}


export default initInput;
