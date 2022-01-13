import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHomeComponent, PageNotFoundComponent } from '../pages';

@NgModule({
  declarations: [
    PageHomeComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    PageHomeComponent,
    PageNotFoundComponent
  ]
})
export class PagesModule { }
