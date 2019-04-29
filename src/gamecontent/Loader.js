import { GenereUnPokemon } from '../combat/Pokemon';
import Dresseur from "../map/Dresseur";
import Herbe from "../map/Herbes";
import Batiment from "../map/Batiment";
import Objet from "../map/Objet";
import Porte from "../map/Porte";
import PNJ from "../map/PNJ";
// import {monDresseur} from '../utils/globals';


import centrePokemon from '../../assets/imgs/centrePokemon.png'
import dresseurRougeChatain from '../../assets/imgs/dresseurRougeChatain.png';

function loadData_dresseurs(grille){

	const dresseur1 = new Dresseur("Mathias",-7,-60,0,0,0);
	var dresseurRougeChatain_img = document.createElement("img");
	dresseurRougeChatain_img.src = dresseurRougeChatain;
	dresseur1.setTexture(dresseurRougeChatain_img);
	dresseur1.setTexte("Bienvenu dans ce jeu Pokemon. Des pokemons ont étrangement disparus. Tu m'as l'air plutot louche!");
	dresseur1.setTexteLooser("J'ai du me tromper, fais moi signe si tu en apprend plus de ton coté.");
	dresseur1.setGTX(3);
	dresseur1.setGTY(3);
		dresseur1.addPokemon(GenereUnPokemon(5));
		dresseur1.addPokemon(GenereUnPokemon(5));
		dresseur1.addPokemon(GenereUnPokemon(5));

	const dresseur2 = new Dresseur("Quentin",225,-22,1,0);
	dresseur2.setTexture(dresseurRougeChatain_img);
	// dresseur2.setTexture(document.getElementById('dresseurRougeBrun'));
	dresseur2.setTexte("C'est forcement un coup de la Team Rocket!");
	dresseur2.setTexteLooser("Il faut vraiment s'entrainer pour esperer vaincre la Team Rocket!");
	dresseur2.setGTX(3);
	dresseur2.setGTY(5);
		dresseur2.addPokemon(GenereUnPokemon(5));
		dresseur2.addPokemon(GenereUnPokemon(7));

	const dresseur3 = new Dresseur("Billy",196,172,2,0);
	dresseur3.setTexture(dresseurRougeChatain_img);
	// dresseur3.setTexture(document.getElementById('dresseurRougeChatain'));
	dresseur3.setTexte("Si tu ne peux pas me battre, tu vas te faire massacrer par la Team Rocket");
	dresseur3.setTexteLooser("Bon, toi tu as peut etre tes chances");
	dresseur3.setGTX(3);
	dresseur3.setGTY(4);
		dresseur3.addPokemon(GenereUnPokemon(5));
		dresseur3.addPokemon(GenereUnPokemon(7));
		dresseur3.addPokemon(GenereUnPokemon(9));

	const dresseur4 = new Dresseur("Theo",350,18,0,0);
	// dresseur4.setTexture(document.getElementById('dresseurRougeBrun'));
	dresseur4.setTexte("J'avais un pokemon vraiment très fort mais il s'est fait  capturer par la Team Rocket..");
	dresseur4.setTexteLooser("Je ne serai pas fait voler, je t'aurai battu très largement..");
	dresseur4.setGTX(0);
	dresseur4.setGTY(0);
		dresseur4.addPokemon(GenereUnPokemon(13));

	const dresseur5 = new Dresseur("Leo",650,194,0,0);
	// dresseur5.setTexture(document.getElementById('dresseurRougeBlond'));
	dresseur5.setTexte("Attention!, la Team Rocket est toute proche!");
	dresseur5.setTexteLooser("Tu m'as l'air bien préparé, bon courage!");
	dresseur5.setGTX(0);
	dresseur5.setGTY(6);
		dresseur5.addPokemon(GenereUnPokemon(13));

	const dresseur6 = new Dresseur("Spyros",-34,110,2,0);
	// dresseur6.setTexture(document.getElementById('dresseurRougeChatain'));
	dresseur6.setTexte("La Team Rocket a apparement encore sévit.. Un combat?");
	dresseur6.setTexteLooser("Bien joué, la prochaine fois je t'aurais !");
	dresseur6.setGTX(2);
	dresseur6.setGTY(9);
		dresseur6.addPokemon(GenereUnPokemon(5));
		dresseur6.addPokemon(GenereUnPokemon(7));

	grille.ajouteDresseur(dresseur1);
	grille.ajouteDresseur(dresseur2);
	grille.ajouteDresseur(dresseur3);
	grille.ajouteDresseur(dresseur4);
	grille.ajouteDresseur(dresseur5);
	grille.ajouteDresseur(dresseur6);

}

