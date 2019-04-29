var Combat = function(){
	this.joueurs = [monDresseur.dresseur,monDresseur.getAdv()];
	this.tour = this.joueurs[0].getPokemon(0).agi-this.joueurs[1].getPokemon(0).agi > 0? 0:1;
	this.checkTourComplete = 0;	//-> devient 1 quand un pokemon a attaquer, repasse a 0 quand le deuwieme aussi, et change le mode.
	
	
	this.mode = 1;
		 // 1 -> juste les dresseurs, 
		 // 2-> juste les pokemons,
		 // 3-> discussion (ex:pokemon gagne pts, pokemon recoit degats) ,
		 // 4 -> Menu selection,
		 // 5 -> attaque
		 //6 -> discussion puis retour au jeu apres combat

	this.menu = new MenuCombat(this);
	
	this.time = 0; //comteur incremental de temps (pas d unité speciales, n*monDresseur.fps pour faire simple)
	
	this.infos = [];
	
	//console.log(this.joueurs[0].getPokemon(0).getName());
	//console.log();
}


Combat.prototype.runTour = function(){
	if(this.mode == 5){
				
				
				
				
				//recuperer l attaque, et surtout son type
				
				
				
				
				
				if(!(this.joueurs[this.tour] === monDresseur.dresseur)){
					var rand = Math.round(Math.random()*4);
					//console.log("rand = "+rand);
					this.joueurs[this.tour].getPokemon(0).setSelectAttaque(rand);
				}
				
				if(this.joueurs[this.tour].getPokemon(0).pdv > 0 && this.joueurs[1-this.tour].getPokemon(0).pdv > 0){
					this.joueurs[this.tour].getPokemon(0).attaque(this.joueurs[1-this.tour].getPokemon(0),this);
				
				
					this.checkTourComplete+=1;
					if(this.checkTourComplete > 1){
						this.checkTourComplete = 0;
						this.mode = 3;
					}
					
					
					
					
					if(this.joueurs[1-this.tour].getPokemon(0).pdv <= 0){
						this.joueurs[1-this.tour].getPokemon(0).pdv = 0;
						this.infos.push(this.joueurs[1-this.tour].getPokemon(0).getName()+" a epuisé ses pdv");
						
						//calcul experience
						var expe = Math.round(this.joueurs[1-this.tour].getPokemon(0).lvl *this.joueurs[1-this.tour].getPokemon(0).lvl*(Math.random()*2 +15)*2 /this.joueurs[this.tour].getPokemon(0).lvl );
										//lvl adverse^(5) * (rand(15 -> 17)) *5 / lvl  
										
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
							this.joueurs[1-this.tour].aPerdu = 1;
							
							if(this.joueurs[1-this.tour] === monDresseur.dresseur){
								monDresseur.mode = 1;//hud
								monDresseur.hudMode = 9;//fail
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
				this.tour = 1-this.tour;
				
		}
		if(this.mode == 1){//dresseurs
			this.time+= 1;
			if(this.time > 30){	//affichage des sprites
				this.mode = 2;
				this.time = 0;
			}
		
		}
		if(this.mode == 2){//pokemon
			this.time+= 1;
			if(this.time > 40){	//affichage des sprites
				this.mode = 4;
				this.time = 0;
			}
		}
		
		if(this.mode == 3){//discussion
			
				this.time+=1;
				
			
		}
		
		if(this.mode ==4){
			this.time+=1;
			
		}
		//console.log("mode  "+this.mode);
		//console.log("time  "+this.time);
		
		
}
Combat.prototype.finCombat = function(){
	this.mode = 6;
	this.infos.push("Bravo, vous avez gagné ce combat");
}


Combat.prototype.drawCombat=function(){
	//console.log("affichage combat");
	
					//alert("Fight");
					context.fillStyle=monDresseur.couleurPrefere;
					context.fillRect(50,50,800,550);
					context.fillStyle="#000000";
					
						
						
					if(combat.mode == 1){
					
						if(monDresseur.getAdv().isSauvage()){
							monDresseur.getAdv().getPokemon(0).afficheToiCombat();
						}
						else{
							context.drawImage(monDresseur.charSprites,0+(80*monDresseur.getAdv().getGTX()),0+(80*monDresseur.getAdv().getGTY()), 80, 80, 600,50,250,250);
						}
						context.font="25px Georgia";
						context.fillText("Adversaire :"+monDresseur.getAdv().getName(),65,100);
						context.drawImage(document.getElementById("hero"),0,0, 70, 75, 50,250,400,400);
						context.font="30px Georgia";
						context.fillText("Combat!!",365,300);
					}
					
					
					
					
					
					
					if(combat.mode == 2){
					
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
					
					if(combat.mode == 3){
					
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
					
					if(combat.mode == 4){
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
					
					if(combat.mode == 6){	//copie du 3 mais pour la fin
					
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
	if(this.mode == 4){//selection
		if(touche != 65){
			this.menu.changeSelection(touche);
		}
		else{
			this.menu.valide();
		}
	}
	if(this.mode == 3){
		if(touche == 65){
			this.mode = 4;
			this.infos = [];
		}
	}
	if(this.mode == 6){
		if(touche == 65){
			if(!this.joueurs[1].isSauvage()){//si c est un dresseur
								monDresseur.mode = 1;
								monDresseur.discussion = this.joueurs[1-this.tour].parler();
								monDresseur.hudMode = 1;
								
			}
			else{//s il s agit d un pokemon sauvage
								monDresseur.mode = 0;
			}
		}
	}
}



//------------------------------------------------------------------------------------------------------------------------


function MenuCombat(combat){
	this.combat = combat;
	this.mode = 0 ;//-> menu normal, 1->  menu attaques 2 -> menu objets 
	this.selection = 0; //-> attaque , 1 -> objets, 2 ->changer pokemon      3-> fuite  (en mode normal / en mode choix objets ou pokemon il sera pour choisir le numero de l objet/pokemon)
	this.selectionAttaque = 0;
	this.selectionObjet = 0;
	this.selectionPokemon = 0;
}

MenuCombat.prototype.afficheToi=function(){
	switch(this.mode){
		case(0):	//menu normal
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
				case(40)://down
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
				case(38)://up
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
				case(37)://left
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
				case(39)://right
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
			case(40):
				this.selectionAttaque++;
				if(this.selectionAttaque>4){
					this.selectionAttaque = 0;
				}
			break;
			case(38):
				this.selectionAttaque--;
				if(this.selectionAttaque<0){
					this.selectionAttaque = 4;
				}
			break;
		
		}
	break;
	case 2://menu pokemon
		switch(touche){
			case(40):
				this.selectionPokemon++;
				if(this.selectionPokemon>monDresseur.dresseur.pokemons.length){		
					this.selectionPokemon= 0;
				}
			break;
			case(38):
				this.selectionPokemon--;
				if(this.selectionPokemon<0){
					this.selectionPokemon= monDresseur.dresseur.pokemons.length;
				}
			break;
		
		}
	break;
	case 3://menu objet
		switch(touche){
			case(40):
				this.selectionObjet++;
				if(this.selectionObjet>4){			//monDresseur.inveentaire.length +1 (pour le bouton retour )
					this.selectionObjet = 0;
				}
			break;
			case(38):
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