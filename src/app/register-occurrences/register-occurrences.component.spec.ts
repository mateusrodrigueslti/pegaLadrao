import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurrencesRegisterComponent } from './register-occurrences.component';

describe('RegisterOccurrencesComponent', () => {
  let component: OccurrencesRegisterComponent;
  let fixture: ComponentFixture<OccurrencesRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccurrencesRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurrencesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