function loadData_teamrocket(grille){
	const teamR1 = new Dresseur("Bad Guy1",686,34,0,0);
	// teamR1.setTexture(document.getElementById('teamRocketBasic'));
	teamR1.setTexte("Tiens toi! Donnes moi tes pokémons!");
	teamR1.setTexteLooser("La Team Rocket va t'anneantir!");
		teamR1.addPokemon(GenereUnPokemon(7));
		teamR1.addPokemon(GenereUnPokemon(10));
		teamR1.addPokemon(GenereUnPokemon(10));

	const teamR2 = new Dresseur("Bad Guy2",740,20,3,0);
	// teamR2.setTexture(document.getElementById('teamRocketBasic'));
	teamR2.setTexte("Hey toi, tu vas voir!");
	teamR2.setTexteLooser("Tu m'as battu, mais attend toi au pire!");
		teamR2.addPokemon(GenereUnPokemon(11));
		teamR2.addPokemon(GenereUnPokemon(12));


	const teamR3 = new Dresseur("Bad Guy3",844,76,2,0);
	// teamR3.setTexture(document.getElementById('teamRocketBasic'));
	teamR3.setTexte("Pas si vite, mes plutot ces pokemons dans mon sac!");
	teamR3.setTexteLooser("Ouais c'est facile aussi comme ca, tricheur..");
		teamR3.addPokemon(GenereUnPokemon(17));



	const teamR4 = new Dresseur("Bad Guy4",1008,54,3,0);
	// teamR4.setTexture(document.getElementById('teamRocketBasic'));
	teamR4.setTexte("Tu ne pourras meme pas approcher notre chef!");
	teamR4.setTexteLooser("Notre chef va me venger!");
		teamR4.addPokemon(GenereUnPokemon(9));
		teamR4.addPokemon(GenereUnPokemon(13));
		teamR4.addPokemon(GenereUnPokemon(15));


	const teamR5 = new Dresseur("Capitaine Rocket",1076,24,1,0);
	// teamR5.setTexture(document.getElementById('teamRocketBasic'));
	teamR5.setTexte("Et oui c'est moi qui retiens tout les pokemons! Mouhahaha");
	teamR5.setTexteLooser("Bravo, je vais redonner les pokemons a leurs proprietaires!");
	teamR5.setGTX(9);
	teamR5.setGTY(9);
		teamR5.addPokemon(GenereUnPokemon(15));
		teamR5.addPokemon(GenereUnPokemon(15));
		teamR5.addPokemon(GenereUnPokemon(18));
		teamR5.addPokemon(GenereUnPokemon(20));
		teamR5.addPokemon(GenereUnPokemon(23));

	grille.ajouteDresseur(teamR1);
	grille.ajouteDresseur(teamR2);
	grille.ajouteDresseur(teamR3);
	grille.ajouteDresseur(teamR4);
	grille.ajouteDresseur(teamR5);

}

