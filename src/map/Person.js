import { getContext } from '../utils/render';
import ZonePerson from './ZonePerson';
import Discussion from '../UI/Discussion';
import DevMode from '../utils/DevMode';
import PlayerMode from '../types/PlayerMode';
import Orientation from '../types/Orientation';
import PlayerHudMode from '../types/PlayerHudMode';
import ImageLoader from '../utils/ImageLoader';
import { ColorDebug } from '../utils/Color';
import dresseurVert from '../../assets/imgs/dresseurVert.png';

class Person {
	constructor(nom, posX, posY, orientation) {
		this.nom = nom;
		this.posX = posX;
		this.posY = posY;
		this.tailleX = 32;
		this.tailleY = 48;
		this.texte = ['Il faut bien avoir quelque chose a dire..'];
		this.texteLooser = ['J\'ai perdu ..'];
		this.pokemons = [];
		this.pcDeLeo = [];
		this.inventaire = [];

		this.argent = 0;
		this.badges = 0;
		this.isAgressive = 0;
		this.zone = new ZonePerson(this);

		this.idle = true;

		this.num = Person.nbDresseur;
		Person.nbDresseur += 1;

		const dresseurVertImg = ImageLoader.load(dresseurVert);
		this.texture = dresseurVertImg;

		this.grandeTextureX = 7; // pour les combats
		this.grandeTextureY = 4; // par default simple team rocket, car plus nombreux

		// anim
		this.orientationInit = orientation;
		this.orientation = orientation;// 0 sud, 1 = ouest, 2 est 3 nord
		this.animationPosition = 5;

		this.attaqueCanceled = false;
	}

	displayName() {
		console.log(`Person:${this.nom}`);
	}

	getName() {
		return (this.nom);
	}

	getNum() {
		return (this.num);
	}

	getGTX() {
		return (this.grandeTextureX);
	}

	getGTY() {
		return (this.grandeTextureY);
	}

	setGTX(val) {
		this.grandeTextureX = val;
	}

	setGTY(val) {
		this.grandeTextureY = val;
	}

	calculNextCase() {
		let x = this.posX;
		let y = this.posY;

		switch (this.orientation) {
		case Orientation.South:
			y += 1;
			break;
		case Orientation.West:
			x -= 1;
			break;
		case Orientation.East:
			x += 1;
			break;
		case Orientation.North:
			y -= 1;
			break;
		default:
			console.warn('Person.calculNextCase: no compatible option');
		}

		return ({ x, y });
	}

	isWalkable(x, y) {
		return (!this.isOnPosition(x, y));
	}

	parler(player) {
		this.trouveOrientation(player);
		player.discussion = new Discussion(this.nom, this.isAgressive ? this.texteLooser : this.texte);
	}

	trouveOrientation(player) {
		const playerCoords = player.dresseur.getCoordinates();
		const dresseurCoords = this.getCoordinates();

		const x = playerCoords.x - dresseurCoords.x;
		const y = playerCoords.y - dresseurCoords.y;

		if (x <= y) {
			this.setOrientation(x > 0 ? 0 : 1);
		}
		else {
			this.setOrientation(y > 0 ? 2 : 3);
		}
	}

	showPokemon() {
		this.pokemons.forEach((pokemon) => {
			pokemon.displayInfo();
		});
	}

	image() {
		return this.texture;
	}

	addPokemon(poke) {
		if (this.pokemons.length < 6) {
			this.pokemons.push(poke);
		}
		else {
			console.log('plus de place');
			this.pcDeLeo.push(poke);
		}
	}

	getCoordinates() {
		return {
			x: this.posX,
			y: this.posY,
			tailleX: this.tailleX,
			tailleY: this.tailleY,
			mx: this.posX + this.tailleX / 3,
			my: this.posY + this.tailleY / 3,
		}; // ------> weird ratio here
	}

