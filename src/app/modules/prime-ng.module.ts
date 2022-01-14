import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardModule } from "primeng/card";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { TooltipModule } from "primeng/tooltip";
import { MessageModule } from "primeng/message";
import { DropdownModule } from "primeng/dropdown";
import { DataViewModule } from "primeng/dataview";
import { InputTextModule } from "primeng/inputtext";
import { ScrollTopModule } from "primeng/scrolltop";
import { InputSwitchModule } from "primeng/inputswitch";
import { ToggleButtonModule } from "primeng/togglebutton";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DynamicDialogModule } from "primeng/dynamicdialog";

import { MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";

@NgModule({
  imports: [
    CardModule,
    ToastModule,
    ButtonModule,
    CommonModule,
    RippleModule,
    MessageModule,
    TooltipModule,
    DataViewModule,
    DropdownModule,
    ScrollTopModule,
    InputTextModule,
    InputSwitchModule,
    OverlayPanelModule,
    ToggleButtonModule,
    InputTextareaModule,
    DynamicDialogModule
  ],
  providers: [
    DialogService,
    MessageService
  ],
  exports: [
    CardModule,
    ToastModule,
    ButtonModule,
    CommonModule,
    RippleModule,
    MessageModule,
    TooltipModule,
    DataViewModule,
    DropdownModule,
    ScrollTopModule,
    InputTextModule,
    InputSwitchModule,
    OverlayPanelModule,
    ToggleButtonModule,
    InputTextareaModule,
    DynamicDialogModule
  ]
})
export class PrimeNgModule { }
