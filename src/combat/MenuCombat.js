import BUTTON from '../utils/touches';
import {getContext} from '../utils/render_utils';
import {monDresseur} from '../utils/globals';

import Color from "../utils/Color";
import CombatMode from "../utils/CombatMode";
import MenuCombatMode from "../utils/MenuCombatMode";

function MenuCombat(combat){
	this.combat = combat;
	this.mode = MenuCombatMode.global ;//-> menu normal, 1->  menu attaques 2 -> menu objets
	this.selection = 0; //-> attaque , 1 -> objets, 2 ->changer pokemon      3-> fuite  (en mode normal / en mode choix objets ou pokemon il sera pour choisir le numero de l objet/pokemon)
	this.selectionAttaque = 0;
	this.selectionObjet = 0;
	this.selectionPokemon = 0;
}

function AfficheMenuBackGround(context){
	context.fillStyle=Color.LightGrey;
	context.fillRect(50,480,800,155);
}

function AfficheMenuSelection(context, selection){
	context.fillStyle = monDresseur.couleurPrefere;
	context.fillRect(60,490,260,135);

	context.fillStyle = Color.Black;
	context.fillText("Que voulez vous faire ?",70,565);

	context.fillStyle = selection == 0 ? Color.LighterGrey : Color.DarkGrey;
	context.fillRect(340,490,240,65);

	context.fillStyle = selection == 1 ? Color.LighterGrey : Color.DarkGrey;
	context.fillRect(340,560,240,65);

	context.fillStyle = selection == 2 ? Color.LighterGrey : Color.DarkGrey;
	context.fillRect(590,490,240,65);

	context.fillStyle = selection == 3 ? Color.LighterGrey : Color.DarkGrey;
	context.fillRect(590,560,240,65);

	context.fillStyle = Color.Black;
	context.fillText("Attaque",360,530);
	context.fillText("Pokemons",360,600);
	context.fillText("Objets",610,530);
	context.fillText("Fuite",610,600);
}

MenuCombat.prototype.afficheToi=function(){
	var context = getContext();
	switch(this.mode){
		case(MenuCombatMode.global):	//menu normal
			AfficheMenuBackGround(context);
			AfficheMenuSelection(context, this.selection);

		break;


		case(1):	//menu attaque
			AfficheMenuBackGround(context);
			AfficheMenuSelection(context, this.selection);

			context.fillStyle=Color.LightGrey;
			context.fillRect(360,280,320,370);

			context.fillStyle=monDresseur.couleurPrefere;
			context.fillRect(380,290+(this.selectionAttaque*70),280,70);

			context.fillStyle=Color.Black;
			context.fillText(monDresseur.dresseur.getPokemon(0).getAttaqueNum(0).getName(),390,330,270);
			context.fillText(monDresseur.dresseur.getPokemon(0).getAttaqueNum(1).getName(),390,400,270);
			context.fillText(monDresseur.dresseur.getPokemon(0).getAttaqueNum(2).getName(),390,470,270);
			context.fillText(monDresseur.dresseur.getPokemon(0).getAttaqueNum(3).getName(),390,540,270);

			context.fillText("Retour",390,610,270);
			break;

		case(MenuCombatMode.pokemons):
			AfficheMenuBackGround(context);
			AfficheMenuSelection(context, this.selection);

			context.fillStyle=Color.LightGrey;
			context.fillRect(360,280,320,70*(monDresseur.dresseur.pokemons.length+1)+20);

			context.fillStyle=monDresseur.couleurPrefere;
			context.fillRect(380,290+70*this.selectionPokemon,280,70);

			context.fillStyle=Color.Black;
			for(var i = 0;i<monDresseur.dresseur.pokemons.length;i++){
				context.fillText(monDresseur.dresseur.getPokemon(i).getName(),390,330+(70*i),270);
			}

			context.fillText("Retour",390,260+70*(monDresseur.dresseur.pokemons.length+1),270);
			break;

		case(MenuCombatMode.objets):	//menu objet
			AfficheMenuBackGround(context);
			AfficheMenuSelection(context, this.selection);

			context.fillStyle=Color.LightGrey;
			context.fillRect(360,280,320,370);

			context.fillStyle=monDresseur.couleurPrefere;
			context.fillRect(380,290+(this.selectionObjet*70),280,70);

			context.fillStyle=Color.Black;
			context.fillText("Potion : 0",390,330,270);
			context.fillText("Pokeball",390,400,270);
			context.fillText("Retour",390,610,270);
			break;
	}

}

