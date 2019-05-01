import {chargeObjetsDansGrille0, chargeObjetsDansGrille1, chargeObjetsDansGrille2, chargeObjetsDansGrille3, chargeObjetsDansGrille4, chargeObjetsDansGrille5, chargeObjetsDansGrille6} from '../gamecontent/Loader';
import Grille from '../map/Grille';
import applyHUD_event from '../UI/hud_events';
import {monDresseur} from '../utils/globals';

import PlayerMode from '../modes/PlayerMode';
import PlayerHudMode from '../modes/PlayerHudMode';
import BUTTON from '../gameloop/touches';

import terrain from '../../assets/imgs/terrrainTest2.png';
import ville2 from '../../assets/imgs/ville2.png';
import centrePinterieur from '../../assets/imgs/centrePinterieur.png';
import argenta from '../../assets/imgs/argenta.png';
import pokeshopInside from '../../assets/imgs/pokeshopInside.png';
import areneArgenta from '../../assets/imgs/areneArgenta.png';
import dresseurs from '../../assets/imgs/dresseurs.png';


var PlayerController = function(dresseur,grille){

	this.dresseur = dresseur;
	this.dresseur.grandeTextureX = 1;
	this.dresseur.grandeTextureY= 9;
	this.dresseur.position = 5;

	this.mode=PlayerMode.MAP;
	this.hudMode=PlayerHudMode.PAUSE;// 0 = pause 1 = discussion 2 = pokedex 3= menupokemon

	this.nextCaseX;
	this.nextCaseY;
	this.fps = 90;
	this.discussion = false;
	this.info = false;
	this.couleurPrefere = "#bbbbbb";
	this.pokemonCapture = false;
	this.adversaire;

	var dresseurs_img = document.createElement("img");
	dresseurs_img.src = dresseurs;
	this.charSprites = dresseurs_img;

	this.walkable = true

	this.menu = null;
	this.combat = null;

	this.grille;
	this.grilles=[];


	var terrain_img = document.createElement("img");
	terrain_img.src = terrain;

	var ville2_img = document.createElement("img");
	ville2_img.src = ville2;

	var centrePinterieur_img = document.createElement("img");
	centrePinterieur_img.src = centrePinterieur;

	var argenta_img = document.createElement("img");
	argenta_img.src = argenta;

	var pokeshopInside_img = document.createElement("img");
	pokeshopInside_img.src = pokeshopInside;

	var areneArgenta_img = document.createElement("img");
	areneArgenta_img.src = areneArgenta;


	this.grilles.push(new Grille(terrain_img));
	this.grilles.push(new Grille(ville2_img));
	this.grilles.push(new Grille(centrePinterieur_img));
	this.grilles.push(new Grille(centrePinterieur_img));
	this.grilles.push(new Grille(argenta_img));
	this.grilles.push(new Grille(pokeshopInside_img));
	this.grilles.push(new Grille(areneArgenta_img));

}

PlayerController.prototype.loadObjects = function(num){
	chargeObjetsDansGrille0(this.grilles[0], this);//collisions, dresseur, pnj porte etc
	chargeObjetsDansGrille1(this.grilles[1], this);
	chargeObjetsDansGrille2(this.grilles[2], this);
	chargeObjetsDansGrille3(this.grilles[3], this);
	chargeObjetsDansGrille4(this.grilles[4], this);
	chargeObjetsDansGrille5(this.grilles[5], this);
	chargeObjetsDansGrille6(this.grilles[6], this);
}

PlayerController.prototype.setGrille= function(num){
	this.grille = this.grilles[num];
}

PlayerController.prototype.getGrille= function(num){
	return(this.grille);
}

PlayerController.prototype.addPokemon= function(pokemon){
	this.dresseur.addPokemon(pokemon);
}

PlayerController.prototype.getTailleX = function(){
	return(this.dresseur.tailleX);
}

PlayerController.prototype.getGTX = function(){
	return(this.dresseur.grandeTextureX);
}

PlayerController.prototype.getGTY = function(){
	return(this.dresseur.grandeTextureY);
}

PlayerController.prototype.setPokemonCapture = function(poke){
	this.pokemonCapture = poke;
}

PlayerController.prototype.getPokemonCapture = function(){
	return(this.pokemonCapture);
}

PlayerController.prototype.getTailleY = function(){
	return(this.dresseur.tailleY);
}

PlayerController.prototype.getAdv = function(){
	return(this.dresseur.adversaire);
}

PlayerController.prototype.setAdv = function(adv){
	this.dresseur.adversaire = adv;
}

PlayerController.prototype.calculNextCase= function(){
	this.dresseur.calculNextCase();
	this.nextCaseX = this.dresseur.nextCaseX;
	this.nextCaseY = this.dresseur.nextCaseY;
}

