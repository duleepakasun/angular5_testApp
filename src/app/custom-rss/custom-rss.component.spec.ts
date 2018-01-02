import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRssComponent } from './custom-rss.component';

describe('CustomRssComponent', () => {
  let component: CustomRssComponent;
  let fixture: ComponentFixture<CustomRssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
