import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PagesModule } from "./pages.module";
import { RoutingModule } from "./routing.module";
import { PrimeNgModule } from "./prime-ng.module";
import { ComponentsModule } from "./components.module";

import { OwmAppComponent } from "../components";
import { ApiAuthInterceptorService } from "../hooks";
import { ApiService, HttpService } from "../services";

@NgModule({
  declarations: [OwmAppComponent],
  imports: [
    FormsModule,
    PagesModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
    PrimeNgModule
  ],
  providers: [
    HttpService,
    ApiService,
    ApiAuthInterceptorService
  ],
  bootstrap: [OwmAppComponent]
})
export class AppModule { }
