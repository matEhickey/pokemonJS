var PlayerController = function(dresseur,grille){

	this.dresseur = dresseur;
	this.dresseur.grandeTextureX = 1;
	this.dresseur.grandeTextureY= 9;
	this.dresseur.position = 5;
	this.mode=0;   //0 = deplacement    1 = hud    2 = combat
	this.nextCaseX;
	this.nextCaseY;
	this.hudMode=0;// 0 = pause 1 = discussion 2 = pokedex 3= menupokemon
	this.fps = 90;
	this.discussion = false;
	this.info = false;
	this.couleurPrefere = "#bbbbbb";
	this.pokemonCapture = false;
	this.adversaire;
	this.charSprites= document.getElementById("dresseurs");

	this.walkable = true

	this.menu = null;

	this.grille;
	this.grilles=[];
	this.grilles.push(new Grille(document.getElementById('terrain')));
	this.grilles.push(new Grille(document.getElementById('ville2')));
	this.grilles.push(new Grille(document.getElementById('cpInterieur')));
	this.grilles.push(new Grille(document.getElementById('cpInterieur')));
	this.grilles.push(new Grille(document.getElementById('argenta')));
	this.grilles.push(new Grille(document.getElementById('pokeshop')));
	this.grilles.push(new Grille(document.getElementById('areneArgenta')));

	chargeObjetsDansGrille0(this.grilles[0]);//collisions, dresseur, pnj porte etc
	chargeObjetsDansGrille1(this.grilles[1]);
	chargeObjetsDansGrille2(this.grilles[2]);
	chargeObjetsDansGrille3(this.grilles[3]);
	chargeObjetsDansGrille4(this.grilles[4]);
	chargeObjetsDansGrille5(this.grilles[5]);
	chargeObjetsDansGrille6(this.grilles[6]);

	// if(!parseInt(document.getElementById("isConnecte").innerHTML)){
	// 	this.mode = 1;
	// 	this.hudMode = 10;
	// 	this.info = "Vous ne pourrez pas sauvegarder votre partie, il faut jouer depuis un compte.";
	// }

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



//for making colision press 'z' twice
var Cx1,Cy1;
var Cx2,Cy2;
var boolPressC = false;//si touche deja appuye, car genere au bout du deuxieme appui

//for making colision press 'z' twice
var Hx1,Hy1;
var Hx2,Hy2;
var boolPressH = false;//si touche deja appuye, car genere au bout du deuxieme appui


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


PlayerController.prototype.actions = function(touche){
	//console.log("mode:"+this.mode+" hud:"+this.hudMode);
	switch(this.mode){

			case(0):									//deplacement

				   switch(touche){
				   	case(40)://down
				   		this.setOrientation(1);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();monDresseur
				   	break;
				   	case(38)://up
				   		this.setOrientation(4);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(37)://left
				   		this.setOrientation(2);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(39)://right
				   		this.setOrientation(3);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(80):
				   		console.log("Mise en pause");
				   		this.mode = 1;
				   		this.hudMode = 0;
				   		break;
				   	case(65)://touche action = a
				   		monDresseur.calculNextCase();
						nextCaseX = monDresseur.nextCaseX;
						nextCaseY = monDresseur.nextCaseY;
				   		var dress = this.grille.getDresseur(nextCaseX,nextCaseY);
				   		//boolean si autre que dresseurs

				   		if(typeof(dress)=="object"){
				   			if(dress.isInfirmiere() == false){
					   			monDresseur.setAdv(dress);
						   		monDresseur.discussion = monDresseur.getAdv().parler();
						   		this.mode = 1;
						   		this.hudMode = 1;
						   	}

				   		}
				   		else{
				   			var pnj = this.grille.getPNJ(nextCaseX,nextCaseY);
				   			if(typeof(pnj)=="object"){
				   				//console.log(pnj);
					   			if(true){	//a remplacer par pnj.isInfirmiere(), mais ne marche pas ce soir.. vas savoir
								   	monDresseur.soignePokemons();
							   	}
							   	monDresseur.info= pnj.getDiscuss();
								this.mode = 1;
								this.hudMode = 10;
							 }

				   		}
				   		break;

				   	case(90)://z -> recupere message de collisions

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

				   	case(72)://h -> recupere message d herbes

				   		if(!boolPressH){
				   			Hx1 = this.getPosX();
				   			Hy1 = this.getPosY();

				   		}
				   		else{
				   			Hx2 = this.getPosX() - Hx1;	//x2,y2 representent la taille de l objet et non sa coordonnee
				   			Hy2 = this.getPosY() - Hy1;
				   			var chaine =  "this.grille.ajouteHerbe(new Herbe("+Hx1+","+Hy1+","+Hx2+","+Hy2+",5));<br>"
				   			document.getElementById("ajoutCollision").innerHTML += chaine;
				   		}
				   		boolPressH = !boolPressH;
				   		break;

				   }//fin switch touche

				   break;//fin deplacement mode

				case(1):	//mode hud
					applyHUD_event(touche)
				  break;//fin mode hud

				case(2)://mode combat
					  combat.gestionEvenement(touche);
				 		break;//fin combat mode

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
	alert("Cette fonctionnalité à étédésactivé pour  le moment")
	// monDresseur.mode = 1;
	// monDresseur.hudMode = 12; //mode attente
	// monDresseur.info = "Sauvegarde en cours";
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
	alert("Cette fonctionnalité à étédésactivé pour  le moment")
	// monDresseur.mode=1;
  //       monDresseur.hudMode = 12;//attente
  //       monDresseur.info="Loading Game";
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
	//                 monDresseur.setPosX(parseInt(document.getElementById("x").innerHTML));
	//                 monDresseur.setPosY(parseInt(document.getElementById("y").innerHTML));
	//                 monDresseur.setGrille(parseInt(document.getElementById("grille").innerHTML));
	//                 monDresseur.couleurPrefere="#"+document.getElementById("couleur").innerHTML;
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
	//                 	dresseur = monDresseur.getDresseurByNum(parseInt(dressNum[i].innerHTML));
	//                 	//console.log(dresseur.getName()+ " asPerdu:  "+ dresseur.aPerdu+ "  mais en fait :"+dressAsPerdu[i].innerHTML);
	//                 	dresseur.aPerdu = parseInt(dressAsPerdu[i].innerHTML);
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
	//               	monDresseur.dresseur.pokemons = [];
	//
	//               	for(var i = 0;i<num.length;i++){
	//               		var poke = new Pokemon(parseInt(num[i].innerHTML),parseInt(lvl[i].innerHTML),parseInt(exp[i].innerHTML),parseInt(pdvMax[i].innerHTML),parseInt(att[i].innerHTML),parseInt(def[i].innerHTML),parseInt(agi[i]).innerHTML);
	//               		poke.pdv = parseInt(pdv[i].innerHTML);
	//               		monDresseur.dresseur.addPokemon(poke);
	//               	}
	//
	//
	//               	 monDresseur.mode = 1;
	// 								 monDresseur.hudMode = 10;
	// 								 monDresseur.info = "Les données ont été chargées avec succès";
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
// 	// console.log("Erreur sauvegarde");
// 	// monDresseur.mode = 1;
// 	//  monDresseur.hudMode = 10;
// 	//  monDresseur.info = "Il y a eu un probleme avec le chargement, vous pourriez reesayez, au cas ou..";
// }
