import { TestBed, inject } from '@angular/core/testing';

import { DadosSugestoesService } from './dados-sugestoes.service';

describe('DadosSugestoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosSugestoesService]
    });
  });

  it('should be created', inject([DadosSugestoesService], (service: DadosSugestoesService) => {
    expect(service).toBeTruthy();
  }));
});
