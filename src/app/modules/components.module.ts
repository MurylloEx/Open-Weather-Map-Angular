import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OwmFooterComponent, OwmHeaderComponent, OwmPanelComponent } from '../components';

@NgModule({
  declarations: [
    OwmHeaderComponent,
    OwmFooterComponent,
    OwmPanelComponent
  ],
  imports: [CommonModule]
})
export class ComponentsModule { }
