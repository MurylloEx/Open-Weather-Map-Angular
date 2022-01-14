import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IbgeCity, IbgeState } from 'src/app/interfaces';
import { ApiService, IbgeService } from 'src/app/services';

@Component({
  selector: 'owm-city-modal',
  templateUrl: './owm-city-modal.component.html',
  styleUrls: ['./owm-city-modal.component.css']
})
export class OwmCityModalComponent implements OnInit {

  m_StatesList: IbgeState[] = [];
  m_CitiesList: IbgeCity[] = [];

  m_StateSelected?: IbgeState;
  m_CitySelected?: IbgeCity;

  constructor(
    private ref: DynamicDialogRef,
    private ibgeService: IbgeService,
    private apiService: ApiService) 
  { 
    this.ibgeService.getStates().then(states => {
      this.m_StatesList = states;
    });
  }

  ngOnInit(): void {
  }

  onStateSelected(state: IbgeState){
    this.ibgeService.getCities(state.sigla).then(cities => {
      this.m_CitiesList = cities;
    });
  }

  onFinishModal(){
    this.apiService.getCityWeather(
      encodeURIComponent(this.m_CitySelected?.nome ?? ''), 
      encodeURIComponent(this.m_StateSelected?.sigla ?? '')).then(result => this.ref.close(result));
  }

}
