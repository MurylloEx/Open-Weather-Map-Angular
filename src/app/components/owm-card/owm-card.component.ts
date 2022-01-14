import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'owm-card',
  templateUrl: './owm-card.component.html',
  styleUrls: ['./owm-card.component.css']
})
export class OwmCardComponent implements OnInit {

  @Input() owmTitle: string = "";
  @Input() styleClass: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
