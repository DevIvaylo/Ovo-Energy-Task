import {TestBed, inject, async} from '@angular/core/testing';
import {RandomItemGeneratorService} from './random-item-generator.service';
import {ItemTypes} from '../classes/item-types';


describe('RandomItemGeneratorService', () => {

  beforeEach(async(
    () => {
      TestBed.configureTestingModule({
        imports: [],
        providers: [
          RandomItemGeneratorService,
        ],
      });
    }));

  const playerSelectionOptions = [
    ItemTypes.rockItemType,
    ItemTypes.paperItemType,
    ItemTypes.scissorsItemType
  ];

  it('should be created', inject([RandomItemGeneratorService], (service: RandomItemGeneratorService) => {
    expect(service).toBeTruthy();
  }));

  it('getRandomItem is called with playerSelectionOptions',
    async(inject([RandomItemGeneratorService], (randomItemGeneratorService: RandomItemGeneratorService) => {
        spyOn(randomItemGeneratorService, 'getRandomItem');
        randomItemGeneratorService.getRandomItem(playerSelectionOptions);
        expect(randomItemGeneratorService.getRandomItem).toHaveBeenCalledWith(playerSelectionOptions);
      })
    ));


  it('getRandomItem should return rock item type',
    async(inject([RandomItemGeneratorService], (randomItemGeneratorService: RandomItemGeneratorService) => {
        spyOn(randomItemGeneratorService, 'getRandomItem').and.callFake(() => {
          return ItemTypes.rockItemType;
        });

        const randomItem = randomItemGeneratorService.getRandomItem(playerSelectionOptions);
        expect(randomItemGeneratorService.getRandomItem).toHaveBeenCalledWith(playerSelectionOptions);
        expect(randomItem).toBe(ItemTypes.rockItemType);
      })
    ));

  it('getRandomItem should return paper item type',
    async(inject([RandomItemGeneratorService], (randomItemGeneratorService: RandomItemGeneratorService) => {
        spyOn(randomItemGeneratorService, 'getRandomItem').and.callFake(() => {
          return ItemTypes.paperItemType;
        });

        const randomItem = randomItemGeneratorService.getRandomItem(playerSelectionOptions);
        expect(randomItemGeneratorService.getRandomItem).toHaveBeenCalledWith(playerSelectionOptions);
        expect(randomItem).toBe(ItemTypes.paperItemType);
      })
    ));

  it('getRandomItem should return scissors item type',
    async(inject([RandomItemGeneratorService], (randomItemGeneratorService: RandomItemGeneratorService) => {
        spyOn(randomItemGeneratorService, 'getRandomItem').and.callFake(() => {
          return ItemTypes.scissorsItemType;
        });

        const randomItem = randomItemGeneratorService.getRandomItem(playerSelectionOptions);
        expect(randomItemGeneratorService.getRandomItem).toHaveBeenCalledWith(playerSelectionOptions);
        expect(randomItem)
          .toBe(ItemTypes.scissorsItemType);
      })
    ));
});
