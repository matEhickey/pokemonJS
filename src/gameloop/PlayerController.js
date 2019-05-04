import { chargeObjetsDansGrille0, chargeObjetsDansGrille1, chargeObjetsDansGrille2, chargeObjetsDansGrille3, chargeObjetsDansGrille4, chargeObjetsDansGrille5, chargeObjetsDansGrille6 } from '../gamecontent/Loader';
import Grille from '../map/Grille';

import PlayerMode from '../modes/PlayerMode';
import PlayerHudMode from '../modes/PlayerHudMode';
import BUTTON from './touches';

import terrain from '../../assets/imgs/terrrainTest2.png';
import ville2 from '../../assets/imgs/ville2.png';
import centrePinterieur from '../../assets/imgs/centrePinterieur.png';
import argenta from '../../assets/imgs/argenta.png';
import pokeshopInside from '../../assets/imgs/pokeshopInside.png';
import areneArgenta from '../../assets/imgs/areneArgenta.png';
import dresseurs from '../../assets/imgs/dresseurs.png';

import DevMode from '../modes/DevMode';


// for making colision press 'z' twice
window.boolPressC = false; // si touche deja appuye, car genere au bout du deuxieme appui
// for making colision press 'z' twice
window.boolPressH = false; // si touche deja appuye, car genere au bout du deuxieme appui

class PlayerController {
	constructor(dresseur) {
		this.dresseur = dresseur;
		this.dresseur.grandeTextureX = 1;
		this.dresseur.grandeTextureY = 9;
		this.dresseur.position = 5;

		this.mode = PlayerMode.MAP;
		this.hudMode = PlayerHudMode.PAUSE;// 0 = pause 1 = discussion 2 = pokedex 3= menupokemon

		this.fps = DevMode.dev ? 30 : 90;
		this.discussion = false;
		this.info = false;
		this.couleurPrefere = '#bbbbbb';
		this.pokemonCapture = false;
		this.adversaire = null;

		const dresseursImg = document.createElement('img');
		dresseursImg.src = dresseurs;
		this.charSprites = dresseursImg;

		this.walkable = true;

		this.menu = null;
		this.combat = null;

		this.grille = null;
		this.grilles = [];


		const terrainImg = document.createElement('img');
		terrainImg.src = terrain;

		const ville2Img = document.createElement('img');
		ville2Img.src = ville2;

		const centrePinterieurImg = document.createElement('img');
		centrePinterieurImg.src = centrePinterieur;

		const argentaImg = document.createElement('img');
		argentaImg.src = argenta;

		const pokeshopInsideImg = document.createElement('img');
		pokeshopInsideImg.src = pokeshopInside;

		const areneArgentaImg = document.createElement('img');
		areneArgentaImg.src = areneArgenta;


		this.grilles.push(new Grille(this, terrainImg));
		this.grilles.push(new Grille(this, ville2Img));
		this.grilles.push(new Grille(this, centrePinterieurImg));
		this.grilles.push(new Grille(this, centrePinterieurImg));
		this.grilles.push(new Grille(this, argentaImg));
		this.grilles.push(new Grille(this, pokeshopInsideImg));
		this.grilles.push(new Grille(this, areneArgentaImg));
	}

	getGrille() {
		return (this.grille);
	}

	setTexture(texture) {
		this.dresseur.setTexture(texture);
	}

	setGrille(num) {
		this.grille = this.grilles[num];
		this.dresseur.grille = num;
	}

	loadObjects() {
		chargeObjetsDansGrille0(this.grilles[0], this); // collisions, dresseur, pnj porte etc
		chargeObjetsDansGrille1(this.grilles[1], this);
		chargeObjetsDansGrille2(this.grilles[2], this);
		chargeObjetsDansGrille3(this.grilles[3], this);
		chargeObjetsDansGrille4(this.grilles[4], this);
		chargeObjetsDansGrille5(this.grilles[5], this);
		chargeObjetsDansGrille6(this.grilles[6], this);
	}

	addPokemon(pokemon) {
		this.dresseur.addPokemon(pokemon);
	}

	getTailleX() {
		return (this.dresseur.tailleX);
	}

	getGTX() {
		return (this.dresseur.grandeTextureX);
	}

	getGTY() {
		return (this.dresseur.grandeTextureY);
	}

	setPokemonCapture(poke) {
		this.pokemonCapture = poke;
	}

	calculNextCase() {
		return (this.dresseur.calculNextCase());
	}

	getPokemonCapture() {
		return (this.pokemonCapture);
	}

	getTailleY() {
		return (this.dresseur.tailleY);
	}