function loadData_herbe(grille){
	grille.ajouteHerbe(new Herbe(160,-64,78,48,3));
	grille.ajouteHerbe(new Herbe(128,-58,32,26,3));
	grille.ajouteHerbe(new Herbe(146,-32,14,16,3));
	grille.ajouteHerbe(new Herbe(114,-62,12,14,5));
	grille.ajouteHerbe(new Herbe(160,-16,78,18,5));
	grille.ajouteHerbe(new Herbe(178,2,60,16,5));
	grille.ajouteHerbe(new Herbe(192,18,32,16,7));
	grille.ajouteHerbe(new Herbe(224,178,16,32,5));
	grille.ajouteHerbe(new Herbe(206,196,82,14,5));
	grille.ajouteHerbe(new Herbe(272,98,16,116,5));
	grille.ajouteHerbe(new Herbe(272,118,64,42,5));
	grille.ajouteHerbe(new Herbe(318,160,18,16,7));
	grille.ajouteHerbe(new Herbe(368,34,62,30,7));
	grille.ajouteHerbe(new Herbe(430,34,16,18,9));
	grille.ajouteHerbe(new Herbe(402,2,30,32,10));
	grille.ajouteHerbe(new Herbe(340,2,26,64,10));
	grille.ajouteHerbe(new Herbe(272,-16,34,78,10));
	grille.ajouteHerbe(new Herbe(306,36,10,46,9));
	grille.ajouteHerbe(new Herbe(370,64,12,18,12));
	grille.ajouteHerbe(new Herbe(544,162,80,14,12));
	grille.ajouteHerbe(new Herbe(592,176,30,34,13));

	grille.ajouteHerbe(new Herbe(654,178,32,34,14));
	grille.ajouteHerbe(new Herbe(768,72,16,106,15));
	grille.ajouteHerbe(new Herbe(754,148,14,30,15));
	grille.ajouteHerbe(new Herbe(738,84,30,12,15));
	grille.ajouteHerbe(new Herbe(786,64,32,14,15));
	grille.ajouteHerbe(new Herbe(844,68,66,20,18));
	grille.ajouteHerbe(new Herbe(880,38,144,40,18));
	grille.ajouteHerbe(new Herbe(1006,84,44,12,20));
	grille.ajouteHerbe(new Herbe(962,98,48,12,20));
	grille.ajouteHerbe(new Herbe(914,-12,46,62,20));
	grille.ajouteHerbe(new Herbe(994,-28,10,82,25));
	grille.ajouteHerbe(new Herbe(978,-16,16,16,25));
	grille.ajouteHerbe(new Herbe(1006,-62,144,30,25));
	grille.ajouteHerbe(new Herbe(1136,-32,28,44,25));
	grille.ajouteHerbe(new Herbe(1118,0,48,12,25));
	grille.ajouteHerbe(new Herbe(1138,12,28,54,25));
	grille.ajouteHerbe(new Herbe(1154,66,30,30,25));
	grille.ajouteHerbe(new Herbe(1152,96,16,16,25));
	grille.ajouteHerbe(new Herbe(1106,112,46,18,25));
	grille.ajouteHerbe(new Herbe(1136,130,16,30,25));
	grille.ajouteHerbe(new Herbe(1058,132,14,46,25));
	grille.ajouteHerbe(new Herbe(1042,162,14,16,25));
	grille.ajouteHerbe(new Herbe(1072,-28,68,92,20));
	grille.ajouteHerbe(new Herbe(1072,-28,68,92,20));
	grille.ajouteHerbe(new Herbe(1038,18,72,42,20));
}

