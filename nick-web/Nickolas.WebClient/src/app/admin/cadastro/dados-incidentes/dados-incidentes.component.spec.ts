import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosIncidentesComponent } from './dados-incidentes.component';

describe('DadosIncidentesComponent', () => {
  let component: DadosIncidentesComponent;
  let fixture: ComponentFixture<DadosIncidentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosIncidentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosIncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
