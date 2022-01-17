import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  // ITENS DO MENU PRINCIPAL
  titleNav = 'BookShelf';
  user = {userName: 'Samuel Dias', icon: 'remember_me'}
  // ITENS BARRA SUPERIOR
  titleBar = '[Your personal virtual BookShelf]';
  // ITENS DE ICONS E IMAGENS DE NAVEGAÇÃO
  iconGeneral = '../../assets/img/ShelfBook.png';
  lIcon= 80;
  wIcon = 80;
  // CONTROLE DO MENU
  itensMenu = [
    {linkMenu: '/cdd', labelMenu: "Class Dewey", able: true},
    {linkMenu: '/feed', labelMenu: "Feed News", able: true},
    {linkMenu: '/user', labelMenu: "User page", able: false},
    {linkMenu: '/club', labelMenu: "Book Club", able: false},
    {linkMenu: '/shelf', labelMenu: "Private Shelf", able: false},
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