function loadData_colisisons_scene_1(grille){
	// All the data where generated using the "z" or "h" shortcut while playing, and copy-pasted here as it
	// (this tool define where objects are based on the player position)

	grille.ajouteObjet(new Objet("Collision",1230,-106,14,356));
	grille.ajouteObjet(new Objet("Collision",1070,218,168,18));
	grille.ajouteObjet(new Objet("Collision",-120,-100,18,342));
	grille.ajouteObjet(new Objet("Collision",464,186,34,30));
	grille.ajouteObjet(new Objet("Collision",560,182,34,34));
	grille.ajouteObjet(new Objet("Collision",468,182,26,4));

	grille.ajouteObjet(new Objet("Collision",-50,4,68,46));
	grille.ajouteObjet(new Objet("Collision",-112,-92,350,28));
	grille.ajouteObjet(new Objet("Collision",-30,-44,12,14));
	grille.ajouteObjet(new Objet("Collision",64,-16,14,30));
	grille.ajouteObjet(new Objet("Collision",2,52,12,12));
	grille.ajouteObjet(new Objet("Collision",20,38,22,38));
	grille.ajouteObjet(new Objet("Collision",64,62,32,30));
	grille.ajouteObjet(new Objet("Collision",-112,40,32,36));
	grille.ajouteObjet(new Objet("Collision",-112,86,30,96));
	grille.ajouteObjet(new Objet("Collision",-110,182,92,42));
	grille.ajouteObjet(new Objet("Collision",-78,178,2,4));
	grille.ajouteObjet(new Objet("Collision",-48,112,14,28));
	grille.ajouteObjet(new Objet("Collision",-32,130,14,26));
	grille.ajouteObjet(new Objet("Collision",-16,118,64,38));
	grille.ajouteObjet(new Objet("Collision",46,146,34,28));
	grille.ajouteObjet(new Objet("Collision",82,150,60,76));
	grille.ajouteObjet(new Objet("Collision",142,184,64,42));
	grille.ajouteObjet(new Objet("Collision",38,38,8,38));
	grille.ajouteObjet(new Objet("Collision",96,48,14,28));
	grille.ajouteObjet(new Objet("Collision",96,96,14,28));
	grille.ajouteObjet(new Objet("Collision",130,116,12,12));
	grille.ajouteObjet(new Objet("Collision",130,68,28,42));
	grille.ajouteObjet(new Objet("Collision",192,70,28,38));
	grille.ajouteObjet(new Objet("Collision",238,-66,34,256));
	grille.ajouteObjet(new Objet("Collision",76,146,12,4));
	grille.ajouteObjet(new Objet("Collision",302,-100,200,64));

	grille.ajouteObjet(new Objet("Collision",128,16,22,30));
	grille.ajouteObjet(new Objet("Collision",144,26,30,34));
	grille.ajouteObjet(new Objet("Collision",160,126,16,34));
	grille.ajouteObjet(new Objet("Collision",206,144,20,30));
	grille.ajouteObjet(new Objet("Collision",206,218,48,0));
	grille.ajouteObjet(new Objet("Collision",206,214,212,16));
	grille.ajouteObjet(new Objet("Collision",-22,182,14,38));
	grille.ajouteObjet(new Objet("Collision",-18,216,108,14));
	grille.ajouteObjet(new Objet("Collision",92,114,22,14));
	grille.ajouteObjet(new Objet("Collision",430,-4,34,34));
	grille.ajouteObjet(new Objet("Collision",302,-6,38,38));
	grille.ajouteObjet(new Objet("Collision",88,46,22,34));

	grille.ajouteObjet(new Objet("Collision",-36,112,10,44));
	grille.ajouteObjet(new Objet("Collision",288,152,30,72));
	grille.ajouteObjet(new Objet("Collision",336,120,32,106));
	grille.ajouteObjet(new Objet("Collision",368,142,14,32));
	grille.ajouteObjet(new Objet("Collision",358,182,40,46));
	grille.ajouteObjet(new Objet("Collision",398,214,292,12));
	grille.ajouteObjet(new Objet("Collision",688,184,194,42));
	grille.ajouteObjet(new Objet("Collision",880,122,128,104));
	grille.ajouteObjet(new Objet("Collision",1004,148,36,76));
	grille.ajouteObjet(new Objet("Collision",1036,182,34,42));
	grille.ajouteObjet(new Objet("Collision",1072,152,32,40));
	grille.ajouteObjet(new Objet("Collision",1122,180,16,12));
	grille.ajouteObjet(new Objet("Collision",1136,176,16,28));
	grille.ajouteObjet(new Objet("Collision",1120,142,14,32));
	grille.ajouteObjet(new Objet("Collision",1122,72,28,38));
	grille.ajouteObjet(new Objet("Collision",1024,46,30,32));
	grille.ajouteObjet(new Objet("Collision",1050,60,24,34));
	grille.ajouteObjet(new Objet("Collision",1086,48,18,28));

	grille.ajouteObjet(new Objet("Collision",538,118,116,28));
	grille.ajouteObjet(new Objet("Collision",532,146,138,16));
	grille.ajouteObjet(new Objet("Collision",704,108,14,52));
	grille.ajouteObjet(new Objet("Collision",624,158,0,0));
	grille.ajouteObjet(new Objet("Collision",514,168,26,38));
	grille.ajouteObjet(new Objet("Collision",564,184,28,30));
	grille.ajouteObjet(new Objet("Collision",624,160,30,48));
	grille.ajouteObjet(new Objet("Collision",642,102,14,48));
	grille.ajouteObjet(new Objet("Collision",640,6,28,104));
	grille.ajouteObjet(new Objet("Collision",646,-44,54,60));
	grille.ajouteObjet(new Objet("Collision",692,-44,88,32));
	grille.ajouteObjet(new Objet("Collision",762,-18,18,80));
	grille.ajouteObjet(new Objet("Collision",702,50,76,22));
	grille.ajouteObjet(new Objet("Collision",776,-8,102,72));
	grille.ajouteObjet(new Objet("Collision",818,50,26,78));
	grille.ajouteObjet(new Objet("Collision",848,94,14,32));
	grille.ajouteObjet(new Objet("Collision",800,78,22,36));

	grille.ajouteObjet(new Objet("Collision",272,62,36,36));
	grille.ajouteObjet(new Objet("Collision",300,82,22,28));
	grille.ajouteObjet(new Objet("Collision",288,100,22,12));
	grille.ajouteObjet(new Objet("Collision",722,152,0,2));
	grille.ajouteObjet(new Objet("Collision",722,152,32,32));
	grille.ajouteObjet(new Objet("Collision",784,152,64,32));
	grille.ajouteObjet(new Objet("Collision",930,-12,34,42));
	grille.ajouteObjet(new Objet("Collision",956,0,34,30));
	grille.ajouteObjet(new Objet("Collision",1010,-10,28,40));
	grille.ajouteObjet(new Objet("Collision",1032,-4,38,18));
	grille.ajouteObjet(new Objet("Collision",1088,-10,30,42));
	grille.ajouteObjet(new Objet("Collision",1104,28,28,32));
	grille.ajouteObjet(new Objet("Collision",1074,86,28,40));
	grille.ajouteObjet(new Objet("Collision",1050,90,32,12));

	grille.ajouteObjet(new Objet("Collision",136,150,14,34));
	grille.ajouteObjet(new Objet("Collision",382,64,52,30));
	grille.ajouteObjet(new Objet("Collision",430,52,36,26));
	grille.ajouteObjet(new Objet("Collision",434,98,46,26));
	grille.ajouteObjet(new Objet("Collision",454,86,22,18));
	grille.ajouteObjet(new Objet("Collision",516,36,22,126));
	grille.ajouteObjet(new Objet("Collision",498,42,20,72));
	grille.ajouteObjet(new Objet("Collision",466,6,40,58));
	grille.ajouteObjet(new Objet("Collision",460,46,10,16));


	grille.ajouteObjet(new Objet("Collision",316,56,36,44));
	grille.ajouteObjet(new Objet("Collision",366,-18,30,50));
	grille.ajouteObjet(new Objet("Collision",302,-50,192,46));
	grille.ajouteObjet(new Objet("Collision",384,104,28,44));


	grille.ajouteObjet(new Objet("Collision",738,102,24,40));
	grille.ajouteObjet(new Objet("Collision",796,98,68,30));
	grille.ajouteObjet(new Objet("Collision",884,88,28,34));
	grille.ajouteObjet(new Objet("Collision",878,110,130,18));
	grille.ajouteObjet(new Objet("Collision",1040,128,14,30));
	grille.ajouteObjet(new Objet("Collision",1154,138,58,36));
	grille.ajouteObjet(new Objet("Collision",1158,130,18,14));
	grille.ajouteObjet(new Objet("Collision",1184,36,26,44));
	grille.ajouteObjet(new Objet("Collision",1166,-10,32,40));
	grille.ajouteObjet(new Objet("Collision",1150,12,22,34));
	grille.ajouteObjet(new Objet("Collision",1122,-34,12,34));
	grille.ajouteObjet(new Objet("Collision",1150,-48,16,16));
	grille.ajouteObjet(new Objet("Collision",1038,-30,34,44));

	grille.ajouteObjet(new Objet("Collision",462,144,18,30));
	grille.ajouteObjet(new Objet("Collision",704,138,50,26));
	grille.ajouteObjet(new Objet("Collision",752,102,16,42));
	grille.ajouteObjet(new Objet("Collision",864,-8,50,46));
	grille.ajouteObjet(new Objet("Collision",928,-52,14,34));
	grille.ajouteObjet(new Objet("Collision",830,-96,406,34));

	grille.ajouteObjet(new Objet("Collision",976,54,30,42));
	grille.ajouteObjet(new Objet("Collision",912,96,16,14));
	grille.ajouteObjet(new Objet("Collision",704,-12,32,14));
	grille.ajouteObjet(new Objet("Collision",720,-2,14,18));
	grille.ajouteObjet(new Objet("Collision",668,16,22,14));
	grille.ajouteObjet(new Objet("Collision",16,184,32,32));
	grille.ajouteObjet(new Objet("Collision",430,112,46,18));
	grille.ajouteObjet(new Objet("Collision",716,28,42,44));
	grille.ajouteObjet(new Objet("Collision",892,-102,22,134));
	grille.ajouteObjet(new Objet("Collision",912,96,18,14));

	grille.ajouteObjet(new Objet("Collision",224,-96,50,28));
}

