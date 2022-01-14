import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Genders } from '../modelos/genders';

@Injectable({
  providedIn: 'root'
})
export class GetGenderService {



  private readonly urlAPI = "./assets/gender.json"

  constructor(private clienteDados: HttpClient) { }

  listGender(){
    return this.clienteDados.get<Genders[]>(this.urlAPI)
    .pipe(
      delay(3000)
    )
  }
}
