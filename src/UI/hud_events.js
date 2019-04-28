function applyHUD_event(touche){
  switch(monDresseur.hudMode){
    case(0):// menu pause
      handleMainMenuEvent(touche);
      break;

    case(1):// discussion
      if(touche == BUTTON.CONFIRM || touche == BUTTON.BACK){
          monDresseur.calculNextCase();
          var nextCaseX = monDresseur.nextCaseX;
          var nextCaseY = monDresseur.nextCaseY;
          if(monDresseur.grille.getDresseur(nextCaseX,nextCaseY)){	//on parlait directement au dresseur pour l attaquer
            if(!monDresseur.grille.getDresseur(nextCaseX,nextCaseY).aPerdu){
              monDresseur.mode = 2;
              monDresseur.adversaire = monDresseur.grille.getDresseur(nextCaseX,nextCaseY);

              combat = new Combat();
            }
            else{
              monDresseur.mode = 0;
            }
          }
          else{	//le dresseur nous attaquait
              if(monDresseur.getAdv().aPerdu){
                monDresseur.mode = 0;
              }
              else{
                monDresseur.mode = 2;
                combat = new Combat();
              }
          }
      }
      break;
    case(2):// menu pokedex
      handlePokedexEvent(touche);
      break;
    case(3):// menu mes pokemon
      switch(touche){
        case(BUTTON.BACK):
          monDresseur.hudMode = 0;
          break;
      }
      break;
    case(4):// menu inventaire
      switch(touche){
        case(BUTTON.BACK):
          monDresseur.hudMode = 0;
        break;
      }
      break;
    case(5): // mode infos dresseur
      switch(touche){
        case(BUTTON.BACK):
          monDresseur.hudMode = 0;
        break;
      }
      break;
    case(6)://mode carte
      handleCarteEvent(touche)
      break;
    case(7)://mode sauvegarde
      switch(touche){
        case(BUTTON.CONFIRM):
          // monDresseur.save();
          alert("Cette fonctionnalité à été désactivé pour  le moment")
        break;
        case(BUTTON.BACK):
          monDresseur.hudMode = 0;
        break;
      }
      break;
    case(8)://mode option
      switch(touche){
        case(BUTTON.CONFIRM):
          changeColorHUD()
        break;
        case(BUTTON.BACK):
          monDresseur.hudMode = 0;
        break;
        case(BUTTON.PAUSE):
          monDresseur.couleurPrefere = "#bbbbbb";
        break;
      }
      break;
    case(9)://menu fail
      sendDresseurToHealthCenter()
      break;
    case(10)://infos quelqonques
      monDresseur.mode = 0;
    break;
    case(11)://Menu bravo vous avez attrapper tel pokemon
      monDresseur.mode = 0;
      break;
    case(12):	//mode wait, pas de controles.
      console.log("mode wait")
      break;
  }
}

function handleMainMenuEvent(touche){
  switch(touche){
    case(BUTTON.PAUSE):
      monDresseur.mode = 0;
      break;
    case(BUTTON.CONFIRM):
      //valide
      monDresseur.menu.valider();
      break;
    case(BUTTON.BACK):
      monDresseur.mode = 0;
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
      monDresseur.hudMode = 0;
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
      carte.selectM();
    break;
    case(BUTTON.DOWN):
      carte.selectP();
    break;
    case(BUTTON.CONFIRM)://valider
      carte.voyage();
    break;
    case(BUTTON.BACK)://retour
      monDresseur.hudMode = 0;
    break;
  }
}

function sendDresseurToHealthCenter(){
  monDresseur.mode = 0;
  monDresseur.setPosX(-74);//---> centre pokemon
  monDresseur.setPosY(0);
}

function changeColorHUD(){
  monDresseur.couleurPrefere = '#'+Math.floor(Math.random()*16777215).toString(16);
}
