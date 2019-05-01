import PlayerController from '../gameloop/PlayerController';
import Dresseur from '../map/Dresseur';

import Carte, {ChargeCarte} from '../UI/Carte';
import {animate, getContext} from '../utils/render_utils';
import Pokemon from '../combat/Pokemon';
import Menu from '../UI/Menu';

import init_inputs from '../gameloop/inputs';
import sacha from '../../assets/imgs/sacha.png';


export default function init(){

	var canvas = document.getElementById("ecran");
	var context = getContext();

	context.save();
	context.fillStyle="#000000";
	context.fillText("Chargement",250,250);
	context.restore();

	var player = new PlayerController(new Dresseur("Sacha",0,0,1,0));

	var sacha_img = document.createElement("img");
	sacha_img.src = sacha;
	player.setTexture(sacha_img);
	player.setGrille(0);

	player.addPokemon(new Pokemon(25,5,0,100,20,15,15));
	var sacha_img = document.createElement("img");
	sacha_img.src = sacha;
	player.texture= sacha;

	player.carte = new Carte(player);
	ChargeCarte(player);

	player.menu = new Menu(player);
	
	player.loadObjects();

	init_inputs(player);
	animate(player);

}
