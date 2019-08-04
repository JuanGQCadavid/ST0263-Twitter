import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreatorComponent } from './tweet-creator.component';

describe('TweetCreatorComponent', () => {
  let component: TweetCreatorComponent;
  let fixture: ComponentFixture<TweetCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
