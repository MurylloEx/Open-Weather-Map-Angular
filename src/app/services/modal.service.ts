import { Injectable } from '@angular/core';
import { DialogService } from "primeng/dynamicdialog";
import { OwmCityModalComponent } from '../components';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialogService: DialogService) { }

  openAddCityDialog() {
    return this.dialogService.open(OwmCityModalComponent, {
      header: 'Adicione uma nova cidade',
      styleClass: 'owm-component-dialog',
      closable: true,
      closeOnEscape: true,
      dismissableMask: true
    });
  }

}
