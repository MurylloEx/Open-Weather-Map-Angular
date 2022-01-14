import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  OwmCardComponent, 
  OwmFooterComponent, 
  OwmHeaderComponent, 
  OwmPanelComponent, 
  OwmSpacerComponent,
  OwmWeatherItemComponent,
  OwmWeatherRowComponent
} from '../components';

import { PrimeNgModule } from './prime-ng.module';

@NgModule({
  declarations: [
    OwmHeaderComponent,
    OwmFooterComponent,
    OwmPanelComponent,
    OwmCardComponent,
    OwmSpacerComponent,
    OwmWeatherItemComponent,
    OwmWeatherRowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    OwmHeaderComponent,
    OwmFooterComponent,
    OwmPanelComponent,
    OwmCardComponent,
    OwmSpacerComponent,
    OwmWeatherItemComponent,
    OwmWeatherRowComponent
  ]
})
export class ComponentsModule { }
