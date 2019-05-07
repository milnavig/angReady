import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArendaInfoComponent } from './arenda-info.component';

describe('ArendaInfoComponent', () => {
  let component: ArendaInfoComponent;
  let fixture: ComponentFixture<ArendaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArendaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArendaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
