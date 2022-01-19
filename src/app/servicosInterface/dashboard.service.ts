import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Dashboard } from '../modelsInterface/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  //CRIANDO ENDPOINT
  private readonly urlAPI = '../../assets/dashboard.json';

  //INJETANDO NO CONSTRUTOR O SERVIÇO HttpClient
  constructor(private cardsDashDados: HttpClient) {}

  //CRIANDO O MÉTODO
  listDash() {
    // (PIPE) ESTÁ TRATANDO ANTES DE RETORNAR O RESULTADO
    return this.cardsDashDados.get<Dashboard[]>(this.urlAPI).pipe(
      // (FIRST) PARA NÃO OCORRER REPETIÇÃO DA BUSCA
      first(),
      // (TAP E CONJUNTO COM A =>) DESMONTAR O VETOR E TRATA O OBSERVABLE E PADRONIZA PARA A INTERFACE
      tap((apiDash) => console.log(apiDash))
    );
  }
}
