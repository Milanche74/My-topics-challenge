import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MessageService } from './message.service';

let testMessages: string[];

describe('AppComponent', () => {
  let app:AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let errorMessDe: DebugElement;

  let EmptyMessagesSpy: jasmine.Spy;

  

  beforeEach(async () => {

    const messagesServiceSpy = jasmine.createSpyObj('MessagService',['emptyMessages']);
    EmptyMessagesSpy = messagesServiceSpy.emptyMessages.and.returnValue(of(null));
    
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
     ],
      providers: [{provide: MessageService, useValue: messagesServiceSpy}]
    }).compileComponents();
  });

  beforeEach(()=> {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    

    //onInit
    fixture.detectChanges;
  })

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should not display messages when messageService.messages is []',()=> {
    const errorsMessDebugElement: DebugElement = fixture.debugElement;
    const errorsMessDe = errorsMessDebugElement.query(By.css('.errors-message'));
    // const errorsMessageEl: HTMLElement = errorsMessDe.nativeElement;
    expect(errorsMessDe).toBeFalsy();
  });

  

  // it(`should have as title 'my-topics-challenge'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('my-topics-challenge');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('my-topics-challenge app is running!');
  // });
});
