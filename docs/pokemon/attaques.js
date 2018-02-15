//type -> 0:normal 
//1:plante
//2:eau
//3:feu
//4:electr
//5:poison

var attNum = 0;
function Attaque(nom,niveau,type,puiss,precis,pp){
	this.nom = nom;
	this.lvl = niveau;
	this.type = type;
	this.puissance = puiss;
	this.precision = precis;
	this.pp = pp;
	this.num = attNum;
	attNum++;
}

Attaque.prototype.getName=function(){
	return(this.nom);
}

Attaque.prototype.equals=function(oth){
	return(this.nom == oth.getName());
}

Attaque.prototype.save=function(pokemon_id){
	SauvegardeAttaque(pokemon_id,this.num);
}