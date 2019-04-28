var canvas;
var context;
var pokedex;
var monDresseur;//controler contenant les modes de controle et le dresseur du perso
var combat;
var carte;


function init(){

	canvas = document.getElementById("ecran");
	context = getContext();

	context.save();
	context.fillStyle="#000000";
	context.fillText("Chargement",250,250);

	context.restore();

	pokedex = new Pokedex();
	pokedex.chargePokedex();


	carte = new Carte();
	ChargeCarte();

	monDresseur = new PlayerController(new Dresseur("Sacha",0,0,1,0));		//controleur principal, surement l objet le plus important
	monDresseur.setTexture(document.getElementById('sacha'));
	monDresseur.setGrille(0);

	monDresseur.addPokemon(new Pokemon(25,5,0,100,20,15,15));
	monDresseur.texture= document.getElementById('sacha');

	posX=0;
	posY=0;

	animation = 1;
	position = 5;//idle

	mode = 0;

	monDresseur.menu = new Menu()

	init_inputs();
	animate();

}

window.onload = init;