	afficheToi(player) {
		const context = getContext();
		const playerCoords = player.dresseur.getCoordinates();
		const dresseurCoords = this.getCoordinates();

		if (DevMode.dev && DevMode.getOption('dresseursAsDots')) {
			this.showDebug(player);
		}

		// ---- animation personage
		const xClip = this.idle
			?	0
			: this.animationPosition * 32;
		const yClip = this.orientation * 48;


		context.drawImage(
			this.texture,
			xClip,
			yClip,
			dresseurCoords.tailleX,
			dresseurCoords.tailleY,
			(dresseurCoords.x - playerCoords.x) * 3 + 340,
			(dresseurCoords.y - playerCoords.y) * 3 + 260,
			dresseurCoords.tailleX,
			dresseurCoords.tailleY,
		);
		// }
	}

	showDebug(player) {
		const context = getContext();
		const playerCoords = player.dresseur.getCoordinates();
		const dresseurCoords = this.getCoordinates();

		context.fillStyle = ColorDebug.Person;
		context.fillRect(
			(dresseurCoords.x - playerCoords.x) * 3 + 340,
			(dresseurCoords.y - playerCoords.y) * 3 + 260,
			dresseurCoords.tailleX,
			dresseurCoords.tailleY,
		);

		context.fillStyle = 'black';

		// tryin to show cursor
		context.fillRect(
			(dresseurCoords.x - playerCoords.x) * 3 + 340 - 2,
			(dresseurCoords.y - playerCoords.y) * 3 + 260 - 2,
			4, 4,
		);

		context.fillRect(
			(dresseurCoords.mx - playerCoords.x) * 3 + 340 - 2,
			(dresseurCoords.my - playerCoords.y) * 3 + 260 - 2,
			4, 4,
		);


		this.zone.showDebug(player);
	}

	isOnPosition(x, y) {
		const dresseurCoords = this.getCoordinates();

		if (x + 11 > dresseurCoords.x && x < dresseurCoords.x + (dresseurCoords.tailleX / 3)) {
			if (y + 14 > dresseurCoords.y && y < dresseurCoords.y + (dresseurCoords.tailleY / 3)) {
				return true;
			}
		}
		return false;
	}

	setTexture(texture) {
		this.texture = texture;
	}

	setTexte(texte) {
		this.texte = texte;
	}

	setTexteLooser(texte) {
		this.texteLooser = texte;
	}

	pokemonsEnVie() {
		const tab = [];
		this.pokemons.forEach((pokemon) => {
			if (pokemon.pdv > 0) {
				tab.push(pokemon);
			}
		});
		return tab;
	}

	echange(pok1, pok2) {
		this.pokemons.forEach((pokemon1, i) => {
			if (pokemon1 === pok1) {
				this.pokemons.forEach((pokemon2, j) => {
					if (pokemon2 === pok2) {
						const tamp = this.pokemons[i];
						this.pokemons[i] = this.pokemons[j];
						this.pokemons[j] = tamp;
					}
				});
			}
		});
	}

	soignePokemons() {
		this.pokemons.forEach((pokemon) => {
			pokemon.soigneToi();
		});
	}

	// peutAvancer() {
	// 	const dresseurCoords = this.getCoordinates();
	// 	return this.player.grille.isWalkable(dresseurCoords.x, dresseurCoords.y);
	// }

	setOrientation(or) {
		this.orientation = or;
	}

	setOriginalOrientation() {
		this.orientation = this.orientationInit;
	}

	getOrientation() {
		return this.orientation;
	}

	walkOnZone(player) {
		return this.zone.isWalkOn(player);
	}

	getDistance() {
		console.warn('Person.getDistance: wip');
		// if (this.orientation === 0) {
		//
		// }
	}

	getPokemon(place) {
		return this.pokemons[place];
	}

	getNombrePokemon() {
		return this.pokemons.length;
	}

	attaqueJoueur(player) {
		console.log(`${this.nom} attaque`);
		player.setAdv(this);

		player.mode = PlayerMode.HUD;
		player.hud.mode = PlayerHudMode.DISCUSSION;
		this.parler(player);
	}

	isSauvage() { // pendant un combat, un pokemon sauavge agit + ou - comme un dresseur
		return false;
	}

