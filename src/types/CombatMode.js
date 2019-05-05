// @flow

const CombatMode = {
  dresseurs: Symbol('CombatMode.dresseurs'), // juste les dresseurs,
  pokemons: Symbol('CombatMode.pokemons'), // juste les pokemons,
  discussions: Symbol('CombatMode.discussions'), // discussion (ex:pokemon gagne pts, pokemon recoit degats) ,
  menuSelection: Symbol('CombatMode.menuSelection'), // Menu selection,
  attaque: Symbol('CombatMode.attaque'), // attaque
  discussions_end: Symbol('CombatMode.discussions_end'), // discussion puis retour au jeu apres combat
};

export default CombatMode;
