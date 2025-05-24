import { Component, inject } from '@angular/core';
import { ModalEditServiceComponent } from '../modal-edit-service/modal-edit-service.component';
import { ModalSwitchService } from '../../shared/services/modal-switch/modal-switch.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-services-business',
  imports: [ModalEditServiceComponent, CommonModule],
  templateUrl: './card-services-business.component.html',
  styleUrl: './card-services-business.component.css'
})
export class CardServicesBusinessComponent {

protected modalSwitchService = inject(ModalSwitchService);

  openModal(){
    this.modalSwitchService.openModalEditService();
  }

  enableModal:boolean = false;
  showModalEdit(){
    this.enableModal = true;
  }
}
