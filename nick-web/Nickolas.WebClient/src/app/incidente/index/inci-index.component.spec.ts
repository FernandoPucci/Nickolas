import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InciIndexComponent } from './inci-index.component';

describe('InciIndexComponent', () => {
  let component: InciIndexComponent;
  let fixture: ComponentFixture<InciIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InciIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InciIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
