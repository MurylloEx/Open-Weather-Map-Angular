import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHomeComponent, PageNotFoundComponent } from '../pages';

@NgModule({
  declarations: [
    PageHomeComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule]
})
export class PagesModule { }
