class _DevMode {
	constructor() {
		this.dev = false;
		this.framed = false;
	}

	setMode(mode) {
		this.mode = mode;
	}

	getOption(optionName) {
		const formElement = document.getElementById(`input_dev_${optionName}`);
		return formElement.checked;
	}

	init() {
		if (location.search === '?dev') {
			this.dev = true;
			hideIfDevMode();
		}
		else {
			hideIfNotDevMode();
		}

		if (location.search === '?framed') {
			this.framed = true;
			hideUnframed();
		}
	}

	addCollisionDev(x, y) {
		addCollisionDev(x, y);
	}

	addHerbeDev(x, y) {
		addHerbeDev(x, y);
	}
}

function addCollisionDev(x, y) {
	if (!window.boolPressC) {
		window.Cx1 = x;
		window.Cy1 = y;
	}
	else {
		// x2,y2 representent la taille de l objet et non sa coordonnee
		window.Cx2 = x - window.Cx1;
		window.Cy2 = y - window.Cy1;

		const chaine = `grille.ajouteObjet(new Objet("Collision",${window.Cx1}, ${window.Cy1}, ${window.Cx2},${window.Cy2}));<br>`;
		document.getElementById('loaderOutput').innerHTML += chaine;
	}
	window.boolPressC = !window.boolPressC;
}

function addHerbeDev(x, y) {
	if (!window.boolPressH) {
		window.Hx1 = x;
		window.Hy1 = y;
	}
	else {
		// x2,y2 representent la taille de l objet et non sa coordonnee
		window.Hx2 = x - window.Hx1;
		window.Hy2 = x - window.Hy1;
		const chaine = `this.grille.ajouteHerbe(new Herbe(${window.Hx1}, ${window.Hy1}, ${window.Hx2}, ${window.Hy2}, 5));<br>`;
		document.getElementById('loaderOutput').innerHTML += chaine;
	}
	window.boolPressH = !window.boolPressH;
}

function hideIfDevMode() {
	hideAllFromClass('hideIfDevMode');
}

function hideIfNotDevMode() {
	hideAllFromClass('hideIfNotDevMode');
}

function hideUnframed() {
	hideAllFromClass('hideIfIframed');
	// remove the 8px margin of many browsers
	document.getElementsByTagName('body')[0].style.margin = '0px';
}

function hideAllFromClass(className) {
	const hideElements = document.getElementsByClassName(className);
	Array.from(hideElements).forEach((elem) => {
		elem.style.display = 'none';
	});
}

const DevMode = new _DevMode();
export default DevMode;