	getAdv() {
		return (this.dresseur.adversaire);
	}

	setAdv(adv) {
		this.dresseur.adversaire = adv;
	}

	getTexture() {
		return (this.dresseur.texture);
	}

	getName() {
		return (this.dresseur.getName());
	}

	// isWalkable(x, y) {
	// 	return (this.dresseur.isWalkable(x, y));
	// }

	soignePokemons() {
		return this.dresseur.soignePokemons();
	}

	setOrientation(orientation) {
		this.dresseur.setOrientation(orientation);
	}

	getOrientation() {
		return this.dresseur.orientation;
	}

	getPosX() {
		return this.dresseur.posX;
	}

	setPosX(value) {
		this.dresseur.posX = value;
	}

	getPosY() {
		return this.dresseur.posY;
	}

	setPosY(value) {
		this.dresseur.posY = value;
	}

	onLose() {
		this.dresseur.posX = 0;
		this.dresseur.posY = 0;

		this.mode = PlayerMode.HUD;
		this.hudMode = PlayerHudMode.FAIL;

		this.soignePokemons();
	}

	showCurrentMessage() {
		this.discussion.showCurrentMessage(this);
	}

	getDresseurByNum(num) {
		this.grilles.find(
			grille => grille.getDresseurByNum(num),
		);
	}

	avance() {
		if (this.walkable) {
			switch (this.getOrientation()) {
			case (0):
				if (this.dresseur.position !== 5) {
					this.setPosY(this.getPosY() + 1);
				}
				break;
			case (1):
				if (this.dresseur.position !== 5) {
					this.setPosX(this.getPosX() - 1);
				}
				break;
			case (2):
				if (this.dresseur.position !== 5) {
					this.setPosX(this.getPosX() + 1);
				}
				break;
			case (3):
				if (this.dresseur.position !== 5) {
					this.setPosY(this.getPosY() - 1);
				}
				break;
			default:
				console.warn('PlayerController.avance: no corresponding orientation');
			}

			if (this.dresseur.position < 4 && (this.mode === 0)) {
				this.dresseur.position += 1;
			}
			if (this.dresseur.position === 4) { this.dresseur.position = 0; }

			if (DevMode.dev) {
				document.getElementById('playerControllerX').innerHTML = `X: ${this.getPosX()}`;
				document.getElementById('playerControllerY').innerHTML = `Y: ${this.getPosY()}`;
			}
		}

		if (!(DevMode.getOption('noAgression'))) this.grille.checkZonesDresseurs(this);
		if (!(DevMode.getOption('noWildPokemon'))) this.grille.checkWalkOnHerbes();
		if (!(DevMode.getOption('noTravel'))) this.grille.checkWalkOnPorte();
	}

	actions(touche) {
		switch (this.mode) {
		case (PlayerMode.MAP):	// deplacement
			if ([BUTTON.DOWN, BUTTON.UP, BUTTON.LEFT, BUTTON.RIGHT].includes(touche)) {
				this.handleDirectionnalEvent(touche);
			}

			if (touche === BUTTON.PAUSE) {
				console.log('Mise en pause');
				this.mode = PlayerMode.HUD;
				this.hudMode = PlayerHudMode.PAUSE;
			}
			if (touche === BUTTON.CONFIRM) {
				const {
					x: nextCaseX,
					y: nextCaseY,
				} = this.calculNextCase();

				const dress = this.grille.getDresseur(nextCaseX, nextCaseY);

				if (dress) {
					console.log(`Action: Parle avec dresseur ${dress.nom}`);
					this.setAdv(dress);
					this.getAdv().parler(this);
					this.mode = PlayerMode.HUD;
					this.hudMode = PlayerHudMode.DISCUSSION;

					// console.log(dress);
					// if (dress.isInfirmiere()) {
					// 	const pnj = this.grille.getPNJ(this.nextCaseX, this.nextCaseY);
					// 	if (pnj) {
					// 		// if (true){ // a remplacer par utilisation du callback pnj ou dresseur
					// 		this.soignePokemons();
					// 		// }
					// 		this.discussion = pnj.getDiscuss();
					// 		this.mode = PlayerMode.HUD;
					// 		this.hudMode = PlayerHudMode.DISCUSSION;
					// 	}
					// }
					// else {
					// }
				}
			}
			this.handleDevMapEvent(touche);
			break;

		case (PlayerMode.HUD):
			this.menu.event(touche);
			break;

		case (PlayerMode.FIGHT):
			this.combat.gestionEvenement(touche);
			break;
		default:
			console.warn('No corresponding PlayerMode');
		}
	}

