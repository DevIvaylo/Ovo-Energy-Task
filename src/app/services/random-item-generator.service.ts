import {Injectable} from '@angular/core';
import {Item} from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class RandomItemGeneratorService {

  public getRandomItem(playerSelectionOptions: Array<Item>): Item {
    const randomNumber: number = Math.floor(Math.random() * playerSelectionOptions.length);
    return playerSelectionOptions[randomNumber];
  }
}



