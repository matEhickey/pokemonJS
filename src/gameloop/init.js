// global location

import PlayerController from './PlayerController';
import Dresseur from '../map/Dresseur';

import Carte, { ChargeCarte } from '../UI/Carte';
import { animate, getContext } from '../utils/render';
import Pokemon from '../combat/Pokemon';
import Menu from '../UI/Menu';

import DevMode from '../modes/DevMode';
import initInput from './inputs';
import sacha from '../../assets/imgs/sacha.png';

export default function init() {
	DevMode.init();

	const context = getContext();

	context.save();
	context.fillStyle = '#000000';
	context.fillText('Chargement', 250, 250);
	context.restore();

	const player = new PlayerController(new Dresseur('Sacha', 0, -10, 0, 0));

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
