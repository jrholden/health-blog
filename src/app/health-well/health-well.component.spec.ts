import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthWellComponent } from './health-well.component';

describe('HealthWellComponent', () => {
  let component: HealthWellComponent;
  let fixture: ComponentFixture<HealthWellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthWellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
