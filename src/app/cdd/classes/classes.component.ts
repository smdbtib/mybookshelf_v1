import { Component, OnInit } from '@angular/core';
import { Genders } from '../modelos/genders';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  genderBooks: Genders[] = [];

  columnView = ['_idGender', 'nameGender', 'decimalGender'];

  constructor() { }

  ngOnInit(): void {
  }

}
