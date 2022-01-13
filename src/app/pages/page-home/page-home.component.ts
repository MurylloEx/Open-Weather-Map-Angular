import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services';

@Component({
  selector: 'owm-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.apiService.getCityWeather('Recife', 'PE').then((v) => {
    //   console.log(v)
    // });
  }

}
