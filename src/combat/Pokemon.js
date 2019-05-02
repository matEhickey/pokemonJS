import pokedex from '../UI/Pokedex';


var Pokemon = function(num,lvl,exp,pdv,att,def,agi){
	this.num = num;
	this.lvl = lvl;
	this.pdv = pdv;
	this.pdvMax = pdv;
	this.exp = exp;
	this.expMax = lvl*lvl*lvl*10;
	this.att = att;
	this.def = def;
	this.agi = agi;
	this.attaques = [];
	this.getAttaques();
	this.selectAttaque = this.attaques[0];
}


Pokemon.prototype.setExp = function(val){
	this.exp = val;
}
Pokemon.prototype.setExpMax = function(val){
	this.expMax = val;
}
Pokemon.prototype.setPdv = function(val){
	this.pdv = val;
}
Pokemon.prototype.setPdvMax = function(val){
	this.pdvMax = val;
}


Pokemon.prototype.setSelectAttaque = function(att){
	this.selectAttaque = this.attaques[att];
}

Pokemon.prototype.afficheToiAt= function(x,y){
	pokedex.getPoke(this.num).afficheToiAt(x,y);
}


Pokemon.prototype.getAttaques= function(){
	var attaques = pokedex.getAttaques(this);
	var testIsNew;
	for(var i = 0;i< attaques.length; i++){
		testIsNew = true;
		for(var j = 0;j<this.attaques.length;j++){
			if(this.attaques[j].equals(attaques[i])){
				testIsNew = false;
			}
		}
		if(testIsNew){
			this.attaques.unshift(attaques[i]);
		}
	}
}

Pokemon.prototype.getAttaqueNum= function(num){
	if(num >= this.attaques.length){
		return("");
	}
	else{
		return(this.attaques[num]);
	}
}


Pokemon.prototype.displayInfo = function(){
	console.log(this.getName()+"---lvl:"+this.lvl);
}

Pokemon.prototype.soigneToi= function(){
	this.pdv = this.pdvMax;
}

Pokemon.prototype.getName = function(){
	try{
	return(pokedex.getPoke(this.num).getName());
	}
	catch(e){
		console.log(e);
		return("");
	}
}

Pokemon.prototype.afficheToiCombat = function(){
	try{
		pokedex.getPoke(this.num).afficheToiCombat();
	}
	catch(e){
		console.log(e);
	}
}


Pokemon.prototype.getBackSprite= function(){
	pokedex.getPoke(this.num).getBackSprite();
}


Pokemon.prototype.getSelectAttaque = function(){
	return(this.selectAttaque);
}

Pokemon.prototype.attaque= function(oth,combat){   //oth est un pokemon
	var rand,total;
	if(this.pdv>0){
		rand = Math.random();
		//console.log("Atq :"+this.att+" Def Adverse:"+oth.def+" Rand:"+rand);



		total = Math.round(  ((this.att*this.getSelectAttaque().puissance/10)) - ((oth.def)+rand*(oth.def)));




		if(total<0){total = 0;}

		combat.infos.push(this.getName()+" attaque : "+this.getSelectAttaque().getName() + "  et inflige "+total+" dommages");
		oth.pdv = oth.pdv - total;
	}
}

Pokemon.prototype.addExperience= function(expe){
	this.exp += expe;

	if(this.exp >= this.expMax){
		this.monteNiveau();
	}

}


Pokemon.prototype.addExperience= function(expe,combat){
	this.exp += expe;

	if(this.exp >= this.expMax){
		this.monteNiveauCombat(combat);
	}
}

Pokemon.prototype.monteNiveauCombat= function(combat){   //pour afficher les infos

	this.lvl++;
	combat.infos.push(pokedex.pokemons[this.num].getName()+" passe au niveau  "+this.lvl);
	this.expMax += this.lvl*this.lvl*this.lvl*10;

	if(this.lvl >= pokedex.pokemons[this.num].niveauEvolution && pokedex.pokemons[this.num].niveauEvolution>0 ){

		var name = this.getName();
		this.num = pokedex.pokemons[this.num].evolution;
		combat.infos.push(name+" vient d'evoluer en "+this.getName());
	}

	// ameliore les stats
	this.pdvMax = Math.round(this.pdvMax * 1.2);
	this.att = Math.round(this.att * 1.2);
	this.def = Math.round(this.def * 1.2);
	this.agi = Math.round(this.agi * 1.1);
	this.getAttaques();

}


Pokemon.prototype.monteNiveau= function(){   //pour afficher les infos

	this.lvl++;

	this.expMax += this.lvl*this.lvl*this.lvl*10;

	if(this.lvl >= pokedex.pokemons[this.num].niveauEvolution && pokedex.pokemons[this.num].niveauEvolution>0 ){
		var name = this.getName();
		const evolutionNumber = pokedex.pokemons[this.num].evolution

		if(evolutionNumber > 0){
			this.num = evolutionNumber;
		}
		else{
			console.warn(`Warning: pokemon (${this.num} : ${this.nom}) have a niveauEvolution set but no evolution   [Pokemon.monteNiveau]`)
		}
	}

	// ameliore les stats
	this.pdvMax = Math.round(this.pdvMax * 1.2);
	this.att = Math.round(this.att * 1.2);
	this.def = Math.round(this.def * 1.2);
	this.agi = Math.round(this.agi * 1.1);
	this.getAttaques();
}


Pokemon.prototype.save=function(dresseur_num){
	SauvegardePokemon(dresseur_num,this.num,this.lvl,this.pdv,this.pdvMax,this.exp,this.expMax,this.att,this.def,this.agi);
	//get pokemon id via ajax

	var pokemon_id = 0;
	for(var i=0;i<this.attaques.length;i++){
		this.attaques[i].save(pokemon_id);
	}
}


function GenereUnPokemon(niveau){
	var num = Math.floor(Math.random()*148)+1;

	var pokemon = new Pokemon(num,5,0,100,10,10,10)
	while(pokemon.lvl<niveau){
		pokemon.monteNiveau();
	}
	pokemon.soigneToi();	//evolution n augmente pas les pdv
	return(pokemon);
}


export default Pokemon;
export {GenereUnPokemon};
