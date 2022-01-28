import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { WordCloudComponent } from './word-cloud.component';
import { DataHandlerService } from '../data-handler.service';
import { Topic } from '../interfaces';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { asyncData } from 'src/test-helpers';




describe('WordCloudComponent', () => {
  let component: WordCloudComponent;
  let fixture: ComponentFixture<WordCloudComponent>;
  // let cloudElement: HTMLElement;
  let getDataSpy: jasmine.Spy;
 

  beforeEach(async () => {

    const dataHandlerServiceSpy = jasmine.createSpyObj('DataHandlerService', ['getData', 'handleError']); 
    getDataSpy = dataHandlerServiceSpy.getData.and.returnValue(of(''));
    
    await TestBed.configureTestingModule({
      declarations: [ WordCloudComponent ],
      providers: [{provide: DataHandlerService, useValue: dataHandlerServiceSpy }] ,
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should shuffle array after onInit', fakeAsync(()=>{
    
    const testArray: number[] = [1,2,3,4,5,6,7,8,9,0];
    const initialArray: number[] = [1,2,3,4,5,6,7,8,9,0];
    // getData is called onInit
    getDataSpy.and.returnValue(asyncData(testArray));
    // detect that onInit has passed
    fixture.detectChanges();
    // wait for data to return
    tick();
    // shuffleArray func hopefully does its job 
    fixture.detectChanges();
    
    expect(testArray).not.toEqual(initialArray);  
    
  }));

  
});
