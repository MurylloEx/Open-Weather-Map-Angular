import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { RoutingModule } from "./routing.module";
import { ApiService, HttpService } from "../services";

import { PageHomeComponent, PageNotFoundComponent } from "../pages";
import { OwmAppComponent } from "../components/owm-app/owm-app.component";

@NgModule({
  declarations: [
    OwmAppComponent,
    PageHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpService,
    ApiService
  ],
  bootstrap: [OwmAppComponent]
})
export class AppModule { }
