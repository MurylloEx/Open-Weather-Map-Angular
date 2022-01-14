import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherResponse } from 'src/app/interfaces';

type Optional<T> = T | null;

@Component({
  selector: 'owm-weather-item',
  templateUrl: './owm-weather-item.component.html',
  styleUrls: ['./owm-weather-item.component.css']
})
export class OwmWeatherItemComponent implements OnInit {

  @Input() owmWeather: Optional<WeatherResponse> = null;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    this.onClick.emit();
  }

}
