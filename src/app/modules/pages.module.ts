import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageHomeComponent, PageNotFoundComponent } from '../pages';
import { PrimeNgModule } from './prime-ng.module';

@NgModule({
  declarations: [
    PageHomeComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    CommonModule,
    PageHomeComponent,
    PageNotFoundComponent
  ]
})
export class PagesModule { }