PlayerController.prototype.setTexture= function(texture){
	this.dresseur.setTexture(texture);
}

PlayerController.prototype.getTexture= function(){
	return(this.dresseur.texture);
}

PlayerController.prototype.getName= function(){
	return(this.dresseur.getName());
}

PlayerController.prototype.isWalkable = function(posX,posY){
	var retour = true;

	if(posX>this.getPosX()-20 && posX < this.getPosX()+this.getTailleX()+20){
		if(posY>this.getPosY()-20 && posY < this.getPosY()+this.getTailleY()+20){
			retour = false;
		}
	}


	return(retour);
}

PlayerController.prototype.soignePokemons= function(){
	this.dresseur.soignePokemons();
}

PlayerController.prototype.setOrientation= function(or){
	this.dresseur.setOrientation(or);
}

PlayerController.prototype.getOrientation= function(){
	return(this.dresseur.orientation);
}

PlayerController.prototype.getPosX= function(){
	return(this.dresseur.posX);
}

PlayerController.prototype.setPosX= function(value){
	this.dresseur.posX = value;
}

PlayerController.prototype.getPosY= function(){
	return(this.dresseur.posY);
}

PlayerController.prototype.setPosY= function(value){
	this.dresseur.posY = value;
}

PlayerController.prototype.onLose= function(){
	this.dresseur.posX = 0;
	this.dresseur.posY = 0;

	monDresseur.mode = PlayerMode.HUD;
	monDresseur.hudMode = PlayerHudMode.FAIL;

	monDresseur.soignePokemons();
}

PlayerController.prototype.showCurrentMessage = function(num){
	this.discussion.showCurrentMessage()
}
PlayerController.prototype.getDresseurByNum= function(num){
	var retour = false;
	for(var i = 0;i<this.grilles.length;i++){
		retour = this.grilles[i].getDresseurByNum(num);
		if(retour!=false){
			return(retour);
		}
	}
	return(retour);
}

PlayerController.prototype.goToNextPosition = function(){
	switch(this.getOrientation()){
		case(1):
			if(this.dresseur.position != 5 && (this.mode == 0) && this.walkable){
				this.setPosY(this.getPosY()+2);
			}
			break;
		case(2):
			if(this.dresseur.position != 5 && (this.mode == 0) && this.walkable){
				this.setPosX(this.getPosX()-2);
			}
			break;
		case(3):
			if(this.dresseur.position != 5 && (this.mode == 0) && this.walkable){
				this.setPosX(this.getPosX()+2);
			}
			break;
		case(4):
			if(this.dresseur.position != 5 && (this.mode == 0) && this.walkable){
				this.setPosY(this.getPosY()-2);
			}
			break;
	}


	if(this.dresseur.position < 4 && (this.mode == 0)){
		this.dresseur.position ++;
	}
	if(this.dresseur.position == 4){this.dresseur.position = 0;}

	document.getElementById('posX').innerHTML = "X:"+this.getPosX();
	document.getElementById('posY').innerHTML = "Y:"+this.getPosY();

}

//for making colision press 'z' twice
var Cx1,Cy1;
var Cx2,Cy2;
var boolPressC = false;//si touche deja appuye, car genere au bout du deuxieme appui

//for making colision press 'z' twice
var Hx1,Hy1;
var Hx2,Hy2;
var boolPressH = false;//si touche deja appuye, car genere au bout du deuxieme appui


