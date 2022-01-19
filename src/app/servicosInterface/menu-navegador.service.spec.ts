import { TestBed } from '@angular/core/testing';

import { MenuNavegadorService } from './menu-navegador.service';

describe('MenuNavegadorService', () => {
  let service: MenuNavegadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuNavegadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
