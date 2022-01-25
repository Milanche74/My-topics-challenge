import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicMetadataComponent } from './topic-metadata.component';

describe('TopicMetadataComponent', () => {
  let component: TopicMetadataComponent;
  let fixture: ComponentFixture<TopicMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
