import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosSugestoesComponent } from './dados-sugestoes.component';

describe('DadosSugestoesComponent', () => {
  let component: DadosSugestoesComponent;
  let fixture: ComponentFixture<DadosSugestoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosSugestoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosSugestoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
