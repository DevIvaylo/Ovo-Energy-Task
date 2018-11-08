import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {RockPaperScissorsComponent} from './rock-paper-scissors.component';
import {RandomItemGeneratorService} from '../services/random-item-generator.service';
import {WinningPlayerCalculatorService} from '../services/winning-player-calculator.service';
import {ItemTypes} from '../classes/item-types';
import {AppModule} from '../app.module';


describe('RockPaperScissorsComponent', () => {
  let component: RockPaperScissorsComponent;
  let fixture: ComponentFixture<RockPaperScissorsComponent>;
  let rockButton: DebugElement;
  let paperButton: DebugElement;
  let scissorsButton: DebugElement;
  let playerTitle: DebugElement;
  let computerTitle: DebugElement;
  let gameInfo: DebugElement;
  let playerPoints: DebugElement;
  let computerPoints: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [WinningPlayerCalculatorService, RandomItemGeneratorService]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPaperScissorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    rockButton = fixture.debugElement.query(By.css('#Rock'));
    paperButton = fixture.debugElement.query(By.css('#Paper'));
    scissorsButton = fixture.debugElement.query(By.css('#Scissors'));
    playerTitle = fixture.debugElement.query(By.css('#playerTitle'));
    computerTitle = fixture.debugElement.query(By.css('#computerTitle'));
    gameInfo = fixture.debugElement.query(By.css('#gameInfo'));
    playerPoints = fixture.debugElement.query(By.css('#playerPoints'));
    computerPoints = fixture.debugElement.query(By.css('#computerPoints'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when player selects rock and computer selects paper, computer wins', async(inject(
    [RandomItemGeneratorService],
    (randomItemGeneratorService: RandomItemGeneratorService) => {
      component.ngOnInit();

      spyOn(randomItemGeneratorService, 'getRandomItem').and.callFake(
        () => {
          return ItemTypes.paperItemType;
        });

      rockButton.nativeElement.click();
      fixture.detectChanges();

      const winner = fixture.debugElement.query(By.css('#winner'));
      const playerSelection = fixture.debugElement.query(By.css('#playerSelection'));
      const computerSelection = fixture.debugElement.query(By.css('#computerSelection'));
      expect(winner.nativeElement.textContent).toEqual('Computer wins!!');
      expect(playerSelection.nativeElement.textContent).toEqual('Player choice: Rock');
      expect(computerSelection.nativeElement.textContent).toEqual('Computer choice: Paper');
      expect(randomItemGeneratorService.getRandomItem)
        .toHaveBeenCalledWith(component.playerSelectionOptions);
      expect(computerPoints.nativeElement.textContent).toEqual('Computer score: 1');
    })
  ));
});