var chargeObjetsDansGrille0 = function(grille, monDresseur){

	loadData_dresseurs(grille);
	loadData_teamrocket(grille);
	loadData_herbe(grille);
	loadData_colisisons_scene_1(grille);

	var centrePokemon_img = document.createElement("img");
	centrePokemon_img.src = centrePokemon;
	var batiment1 = new Batiment("Centre Pokemon",centrePokemon_img, -102,-40,120,100);

	grille.ajoutePorte(new Porte(-74,0,44,112,"centreP1", monDresseur));
	grille.ajouteBatiment(batiment1);

}

var chargeObjetsDansGrille1 = function(grille, monDresseur){//-------------------------------------------------------------------------------------------
	// console.log(monDresseur)
		//maisons
		grille.ajouteObjet(new Objet("Collision",800,688,68,68));
		grille.ajouteObjet(new Objet("Collision",640,746,118,110));
		grille.ajouteObjet(new Objet("Collision",698,926,118,96));
		grille.ajouteObjet(new Objet("Collision",548,928,116,92));
		grille.ajouteObjet(new Objet("Collision",370,750,116,110));
		grille.ajouteObjet(new Objet("Collision",492,748,116,108));
		grille.ajouteObjet(new Objet("Collision",424,910,118,108));
		grille.ajouteObjet(new Objet("Collision",116,636,70,68));
		grille.ajouteObjet(new Objet("Collision",216,568,70,68));
		grille.ajouteObjet(new Objet("Collision",418,548,86,78));
		grille.ajouteObjet(new Objet("Collision",508,554,116,76));
		grille.ajouteObjet(new Objet("Collision",684,560,86,72));
		grille.ajouteObjet(new Objet("Collision",814,518,84,78));
		grille.ajouteObjet(new Objet("Collision",790,408,88,84));
		grille.ajouteObjet(new Objet("Collision",884,364,150,98));
		grille.ajouteObjet(new Objet("Collision",248,842,118,110));
}