	handleDirectionnalEvent(touche) {
		switch (touche) {
		case (BUTTON.DOWN):
			this.setOrientation(0);
			break;
		case (BUTTON.LEFT):
			this.setOrientation(1);
			break;
		case (BUTTON.RIGHT):
			this.setOrientation(2);
			break;
		case (BUTTON.UP):
			this.setOrientation(3);
			break;
		default:
			console.warn('PlayerController.handleDirectionnalEvent no compatible option');
		}

		if (this.dresseur.position >= 5) this.dresseur.position = 0;
	}

	mainLoopEvent() {
		const { x, y } = this.calculNextCase();
		this.walkable = this.grille.isWalkable(x, y) || (DevMode.dev && DevMode.getOption('noCollision'));
		if (this.walkable) {
			this.avance();
		}
	}

	handleDevMapEvent(touche) {
		if (DevMode.dev) {
			if (touche === BUTTON.C) { // z -> recupere message de collisions
				if (!window.boolPressC) {
					window.Cx1 = this.getPosX();
					window.Cy1 = this.getPosY();
				}
				else {
					// x2,y2 representent la taille de l objet et non sa coordonnee
					window.Cx2 = this.getPosX() - window.Cx1;
					window.Cy2 = this.getPosY() - window.Cy1;
					const chaine = `grille.ajouteObjet(new Objet("Collision",${window.Cx1}, ${window.Cy1}, ${window.Cx2},${window.Cy2}));<br>`;
					document.getElementById('loaderOutput').innerHTML += chaine;
				}
				window.boolPressC = !window.boolPressC;
			}

			if (touche === BUTTON.H) { // h -> recupere message d herbes
				if (!window.boolPressH) {
					window.Hx1 = this.getPosX();
					window.Hy1 = this.getPosY();
				}
				else {
					// x2,y2 representent la taille de l objet et non sa coordonnee
					window.Hx2 = this.getPosX() - window.Hx1;
					window.Hy2 = this.getPosY() - window.Hy1;
					const chaine = `this.grille.ajouteHerbe(new Herbe(${window.Hx1}, ${window.Hy1}, ${window.Hx2}, ${window.Hy2}, 5));<br>`;
					document.getElementById('loaderOutput').innerHTML += chaine;
				}
				window.boolPressH = !window.boolPressH;
			}
		}
	}

	save() {	// old way
		this.mode = PlayerMode.HUD;
		this.hudMode = PlayerHudMode.INFO; // mode info
		this.info = 'Cette fonctionnalité à été désactivé pour le moment';

		console.log('tryin to save');
		// SauvegardeController(
		// 	this.getPosX(),
		// 	this.getPosY(),
		// 	this.couleurPrefere,
		// 	this.dresseur.badges,
		// 	this.dresseur.argent,
		// 	this.grille.num
		// );
		// //gere toute les sauvegardes a la suite, et pas en meme temps
	}

	saveDresseurs() {
		// var chaine = "";
		// for(var i = 0;i<this.grilles.length;i++){
		// 	 chaine += this.grilles[i].saveDresseurs();
		// }
		// return(chaine);
	}

	savePokemons() {
		// var chaine = getDresseurPokemons(this.dresseur);
		// return(chaine);
	}

	load() {
		this.mode = PlayerMode.HUD;
		this.hudMode = PlayerHudMode.INFO;
		this.info = 'Cette fonctionnalité à été désactivé pour le moment';
	// this.mode=1;
	// this.hudMode = PlayerHudMode.WAIT;//attente
	// this.info="Loading Game";
	//
	// if (window.XMLHttpRequest) {
	//           // code for IE7+, Firefox, Chrome, Opera, Safari
	//           xmlhttp = new XMLHttpRequest();
	//       } else {
	//           // code for IE6, IE5
	//           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	//       }
	//       var controller_id;
	//       xmlhttp.onreadystatechange = function() {
	//           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	//               document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
	//               var fonctionne =   parseInt(document.getElementById("fonctionne").innerHTML);
	//               if(!fonctionne){
	//               	alert("probleme sauvegarde des infos joueur");
	//               	erreurLoad();
	//               }
	//               else{
	//                 this.setPosX(parseInt(document.getElementById("x").innerHTML));
	//                 this.setPosY(parseInt(document.getElementById("y").innerHTML));
	//                 this.setGrille(parseInt(document.getElementById("grille").innerHTML));
	//                 this.couleurPrefere="#"+document.getElementById("couleur").innerHTML;
	//
	//                 loadDresseurs();//ci dessous
	//         }
	//           }
	//
	//           else{
	//           	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
	//           		console.log(
	// 								"Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status
	// 							);
	//           	}
	//           }
	//       }
	//       xmlhttp.open("GET","pokemon/getController.php",true);
	// xmlhttp.send();
	}
}