	load() {
		// var xmlhttp;
		// if (window.XMLHttpRequest) {
		//           // code for IE7+, Firefox, Chrome, Opera, Safari
		//           xmlhttp = new XMLHttpRequest();
		//       } else {
		//           // code for IE6, IE5
		//           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		//       }
		//
		//       xmlhttp.onreadystatechange = function() {
		//           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		//               document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
		//               //alert("Ca marche");
		//
		//
		//               var name = document.getElementById("name").innerHTML;
		//               var isAgressive = document.getElementById("isAgressive").innerHTML;
		//               var isController = document.getElementById("isController").innerHTML;
		//
		//
		//
		// 	console.log("name: "+name );
		// 	console.log("isAgressive: "+isAgressive );
		//
		// 	var dresseur = player.getGrille(parseInt(document.getElementById("grille").innerHTML))
		// 		.getDresseurByName(name);
		// 	dresseur.isAgressive = (isAgressive == 0)?false:true;
		//
		// 	dresseur.loadPokemons();
		//
		//
		//
		//           }
		//
		//           else{
		//           	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
		//           		console.log(
		// 							`Ca marche pas: \nreadyState =${xmlhttp.readyState}
		// 								\n status =${xmlhttp.status}`
		// 								);
		//
		// 		//xmlhttp.send();
		//           	}
		//           }
		//       }
		//       xmlhttp.open("GET","pokemon/getDresseur.php?name="+this.getName(),true);
		// xmlhttp.send();

	}

	videPokemons() {
		this.pokemons = [];
	}

	loadPokemons() { // no more suported for now
		// var xmlhttp;
		// if (window.XMLHttpRequest) {
		//           // code for IE7+, Firefox, Chrome, Opera, Safari
		//           xmlhttp = new XMLHttpRequest();
		//       } else {
		//           // code for IE6, IE5
		//           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		//       }
		//
		//       xmlhttp.onreadystatechange = function() {
		//           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		//               document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
		//               var tabNum =  document.getElementsByClassName('pokeNum');
		//                var tabDresseur =  document.getElementsByClassName('dresseur_id');
		//                var lvl=  document.getElementsByClassName('lvl');
		//                var exp=  document.getElementsByClassName('exp');
		//                var expMax=  document.getElementsByClassName('expMax');
		//                var pdv=  document.getElementsByClassName('pdv');
		//                var pdvMax=  document.getElementsByClassName('pdvMax');
		//                var att=  document.getElementsByClassName('att');
		//                var def=  document.getElementsByClassName('def');
		//                var agi=  document.getElementsByClassName('agi');
		//
		//               var dresseur = player.grille.getDresseurByNum(
		//										parseInt(document.getElementById('dressNum').innerHTML)
		//									);
		//
		//
		//
		//               if(dresseur == false){
		//								// il s agit du controller (seul dresseur hors des dresseurs des grilles)
		//               	dresseur = player.dresseur;
		//               }
		//
		//               dresseur.videPokemons();
		//
		//               for(var i = 0;i<tabNum.length;i++){
		//               	console.log(
		//										"pokemon "+tabNum[i].innerHTML+" appartient a "+dresseur.getName()
		//									);
		//              	var pokemon = new Pokemon(
		//									tabNum[i].innerHTML,
		//									lvl[i].innerHTML,
		//									exp[i].innerHTML,
		//									pdv[i].innerHTML,
		//									att[i].innerHTML,
		//									def[i].innerHTML,
		//									agi[i].innerHTML)
		//               	dresseur.addPokemon(pokemon);
		//               	pokemon.setExp(exp[i].innerHTML);
		//               	pokemon.setExpMax(expMax[i].innerHTML);
		//               	pokemon.setPdv(pdv[i].innerHTML);
		//               	pokemon.setPdvMax(pdvMax[i].innerHTML);
		//               }
		//           }
		//
		//           else{
		//           	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
		//           		console.log(
		//								"Ca marche pas: \nreadyState ="+
		//								xmlhttp.readyState+"\n status ="+xmlhttp.status);
		//
		//           	}
		//           }
		//       }
		//       xmlhttp.open("GET","pokemon/getPokemon.php?dresseur="+this.num,true);
		// xmlhttp.send();
	}
}

Person.nbDresseur = 0;

// Person.prototype.calculDistanceAParcourir= function(player){
// 	if(this.orientation==1 || this.orientation ==4  ){//Y
// 		return(Math.abs(this.getPosY()-player.getPosY()));
// 	}
// 	else{//X
// 		return(Math.abs(this.dresseur.posX-player.dresseur.posX));
// 	}
// }


export default Person;
