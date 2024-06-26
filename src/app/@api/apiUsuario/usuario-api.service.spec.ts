import { TestBed } from '@angular/core/testing';
import {UsuariosApiService} from './usuario-api.service'

describe('CursoApiService', () => {
    let service: UsuariosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
