import BUTTON from '../utils/touches';
import {getContext} from '../utils/render_utils';
import {monDresseur} from '../utils/globals';

function MenuCombat(combat){
	this.combat = combat;
	this.mode = 0 ;//-> menu normal, 1->  menu attaques 2 -> menu objets
	this.selection = 0; //-> attaque , 1 -> objets, 2 ->changer pokemon      3-> fuite  (en mode normal / en mode choix objets ou pokemon il sera pour choisir le numero de l objet/pokemon)
	this.selectionAttaque = 0;
	this.selectionObjet = 0;
	this.selectionPokemon = 0;
}

MenuCombat.prototype.afficheToi=function(){
	var context = getContext();
	switch(this.mode){
		case(0):	//menu normal
			context.fillStyle="#444444";
			context.fillRect(50,480,800,155);
			context.fillStyle="#000000";
			switch(this.selection){
				case(0):
					context.fillRect(338,488,244,69);
					break;
				case(1):
					context.fillRect(338,558,244,69);
					break;
				case(2):
					context.fillRect(588,488,244,69);
					break;
				case(3):
					context.fillRect(588,558,244,69);
					break;
			}

			context.fillStyle=monDresseur.couleurPrefere;
			context.fillRect(60,490,230,135);

			context.fillRect(340,490,240,65);
			context.fillRect(340,560,240,65);
			context.fillRect(590,490,240,65);
			context.fillRect(590,560,240,65);


			context.fillStyle="#000000";
			context.fillText("Que voulez vous faire ?",70,565);

			context.fillText("Attaque",360,530);
			context.fillText("Pokemons",360,600);
			context.fillText("Objets",610,530);
			context.fillText("Fuite",610,600);


		break;


		case(1):	//menu attaque
			context.fillStyle="#444444";
			context.fillRect(50,480,800,155);

			context.fillStyle="#000000";

			switch(this.selection){
				case(0):
					//context.fillRect(500,520,10,10);
					context.fillRect(338,488,244,69);
				break;

				case(1):
					context.fillRect(338,558,244,69);
				break;

				case(2):
					context.fillRect(588,488,244,69);
				break;

				case(3):
					context.fillRect(588,558,244,69);
				break;

			}

			context.fillStyle=monDresseur.couleurPrefere;
			context.fillRect(60,490,230,135);

			context.fillRect(340,490,240,65);
			context.fillRect(340,560,240,65);
			context.fillRect(590,490,240,65);
			context.fillRect(590,560,240,65);


			context.fillStyle="#000000";
			context.fillText("Que voulez vous faire ?",70,565);

			context.fillText("Attaque",360,530);
			context.fillText("Pokemons",360,600);
			context.fillText("Objets",610,530);
			context.fillText("Fuite",610,600);

			context.fillStyle="#aaaaaa";
			context.fillRect(360,280,320,370);

			context.fillStyle=monDresseur.couleurPrefere;
			switch(this.selectionAttaque){
				case(0):
					context.fillRect(380,290,280,70);
				break;

				case(1):
					context.fillRect(380,360,280,70);
				break;

				case(2):
					context.fillRect(380,430,280,70);
				break;

				case(3):
					context.fillRect(380,500,280,70);
				break;
				case(4):
					context.fillRect(380,570,280,70);
				break;

			}

			context.fillStyle="#000000";
			//context.fillText("Charge",390,330,270);

			context.fillText(monDresseur.dresseur.getPokemon(0).getAttaqueNum(0).getName(),390,330,270);
			context.fillText(monDresseur.dresseur.getPokemon(0).getAttaqueNum(1).getName(),390,400,270);
			context.fillText(monDresseur.dresseur.getPokemon(0).getAttaqueNum(2).getName(),390,470,270);
			context.fillText(monDresseur.dresseur.getPokemon(0).getAttaqueNum(3).getName(),390,540,270);

			context.fillText("Retour",390,610,270);
			break;

		case(2):
			context.fillStyle="#444444";
			context.fillRect(50,480,800,155);

			context.fillStyle="#000000";

			switch(this.selection){
				case(0):
					//context.fillRect(500,520,10,10);
					context.fillRect(338,488,244,69);
				break;

				case(1):
					context.fillRect(338,558,244,69);
				break;

				case(2):
					context.fillRect(588,488,244,69);
				break;

				case(3):
					context.fillRect(588,558,244,69);
				break;

			}

			context.fillStyle=monDresseur.couleurPrefere;
			context.fillRect(60,490,230,135);

			context.fillRect(340,490,240,65);
			context.fillRect(340,560,240,65);
			context.fillRect(590,490,240,65);
			context.fillRect(590,560,240,65);


			context.fillStyle="#000000";
			context.fillText("Que voulez vous faire ?",70,565);

			context.fillText("Attaque",360,530);
			context.fillText("Pokemons",360,600);
			context.fillText("Objets",610,530);
			context.fillText("Fuite",610,600);

			context.fillStyle="#aaaaaa";
			context.fillRect(360,280,320,70*(monDresseur.dresseur.pokemons.length+1)+20);

			context.fillStyle=monDresseur.couleurPrefere;


			context.fillRect(380,290+70*this.selectionPokemon,280,70);

			context.fillStyle="#000000";
			for(var i = 0;i<monDresseur.dresseur.pokemons.length;i++){
				context.fillText(monDresseur.dresseur.getPokemon(i).getName(),390,330+(70*i),270);
			}

			context.fillText("Retour",390,260+70*(monDresseur.dresseur.pokemons.length+1),270);
			break;

		case(3):	//menu objet
			context.fillStyle="#444444";
			context.fillRect(50,480,800,155);
			context.fillStyle="#000000";

			switch(this.selection){
				case(0):
					//context.fillRect(500,520,10,10);
					context.fillRect(338,488,244,69);
				break;

				case(1):
					context.fillRect(338,558,244,69);
				break;

				case(2):
					context.fillRect(588,488,244,69);
				break;

				case(3):
					context.fillRect(588,558,244,69);
				break;

			}

			context.fillStyle=monDresseur.couleurPrefere;
			context.fillRect(60,490,230,135);

			context.fillRect(340,490,240,65);
			context.fillRect(340,560,240,65);
			context.fillRect(590,490,240,65);
			context.fillRect(590,560,240,65);


			context.fillStyle="#000000";
			context.fillText("Que voulez vous faire ?",70,565);

			context.fillText("Attaque",360,530);
			context.fillText("Pokemons",360,600);
			context.fillText("Objets",610,530);
			context.fillText("Fuite",610,600);

			context.fillStyle="#aaaaaa";
			context.fillRect(360,280,320,370);

			context.fillStyle=monDresseur.couleurPrefere;
			switch(this.selectionObjet){
				case(0):
					context.fillRect(380,290,280,70);
				break;

				case(1):
					context.fillRect(380,360,280,70);
				break;

				case(2):
					context.fillRect(380,430,280,70);
				break;

				case(3):
					context.fillRect(380,500,280,70);
				break;
				case(4):
					context.fillRect(380,570,280,70);
				break;

			}

			context.fillStyle="#000000";
			context.fillText("Potion : 0",390,330,270);
			context.fillText("Pokeball",390,400,270);
			context.fillText("Retour",390,610,270);
			break;
	}

}

