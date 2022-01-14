import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'owm-spacer',
  templateUrl: './owm-spacer.component.html',
  styleUrls: ['./owm-spacer.component.css']
})
export class OwmSpacerComponent implements OnInit {

  @Input() owmSpace: number = 128;

  constructor() { }

  ngOnInit(): void {
  }

}
