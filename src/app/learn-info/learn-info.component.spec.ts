import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnInfoComponent } from './learn-info.component';

describe('LearnInfoComponent', () => {
  let component: LearnInfoComponent;
  let fixture: ComponentFixture<LearnInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
