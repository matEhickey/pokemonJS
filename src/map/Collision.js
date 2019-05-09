// @flow

// import Pokemon from './Pokemon';
import PlayerController from '../gameloop/PlayerController';

export interface Collision {
  nom: string;
  isWalkable({x: number, y: number}): bool;
  showDebug(PlayerController): void;
}
