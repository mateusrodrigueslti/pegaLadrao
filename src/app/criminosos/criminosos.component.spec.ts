import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminososComponent } from './criminosos.component';

describe('CriminososComponent', () => {
  let component: CriminososComponent;
  let fixture: ComponentFixture<CriminososComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminososComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
