// @flow

import terrain from 'assets/imgs/terrrainTest2.png';
import ville2 from 'assets/imgs/ville2.png';
import centrePinterieur from 'assets/imgs/centrePinterieur.png';
import argenta from 'assets/imgs/argenta.png';
import pokeshopInside from 'assets/imgs/pokeshopInside.png';
import areneArgenta from 'assets/imgs/areneArgenta.png';
import dresseurs from 'assets/imgs/dresseurs.png';
import sacha from 'assets/imgs/sacha.png';


import { chargeObjetsDansGrille0, chargeObjetsDansGrille1, chargeObjetsDansGrille2, chargeObjetsDansGrille3, chargeObjetsDansGrille4, chargeObjetsDansGrille5, chargeObjetsDansGrille6 } from '../gamecontent/Loader';
import Grille from '../map/Grille';

import PlayerMode from '../modes/PlayerMode';
import ImageLoader from '../utils/ImageLoader';
import PlayerHudMode from '../modes/PlayerHudMode';
import BUTTON from './touches';
import Orientation from '../modes/Orientation';
import Discussion from '../UI/Discussion';
import Combat from '../combat/Combat';
import Carte, { ChargeCarte } from '../UI/Carte';

import Person from '../map/Person';
import Pokemon from '../combat/Pokemon';
import HUD from '../UI/HUD';


import DevMode from '../utils/DevMode';

class PlayerController {
  dresseur: Person;

  grilles: Array<Grille>;
  grille: Grille;

  mode: Symbol;

  hud: HUD;
  combat: ?Combat; // move to HUD
  discussion: ?Discussion; // move to HUD
  info: ?string; // move to HUD
  carte: Carte; // move to HUD


  fps: number; // move this to a config manager
  couleurPrefere: string; // move this to a config manager
  charSprites: HTMLImageElement;

  pokemonCapture: ?Pokemon; // deal this a better way
  walkable: bool; // deal this a better way

  constructor() {
    this.fps = DevMode.dev ? 15 : 40;

    this.mode = PlayerMode.MAP;
    this.grilles = [];

    this.couleurPrefere = '#bbbbbb';

    this.initDresseur();

    this.hud = new HUD(this);
    this.carte = new Carte(this);
    ChargeCarte(this);

    this.loadGrilles();
    this.setGrille(0);

    this.loadObjects();
  }

  initDresseur() {
    this.dresseur = new Person('Sacha', 0, -10, 0);

    const sachaImg = ImageLoader.load(sacha);
    this.dresseur.setTexture(sachaImg);

    const dresseursImg = ImageLoader.load(dresseurs);
    this.charSprites = dresseursImg;

    this.dresseur.grandeTextureX = 1;
    this.dresseur.grandeTextureY = 9;
    this.dresseur.animationPosition = 0;

    this.dresseur.addPokemon(new Pokemon(25, 5, 0, 100, 20, 15, 15));
  }

  loadGrilles() {
    const terrainImg = ImageLoader.load(terrain);
    const ville2Img = ImageLoader.load(ville2);
    const centrePinterieurImg = ImageLoader.load(centrePinterieur);
    const argentaImg = ImageLoader.load(argenta);
    const pokeshopInsideImg = ImageLoader.load(pokeshopInside);
    const areneArgentaImg = ImageLoader.load(areneArgenta);


    this.grilles.push(new Grille(this, terrainImg));
    this.grilles.push(new Grille(this, ville2Img));
    this.grilles.push(new Grille(this, centrePinterieurImg));
    this.grilles.push(new Grille(this, centrePinterieurImg));
    this.grilles.push(new Grille(this, argentaImg));
    this.grilles.push(new Grille(this, pokeshopInsideImg));
    this.grilles.push(new Grille(this, areneArgentaImg));
  }

  setGrille(num: number): void {
    this.grille = this.grilles[num];
  }

  loadObjects() {
    chargeObjetsDansGrille0(this.grilles[0]); // collisions, dresseur, pnj porte etc
    chargeObjetsDansGrille1(this.grilles[1]);
    chargeObjetsDansGrille2(this.grilles[2]);
    chargeObjetsDansGrille3(this.grilles[3]);
    chargeObjetsDansGrille4(this.grilles[4]);
    chargeObjetsDansGrille5(this.grilles[5]);
    chargeObjetsDansGrille6(this.grilles[6]);
  }

  setPokemonCapture(pokemon: Pokemon) {
    this.pokemonCapture = pokemon;
  }

  getPokemonCapture() {
    return (this.pokemonCapture);
  }

