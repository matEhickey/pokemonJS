var nbDresseur = 0;
var Dresseur = function(nom, posX,posY,orientation,grille){
	this.nom = nom;
	this.grille = grille;
	this.posX = posX;
	this.posY = posY;
	this.tailleX = 32;
	this.tailleY = 48;
	this.texte = "Il faut bien avoir quelque chose a dire.."
	this.texteLooser = "J'ai perdu ..";
	this.pokemons = [];
	this.pcDeLeo = [];
	this.inventaire = [];
	this.argent = 0;
	this.badges = 0;
	this.aPerdu = 0;
	this.zone = new ZoneDresseur(this);
	
	this.num = nbDresseur;
	nbDresseur++;
	
	
	this.texture = document.getElementById('dresseurVert');
	this.grandeTextureX=7;//pour les combats
	this.grandeTextureY=4;//par default simple team rocket, car plus nombreux
	//anim
	this.orientationInit = orientation;
	this.orientation = orientation;// 0 de face, 1 = de gzuche, 2 de droite 3 de derriere
	this.position = 5;
	//colisions
	this.nextCaseX = false;
	this.nextCaseY = false;
	
	
}






Dresseur.prototype.isInfirmiere = function(){
	return(false);
}


Dresseur.prototype.displayName = function(){
	console.log("Dresseur:"+this.nom);
	
}

Dresseur.prototype.getName = function(){
	return(this.nom);
	
}

Dresseur.prototype.getNum = function(){
	return(this.num);
	
}

Dresseur.prototype.getGTX = function(){
	return(this.grandeTextureX);
}

Dresseur.prototype.getGTY = function(){
	return(this.grandeTextureY);
}

Dresseur.prototype.setGTX = function(val){
	this.grandeTextureX = val;
}

Dresseur.prototype.setGTY = function(val){
	this.grandeTextureY = val;
}





Dresseur.prototype.calculNextCase=function(){
	switch(this.orientation){
	
			case(1):
				this.nextCaseX = this.posX;
				this.nextCaseY = this.posY+2;
				break;
			case(2):
				this.nextCaseX = this.posX-2;
				this.nextCaseY = this.posY;
				break;
			case(3):
				this.nextCaseX = this.posX+2;
				this.nextCaseY = this.posY;
				break;
			case(4):
				this.nextCaseX = this.posX;
				this.nextCaseY = this.posY-2;
				break;
				
			
				
							
	}
}

Dresseur.prototype.isWalkable = function(posX,posY){

	return(!this.isOnPosition(posX,posY));
}

Dresseur.prototype.parler= function(){
	this.trouveOrientation();
	if(this.aPerdu){
		return(this.nom+": "+this.texteLooser);
	}
	else{
		return(this.nom+": "+this.texte);
	}
}

Dresseur.prototype.trouveOrientation= function(){
	var sens; 
	var x = monDresseur.getPosX() - this.getPosX();
	var y = monDresseur.getPosY() - this.getPosY();
	
	
	if(x <= y){
	
		if(x>0){
			this.setOrientation(0);
		}
		else {
			this.setOrientation(1);
		}
	}
	else{
		if(y>0){
			this.setOrientation(2);
		}
		else {
			this.setOrientation(3);
		}
		
	}
	
}




Dresseur.prototype.showPokemon= function(){
	for(var i = 0;i<pokemons.length;i++){
		pokemons[i].displayInfo();
	}
}

Dresseur.prototype.image= function(){
	return(this.texture);
}

Dresseur.prototype.addPokemon= function(poke){
	if(this.pokemons.length < 6){
		this.pokemons.push(poke);
		
	}
	else{ 
		console.log("plus de place");
		this.pcDeLeo.push(poke);
	}
}

Dresseur.prototype.afficheToi = function(posiX,posiY){
	
	context.drawImage(this.texture,0,this.orientation*48,32,48   ,this.posX*3 -(posiX*3)+340,this.posY*3-(posiY*3)+280,this.tailleX,this.tailleY);
}      




