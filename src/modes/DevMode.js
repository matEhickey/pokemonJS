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
