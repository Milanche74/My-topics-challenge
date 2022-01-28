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

    component.metadata = mockMetadata;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct background color of the header', ()=>{
    fixture.detectChanges();

    const labelDebugElement: DebugElement = fixture.debugElement;
    const labelDe = labelDebugElement.query(By.css('.metadata-header'));
    const label: HTMLElement = labelDe.nativeElement;
    const bgColor: string = label.style.backgroundColor;
    
    
    expect(bgColor).toContain('red');

  })
  
  
  
  
});
