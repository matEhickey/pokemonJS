// global location

import PlayerController from './PlayerController';
import Dresseur from '../map/Dresseur';

import Carte, { ChargeCarte } from '../UI/Carte';
import { animate, getContext } from '../utils/render';
import Pokemon from '../combat/Pokemon';
import Menu from '../UI/Menu';

import initInput from './inputs';
import sacha from '../../assets/imgs/sacha.png';

function checkMode() {
	if (location.search === '?framed') {
		window.mode = 'framed';
		// hide all but the canvas
		const hideElements = document.getElementsByClassName('hideIfIframed');
		Array.from(hideElements).forEach((elem) => {
			elem.setAttribute('hidden', true);
		});
		// remove the 8px margin of many browsers
		document.getElementsByTagName('body')[0].style.margin = '0px';
	}
	else if (location.search === '?dev') {
		window.mode = 'dev';
	}
	else {
		window.mode = 'normal';
	}

	switch (window.mode) {
	case 'framed':
		console.log('framed mode');
		break;
	case 'dev':
		console.log('dev mode');
		break;
	case 'normal':
		console.log('normal mode');
		break;
	default:
		console.log('init.checkMode: no compatible option');
	}
}

export default function init() {
	checkMode();

	const context = getContext();

	context.save();
	context.fillStyle = '#000000';
	context.fillText('Chargement', 250, 250);
	context.restore();

	const player = new PlayerController(new Dresseur('Sacha', 0, 0, 1, 0));

	const sachaImg = document.createElement('img');
	sachaImg.src = sacha;
	player.setTexture(sachaImg);
	player.setGrille(0);

	player.addPokemon(new Pokemon(25, 5, 0, 100, 20, 15, 15));

	player.carte = new Carte(player);
	ChargeCarte(player);

	player.menu = new Menu(player);

	player.loadObjects();

	initInput(player);
	animate(player);
}
