import {monDresseur, combat, pokedex} from '../utils/globals';
import BUTTON from '../gameloop/touches';
import Combat from '../combat/Combat';

import PlayerMode from '../modes/PlayerMode';
import PlayerHudMode from '../modes/PlayerHudMode';


export default function applyHUD_event(touche){
  switch(monDresseur.hudMode){
    case(PlayerHudMode.PAUSE):
      handleMainMenuEvent(touche);
      break;

    case(PlayerHudMode.DISCUSSION):
      if(touche == BUTTON.CONFIRM || touche == BUTTON.BACK){
        const isDiscussionOver = monDresseur.discussion.increaseMessage();

        if(isDiscussionOver){
          monDresseur.discussion = null;

          if(monDresseur.dresseur.adversaire){
            monDresseur.calculNextCase();
            var nextCaseX = monDresseur.nextCaseX;
            var nextCaseY = monDresseur.nextCaseY;

            if(monDresseur.grille.getDresseur(nextCaseX,nextCaseY)){	//on parlait directement au dresseur pour l attaquer
              if(!monDresseur.grille.getDresseur(nextCaseX,nextCaseY).asPerdu){
                monDresseur.mode = PlayerMode.FIGHT;
                monDresseur.adversaire = monDresseur.grille.getDresseur(nextCaseX,nextCaseY);

                monDresseur.combat = new Combat();
              }
              else{
                monDresseur.mode = PlayerMode.MAP;
              }
            }
            else{	//le dresseur nous attaquait
              if(monDresseur.getAdv().asPerdu){
                monDresseur.mode = PlayerMode.MAP;
              }
              else{
                monDresseur.mode = PlayerMode.FIGHT;
                monDresseur.combat = new Combat();
              }
            }
          }
          else{
            monDresseur.mode = PlayerMode.MAP;
          }
        }
      }
      break;
    case(PlayerHudMode.POKEDEX):
      handlePokedexEvent(touche);
      break;
    case(PlayerHudMode.MENUPOKEMON):
      switch(touche){
        case(BUTTON.BACK):
          monDresseur.hudMode = PlayerHudMode.PAUSE;
          break;
      }
      break;
    case(PlayerHudMode.MENUINVENTAIRE):
      switch(touche){
        case(BUTTON.BACK):
          monDresseur.hudMode = PlayerHudMode.PAUSE;
        break;
      }
      break;
    case(PlayerHudMode.MENUDRESSEUR):
      switch(touche){
        case(BUTTON.BACK):
          monDresseur.hudMode = PlayerHudMode.PAUSE;
        break;
      }
      break;
    case(PlayerHudMode.MENUCARTE):
      handleCarteEvent(touche)
      break;
    case(PlayerHudMode.MENUSAVE):
      switch(touche){
        case(BUTTON.CONFIRM):
          monDresseur.save();
        break;
        case(BUTTON.BACK):
          monDresseur.hudMode = PlayerHudMode.PAUSE;
        break;
      }
      break;
    case(PlayerHudMode.MENUOPTIONS):
      switch(touche){
        case(BUTTON.CONFIRM):
          changeColorHUD()
        break;
        case(BUTTON.BACK):
          monDresseur.hudMode = PlayerHudMode.PAUSE;
        break;
        case(BUTTON.PAUSE):
          monDresseur.couleurPrefere = "#bbbbbb";
        break;
      }
      break;
    case(PlayerHudMode.FAIL):
      sendDresseurToHealthCenter()
      monDresseur.dresseur.adversaire = null;
      break;
    case(PlayerHudMode.INFO):
      monDresseur.mode = PlayerHudMode.PAUSE;
    break;
    case(PlayerHudMode.SUCCESS):
      monDresseur.mode = PlayerHudMode.PAUSE;
      monDresseur.dresseur.adversaire = null;
      break;
    case(PlayerHudMode.WAIT):
      break;
  }
}

function handleMainMenuEvent(touche){
  switch(touche){
    case(BUTTON.PAUSE):
      monDresseur.mode = PlayerHudMode.PAUSE;
      break;
    case(BUTTON.CONFIRM):
      //valide
      monDresseur.menu.valider();
      break;
    case(BUTTON.BACK):
      monDresseur.mode = PlayerHudMode.PAUSE;
      break;
    case(BUTTON.UP):
      monDresseur.menu.selectM();
      break;
    case(BUTTON.DOWN):
      monDresseur.menu.selectP();
      break;
  }
}

function handlePokedexEvent(touche){
  switch(touche){
    case(BUTTON.BACK):
      monDresseur.hudMode = PlayerHudMode.PAUSE;
    break;
    case(BUTTON.UP):
      pokedex.getPokeInf()
    break;
    case(BUTTON.DOWN):
      pokedex.getPokeSup()
    break;
  }
}

function handleCarteEvent(touche){
  switch(touche){
    case(BUTTON.UP):
      monDresseur.carte.selectM();
    break;
    case(BUTTON.DOWN):
      monDresseur.carte.selectP();
    break;
    case(BUTTON.CONFIRM)://valider
      monDresseur.carte.voyage();
      monDresseur.mode = PlayerMode.MAP;
    break;
    case(BUTTON.BACK)://retour
      monDresseur.hudMode = PlayerHudMode.PAUSE;
    break;
  }
}

function sendDresseurToHealthCenter(){
  monDresseur.mode = PlayerHudMode.PAUSE;
  monDresseur.dresseur.aversaire = null;
  monDresseur.setPosX(-72);//---> devant centre pokemon
  monDresseur.setPosY(6);
}

function changeColorHUD(){
  monDresseur.couleurPrefere = '#'+Math.floor(Math.random()*16777215).toString(16);
}
