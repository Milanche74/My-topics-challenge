import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { WordComponent } from './word.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Metadata } from '../interfaces';
import { DataHandlerService } from '../data-handler.service';

describe('WordComponent', () => {
  let component: WordComponent;
  let fixture: ComponentFixture<WordComponent>; 
  let wordLabelDe: DebugElement;

  let transferMetadataSpy: jasmine.Spy;

  beforeEach(async () => {

    const dataHandlerServiceSpy = jasmine.createSpyObj('DataHandlerService', ['transferMetadata']);
    transferMetadataSpy = dataHandlerServiceSpy.transferMetadata.and.returnValue(of(''));

    await TestBed.configureTestingModule({
      declarations: [ WordComponent ],
      providers: [{provide: DataHandlerService, useValue: dataHandlerServiceSpy}],
      imports: [HttpClientTestingModule]
    })
    .compileComponents(); 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordComponent);
    component = fixture.componentInstance;
    wordLabelDe = fixture.debugElement.query(By.css('div'));
    
    // value of this component's instance will be undefined because we don't get value from parent
    // so I'm delivering a mock topic
    component.topic = {
      id: '1b',
      label: 'I got label!',
      volume: 15,
      type: 'must',
      sentiment: {
          negative: 4,
          neutral: 11,
      },
      sentimentScore: 30,
      burst: 12,
      days: [
          {
              date: 'find',
              volume: 2
          },
          {
              date: 'better',
              volume: 4
          },
          {
              date: 'way',
              volume: 6
          },
          {
              date: 'of',
              volume: 5
          },
          {
              date: 'doing',
              volume: 0
          },
          {
              date: 'this',
              volume: 6
          },
          {
              date: 'string',
              volume: 4
          }
      ],
      pageType: {
          blog: 33,
          facebook: 44,
          forum: 15,
          general: 15,
          image: 26,
          news: 24,
          review: 27,
          twitter: 11,
          video: 0
      },
      queries: [
          {
              id: 444,
              name: 'string',
              volume: 1
          }
      ]

    }

    // waits for onInit
    fixture.detectChanges();
  });


  it('should have initialized topic property', ()=> {
    expect(component.topic).toBeTruthy();
  });

  
  it('should assign right font size index', ()=> {
    expect(component.fontSizeIndex).toEqual(3)
  })

  
  it('should assign right color index', ()=> {
    expect(component.textColor).toEqual('red');
  })

  
  it('should not assign random positionig index', ()=> {
    expect(component.randomPositioningIndex).toEqual('0');
  })

  
  it('should display its label', ()=> {

    // By.css() makes this test more usable on platforms that don't run in browser  

    const wordDebugElement: DebugElement = fixture.debugElement;
    const wordLabelDe = wordDebugElement.query(By.css('div'));
    const wordLabel: HTMLElement = wordLabelDe.nativeElement;
    
    
    expect(wordLabel?.textContent).toContain('I got label!')
  });


  it('should call metadataTransfer() with right property on click',()=>{
    const rightMetadataExample: Metadata = {
      label: 'I got label!',
      volume: 15,
      sentiment: {
          negative: 4,
          neutral: 11,
          positive: 0
      },
      color: component.textColor
    };

    wordLabelDe.triggerEventHandler('click', null);
    expect(transferMetadataSpy).toHaveBeenCalledWith(rightMetadataExample);
  })


});