PlayerController.prototype.actions = function(touche){
	switch(this.mode){
			case(PlayerMode.MAP):									//deplacement
				   switch(touche){
				   	case(BUTTON.DOWN):
				   		this.setOrientation(1);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(BUTTON.UP):
				   		this.setOrientation(4);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(BUTTON.LEFT):
				   		this.setOrientation(2);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(BUTTON.RIGHT):
				   		this.setOrientation(3);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(BUTTON.PAUSE):
				   		console.log("Mise en pause");
				   		this.mode = PlayerMode.HUD;
				   		this.hudMode = PlayerHudMode.PAUSE;
				   		break;
				   	case(BUTTON.CONFIRM):
				   		this.calculNextCase();
				   		var dress = this.grille.getDresseur(this.nextCaseX,this.nextCaseY);
				   		//boolean si autre que dresseurs

				   		if(typeof(dress)=="object"){
				   			if(!dress.isInfirmiere()){
									console.log("Action: Parle avec dresseur")
					   			this.setAdv(dress);
						   		this.getAdv().parler();
						   		this.mode = PlayerMode.HUD;
						   		this.hudMode = PlayerHudMode.DISCUSSION;
						   	}
				   		}
				   		else{
				   			var pnj = this.grille.getPNJ(this.nextCaseX,this.nextCaseY);
				   			if(typeof(pnj)=="object"){
				   				//console.log(pnj);
					   			if(true){	//a remplacer par utilisation du callback pnj ou dresseur
								   	this.soignePokemons();
							   	}
							   	pnj.getDiscuss();
									this.mode = PlayerMode.HUD;
									this.hudMode = PlayerHudMode.DISCUSSION;
								}
				   		}
				   		break;

				   	case(BUTTON.C)://z -> recupere message de collisions
				   		if(!boolPressC){
				   			Cx1 = this.getPosX();
				   			Cy1 = this.getPosY();
				   		}
				   		else{
				   			Cx2 = this.getPosX() - Cx1;	//x2,y2 representent la taille de l objet et non sa coordonnee
				   			Cy2 = this.getPosY() - Cy1;
				   			var chaine =  "grille.ajouteObjet(new Objet(\"Collision\","+Cx1+","+Cy1+","+Cx2+","+Cy2+"));<br>"
				   			document.getElementById("ajoutCollision").innerHTML += chaine;
				   		}
				   		boolPressC = !boolPressC;
				   		break;

				   	case(BUTTON.H)://h -> recupere message d herbes

				   		if(!boolPressH){
				   			Hx1 = this.getPosX();
				   			Hy1 = this.getPosY();

				   		}
				   		else{
				   			Hx2 = this.getPosX() - Hx1;	//x2,y2 representent la taille de l objet et non sa coordonnee
				   			Hy2 = this.getPosY() - Hy1;
				   			var chaine = "this.grille.ajouteHerbe(new Herbe("+Hx1+","+Hy1+","+Hx2+","+Hy2+",5));<br>"
				   			document.getElementById("ajoutCollision").innerHTML += chaine;
				   		}
				   		boolPressH = !boolPressH;
				   		break;

				   }//fin switch touche

				   break;

				case(PlayerMode.HUD):
					applyHUD_event(touche);
				  break;

				case(PlayerMode.FIGHT):
					  this.combat.gestionEvenement(touche);
				 		break;

		}
}

PlayerController.prototype.getDresseurByNum=function(num){
	var retour = false;
	var test = false
	for(var i=0;i<this.grilles.length;i++){
		test = this.grilles[i].getDresseurByNum(num);
		if(test != false){
			retour = test;
		}
	}
	return(retour);
}

PlayerController.prototype.save = function(){		//old way
	this.mode = PlayerMode.HUD;
	this.hudMode = PlayerHudMode.INFO; //mode info
	this.info = "Cette fonctionnalité à été désactivé pour le moment";
	// new SauvegardeController(this.getPosX(),this.getPosY(),this.couleurPrefere,this.dresseur.badges,this.dresseur.argent,this.grille.num);
	// //gere toute les sauvegardes a la suite, et pas en meme temps

}

PlayerController.prototype.saveDresseurs = function(){
	// var chaine = "";
	// for(var i = 0;i<this.grilles.length;i++){
	// 	 chaine += this.grilles[i].saveDresseurs();
	// }
	// return(chaine);
}

PlayerController.prototype.savePokemons = function(){
	// var chaine = getDresseurPokemons(this.dresseur);
	// return(chaine);
}

PlayerController.prototype.load = function(){
	this.mode = PlayerMode.HUD;
	this.hudMode = PlayerHudMode.INFO;
	this.info = "Cette fonctionnalité à été désactivé pour le moment";
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
  //           		console.log("Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status);
  //           	}
  //           }
  //       }
  //       xmlhttp.open("GET","pokemon/getController.php",true);
	// xmlhttp.send();
}

function loadDresseurs(){
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
	//                 	//console.log(dresseur.getName()+ " asPerdu:  "+ dresseur.asPerdu+ "  mais en fait :"+dressAsPerdu[i].innerHTML);
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
  //           		console.log("Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status);
  //           		erreurLoad();
  //           	}
  //           }
  //       }
  //       xmlhttp.open("GET","pokemon/getDresseur.php",true);
	// xmlhttp.send();
}

function loadPokemons(){
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
	//               		var poke = new Pokemon(parseInt(num[i].innerHTML),parseInt(lvl[i].innerHTML),parseInt(exp[i].innerHTML),parseInt(pdvMax[i].innerHTML),parseInt(att[i].innerHTML),parseInt(def[i].innerHTML),parseInt(agi[i]).innerHTML);
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
  //           		console.log("Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status);
  //           		erreurLoad();
  //           	}
  //           }
  //       }
  //       xmlhttp.open("GET","pokemon/getPokemon.php",true);
	// xmlhttp.send();
}

// function erreurLoad(){
//  // this.mode = PlayerMode.HUD;
//  // this.hudMode = PlayerHudMode.INFO; //mode info
// 	// this.info = "Il y a eu un probleme avec le chargement, vous pourriez reesayez, au cas ou..";
// }

export default PlayerController;
