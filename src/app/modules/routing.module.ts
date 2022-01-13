import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent, PageHomeComponent } from '../pages';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected', useHash: true })],
  exports: [RouterModule]
})
export class RoutingModule { }
