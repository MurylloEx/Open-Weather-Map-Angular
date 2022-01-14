import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { PagesModule } from "./pages.module";
import { RoutingModule } from "./routing.module";
import { PrimeNgModule } from "./prime-ng.module";
import { ComponentsModule } from "./components.module";

import { OwmAppComponent } from "../components";
import { ApiAuthInterceptorService } from "../hooks";
import { ApiService, HttpService, IbgeService, ModalService } from "../services";

@NgModule({
  declarations: [OwmAppComponent],
  imports: [
    PrimeNgModule,
    RoutingModule,
    ComponentsModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [
    HttpService,
    ApiService,
    ModalService,
    IbgeService,
    ApiAuthInterceptorService
  ],
  bootstrap: [OwmAppComponent]
})
export class AppModule { }
