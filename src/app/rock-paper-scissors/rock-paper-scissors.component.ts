import {Component, OnInit} from '@angular/core';
import {WinningPlayerCalculatorService} from '../services/winning-player-calculator.service';
import {RandomItemGeneratorService} from '../services/random-item-generator.service';
import {Item} from '../interfaces/item';
import {Game} from '../interfaces/game';
import {WinningPlayer} from '../interfaces/winning-player';
import {ItemTypes} from '../classes/item-types';


@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html'
})
export class RockPaperScissorsComponent implements OnInit {
  public gameModel: Game;
  public playerSelectionOptions: Array<Item>;


  constructor(private winningPlayerCalculator: WinningPlayerCalculatorService,
              private randomItemGenerator: RandomItemGeneratorService) {
  }

  ngOnInit() {
    this.playerSelectionOptions = [
      ItemTypes.rockItemType,
      ItemTypes.paperItemType,
      ItemTypes.scissorsItemType
    ];
  }

  public playerSelectionEvent(playerSelection: Item): void {
    this.setGameModel(playerSelection);
  }

  private setGameModel(playerSelection: Item): void {
    const computerSelection = this.getRandomComputerSelection();
    const winningPlayer: WinningPlayer = this.winningPlayerCalculator
      .getWinningPlayer(playerSelection, computerSelection);

    this.gameModel = {
      computerPlayerSelection: computerSelection,
      playerSelection: playerSelection,
      gameResult: winningPlayer.winningPlayerLabel,
      playerScore: winningPlayer.playerPointCount,
      computerScore: winningPlayer.computerPointCount
    };
  }

  private getRandomComputerSelection(): Item {
    return this.randomItemGenerator
      .getRandomItem(this.playerSelectionOptions);
  }
}