MenuCombat.prototype.changeSelection = function(touche){
	switch(this.mode){
	case(0):
		switch(touche){
				case(BUTTON.DOWN):
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
				break;
				case(BUTTON.UP):
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

				break;
				case(BUTTON.LEFT)://left
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

				break;
				case(BUTTON.RIGHT)://right
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
				break;
		}
	break;
	case 1://menu attaque
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
	case 2://menu pokemon
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
	case 3://menu objet
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
	//console.log("Vous avez cliquer sur "+this.selection);
	switch(this.mode){
	case 0:
		switch(this.selection){
			case 0:
				this.mode = 1;//menu attaque
			break;
			case 1:
				this.mode = 2;//menu pokemon
			break;
			case 2:
				this.mode = 3;//menu objet
			break;
			case 3://fuite
				if(monDresseur.getAdv().isSauvage()){
					var rand = Math.random();
					if(rand>0.5){
						this.combat.finCombat();
					}
					else{
						this.combat.mode = 5;
						this.mode = 0;
					}
				}
				else{
					this.combat.mode = 5;
					this.mode = 0;
				}
			break;
		}
	break;

	case 1://menu attaque

		switch(this.selectionAttaque){
			case 0:

				this.combat.mode = 5;
				monDresseur.dresseur.getPokemon(0).setSelectAttaque(0);
				this.mode = 0;
			break;
			case 1:

				this.combat.mode = 5;
				monDresseur.dresseur.getPokemon(0).setSelectAttaque(1);
				this.mode = 0;
			break;
			case 2:

				this.combat.mode = 5;
				monDresseur.dresseur.getPokemon(0).setSelectAttaque(2);
				this.mode = 0;
			break;
			case 3:

				this.combat.mode = 5;
				monDresseur.dresseur.getPokemon(0).setSelectAttaque(3);
				this.mode = 0;
			break;
			case 4: //retour
				this.mode = 0;
			break;


		}
	break;
	case 2://menu pokemon
		console.log(this.selectionPokemon+"  "+monDresseur.dresseur.pokemons.length);
		if(this.selectionPokemon != monDresseur.dresseur.pokemons.length){
			monDresseur.dresseur.echange(monDresseur.dresseur.getPokemon(this.selectionPokemon),monDresseur.dresseur.getPokemon(0));
			this.mode = 0;
			this.combat.mode = 5;
		}
		else{
			this.mode = 0;
		}
	break;

	case 3://menu objet

		switch(this.selectionObjet){
			case 0:

			break;
			case 1:
				var rand = Math.random();
				if(monDresseur.getAdv().isSauvage()){
					console.log("ok");
					if(rand > 0.8){	//recalculer a partir des pdv et de l agilité
						monDresseur.addPokemon(monDresseur.getAdv().getPokemon(0));

						monDresseur.mode = 1;
						monDresseur.hudMode = 11;
						monDresseur.setPokemonCapture(monDresseur.getAdv().getPokemon(0));
					}
					else{
						this.mode = 0;
						this.combat.mode = 5;
					}
				}
				else{
					console.log("pas ok");
				}
			break;
			case 2:

			break;
			case 4: //retour
				this.mode = 0;
			break;
		}
	break;
	}
}


export default MenuCombat;
