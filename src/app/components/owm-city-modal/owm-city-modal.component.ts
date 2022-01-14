import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'owm-city-modal',
  templateUrl: './owm-city-modal.component.html',
  styleUrls: ['./owm-city-modal.component.css']
})
export class OwmCityModalComponent implements OnInit {

  constructor(private ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }


  
}
