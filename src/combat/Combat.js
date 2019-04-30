import {monDresseur} from '../utils/globals';
import {getContext} from '../utils/render_utils';
import BUTTON from '../modes/touches';
import MenuCombat from '../combat/MenuCombat';
import hero from '../../assets/imgs/BackSpritesHero.png'

import CombatTurn from "../modes/CombatTurn";
import CombatMode from "../modes/CombatMode";

var WaitLimit = {}
WaitLimit.short = 5;
WaitLimit.middle = 10;
WaitLimit.long = 20;

var Combat = function(){
	this.joueurs = [monDresseur.dresseur, monDresseur.getAdv()];
	this.tour = this.joueurs[0].getPokemon(0).agi-this.joueurs[1].getPokemon(0).agi > 0? 0:1;
	this.checkTourComplete = 0;	//-> devient 1 quand un pokemon a attaquer, repasse a 0 quand le deuwieme aussi, et change le mode.


	this.mode = CombatMode.dresseurs;
	this.menu = new MenuCombat(this);

	this.time = 0; //comteur incremental de temps (pas d unité speciales, n*monDresseur.fps)

	this.infos = [];
}


Combat.prototype.runTour = function(){
	if(this.mode == CombatMode.attaque){
			//recuperer l attaque, et surtout son type

		if(!(this.joueurs[this.tour] === monDresseur.dresseur)){
			var rand = Math.round(Math.random()*4);
			//console.log("rand = "+rand);
			this.joueurs[this.tour].getPokemon(0).setSelectAttaque(rand);
		}

		if(this.joueurs[this.tour].getPokemon(0).pdv > 0 && this.joueurs[1-this.tour].getPokemon(0).pdv > 0){
			if(this.joueurs[this.tour].attaqueCanceled){
				this.joueurs[this.tour].attaqueCanceled = false;
			}
			else {
				this.joueurs[this.tour].getPokemon(0).attaque(this.joueurs[1-this.tour].getPokemon(0),this);
			}

			this.checkTourComplete+=1;
			if(this.checkTourComplete > 1){
				this.checkTourComplete = 0;
				this.mode = CombatMode.discussions;
			}

			if(this.joueurs[1-this.tour].getPokemon(0).pdv <= 0){
				this.joueurs[1-this.tour].getPokemon(0).pdv = 0;
				this.infos.push(this.joueurs[1-this.tour].getPokemon(0).getName()+" a epuisé ses pdv");

				//calcul experience
				//lvl adverse^(5) * (rand(15 -> 17)) *5 / lvl
				var expe = Math.round(this.joueurs[1-this.tour].getPokemon(0).lvl *this.joueurs[1-this.tour].getPokemon(0).lvl*(Math.random()*2 +15)*2 /this.joueurs[this.tour].getPokemon(0).lvl );
				//ajouter a pokemon une variable attaque qui sera choisi avant ce calcul

				this.infos.push(this.joueurs[this.tour].getPokemon(0).getName()+" gagne "+expe+" pts d'experiences");
				this.joueurs[this.tour].getPokemon(0).addExperience(expe,this);


				if(this.joueurs[1-this.tour].pokemonsEnVie().length > 0){
					this.infos.push(this.joueurs[1-this.tour].getName()+" change de pokemon");
					//change pokemon
					var tab = this.joueurs[1-this.tour].pokemonsEnVie();
					this.joueurs[1-this.tour].echange(tab[0],this.joueurs[1-this.tour].getPokemon(0));   	//normalement un pokemon sauvage n as pas besoin de cette fonction
					this.tour = this.joueurs[0].getPokemon(0).agi-this.joueurs[1].getPokemon(0).agi > 0? 0:1;

				}
				else{
					this.joueurs[1-this.tour].asPerdu = 1;

					if(this.joueurs[1-this.tour] === monDresseur.dresseur){
						//console.log("Perdu");
						this.joueurs[this.tour].soignePokemons();
						this.joueurs[this.tour].setOriginalOrientation();
						monDresseur.onLose();
					}
					else{
						this.finCombat();
					}
				}


			}
		}
		this.tour = 1 - this.tour;
	}



	if(this.mode == CombatMode.dresseurs){
		this.time += 1;
		if(this.time > WaitLimit.short){	//affichage des sprites
			this.mode = CombatMode.pokemons;
			this.time = 0;
		}

	}
	if(this.mode == CombatMode.pokemons){
		this.time += 1;
		if(this.time > WaitLimit.middle){	//affichage des sprites
			this.mode = CombatMode.menuSelection;
			this.time = 0;
		}
	}

	if(this.mode == CombatMode.discussions){

	}

	if(this.mode == CombatMode.menuSelection){

	}
	console.log("mode  "+this.mode);
	// console.log("time  "+this.time);
}

Combat.prototype.finCombat = function(){
	this.mode = CombatMode.discussions_end;
	this.infos.push("Bravo, vous avez gagné ce combat");
}


