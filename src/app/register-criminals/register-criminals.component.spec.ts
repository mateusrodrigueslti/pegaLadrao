import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalsRegisterComponent } from './register-criminals.component';

describe('RegisterCriminalsComponent', () => {
  let component: CriminalsRegisterComponent;
  let fixture: ComponentFixture<CriminalsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