var chargeObjetsDansGrille2 = function(grille, monDresseur){//------------------------------------------------------------------------- premier centre pokemon


	grille.ajoutePorte(new Porte(40,123,-72,12,"foret1", monDresseur));

	//infirmiere

	grille.ajoutePNJ(new PNJ("Infirmiere Joelle",36,48,54,54,true));


	grille.ajouteObjet(new Objet("Collision",100,80,36,34));
	grille.ajouteObjet(new Objet("Collision",-62,128,198,8));
	grille.ajouteObjet(new Objet("Collision",-14,12,104,40));
	grille.ajouteObjet(new Objet("Collision",82,4,22,24));
	grille.ajouteObjet(new Objet("Collision",-62,12,60,12));
	grille.ajouteObjet(new Objet("Collision",-82,12,24,20));
	grille.ajouteObjet(new Objet("Collision",-82,22,16,112));
	grille.ajouteObjet(new Objet("Collision",-72,124,16,12));
	grille.ajouteObjet(new Objet("Collision",-67,70,26,38));
	grille.ajouteObjet(new Objet("Collision",98,4,46,14));
	grille.ajouteObjet(new Objet("Collision",138,14,18,20));
	grille.ajouteObjet(new Objet("Collision",146,24,8,104));
	grille.ajouteObjet(new Objet("Collision",128,128,32,8));
	grille.ajouteObjet(new Objet("Collision",138,114,18,28));


}

