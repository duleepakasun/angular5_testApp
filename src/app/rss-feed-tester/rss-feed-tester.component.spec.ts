import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssFeedTesterComponent } from './rss-feed-tester.component';

describe('RssFeedTesterComponent', () => {
  let component: RssFeedTesterComponent;
  let fixture: ComponentFixture<RssFeedTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssFeedTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssFeedTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
