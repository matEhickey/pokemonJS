import Combat from '../combat/Combat';
import pokedex from '../UI/Pokedex';

import BUTTON from '../gameloop/touches';
import PlayerMode from '../modes/PlayerMode';
import PlayerHudMode from '../modes/PlayerHudMode';


export default function applyHUD_event(touche, player){
  switch(player.hudMode){
    case(PlayerHudMode.PAUSE):
      handleMainMenuEvent(touche, player);
      break;

    case(PlayerHudMode.DISCUSSION):
      if(touche == BUTTON.CONFIRM || touche == BUTTON.BACK){
        const isDiscussionOver = player.discussion.increaseMessage();

        if(isDiscussionOver){
          player.discussion = null;

          if(player.dresseur.adversaire){
            player.calculNextCase();
            var nextCaseX = player.nextCaseX;
            var nextCaseY = player.nextCaseY;

            if(player.grille.getDresseur(nextCaseX,nextCaseY)){	//on parlait directement au dresseur pour l attaquer
              if(!player.grille.getDresseur(nextCaseX,nextCaseY).asPerdu){
                player.mode = PlayerMode.FIGHT;
                player.adversaire = player.grille.getDresseur(nextCaseX,nextCaseY);

                player.combat = new Combat(player);
              }
              else{
                player.mode = PlayerMode.MAP;
              }
            }
            else{	//le dresseur nous attaquait
              if(player.getAdv().asPerdu){
                player.mode = PlayerMode.MAP;
              }
              else{
                player.mode = PlayerMode.FIGHT;
                player.combat = new Combat(player);
              }
            }
          }
          else{
            player.mode = PlayerMode.MAP;
          }
        }
      }
      break;
    case(PlayerHudMode.POKEDEX):
      handlePokedexEvent(touche, player);
      break;
    case(PlayerHudMode.MENUPOKEMON):
      switch(touche){
        case(BUTTON.BACK):
          player.hudMode = PlayerHudMode.PAUSE;
          break;
      }
      break;
    case(PlayerHudMode.MENUINVENTAIRE):
      switch(touche){
        case(BUTTON.BACK):
          player.hudMode = PlayerHudMode.PAUSE;
        break;
      }
      break;
    case(PlayerHudMode.MENUDRESSEUR):
      switch(touche){
        case(BUTTON.BACK):
          player.hudMode = PlayerHudMode.PAUSE;
        break;
      }
      break;
    case(PlayerHudMode.MENUCARTE):
      handleCarteEvent(touche, player)
      break;
    case(PlayerHudMode.MENUSAVE):
      switch(touche){
        case(BUTTON.CONFIRM):
          player.save();
        break;
        case(BUTTON.BACK):
          player.hudMode = PlayerHudMode.PAUSE;
        break;
      }
      break;
    case(PlayerHudMode.MENUOPTIONS):
      switch(touche){
        case(BUTTON.CONFIRM):
          changeColorHUD(player);
        break;
        case(BUTTON.BACK):
          player.hudMode = PlayerHudMode.PAUSE;
        break;
        case(BUTTON.PAUSE):
          player.couleurPrefere = "#bbbbbb";
        break;
      }
      break;
    case(PlayerHudMode.FAIL):
      sendDresseurToHealthCenter(player)
      player.dresseur.adversaire = null;
      break;
    case(PlayerHudMode.INFO):
      player.mode = PlayerHudMode.PAUSE;
    break;
    case(PlayerHudMode.SUCCESS):
      player.mode = PlayerHudMode.PAUSE;
      player.dresseur.adversaire = null;
      break;
    case(PlayerHudMode.WAIT):
      break;
  }
}

function handleMainMenuEvent(touche, player){
  switch(touche){
    case(BUTTON.PAUSE):
      player.mode = PlayerHudMode.PAUSE;
      break;
    case(BUTTON.CONFIRM):
      //valide
      player.menu.valider();
      break;
    case(BUTTON.BACK):
      player.mode = PlayerHudMode.PAUSE;
      break;
    case(BUTTON.UP):
      player.menu.selectM();
      break;
    case(BUTTON.DOWN):
      player.menu.selectP();
      break;
  }
}

function handlePokedexEvent(touche, player){
  switch(touche){
    case(BUTTON.BACK):
      player.hudMode = PlayerHudMode.PAUSE;
    break;
    case(BUTTON.UP):
      pokedex.getPokeInf()
    break;
    case(BUTTON.DOWN):
      pokedex.getPokeSup()
    break;
  }
}

function handleCarteEvent(touche, player){
  switch(touche){
    case(BUTTON.UP):
      player.carte.selectM();
    break;
    case(BUTTON.DOWN):
      player.carte.selectP();
    break;
    case(BUTTON.CONFIRM)://valider
      player.carte.voyage(player);
      player.mode = PlayerMode.MAP;
    break;
    case(BUTTON.BACK)://retour
      player.hudMode = PlayerHudMode.PAUSE;
    break;
  }
}

function sendDresseurToHealthCenter(player){
  player.mode = PlayerHudMode.PAUSE;
  player.dresseur.aversaire = null;
  player.setPosX(-72);//---> devant centre pokemon
  player.setPosY(6);
}

function changeColorHUD(player){
  player.couleurPrefere = '#'+Math.floor(Math.random()*16777215).toString(16);
}
