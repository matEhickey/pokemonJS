import { chargeObjetsDansGrille0, chargeObjetsDansGrille1, chargeObjetsDansGrille2, chargeObjetsDansGrille3, chargeObjetsDansGrille4, chargeObjetsDansGrille5, chargeObjetsDansGrille6 } from '../gamecontent/Loader';
import Grille from '../map/Grille';

import PlayerMode from '../modes/PlayerMode';
import ImageLoader from '../utils/ImageLoader';
import PlayerHudMode from '../modes/PlayerHudMode';
import BUTTON from './touches';
import Orientation from '../modes/Orientation';

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

		this.dresseur.animationPosition = 0;

		const dresseursImg = ImageLoader.load(dresseurs);
		this.charSprites = dresseursImg;

		this.fps = DevMode.dev ? 10 : 40;

		this.mode = PlayerMode.MAP;
		this.grilles = [];
		this.grille = null;

		this.combat = null;
		this.discussion = false;
		this.info = null;

		this.couleurPrefere = '#bbbbbb';

		// to refacto
		this.pokemonCapture = false;
		this.adversaire = null;
		this.walkable = true;

		this.loadGrilles();
	}

	loadGrilles() {
		const terrainImg = ImageLoader.load(terrain);
		const ville2Img = ImageLoader.load(ville2);
		const centrePinterieurImg = ImageLoader.load(centrePinterieur);
		const argentaImg = ImageLoader.load(argenta);
		const pokeshopInsideImg = ImageLoader.load(pokeshopInside);
		const areneArgentaImg = ImageLoader.load(areneArgenta);


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

	soignePokemons() {
		return this.dresseur.soignePokemons();
	}

	setOrientation(orientation) {
		this.dresseur.setOrientation(orientation);
	}

	getOrientation() {
		return this.dresseur.orientation;
	}

	onLose() {
		this.dresseur.posX = -72;
		this.dresseur.posY = 12;

		this.mode = PlayerMode.HUD;
		this.hud.setMode(PlayerHudMode.FAIL);

		this.soignePokemons();
	}

	avance() {
		if (this.walkable && !this.dresseur.idle) {
			const orientation = this.getOrientation();
			if (orientation === Orientation.South) this.dresseur.posY += 1;
			else if (orientation === Orientation.West) this.dresseur.posX -= 1;
			else if (orientation === Orientation.East) this.dresseur.posX += 1;
			else if (orientation === Orientation.North) this.dresseur.posY -= 1;

			if (this.dresseur.animationPosition < 4 && (this.mode === 0)) {
				this.dresseur.animationPosition += 1;
			}
			if (this.dresseur.animationPosition === 4) { this.dresseur.animationPosition = 0; }
		}

		if (!this.dresseur.idle) this.grille.checkWalkOnHerbes();
		this.grille.checkZonesDresseurs(this);
		this.grille.checkWalkOnPorte();
	}

	actions(touche) {
		switch (this.mode) {
		case (PlayerMode.MAP):	// deplacement
			this.handleMapEvent(touche);
			break;

		case (PlayerMode.HUD):
			this.hud.event(touche);
			break;

		case (PlayerMode.FIGHT):
			this.combat.gestionEvenement(touche);
			break;
		default:
			console.warn('No corresponding PlayerMode');
		}
	}

	handleDirectionnalEvent(touche) {
		this.dresseur.idle = false;

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
	}

	update() {
		const { x, y } = this.calculNextCase();
		this.walkable = this.grille.isWalkable(x, y) || (DevMode.dev && DevMode.getOption('noCollision'));
		if (this.walkable) {
			this.avance();
		}
	}

	handleMapEvent(touche) {
		if ([BUTTON.DOWN, BUTTON.UP, BUTTON.LEFT, BUTTON.RIGHT].includes(touche)) {
			this.handleDirectionnalEvent(touche);
		}

		if (touche === BUTTON.PAUSE) {
			console.log('Mise en pause');
			this.mode = PlayerMode.HUD;
			this.hud.mode = PlayerHudMode.PAUSE;
		}
		if (touche === BUTTON.CONFIRM) {
			const { x, y } = this.calculNextCase();
			const dresseur = this.grille.getDresseur(x, y);

			if (dresseur) {
				console.log(`found dresseur: ${dresseur.nom}`);
				this.mode = PlayerMode.HUD;
				this.hud.mode = PlayerHudMode.DISCUSSION;

				this.setAdv(dresseur);
				this.getAdv().parler(this);
			}
			else {
				console.log('nothing found');
			}
		}
		this.handleDevMapEvent(touche);
	}

	handleDevMapEvent(touche) {
		if (DevMode.dev) {
			if (touche === BUTTON.C) DevMode.addCollisionDev(this.dresseur.posX, this.dresseur.posY);
			else if (touche === BUTTON.H) DevMode.addHerbeDev(this.dresseur.posX, this.dresseur.posY);
		}
	}

	save() {	// old way
		this.mode = PlayerMode.HUD;
		this.hud.mode = PlayerHudMode.INFO; // mode info
		this.info = 'Cette fonctionnalité à été désactivé pour le moment';

		console.log('tryin to save');
		// SauvegardeController(
		// 	this.dresseur.posX,
		// 	this.dresseur.posY,
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
		this.hud.mode = PlayerHudMode.INFO;
		this.info = 'Cette fonctionnalité à été désactivé pour le moment';
	// this.mode=1;
	// this.hud.mode = PlayerHudMode.WAIT;//attente
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
//               var dressAsPerdu = document.getElementsByClassName("isAgressive");
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
//                 	dresseur = this.grille.getDresseurByNum(parseInt(dressNum[i].innerHTML));
//                 	//console.log(
// 									//	dresseur.getName()+ " isAgressive:  "+
// 									//	dresseur.isAgressive+ "  mais en fait :"+dressAsPerdu[i].innerHTML
// 									// );
//                 	dresseur.isAgressive = parseInt(dressAsPerdu[i].innerHTML);
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
// 								 this.hud.mode = 10;
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
//  // this.hud.mode = PlayerHudMode.INFO; //mode info
// 	// this.info = "Il y a eu un probleme avec le chargement, vous pourriez reesayez, au cas ou..";
// }

export default PlayerController;
