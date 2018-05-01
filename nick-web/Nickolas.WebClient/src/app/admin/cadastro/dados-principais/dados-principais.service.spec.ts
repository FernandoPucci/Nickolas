import { TestBed, inject } from '@angular/core/testing';

import { DadosPrincipaisService } from './dados-principais.service';

describe('DadosPrincipaisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadosPrincipaisService]
    });
  });

  it('should be created', inject([DadosPrincipaisService], (service: DadosPrincipaisService) => {
    expect(service).toBeTruthy();
  }));
});
