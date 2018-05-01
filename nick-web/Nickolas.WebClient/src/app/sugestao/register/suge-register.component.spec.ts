import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugeRegisterComponent } from './suge-register.component';

describe('SugeRegisterComponent', () => {
  let component: SugeRegisterComponent;
  let fixture: ComponentFixture<SugeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