// function loadDresseurs() {
// if (window.XMLHttpRequest) {
//           // code for IE7+, Firefox, Chrome, Opera, Safari
//           xmlhttp = new XMLHttpRequest();
//       } else {
//           // code for IE6, IE5
//           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//       }
//       var controller_id;
//       xmlhttp.onreadystatechange = function() {
//           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//               document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
//             	var dressNum = document.getElementsByClassName("num");
//               var dressAsPerdu = document.getElementsByClassName("asPerdu");
//               var fonctionne =   parseInt(document.getElementById("fonctionne").innerHTML);
//               if(dressNum.length!=dressAsPerdu.length){
//               	alert("Il y a eu un probleme sur la sauvegarde");
//               	erreurLoad();
//               }
//               if(!fonctionne){
//               	alert("probleme sauvegarde des dresseurs");
//               	erreurLoad();
//               }
//               else{
//
//                 var dresseur;
//                 for(var i=0;i<dressNum.length;i++){
//                 	//console.log("test trouve dresseur num "+dressNum[i].innerHTML);
//                 	dresseur = this.getDresseurByNum(parseInt(dressNum[i].innerHTML));
//                 	//console.log(
// 									//	dresseur.getName()+ " asPerdu:  "+
// 									//	dresseur.asPerdu+ "  mais en fait :"+dressAsPerdu[i].innerHTML
// 									// );
//                 	dresseur.asPerdu = parseInt(dressAsPerdu[i].innerHTML);
//                 }
//
//                 loadPokemons();//ci dessous
//         }
//
//
//           }
//
//           else{
//           	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
//           		console.log(
//								"Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status
// 							);
//           		erreurLoad();
//           	}
//           }
//       }
//       xmlhttp.open("GET","pokemon/getDresseur.php",true);
// xmlhttp.send();
// }

// function loadPokemons() {
// if (window.XMLHttpRequest) {
//           // code for IE7+, Firefox, Chrome, Opera, Safari
//           xmlhttp = new XMLHttpRequest();
//       } else {
//           // code for IE6, IE5
//           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//       }
//       var controller_id;
//       xmlhttp.onreadystatechange = function() {
//           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//               document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
//               var fonctionne =   parseInt(document.getElementById("fonctionne").innerHTML);
//
//               if(!fonctionne){
//               	alert("probleme sauvegarde des pokemons");
//               	erreurLoad();
//               }
//               else{
//               	var num = document.getElementsByClassName('num');
//                 var lvl = document.getElementsByClassName('lvl');
//                 var pdv = document.getElementsByClassName('pdv');
//                 var pdvMax = document.getElementsByClassName('pdvMax');
//                 var exp = document.getElementsByClassName('exp');
//                 var expMax = document.getElementsByClassName('expMax');//useless
//                 var att = document.getElementsByClassName('att');
//                 var def = document.getElementsByClassName('def');
//                 var agi = document.getElementsByClassName('agi');
//
//               	this.dresseur.pokemons = [];
//
//               	for(var i = 0;i<num.length;i++){
//               		var poke = new Pokemon(
// 										parseInt(num[i].innerHTML),
// 										parseInt(lvl[i].innerHTML),
// 										parseInt(exp[i].innerHTML),
// 										parseInt(pdvMax[i].innerHTML),
// 										parseInt(att[i].innerHTML),
// 										parseInt(def[i].innerHTML),
// 										parseInt(agi[i].innerHTML)
// 									);
//               		poke.pdv = parseInt(pdv[i].innerHTML);
//               		this.dresseur.addPokemon(poke);
//               	}
//
//
//               	 this.mode = 1;
// 								 this.hudMode = 10;
// 								 this.info = "Les données ont été chargées avec succès";
//
//             	}
//           }
//
//           else{
//           	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
//           		console.log(
// 								"Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status
// 							);
//           		erreurLoad();
//           	}
//           }
//       }
//       xmlhttp.open("GET","pokemon/getPokemon.php",true);
// xmlhttp.send();
// }

// function erreurLoad(){
//  // this.mode = PlayerMode.HUD;
//  // this.hudMode = PlayerHudMode.INFO; //mode info
// 	// this.info = "Il y a eu un probleme avec le chargement, vous pourriez reesayez, au cas ou..";
// }

export default PlayerController;
