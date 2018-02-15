var canvas;
var context;


var pokedex;

var mode; //0 = deplacement    1 = hud    2 = combat

var menu;//pour afficher le menu quand en pause

var monDresseur;//controler contenant les modes de controle et le dresseur du perso

var walkable;//bool

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



	monDresseur = new Controller(new Dresseur("Sacha",0,0,1,0));		//controleur principal, surement l objet le plus important
	monDresseur.setTexture(document.getElementById('sacha'));
	monDresseur.setGrille(0);

	monDresseur.addPokemon(new Pokemon(25,5,0,100,20,15,15));
	monDresseur.texture= document.getElementById('sacha');

	posX=0;
	posY=0;

	animation = 1;
	position = 5;//idle

	mode = 0;


	menu = new Menu();

	animate();
}

function getContext(){
    return document.getElementById("ecran").getContext("2d");
}

function animate(){
	var myVar=setInterval(function () {render()}, monDresseur.fps);// vitesse
}




function render(){	//Moteur d affichage (boucle)

	context.save();
	context.clearRect(0, 0, canvas.width, canvas.height);

	monDresseur.grille.drawTerrain();

	monDresseur.grille.afficheBatiments(monDresseur.dresseur.posX,monDresseur.dresseur.posY);


	monDresseur.grille.drawDresseur(monDresseur.dresseur.posX,monDresseur.dresseur.posY);// Dessines tout les dresseurs   posXY sont les coord du controller


			if(monDresseur.mode != 2){ //si on est pas en combat

					//test colision nextCase
					monDresseur.calculNextCase();
					var nextCaseX = monDresseur.nextCaseX;
					var nextCaseY = monDresseur.nextCaseY;
					walkable = monDresseur.grille.isWalkable(nextCaseX,nextCaseY);

					//dessine joueur
					monDresseur.grille.drawMonDresseur();


					//console.log(monDresseur.getOrientation());


			}//fin si mode != combat

		switch(monDresseur.mode){ //--------------------------------------------------Affichage
			case(0):
				monDresseur.grille.checkZonesDresseurs();
				monDresseur.grille.checkWalkOnPorte();

			break;
			case(1)://hud

				switch(monDresseur.hudMode){
					case(0)://pause
						//console.log("jeu en pause");
						menu.afficheMenu();

					break;

					case(1)://discussion
						//console.log("Discussion:"+discussion);
						context.font="20px Georgia";
						context.fillStyle = monDresseur.couleurPrefere;
						context.fillRect(50,480,800,150);
						context.fillStyle="#ffffff";
						context.fillText(monDresseur.discussion,60,510,780);
					break;
					case(2)://mode pokedex
						menu.displayPokedex();
						break;
					case(3)://mode pokemon
						menu.displayPokemons(monDresseur.dresseur.pokemons);

					break;
					case(4)://mode inventaire
							menu.displayInventaire();
					break;
					case(5)://mode infos
							menu.displayInfosJoueur();
					break;
					case(6)://mode carte
							menu.displayCarte();
					break;
					case(7)://mode sauv
							menu.displaySauv();
					break;
					case(8)://mode carte
							menu.displayOptions();
					break;
					case(9)://fail
							menu.displayFail();
					break;
					case(10):	//informations simples, avec controle pour retour au plateau
						menu.displayInfo();
					break;
					case(11):	//affichage bravo vous avez capturer tel pokemon
						menu.displayWinCapture();
					break;
					case(12):	//attente + informations simples
						menu.displayInfo();
					break;

				}
			break;//mode hud

			case(2)://combat
				combat.drawCombat();
				combat.runTour();
			break;
	}

	context.restore();
}


function keyPress(event) {
		    var touche = event.keyCode;
		    monDresseur.actions(touche);
}

function releaseKey(event){
	monDresseur.dresseur.position = 5;
}


//main

window.onload = init;