Combat.prototype.drawCombat=function(){
	var context = getContext();
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";



	if(this.mode == CombatMode.dresseurs){
		if(monDresseur.getAdv().isSauvage()){
			monDresseur.getAdv().getPokemon(0).afficheToiCombat();
		}
		else{
			context.drawImage(monDresseur.charSprites,0+(80*monDresseur.getAdv().getGTX()),0+(80*monDresseur.getAdv().getGTY()), 80, 80, 600,50,250,250);
		}
		context.font="25px Georgia";
		context.fillText("Adversaire :"+monDresseur.getAdv().getName(),65,100);
		var hero_img = document.createElement("img");
		hero_img.src = hero;
		context.drawImage(hero_img,0,0, 70, 75, 50,250,400,400);
		context.font="30px Georgia";
		context.fillText("Combat!!",365,300);
	}

	if(this.mode == CombatMode.pokemons){

		context.font="20px Georgia";
		context.fillText(monDresseur.getAdv().getPokemon(0).getName(),65,140);
		context.fillText("Niveau :"+monDresseur.getAdv().getPokemon(0).lvl,90,170);
		context.fillText("Pdv :"+monDresseur.getAdv().getPokemon(0).pdv+"/"+monDresseur.getAdv().getPokemon(0).pdvMax,90,190,200);
		monDresseur.getAdv().getPokemon(0).afficheToiCombat();


		context.font="20px Georgia";
		context.fillText(monDresseur.dresseur.getPokemon(0).getName(),450,400);
		context.fillText("Niveau :"+monDresseur.dresseur.getPokemon(0).lvl,500,430);
		context.fillText("Pdv :"+monDresseur.dresseur.getPokemon(0).pdv+"/"+monDresseur.dresseur.getPokemon(0).pdvMax,500,450,200);
		monDresseur.dresseur.getPokemon(0).getBackSprite();
	}

	if(this.mode == CombatMode.discussions){

		context.font="20px Georgia";
		context.fillText(monDresseur.getAdv().getPokemon(0).getName(),65,140);
		context.fillText("Niveau :"+monDresseur.getAdv().getPokemon(0).lvl,90,170);
		context.fillText("Pdv :"+monDresseur.getAdv().getPokemon(0).pdv+"/"+monDresseur.getAdv().getPokemon(0).pdvMax,90,190,200);
		monDresseur.getAdv().getPokemon(0).afficheToiCombat();


		context.font="20px Georgia";
		context.fillText(monDresseur.dresseur.getPokemon(0).getName(),450,400);
		context.fillText("Niveau :"+monDresseur.dresseur.getPokemon(0).lvl,500,430);
		context.fillText("Pdv :"+monDresseur.dresseur.getPokemon(0).pdv+"/"+monDresseur.dresseur.getPokemon(0).pdvMax,500,450,200);
		monDresseur.dresseur.getPokemon(0).getBackSprite();

		context.fillStyle = "#aaaaaa";
		context.fillRect(50,450,800,30+(this.infos.length*25));
		context.fillStyle="#000000";
		context.font="20px Georgia";
		for(var i = 0;i< this.infos.length;i++){
			context.fillText(this.infos[i],80,485+(25*i));
		}



	}

	if(this.mode == CombatMode.menuSelection){
		context.font="20px Georgia";
		context.fillText(monDresseur.getAdv().getPokemon(0).getName(),65,140);
		context.fillText("Niveau :"+monDresseur.getAdv().getPokemon(0).lvl,90,170);
		context.fillText("Pdv :"+monDresseur.getAdv().getPokemon(0).pdv+"/"+monDresseur.getAdv().getPokemon(0).pdvMax,90,190,200);
		monDresseur.getAdv().getPokemon(0).afficheToiCombat();


		context.font="20px Georgia";
		context.fillText(monDresseur.dresseur.getPokemon(0).getName(),450,400);
		context.fillText("Niveau :"+monDresseur.dresseur.getPokemon(0).lvl,500,430);
		context.fillText("Pdv :"+monDresseur.dresseur.getPokemon(0).pdv+"/"+monDresseur.dresseur.getPokemon(0).pdvMax,500,450,200);
		monDresseur.dresseur.getPokemon(0).getBackSprite();


		this.menu.afficheToi();
	}

	if(this.mode == CombatMode.discussions_end){	//copie du 3 mais pour la fin

		context.font="20px Georgia";
		context.fillText(monDresseur.getAdv().getPokemon(0).getName(),65,140);
		context.fillText("Niveau :"+monDresseur.getAdv().getPokemon(0).lvl,90,170);
		context.fillText("Pdv :"+monDresseur.getAdv().getPokemon(0).pdv+"/"+monDresseur.getAdv().getPokemon(0).pdvMax,90,190,200);
		//monDresseur.getAdv().getPokemon(0).afficheToiCombat();


		context.font="20px Georgia";
		context.fillText(monDresseur.dresseur.getPokemon(0).getName(),450,400);
		context.fillText("Niveau :"+monDresseur.dresseur.getPokemon(0).lvl,500,430);
		context.fillText("Pdv :"+monDresseur.dresseur.getPokemon(0).pdv+"/"+monDresseur.dresseur.getPokemon(0).pdvMax,500,450,200);
		monDresseur.dresseur.getPokemon(0).getBackSprite();

		context.fillStyle = "#aaaaaa";
		context.fillRect(50,450,800,30+(this.infos.length*25));
		context.fillStyle="#000000";
		context.font="20px Georgia";
		for(var i = 0;i< this.infos.length;i++){
			context.fillText(this.infos[i],80,485+(25*i));
		}
	}

}

Combat.prototype.gestionEvenement = function(touche){
	if(this.mode == CombatMode.menuSelection){//selection
		if(touche != BUTTON.CONFIRM){
			this.menu.changeSelection(touche);
		}
		else{
			this.menu.valide();
		}
	}
	if(this.mode == CombatMode.discussions){
		if(touche == BUTTON.CONFIRM){
			this.mode = CombatMode.menuSelection;
			this.infos = [];
		}
	}
	if(this.mode == CombatMode.discussions_end){
		if(touche == BUTTON.CONFIRM){
			if(!this.joueurs[1].isSauvage()){//si c est un dresseur
				this.joueurs[1].parler();
				monDresseur.mode = 1;
				monDresseur.hudMode = 1;
			}
			else{ //s'il s agit d un pokemon sauvage
				monDresseur.mode = 0;
			}
		}
	}
}

export default Combat;
