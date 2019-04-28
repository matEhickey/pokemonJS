import Carte, {ChargeCarte} from '../UI/Carte';
import {animate, getContext} from '../utils/render_utils';
import {monDresseur} from '../utils/globals';
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


	var sacha_img = document.createElement("img");
	sacha_img.src = sacha;
	monDresseur.setTexture(sacha_img);
	monDresseur.setGrille(0);

	monDresseur.addPokemon(new Pokemon(25,5,0,100,20,15,15));
	var sacha_img = document.createElement("img");
	sacha_img.src = sacha;
	monDresseur.texture= sacha;

	monDresseur.carte = new Carte();
	ChargeCarte(monDresseur.carte);

	posX=0;
	posY=0;

	monDresseur.menu = new Menu()

	init_inputs();
	animate();

}
