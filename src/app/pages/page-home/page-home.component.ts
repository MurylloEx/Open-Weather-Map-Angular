import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from 'src/app/interfaces';
import { ApiService, ModalService } from 'src/app/services';

@Component({
  selector: 'owm-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  m_CityNameFilter: string = "";
  m_CityWeatherList: WeatherResponse[] = [];

  constructor(
    private apiService: ApiService, 
    private modalService: ModalService) { }

  ngOnInit(): void {
    // this.apiService.getCityWeather('Recife', 'PE').then((v) => {
    //   console.log(v)
    // });
  }

  onCityNameFilter(event: any) {
    return event?.target?.value ?? '';
  }

  onCityWeatherModalClose(value: any){
    console.log(value);
  }

  doGetCityWeatherList(){
    return [...this.m_CityWeatherList, null];
  }

  doAddCityWeather(){
    this.modalService.openAddCityDialog().onClose.subscribe({ 
      next: this.onCityWeatherModalClose 
    });
  }

}
