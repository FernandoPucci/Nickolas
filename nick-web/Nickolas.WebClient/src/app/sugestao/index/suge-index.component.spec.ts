import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugeIndexComponent } from './suge-index.component';

describe('SugeIndexComponent', () => {
  let component: SugeIndexComponent;
  let fixture: ComponentFixture<SugeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
