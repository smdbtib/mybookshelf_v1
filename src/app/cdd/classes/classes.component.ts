import { Component, OnInit } from '@angular/core';
import { Genders } from '../modelos/genders';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  genderBooks: Genders[] = [
    {_idGender: "0", nameGender: "Generalities", decimalGender: "00", booksGender: 50},
    {_idGender: "1", nameGender: "Filosofia e Psicologia", decimalGender: "00", booksGender: 12},
    {_idGender: "2", nameGender: "Religião", decimalGender: "00", booksGender: 14},
    {_idGender: "3", nameGender: "Ciências Sociais", decimalGender: "00", booksGender: 45},
    {_idGender: "4", nameGender: "Linguas", decimalGender: "00", booksGender: 32},
    {_idGender: "5", nameGender: "Ciências Naturais e Matimática", decimalGender: "00", booksGender: 87},
    {_idGender: "6", nameGender: "Técnilogia e Ciências Aplicadas", decimalGender: "00", booksGender: 52},
    {_idGender: "7", nameGender: "Arter", decimalGender: "00", booksGender: 32},
    {_idGender: "8", nameGender: "Literatura e Retórica", decimalGender: "00", booksGender: 57},
    {_idGender: "9", nameGender: "Geografia História e Biografia", decimalGender: "00", booksGender: 14},
  ];

  columnView = ['_idGender', 'nameGender', 'decimalGender'];

  constructor() { }

  ngOnInit(): void {
  }

}
