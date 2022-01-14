import { Injectable } from '@angular/core';
import { IbgeCity, IbgeState } from '../interfaces';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  m_StatesList: IbgeState[] = [];

  constructor(private http: HttpService) {
    this.getStates().then((states) => {
      this.m_StatesList = states;
    });
  }

  getStates(): Promise<IbgeState[]> {
    if (this.m_StatesList.length > 0)
      return new Promise((r, _) => r(this.m_StatesList));
    return this.http.get<any[]>(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados", 
      {}, { ...HttpService.JsonHeader });
  }

  getCities(ufCode: string): Promise<IbgeCity[]> {
    return this.http.get<any[]>(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + encodeURIComponent(ufCode) + "/distritos", 
      {}, { ...HttpService.JsonHeader });
  }

}
