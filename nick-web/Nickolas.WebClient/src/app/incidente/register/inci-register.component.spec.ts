import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InciRegisterComponent } from './inci-register.component';

describe('InciRegisterComponent', () => {
  let component: InciRegisterComponent;
  let fixture: ComponentFixture<InciRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InciRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InciRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
