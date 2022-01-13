import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OwmFooterComponent, OwmHeaderComponent, OwmPanelComponent } from '../components';

@NgModule({
  declarations: [
    OwmHeaderComponent,
    OwmFooterComponent,
    OwmPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    OwmHeaderComponent,
    OwmFooterComponent,
    OwmPanelComponent
  ]
})
export class ComponentsModule { }
