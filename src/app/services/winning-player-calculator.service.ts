import {Injectable} from '@angular/core';
import {Item} from '../interfaces/item';
import {WinningPlayer} from '../interfaces/winning-player';


@Injectable({
  providedIn: 'root'
})
export class WinningPlayerCalculatorService {
  private readonly playerWinLabel: string = 'Player 1 wins!!';
  private readonly computerPlayerWinLabel: string = 'Computer wins!!';
  private readonly playerDrawLabel: string = 'Its a Draw!!';
  private computerPointCount = 0;
  private playerPointCount = 0;

  public getWinningPlayer(playerSelection: Item,
                          computerPlayerSelection: Item): WinningPlayer {
    switch (playerSelection.value === computerPlayerSelection.value) {
      case true:
        return this.getWiningPlayer(this.playerDrawLabel, this.playerPointCount, this.computerPointCount);
      default:
        return this.getCalculatedWinningPlayer(playerSelection, computerPlayerSelection);
    }
  }

  private getCalculatedWinningPlayer(playerSelection: Item,
                                     computerPlayerSelection: Item): WinningPlayer {
    switch (this.playerWinningItem(playerSelection, computerPlayerSelection)) {
      case true:
        this.playerPointCount = (this.playerPointCount) + (1);
        return this.getWiningPlayer(this.playerWinLabel, this.playerPointCount, this.computerPointCount);
      default:
        this.computerPointCount = (this.computerPointCount) + (1);
        return this.getWiningPlayer(this.computerPlayerWinLabel, this.playerPointCount, this.computerPointCount);
    }
  }

  private getWiningPlayer(winningPlayerLabel: string, playerPoints: number, computerPoints: number): WinningPlayer {
    return {
      winningPlayerLabel: winningPlayerLabel,
      playerPointCount: playerPoints,
      computerPointCount: computerPoints
    };
  }

  private playerWinningItem(playerSelection: Item,
                                                computerSelection: Item): boolean {
    return ((playerSelection.value) - (computerSelection.value) + 3) % 3 === 1;
  }
}