  soignePokemons() {
    return this.dresseur.soignePokemons();
  }

  onLose() {
    this.dresseur.posX = -72;
    this.dresseur.posY = 12;

    this.mode = PlayerMode.HUD;
    this.hud.mode = PlayerHudMode.FAIL;

    this.soignePokemons();
  }

  avance() {
    if (this.walkable && !this.dresseur.idle) {
      const { orientation } = this.dresseur;
      if (orientation === Orientation.South) this.dresseur.posY += 1;
      else if (orientation === Orientation.West) this.dresseur.posX -= 1;
      else if (orientation === Orientation.East) this.dresseur.posX += 1;
      else if (orientation === Orientation.North) this.dresseur.posY -= 1;

      if (this.dresseur.animationPosition < 4 && (this.mode === PlayerMode.MAP)) {
        this.dresseur.animationPosition += 1;
      }
      if (this.dresseur.animationPosition === 4) { this.dresseur.animationPosition = 0; }
    }

    if (!this.dresseur.idle) this.grille.checkWalkOnHerbes();
    this.grille.checkZonesDresseurs(this);
    this.grille.checkWalkOnPorte();
  }

  actions(touche: number) {
    switch (this.mode) {
      case PlayerMode.MAP: // deplacement
        this.handleMapEvent(touche);
        break;

      case PlayerMode.HUD:
        this.hud.event(touche);
        break;

      case PlayerMode.FIGHT:
        if (!this.combat) throw new Error('PlayerController.action: no fight in fight mode');

        this.combat.gestionEvenement(touche);
        break;
      default:
        console.warn('No corresponding PlayerMode');
    }
  }

  handleDirectionnalEvent(touche: number) {
    this.dresseur.idle = false;

    switch (touche) {
      case BUTTON.DOWN:
        this.dresseur.orientation = 0;
        break;
      case BUTTON.LEFT:
        this.dresseur.orientation = 1;
        break;
      case BUTTON.RIGHT:
        this.dresseur.orientation = 2;
        break;
      case BUTTON.UP:
        this.dresseur.orientation = 3;
        break;
      default:
        console.warn('PlayerController.handleDirectionnalEvent no compatible option');
    }
  }

  update() {
    const { x, y } = this.dresseur.calculNextCase();
    this.walkable = this.grille.isWalkable(x, y) || (DevMode.dev && DevMode.getOption('noCollision'));
    if (this.walkable) {
      this.avance();
    }
  }

  handleMapEvent(touche: number) {
    if ([BUTTON.DOWN, BUTTON.UP, BUTTON.LEFT, BUTTON.RIGHT].includes(touche)) {
      this.handleDirectionnalEvent(touche);
    }

    if (touche === BUTTON.PAUSE) {
      console.log('Mise en pause');
      this.mode = PlayerMode.HUD;
      this.hud.mode = PlayerHudMode.PAUSE;
    }
    if (touche === BUTTON.CONFIRM) {
      const { x, y } = this.dresseur.calculNextCase();
      const dresseur = this.grille.getDresseur(x, y);

      if (dresseur) {
        console.log(`found dresseur: ${dresseur.nom}`);
        this.mode = PlayerMode.HUD;
        this.hud.mode = PlayerHudMode.DISCUSSION;

        dresseur.parler(this);
      }
      else {
        console.log('nothing found');
      }
    }
    this.handleDevMapEvent(touche);
  }

  handleDevMapEvent(touche: number) {
    if (DevMode.dev) {
      if (touche === BUTTON.C) DevMode.addCollisionDev(this.dresseur.posX, this.dresseur.posY);
      else if (touche === BUTTON.H) DevMode.addHerbeDev(this.dresseur.posX, this.dresseur.posY);
    }
  }

  sendDresseurToHealthCenter() {
    // console.log('sendDresseurToHealthCenter : should set hud mode to pause');

    this.dresseur.posY = -72; // ---> devant centre pokemon / TODO: get from grille
    this.dresseur.posY = 6;
  }

  save() { // old way
    this.mode = PlayerMode.HUD;
    this.hud.mode = PlayerHudMode.INFO; // mode info
    this.info = 'Cette fonctionnalité à été désactivé pour le moment';

    console.log('tryin to save');
  // SauvegardeController(
  //  this.dresseur.posX,
  //  this.dresseur.posY,
  //  this.couleurPrefere,
  //  this.dresseur.badges,
  //  this.dresseur.argent,
  //  this.grille.num
  // );
  // //gere toute les sauvegardes a la suite, et pas en meme temps
  }

