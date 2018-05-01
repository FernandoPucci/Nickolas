import { TestBed, inject } from '@angular/core/testing';

import { DadosIncidentesService } from './dados-incidentes.service';

describe('DadosIncidentesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosIncidentesService]
    });
  });

  it('should be created', inject([DadosIncidentesService], (service: DadosIncidentesService) => {
    expect(service).toBeTruthy();
  }));
});
