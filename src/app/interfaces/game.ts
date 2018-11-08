import {Item} from './item';

export interface Game {
  computerPlayerSelection?: Item;
  playerSelection?: Item;
  gameResult?: string;
  computerScore?: number;
  playerScore?: number;

}