  saveDresseurs() {
  // var chaine = "";
  // for(var i = 0;i<this.grilles.length;i++){
  //   chaine += this.grilles[i].saveDresseurs();
  // }
  // return(chaine);
  }

  savePokemons() {
  // var chaine = getDresseurPokemons(this.dresseur);
  // return(chaine);
  }

  load() {
    this.mode = PlayerMode.HUD;
    this.hud.mode = PlayerHudMode.INFO;
    this.info = 'Cette fonctionnalité à été désactivé pour le moment';
  // this.mode=1;
  // this.hud.mode = PlayerHudMode.WAIT;//attente
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
  //                alert("probleme sauvegarde des infos joueur");
  //                erreurLoad();
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
  //            if(xmlhttp.readyState==4 && xmlhttp.status!=200){
  //             console.log(
  //         "Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status
  //        );
  //            }
  //           }
  //       }
  //       xmlhttp.open("GET","pokemon/getController.php",true);
  // xmlhttp.send();
  }
}

// function loadDresseurs() {
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
//              var dressNum = document.getElementsByClassName("num");
//               var dressAsPerdu = document.getElementsByClassName("isAgressive");
//               var fonctionne =   parseInt(document.getElementById("fonctionne").innerHTML);
//               if(dressNum.length!=dressAsPerdu.length){
//                alert("Il y a eu un probleme sur la sauvegarde");
//                erreurLoad();
//               }
//               if(!fonctionne){
//                alert("probleme sauvegarde des dresseurs");
//                erreurLoad();
//               }
//               else{
//
//                 var dresseur;
//                 for(var i=0;i<dressNum.length;i++){
//                  //console.log("test trouve dresseur num "+dressNum[i].innerHTML);
//                  dresseur = this.grille.getDresseurByNum(parseInt(dressNum[i].innerHTML));
//                  //console.log(
//          // dresseur.nom+ " isAgressive:  "+
//          // dresseur.isAgressive+ "  mais en fait :"+dressAsPerdu[i].innerHTML
//          // );
//                  dresseur.isAgressive = parseInt(dressAsPerdu[i].innerHTML);
//                 }
//
//                 loadPokemons();//ci dessous
//         }
//
//
//           }
//
//           else{
//            if(xmlhttp.readyState==4 && xmlhttp.status!=200){
//             console.log(
//        "Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status
//        );
//             erreurLoad();
//            }
//           }
//       }
//       xmlhttp.open("GET","pokemon/getDresseur.php",true);
// xmlhttp.send();
// }

// function loadPokemons() {
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
//                alert("probleme sauvegarde des pokemons");
//                erreurLoad();
//               }
//               else{
//                var num = document.getElementsByClassName('num');
//                 var lvl = document.getElementsByClassName('lvl');
//                 var pdv = document.getElementsByClassName('pdv');
//                 var pdvMax = document.getElementsByClassName('pdvMax');
//                 var exp = document.getElementsByClassName('exp');
//                 var expMax = document.getElementsByClassName('expMax');//useless
//                 var att = document.getElementsByClassName('att');
//                 var def = document.getElementsByClassName('def');
//                 var agi = document.getElementsByClassName('agi');
//
//                this.dresseur.pokemons = [];
//
//                for(var i = 0;i<num.length;i++){
//                 var poke = new Pokemon(
//           parseInt(num[i].innerHTML),
//           parseInt(lvl[i].innerHTML),
//           parseInt(exp[i].innerHTML),
//           parseInt(pdvMax[i].innerHTML),
//           parseInt(att[i].innerHTML),
//           parseInt(def[i].innerHTML),
//           parseInt(agi[i].innerHTML)
//          );
//                 poke.pdv = parseInt(pdv[i].innerHTML);
//                 this.dresseur.addPokemon(poke);
//                }
//
//
//                 this.mode = 1;
//          this.hud.mode = 10;
//          this.info = "Les données ont été chargées avec succès";
//
//              }
//           }
//
//           else{
//            if(xmlhttp.readyState==4 && xmlhttp.status!=200){
//             console.log(
//         "Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status
//        );
//             erreurLoad();
//            }
//           }
//       }
//       xmlhttp.open("GET","pokemon/getPokemon.php",true);
// xmlhttp.send();
// }

// function erreurLoad(){
//  // this.mode = PlayerMode.HUD;
//  // this.hud.mode = PlayerHudMode.INFO; //mode info
//  // this.info = "Il y a eu un probleme avec le chargement, vous pourriez reesayez, au cas ou..";
// }

export default PlayerController;
