import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from "primeng/card";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { TooltipModule } from "primeng/tooltip";
import { MessageModule } from "primeng/message";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputSwitchModule } from "primeng/inputswitch";
import { ToggleButtonModule } from "primeng/togglebutton";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { InputTextareaModule } from "primeng/inputtextarea";

import { MessageService } from "primeng/api";

@NgModule({
  imports: [
    CardModule,
    ToastModule,
    ButtonModule,
    CommonModule,
    RippleModule,
    MessageModule,
    TooltipModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    OverlayPanelModule,
    ToggleButtonModule,
    InputTextareaModule
  ]
})
export class PrimeNgModule { }
