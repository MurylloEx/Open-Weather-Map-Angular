import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    private modalService: ModalService,
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    const cities = [
      { name: 'Recife', uf: 'PE' },
      { name: 'Garanhuns', uf: 'PE' },
      { name: 'Caruaru', uf: 'PE' },
      { name: 'Olinda', uf: 'PE' },
      { name: 'Alagoinhas', uf: 'PE' }
    ];
    // Promise.all(cities.map(c => this.apiService.getCityWeather(c.name, c.uf))).then((values) => {
    //   this.m_CityWeatherList = values;
    // });
  }

  onCityNameFilter(event: any) {
    return event?.target?.value ?? '';
  }

  onCityWeatherModalClose(value?: WeatherResponse){
    if (!!value){
      this.m_CityWeatherList.push(value);
      this.changeDetector.detectChanges();
    }
  }

  doGetCityWeatherList(){
    return [...this.m_CityWeatherList, null];
  }

  doAddCityWeather(){
    this.modalService.openAddCityDialog().onClose.subscribe({ 
      next: (value) => {
        this.onCityWeatherModalClose(value);
      }
    });
  }

}