MenuCombat.prototype.changeSelection = function(touche){
	switch(this.mode){
		case(MenuCombatMode.global):
		if(touche == BUTTON.DOWN || touche == BUTTON.UP){
			switch(this.selection){
				case(0):
					this.selection = 1;
				break;

				case(1):
					this.selection = 0;
				break;

				case(2):
					this.selection	= 3;
				break;
				case(3):
					this.selection	= 2;
				break;
			}
		}
		else if (touche == BUTTON.LEFT || touche == BUTTON.RIGHT){
			switch(this.selection){
				case(0):
					this.selection = 2;
				break;

				case(1):
					this.selection = 3;
				break;

				case(2):
					this.selection	= 0;
				break;
				case(3):
					this.selection	= 1;
				break;
			}
		}
		break;
		case MenuCombatMode.attaques://menu attaque
			switch(touche){
				case(BUTTON.DOWN):
					this.selectionAttaque++;
					if(this.selectionAttaque>4){
						this.selectionAttaque = 0;
					}
				break;
				case(BUTTON.UP):
					this.selectionAttaque--;
					if(this.selectionAttaque<0){
						this.selectionAttaque = 4;
					}
				break;
			}
		break;
		case MenuCombatMode.pokemons:
			switch(touche){
				case(BUTTON.DOWN):
					this.selectionPokemon++;
					if(this.selectionPokemon>monDresseur.dresseur.pokemons.length){
						this.selectionPokemon= 0;
					}
				break;
				case(BUTTON.UP):
					this.selectionPokemon--;
					if(this.selectionPokemon<0){
						this.selectionPokemon= monDresseur.dresseur.pokemons.length;
					}
				break;
			}
		break;
		case MenuCombatMode.objets:
			switch(touche){
				case(BUTTON.DOWN):
					this.selectionObjet++;
					if(this.selectionObjet>4){			//monDresseur.inveentaire.length +1 (pour le bouton retour )
						this.selectionObjet = 0;
					}
				break;
				case(BUTTON.UP):
					this.selectionObjet--;
					if(this.selectionObjet<0){
						this.selectionObjet = 4;
					}
				break;
			}
		break;
	}
}

MenuCombat.prototype.valide=function(){
	// console.log("Vous avez cliqué sur "+this.selection);
	switch(this.mode){
	case MenuCombatMode.global:
		switch(this.selection){
			case 0:
				this.mode = MenuCombatMode.attaques;
			break;
			case 1:
				this.mode = MenuCombatMode.pokemons;
			break;
			case 2:
				this.mode = MenuCombatMode.objets;
			break;
			case 3://fuite
				if(monDresseur.getAdv().isSauvage()){
					var rand = Math.random();
					if(rand>0.5){
						this.combat.finCombat();
					}
					else{
						this.combat.mode = CombatMode.attaque;
						monDresseur.dresseur.attaqueCanceled = true;
						this.mode = MenuCombatMode.global;
					}
				}
				else{
					this.combat.mode = CombatMode.attaque;
					monDresseur.dresseur.attaqueCanceled = true;
					this.mode = MenuCombatMode.global;
				}
			break;
		}
	break;

	case MenuCombatMode.attaques://menu attaque
		if(this.selectionAttaque < 4){
			this.combat.mode = CombatMode.attaque;
			monDresseur.dresseur.getPokemon(0).setSelectAttaque(this.selectionAttaque);
		}
		this.mode = MenuCombatMode.global;
	break;
	case MenuCombatMode.pokemons:
		if(this.selectionPokemon != monDresseur.dresseur.pokemons.length){
			monDresseur.dresseur.echange(monDresseur.dresseur.getPokemon(this.selectionPokemon),monDresseur.dresseur.getPokemon(0));
			this.mode = MenuCombatMode.global;
			this.combat.mode = CombatMode.attaque;
			monDresseur.dresseur.attaqueCanceled = true;
		}
		else{
			this.mode = MenuCombatMode.global;
		}
	break;

	case MenuCombatMode.objets:
		switch(this.selectionObjet){
			case 0:

			break;
			case 1: // pokeball
				monDresseur.dresseur.attaqueCanceled = true;
				var rand = Math.random();
				if(monDresseur.getAdv().isSauvage()){
					if(rand > 0.8){	//recalculer a partir des pdv et de l agilité
						monDresseur.addPokemon(monDresseur.getAdv().getPokemon(0));

						monDresseur.mode = MenuCombatMode.attaques;
						monDresseur.hudMode = 11;
						monDresseur.setPokemonCapture(monDresseur.getAdv().getPokemon(0));
					}
					else{
						this.mode = MenuCombatMode.global;
						this.combat.mode = CombatMode.attaque;
					}
				}
				else{
					// pokemon sur pokemon non sauvage
					this.mode = MenuCombatMode.global;
					monDresseur.dresseur.attaqueCanceled = true
					this.combat.mode = CombatMode.attaque;
				}
			break;
			case 2:

			break;
			case 4: //retour
				this.mode = MenuCombatMode.global;
			break;
		}
	break;
	}
}

export default MenuCombat;
