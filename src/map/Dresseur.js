import { getContext } from '../utils/render_utils';
import ZoneDresseur from './ZoneDresseur';
import Discussion from '../UI/Discussion';
import dresseurVert from '../../assets/imgs/dresseurVert.png';

class Dresseur {
	constructor(nom, posX, posY, orientation, grille) {
		this.nom = nom;
		this.grille = grille;
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
		this.asPerdu = 0;
		this.zone = new ZoneDresseur(this);

		this.num = Dresseur.nbDresseur;
		Dresseur.nbDresseur += 1;

		const dresseurVertImg = document.createElement('img');
		dresseurVertImg.src = dresseurVert;
		this.texture = dresseurVertImg;

		this.grandeTextureX = 7; // pour les combats
		this.grandeTextureY = 4; // par default simple team rocket, car plus nombreux

		// anim
		this.orientationInit = orientation;
		this.orientation = orientation;// 0 de face, 1 = de gzuche, 2 de droite 3 de derriere
		this.position = 5;

		// colisions
		this.nextCaseX = false;
		this.nextCaseY = false;

		this.attaqueCanceled = false;
	}

	isInfirmiere() {
		return (false);
	}

	displayName() {
		console.log(`Dresseur:${this.nom}`);
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
		switch (this.orientation) {
		case (1):
			this.nextCaseX = this.posX;
			this.nextCaseY = this.posY + 2;
			break;
		case (2):
			this.nextCaseX = this.posX - 2;
			this.nextCaseY = this.posY;
			break;
		case (3):
			this.nextCaseX = this.posX + 2;
			this.nextCaseY = this.posY;
			break;
		case (4):
			this.nextCaseX = this.posX;
			this.nextCaseY = this.posY - 2;
			break;
		default:
			console.warn('Dresseur.calculNextCase: no compatible option');
		}
	}

	isWalkable(posX, posY) {
		return (!this.isOnPosition(posX, posY));
	}

	parler(player) {
		this.trouveOrientation(player);
		player.discussion = new Discussion(this.nom, this.asPerdu ? this.texteLooser : this.texte);
	}

	trouveOrientation(player) {
		const x = player.getPosX() - this.getPosX();
		const y = player.getPosY() - this.getPosY();

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

	afficheToi(posiX, posiY) {
		const context = getContext();
		context.drawImage(
			this.texture,
			0,
			this.orientation * 48, 32, 48,
			this.posX * 3 - (posiX * 3) + 340,
			this.posY * 3 - (posiY * 3) + 280,
			this.tailleX,
			this.tailleY,
		);
	}

	isOnPosition(posX, posY) {
		if (posX > this.posX && posX < this.posX + (this.tailleX / 2.5)) {
			if (posY > this.posY && posY < this.posY + (this.tailleY / 2.5)) {
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
		this.pokemons.forEach((pokemon1) => {
			if (pokemon1 === pok1) {
				this.pokemons.forEach((pokemon2) => {
					if (pokemon1 === pok2) {
						const tamp = pokemon1;
						pokemon1 = pokemon2;
						pokemon2 = tamp;
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

	peutAvancer() {
		return this.grille.isWalkable(this.posX, this.posY);
	}

	setOrientation(or) {
		this.orientation = or;
	}

	setOriginalOrientation() {
		this.orientation = this.orientationInit;
	}

	getOrientation() {
		return this.orientation;
	}

	getPosX() {
		return this.posX;
	}

	getPosY() {
		return this.posY;
	}

	walkOnZone(player) {
		return this.zone.isWalkOn(player);
	}

	getDistance() {
		console.warn('Dresseur.getDistance: wip');
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

	avance(num) {
		switch (this.orientation) {
		case 1:
			this.posY += num;
			break;
		case 2:
			this.posX -= num;
			break;
		case 3:
			this.posX += num;
			break;
		case 4:
			this.posY -= num;
			break;
		default:
			console.warn('Dresseur.avance: no compatible option');
		}

		// console.log(`avance ${this.posX}:${this.posX}`);
	}

	attaqueJoueur(player) {
		if (!this.asPerdu) {
			console.log(`${this.nom} attaque`);

			player.mode = 1;
			player.hudMode = 1;
			this.parler(player);
		}
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
		//               var asPerdu = document.getElementById("asPerdu").innerHTML;
		//               var isController = document.getElementById("isController").innerHTML;
		//
		//
		//
		// 	console.log("name: "+name );
		// 	console.log("asPerdu: "+asPerdu );
		//
		// 	var dresseur = player.getGrille(parseInt(document.getElementById("grille").innerHTML))
		// 		.getDresseurByName(name);
		// 	dresseur.asPerdu = (asPerdu == 0)?false:true;
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
		//               var dresseur = player.getDresseurByNum(
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

Dresseur.nbDresseur = 0;

// Dresseur.prototype.calculDistanceAParcourir= function(player){
// 	if(this.orientation==1 || this.orientation ==4  ){//Y
// 		return(Math.abs(this.getPosY()-player.getPosY()));
// 	}
// 	else{//X
// 		return(Math.abs(this.getPosX()-player.getPosX()));
// 	}
// }


export default Dresseur;