Dresseur.prototype.isOnPosition = function(posX,posY){
		if(posX>this.posX&& posX< this.posX+(this.tailleX/2.5)){
			if(posY>this.posY && posY<this.posY+(this.tailleY/2.5)){
				return(true);
			}
		}
		return(false);
}

Dresseur.prototype.setTexture = function(texture){
	this.texture = texture;
}


Dresseur.prototype.setTexte = function(texte){
	this.texte = texte;
}

Dresseur.prototype.setTexteLooser = function(texte){
	this.texteLooser = texte;
}

Dresseur.prototype.pokemonsEnVie = function(){
	var tab = [];
	for(var i = 0;i<this.pokemons.length;i++){
		if(this.pokemons[i].pdv>0){
			tab.push(this.pokemons[i]);
		}
	}
	return(tab);
}

Dresseur.prototype.echange = function(pok1,pok2){
	
	for(var i = 0;i<this.pokemons.length;i++){
		if(this.pokemons[i] == pok1){
			for(var j = 0;j<this.pokemons.length;j++){
				var tamp = this.pokemons[i];
				this.pokemons[i] = this.pokemons[j];
				this.pokemons[j] = tamp;
			}
		}
	}
	
}

Dresseur.prototype.soignePokemons = function(){
	for(var i = 0;i<this.pokemons.length;i++){
		this.pokemons[i].soigneToi();
	}
}


Dresseur.prototype.peutAvancer= function(){
	return(grille.isWalkable(this.posX,this.posY));
}

Dresseur.prototype.setOrientation= function(or){
	this.orientation = or;
}

Dresseur.prototype.setOriginalOrientation= function(){
	this.orientation = this.orientationInit;
}


Dresseur.prototype.getOrientation= function(){
	return(this.orientation);
}
Dresseur.prototype.getPosX= function(){
	return(this.posX);
}

Dresseur.prototype.getPosY= function(){
	return(this.posY);
}

Dresseur.prototype.walkOnZone= function(){
	return(this.zone.isWalkOn());
}

Dresseur.prototype.getDistance = function(){
	if(this.orientation == 0){
	
	}
}

Dresseur.prototype.getPokemon=function(place){
	return(this.pokemons[place]);
}

Dresseur.prototype.getNombrePokemon = function(){
	return(this.pokemons.length);
}


Dresseur.prototype.avance= function(num){
	switch(this.orientation){
		case(1):
			this.posY += num;
		break;
		case(2):
			this.posX -= num;
		break;
		case(3):
			this.posX += num;
		break;
		case(4):
			this.posY -= num;
		break;
	}
}

Dresseur.prototype.calculDistanceAParcourir= function(){
	if(this.orientation==1 || this.orientation ==4  ){//Y 
		return(Math.abs(this.getPosY()-monDresseur.getPosY()));
	}
	else{//X
		return(Math.abs(this.getPosX()-monDresseur.getPosX()));
	}
}



Dresseur.prototype.attaqueJoueur = function(){
				if(!this.asPerdu){
							console.log(this.nom+" attaque");
							monDresseur.discussion = this.parler();
							
					   		monDresseur.mode = 1;
					   		monDresseur.hudMode = 1;
				}
}

//---------------------------------------------------Zone d attaque

var ZoneDresseur = function(dresseur){
	this.taille = 40;
	
	this.dresseur = dresseur;
}


