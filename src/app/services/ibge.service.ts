import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  constructor(private http: HttpService) { }

  getStates(){
    return this.http.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados", 
      {}, { ...HttpService.JsonHeader });
  }

  getCities(ufCode: string) {
    return this.http.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + encodeURIComponent(ufCode) + "/distritos", 
      {}, { ...HttpService.JsonHeader });
  }

}
