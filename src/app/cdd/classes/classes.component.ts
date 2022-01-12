import { GetGenderService } from './../service/get-gender.service';
import { Component, OnInit } from '@angular/core';
import { Genders } from '../modelos/genders';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  genderBooks: Observable <Genders[]>;

  columnView = ['_idGender', 'nameGender', 'decimalGender'];

  constructor(private genderService: GetGenderService) {
    this.genderBooks = genderService.listGender();
   }

  ngOnInit(): void {
  }

}
