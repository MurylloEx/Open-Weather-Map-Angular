import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './owm-app.component.html',
  styleUrls: ['./owm-app.component.css']
})
export class OwmAppComponent {
  title = 'Comeia Weather Panel';

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

}
