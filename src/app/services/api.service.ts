import { Injectable } from '@angular/core';
import { WeatherResponse } from '../interfaces';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private m_ApiAddress: string = "https://api.openweathermap.org";
  private m_ApiBase: string = "/data/2.5";

  constructor(private http: HttpService) { }

  getApiBase() {
    return this.m_ApiAddress + this.m_ApiBase;
  }

  getCityWeather(cityName: string, ufCode: string, country: string = 'BR') {
    return this.http.get<WeatherResponse>(
      this.getApiBase() + "/weather",
      { q: `${cityName},${ufCode},${country}`, units: 'metric' },
      { ...HttpService.AuthHeader, ...HttpService.JsonHeader });
  }

  getWeatherIcon(iconId: string){
    return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  }

}
