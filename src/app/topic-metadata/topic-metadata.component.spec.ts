import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { TopicMetadataComponent } from './topic-metadata.component';

import { Metadata } from '../interfaces';
import { asyncData } from 'src/test-helpers';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


// setting up a mock metadata object 
const mockMetadata: Metadata = {
  label: 'I got label!',
  volume: 15,
  sentiment: {
    negative: 4,
    neutral: 11,
    positive: 0
  },
  color: 'red'
}

describe('TopicMetadataComponent', () => {
  let component: TopicMetadataComponent;
  let fixture: ComponentFixture<TopicMetadataComponent>;
  // let labelDebugElement: DebugElement;

  // let transferMetadataSpy: jasmine.Spy;

  
  beforeEach(async () => {

    // const dataHandlerServiceSpy = jasmine.createSpyObj('DataHandlerService', ['transferMetadata']);
    // transferMetadataSpy = dataHandlerServiceSpy.transferMetadata.and.returnValue(of(''));

    await TestBed.configureTestingModule({
      declarations: [ TopicMetadataComponent ],
      // providers: [{provide: DataHandlerService, useValue: dataHandlerServiceSpy}],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicMetadataComponent);
    component = fixture.componentInstance;
  
    // labelDebugElement = fixture.debugElement.query(By.css('metadata-header'));

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct background color of the header', ()=>{
    component.metadata = mockMetadata;
    fixture.detectChanges();

     const debugEl: DebugElement = fixture.debugElement; 
    const labelDe = debugEl.query(By.css('.metadata-header'));
    const label: HTMLElement = labelDe.nativeElement;
    const bgColor: string = label.style.backgroundColor;
    
    
    expect(bgColor).toContain('red');

  })
  it('should display placeholder if metadata is not set',()=> {
    component.metadata = null;

    fixture.detectChanges();
    component.metadata = null;
    const debugEl: DebugElement = fixture.debugElement
    const placeholderDe = debugEl.query(By.css('.placeholder'));
    const placeholderEl = HTMLElement = placeholderDe.nativeElement;

    expect(placeholderEl?.textContent).toContain('desired topic');

  })
  
  
  
  
});
