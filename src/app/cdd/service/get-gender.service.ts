import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetGenderService {

  private readonly urlAPI = "./assets/gender.json"

  constructor() { }

  listGender(){

  }
}
