import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { MenuNavegador } from '../modelsInterface/menuNavegador';

@Injectable({
  providedIn: 'root',
})
export class MenuNavegadorService {
  //CRIANDO ENDPOINT
  private readonly urlAPI = '../../assets/menuNavegador.json';

  //INJETANDO Http NO CONSTRUTOR O SERVIÇO HttpClient
  constructor(private menuDados: HttpClient) {}

  //CRIANDO O MÉTODO
  listMenu() {
    // (PIPE) ESTÁ TRATANDO ANTES DE RETORNAR O RESULTADO
    return this.menuDados.get<MenuNavegador[]>(this.urlAPI).pipe(
      // (FIRST) PARA NÃO OCORRER REPETIÇÃO DA BUSCA
      first(),
      // (TAP E CONJUNTO COM A =>)DESMONTAR O VETOR E TRATA O OBSERVABLE E PADRONIZA PARA A INTERFACE
      tap((apiMenu) => console.log(apiMenu))
    );
  }
}
