import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherResponse } from 'src/app/interfaces';
import { ApiService } from 'src/app/services';

type Optional<T> = T | null;

@Component({
  selector: 'owm-weather-item',
  templateUrl: './owm-weather-item.component.html',
  styleUrls: ['./owm-weather-item.component.css']
})
export class OwmWeatherItemComponent implements OnInit {

  @Input() owmWeather: Optional<WeatherResponse> = null;
  @Output() owmClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    this.owmClick.emit();
  }

  getIcon(){
    return this.apiService.getWeatherIcon(this.owmWeather?.weather?.slice(-1)[0].icon ?? '');
  }

  getDescription(){
    return this.owmWeather?.weather.slice(-1)[0].description ?? 'N/A';
  }

  getWindSpeed(){
    return String(this.owmWeather?.wind.speed ?? 'N/A');
  }

  getHumidity(){
    return String(this.owmWeather?.main.humidity ?? 'N/A')
  }

  getTemperature(){
    return String(this.owmWeather?.main.temp ?? 'N/A')
  }

  getMaxTemperature(){
    return String(this.owmWeather?.main.temp_max ?? 'N/A')
  }

  getMinTemperature(){
    return String(this.owmWeather?.main.temp_min ?? 'N/A')
  }

  getPressure(){
    return String(this.owmWeather?.main.pressure ?? 'N/A')
  }

  getCloudsCoverage(){
    return String(this.owmWeather?.clouds.all ?? 'N/A');
  }

}
