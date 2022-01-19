import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

import { MenuNavegador } from '../modelsInterface/menuNavegador';
import { AppLoginComponent } from './../app-login/app-login.component';
import { MenuNavegadorService } from './../servicosInterface/menu-navegador.service';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss'],
})
export class NavegacaoComponent {
  //DECLARANDO OBSERVABLE

  //ITENS DO MENU PRINCIPAL
  titleNav = 'BookShelf';
  /*user = { userName: 'Samuel Dias', icon: 'remember_me' }; */
  //ITENS BARRA SUPERIOR
  titleBar = '[Your personal virtual BookShelf]';
  //ITENS DE ICONS E IMAGENS DE NAVEGAÇÃO
  iconGeneral = '../../assets/img/ShelfBook.png';
  lIcon = 80;
  wIcon = 80;
  //CONTROLE DO MENU DECLARANDO O OBSERVABLE
  itensMenu$: Observable<MenuNavegador[]>;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private menuService: MenuNavegadorService,
    //INJETANDO SERVIÇO NO CONSTRUTOR
    private breakpointObserver: BreakpointObserver,
    public telaLogin: MatDialog,
  ) {
    this.itensMenu$ = menuService.listMenu().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

  openDialogLogin(errorMsg: string) {
    this.telaLogin.open(AppLoginComponent, { data: errorMsg });
  }
}