var chargeObjetsDansGrille3 = function(grille, monDresseur){//------------------------------------------------------------------------- centre pokemon argenta


	grille.ajoutePorte(new Porte(40,123,18,198,"argenta", monDresseur));

	//infirmiere

	grille.ajoutePNJ(new PNJ("Infirmiere Joelle",36,48,54,54,true));


	grille.ajouteObjet(new Objet("Collision",100,80,36,34));
	grille.ajouteObjet(new Objet("Collision",-62,128,198,8));
	grille.ajouteObjet(new Objet("Collision",-14,12,104,40));
	grille.ajouteObjet(new Objet("Collision",82,4,22,24));
	grille.ajouteObjet(new Objet("Collision",-62,12,60,12));
	grille.ajouteObjet(new Objet("Collision",-82,12,24,20));
	grille.ajouteObjet(new Objet("Collision",-82,22,16,112));
	grille.ajouteObjet(new Objet("Collision",-72,124,16,12));
	grille.ajouteObjet(new Objet("Collision",-67,70,26,38));
	grille.ajouteObjet(new Objet("Collision",98,4,46,14));
	grille.ajouteObjet(new Objet("Collision",138,14,18,20));
	grille.ajouteObjet(new Objet("Collision",146,24,8,104));
	grille.ajouteObjet(new Objet("Collision",128,128,32,8));
	grille.ajouteObjet(new Objet("Collision",138,114,18,28));


}

var chargeObjetsDansGrille4 = function(grille, monDresseur){		//argenta		----------------------------------------------------------------------------


grille.ajoutePorte(new Porte(12,168,44,112,"centreP2").setLargeur(10), monDresseur);
grille.ajoutePorte(new Porte(190,52,10,42,"pokeshopArgenta").setLargeur(10), monDresseur);
grille.ajoutePorte(new Porte(-18,20,-60,42,"areneArgenta").setLargeur(8), monDresseur);

grille.ajouteObjet(new Objet("CentreP",-26,102,86,62));
grille.ajouteObjet(new Objet("CentreP",22,162,38,12));
grille.ajouteObjet(new Objet("CentreP",-26,160,38,16));

grille.ajouteObjet(new Objet("market",150,-4,70,56));
grille.ajouteObjet(new Objet("market",198,48,22,12));
grille.ajouteObjet(new Objet("market",150,48,40,12));


grille.ajouteObjet(new Objet("Collision",54,102,38,72));
grille.ajouteObjet(new Objet("Collision",66,90,16,12));
grille.ajouteObjet(new Objet("Collision",-46,86,14,20));
grille.ajouteObjet(new Objet("Collision",-58,102,40,74));
grille.ajouteObjet(new Objet("Collision",-176,76,268,18));
grille.ajouteObjet(new Objet("Collision",-140,196,88,58));
grille.ajouteObjet(new Objet("Collision",150,116,166,44));
grille.ajouteObjet(new Objet("Collision",246,156,80,18));
grille.ajouteObjet(new Objet("Collision",150,150,86,24));
grille.ajouteObjet(new Objet("Collision",150,156,14,96));
grille.ajouteObjet(new Objet("Collision",156,236,16,18));
grille.ajouteObjet(new Objet("Collision",310,236,22,16));
grille.ajouteObjet(new Objet("Collision",318,156,14,94));
grille.ajouteObjet(new Objet("Collision",160,108,20,12));
grille.ajouteObjet(new Objet("Collision",194,108,16,12));
grille.ajouteObjet(new Objet("Collision",224,108,18,14));
grille.ajouteObjet(new Objet("Collision",256,108,20,18));
grille.ajouteObjet(new Objet("Collision",288,108,20,16));
grille.ajouteObjet(new Objet("Collision",218,16,32,46));

grille.ajouteObjet(new Objet("Collision",244,-108,88,58));
grille.ajouteObjet(new Objet("Collision",134,-148,118,16));
grille.ajouteObjet(new Objet("Collision",190,-178,62,14));
grille.ajouteObjet(new Objet("Collision",190,-212,14,42));
grille.ajouteObjet(new Objet("Collision",-74,-240,264,76));
grille.ajouteObjet(new Objet("Collision",-74,-166,180,18));
grille.ajouteObjet(new Objet("Collision",-10,-150,54,20));
grille.ajouteObjet(new Objet("Collision",22,-132,22,8));
grille.ajouteObjet(new Objet("Collision",-10,-132,24,8));

grille.ajouteObjet(new Objet("Collision",-204,-148,56,16));
grille.ajouteObjet(new Objet("Collision",-122,-50,38,78));
grille.ajouteObjet(new Objet("Collision",-92,-20,28,16));
grille.ajouteObjet(new Objet("Collision",-76,-52,120,74));
grille.ajouteObjet(new Objet("Collision",-10,16,12,10));
grille.ajouteObjet(new Objet("Collision",-34,16,16,10));
grille.ajouteObjet(new Objet("Collision",32,-22,34,20));
grille.ajouteObjet(new Objet("Collision",54,-52,38,84));
grille.ajouteObjet(new Objet("Collision",78,24,14,66));






}

