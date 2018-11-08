import {TestBed, inject, async} from '@angular/core/testing';
import {WinningPlayerCalculatorService} from './winning-player-calculator.service';
import {ItemTypes} from '../classes/item-types';
import {WinningPlayer} from '../interfaces/winning-player';

describe('WinningPlayerCalculatorService', () => {

  beforeEach(async(
    () => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
          WinningPlayerCalculatorService,
        ],
      });
    }));

  const getWinningPlayer = (winningPlayerLabel: string,
                            playerPointCount?: number,
                            computerPointCount?: number): WinningPlayer => {
    return {
      winningPlayerLabel: winningPlayerLabel,
      playerPointCount: playerPointCount,
      computerPointCount: computerPointCount
    };
  };

  const computerPlayerWinLabel = 'Computer wins!!';
  const playerWinLabel = 'Player wins!!';
  const playerDrawLabel = 'Its a Draw!!';

  it('should be created', inject([WinningPlayerCalculatorService], (service: WinningPlayerCalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('getWinningPlayer should calculate a draw when both players have selected Rock',
    async(inject([WinningPlayerCalculatorService], (winningPlayerCalculatorService: WinningPlayerCalculatorService) => {
        expect(winningPlayerCalculatorService.getWinningPlayer(
          ItemTypes.rockItemType, ItemTypes.rockItemType)
        ).toEqual(getWinningPlayer(playerDrawLabel, 0, 0));
      })
    ));

  it('getWinningPlayer should calculate a draw when both players have selected Paper',
    async(inject([WinningPlayerCalculatorService], (winningPlayerCalculatorService: WinningPlayerCalculatorService) => {
        expect(winningPlayerCalculatorService.getWinningPlayer(
          ItemTypes.paperItemType, ItemTypes.paperItemType)
        ).toEqual(getWinningPlayer(playerDrawLabel, 0, 0));
      })
    ));

  it('getWinningPlayer should calculate a draw when both players have selected Scissors',
    async(inject([WinningPlayerCalculatorService], (winningPlayerCalculatorService: WinningPlayerCalculatorService) => {
        expect(winningPlayerCalculatorService.getWinningPlayer(
          ItemTypes.scissorsItemType, ItemTypes.scissorsItemType)
        ).toEqual(getWinningPlayer(playerDrawLabel, 0, 0));
      })
    ));

  it('getWinningPlayer should calculate a computer win when player selected Scissors and computer selects Rock',
    async(inject([WinningPlayerCalculatorService], (winningPlayerCalculatorService: WinningPlayerCalculatorService) => {
        expect(winningPlayerCalculatorService.getWinningPlayer(
          ItemTypes.scissorsItemType, ItemTypes.rockItemType)
        ).toEqual(getWinningPlayer(computerPlayerWinLabel, 0, 1));
      })
    ));

  it('getWinningPlayer should calculate a player win when player selected Rock and computer selects Scissors',
    async(inject([WinningPlayerCalculatorService], (winningPlayerCalculatorService: WinningPlayerCalculatorService) => {
        expect(winningPlayerCalculatorService.getWinningPlayer(
          ItemTypes.rockItemType, ItemTypes.scissorsItemType)
        ).toEqual(getWinningPlayer(playerWinLabel, 1, 0));
      })
    ));


  it('getWinningPlayer should calculate a player win when player selected Scissors and computer selects Paper',
    async(inject([WinningPlayerCalculatorService], (winningPlayerCalculatorService: WinningPlayerCalculatorService) => {
        expect(winningPlayerCalculatorService.getWinningPlayer
          (ItemTypes.scissorsItemType, ItemTypes.paperItemType)
        ).toEqual(getWinningPlayer(playerWinLabel, 1, 0));
      })
    ));


  it('getWinningPlayer should calculate a computer win when player selected Paper and computer selects Scissors',
    async(inject([WinningPlayerCalculatorService], (winningPlayerCalculatorService: WinningPlayerCalculatorService) => {
        expect(winningPlayerCalculatorService.getWinningPlayer(
          ItemTypes.paperItemType, ItemTypes.scissorsItemType)
        ).toEqual(getWinningPlayer(computerPlayerWinLabel, 0, 1));
      })
    ));


  it('getWinningPlayer should calculate a player win when player selected Paper and computer selects Rock',
    async(inject([WinningPlayerCalculatorService], (winningPlayerCalculatorService: WinningPlayerCalculatorService) => {
        expect(winningPlayerCalculatorService.getWinningPlayer(
          ItemTypes.paperItemType, ItemTypes.rockItemType)
        ).toEqual(getWinningPlayer(playerWinLabel, 1, 0));
      })
    ));

  it('getWinningPlayer should calculate a computer win when player selected Rock and computer selects Paper',
    async(inject([WinningPlayerCalculatorService], (winningPlayerCalculatorService: WinningPlayerCalculatorService) => {
        expect(winningPlayerCalculatorService.getWinningPlayer(
          ItemTypes.rockItemType, ItemTypes.paperItemType)
        ).toEqual(getWinningPlayer(computerPlayerWinLabel, 0, 1));
      })
    ));
});

