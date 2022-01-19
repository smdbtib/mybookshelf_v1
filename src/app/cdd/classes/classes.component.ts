import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Genders } from '../modelos/genders';
import { AppDialogosComponent } from './../../app-compartilhado/app-dialogos/app-dialogos.component';
import { GetGenderService } from './../service/get-gender.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  //DECLARANDO O OBSERVABLE
  genderBooks$: Observable<Genders[]>;

  columnView = ['_idGender', 'nameGender', 'decimalGender'];

  constructor(
    //INJETANDO O SERVIÇO PARA O CONSTRUTOR
    private genderService: GetGenderService,
    public dialog: MatDialog
  ) {
    this.genderBooks$ = genderService.listGender().pipe(
      catchError((error) => {
        this.openDialogError(`Error loading table: ${error.status}`);
        return of([]);
      })
    );
  }

  openDialogError(errorMsg: string) {
    this.dialog.open(AppDialogosComponent, { data: errorMsg });
  }

  ngOnInit(): void {}
}