var chargeObjetsDansGrille5 = function(grille, monDresseur){	//pokeshop argenta

grille.ajoutePorte(new Porte(0,54,190,65,"argenta").setLargeur(10), monDresseur);


grille.ajouteObjet(new Objet("Collision",-52,20,40,24));
grille.ajouteObjet(new Objet("Collision",44,-12,40,54));
grille.ajouteObjet(new Objet("Collision",92,-12,24,54));
grille.ajouteObjet(new Objet("Collision",92,-46,24,16));
grille.ajouteObjet(new Objet("Collision",100,-34,16,12));
grille.ajouteObjet(new Objet("Collision",44,-40,56,12));
grille.ajouteObjet(new Objet("Collision",-8,-50,66,12));
grille.ajouteObjet(new Objet("Collision",-68,-52,72,64));
grille.ajouteObjet(new Objet("Collision",108,-38,10,86));
grille.ajouteObjet(new Objet("Collision",92,44,22,18));
grille.ajouteObjet(new Objet("Collision" ,10,54,100,8));
grille.ajouteObjet(new Objet("Collision",-60,54,62,10));
grille.ajouteObjet(new Objet("Collision",-64,46,10,8));
grille.ajouteObjet(new Objet("Collision",-58,52,12,10));
grille.ajouteObjet(new Objet("Collision",-70,-2,10,56));


}

var chargeObjetsDansGrille6 = function(grille, monDresseur){	//arene argenta

	grille.ajoutePorte(new Porte(-68,52,-16,40,"argenta").setLargeur(12), monDresseur);

	grille.ajouteObjet(new Objet("Collision",-110,-22,34,30));
	grille.ajouteObjet(new Objet("Collision",-110,-74,34,28));
	grille.ajouteObjet(new Objet("Collision",-48,-68,36,24));
	grille.ajouteObjet(new Objet("Collision",-48,-38,72,60));
	grille.ajouteObjet(new Objet("Collision",-4,-98,34,84));
	grille.ajouteObjet(new Objet("Collision",-58,-126,62,46));
	grille.ajouteObjet(new Objet("Collision",-128,-126,62,34));

	grille.ajouteObjet(new Objet("Collision",-6,20,14,38));
	grille.ajouteObjet(new Objet("Collision",-124,-90,48,62));
	grille.ajouteObjet(new Objet("Collision",-136,-42,18,62));
	grille.ajouteObjet(new Objet("Collision",-122,12,48,10));
	grille.ajouteObjet(new Objet("Collision",-38,20,18,20));
	grille.ajouteObjet(new Objet("Collision",-102,20,16,20));
	grille.ajouteObjet(new Objet("Collision",-120,-94,4,6));
	grille.ajouteObjet(new Objet("Collision",-120,-92,4,2));
	grille.ajouteObjet(new Objet("Collision",-128,-172,130,14));
	grille.ajouteObjet(new Objet("Collision",-112,-166,36,34));
	grille.ajouteObjet(new Objet("Collision",-48,-164,38,34));
	grille.ajouteObjet(new Objet("Collision",-6,-162,14,52));
	grille.ajouteObjet(new Objet("Collision",-126,-178,10,86));
	grille.ajouteObjet(new Objet("Collision",-132,54,64,4));
	grille.ajouteObjet(new Objet("Collision",-56,54,62,6));
}


export {chargeObjetsDansGrille0, chargeObjetsDansGrille1, chargeObjetsDansGrille2, chargeObjetsDansGrille3, chargeObjetsDansGrille4, chargeObjetsDansGrille5, chargeObjetsDansGrille6};
