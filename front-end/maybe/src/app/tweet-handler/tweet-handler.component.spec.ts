import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetHandlerComponent } from './tweet-handler.component';

describe('TweetHandlerComponent', () => {
  let component: TweetHandlerComponent;
  let fixture: ComponentFixture<TweetHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