ZoneDresseur.prototype.isWalkOn = function(){
	var x = monDresseur.getPosX();
	var y = monDresseur.getPosY();
	
	var orientation = this.dresseur.getOrientation();
	if(this.dresseur.nom == "Mathias"){
		//console.log(" check if walk on "+this.dresseur.nom);
	}
	
	switch(orientation){
	
		case(0)://de face seul Y+
			if((x>(this.dresseur.getPosX()))  && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3))  ){
				if((y>(this.dresseur.getPosY()+this.dresseur.tailleY/3))  && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3+this.taille))  ){
					
					return(true);
				}
			}
		break;
		case(1)://de gauche seul X-
			if((x>(this.dresseur.getPosX()+this.dresseur.tailleX/3-this.taille))  && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3))  ){
				if((y>(this.dresseur.getPosY()))  && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3))  ){
					
					return(true);
				}
			}
		break;
		case(2)://de droite seul X+
			if((x>(this.dresseur.getPosX()+this.dresseur.tailleX/3))  && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3+this.taille))  ){
				if((y>(this.dresseur.getPosY()))  && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3))  ){
					
					return(true);
				}
			}
		break;
		case(3)://de derriere seul Y-
			if((x>(this.dresseur.getPosX()+this.dresseur.tailleX/3))  && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3+this.taille))  ){
				if((y>(this.dresseur.getPosY()+this.dresseur.tailleY/3-this.taille))  && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3))  ){
					
					return(true);
				}
			}
		break;
		
			
	}	
	
	return(false);
}

Dresseur.prototype.isSauvage=function(){//pendant un combat, un pokemon sauavge agit + ou - comme un dresseur
	return(false);
}



Dresseur.prototype.load = function(){
	var xmlhttp;
	if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
                //alert("Ca marche");
                
               
                var name = document.getElementById("name").innerHTML;
                var asPerdu = document.getElementById("asPerdu").innerHTML;
                var isController = document.getElementById("isController").innerHTML;
                
                
              
		console.log("name: "+name );
		console.log("asPerdu: "+asPerdu );
		
		var dresseur = monDresseur.getGrille(parseInt(document.getElementById("grille").innerHTML)).getDresseurByName(name);
		dresseur.aPerdu = (asPerdu == 0)?false:true;
		
		dresseur.loadPokemons();
		
		
               
            }
            
            else{
            	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
            		console.log("Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status);
            		
			//xmlhttp.send();
            	}
            }
        }
        xmlhttp.open("GET","pokemon/getDresseur.php?name="+this.getName(),true);
	xmlhttp.send();
	
}

Dresseur.prototype.videPokemons = function(){
	this.pokemons = [];
}



Dresseur.prototype.loadPokemons = function(){

	



	var xmlhttp;
	if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
                var tabNum =  document.getElementsByClassName('pokeNum');
                 var tabDresseur =  document.getElementsByClassName('dresseur_id');
                 var lvl=  document.getElementsByClassName('lvl');
                 var exp=  document.getElementsByClassName('exp');
                 var expMax=  document.getElementsByClassName('expMax');
                 var pdv=  document.getElementsByClassName('pdv');
                 var pdvMax=  document.getElementsByClassName('pdvMax');
                 var att=  document.getElementsByClassName('att');
                 var def=  document.getElementsByClassName('def');
                 var agi=  document.getElementsByClassName('agi');
                 
                var dresseur = monDresseur.getDresseurByNum(parseInt(document.getElementById('dressNum').innerHTML));
                
                
                
                if(dresseur == false){//il s agit du controller (seul dresseur hors des dresseurs des grilles)
                	dresseur = monDresseur.dresseur;
                }
                
                dresseur.videPokemons();
                
                for(var i = 0;i<tabNum.length;i++){
                	console.log("pokemon "+tabNum[i].innerHTML+" appartient a "+dresseur.getName());
                	var pokemon = new Pokemon(tabNum[i].innerHTML,lvl[i].innerHTML,exp[i].innerHTML,pdv[i].innerHTML,att[i].innerHTML,def[i].innerHTML,agi[i].innerHTML)
                	dresseur.addPokemon(pokemon);
                	pokemon.setExp(exp[i].innerHTML);
                	pokemon.setExpMax(expMax[i].innerHTML);
                	pokemon.setPdv(pdv[i].innerHTML);
                	pokemon.setPdvMax(pdvMax[i].innerHTML);
                }
            }
            
            else{
            	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
            		console.log("Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status);
            					
            	}
            }
        }
        xmlhttp.open("GET","pokemon/getPokemon.php?dresseur="+this.num,true);
	xmlhttp.send();
}