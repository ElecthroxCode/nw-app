import { Component, inject } from '@angular/core';
import { ModalSwitchService } from '../../shared/services/modal-switch/modal-switch.service';

@Component({
  selector: 'app-modal-edit-service',
  imports: [],
  templateUrl: './modal-edit-service.component.html',
  styleUrl: './modal-edit-service.component.css'
})
export class ModalEditServiceComponent {

private modalSwitchService = inject(ModalSwitchService);

  closeModal(){
    this.modalSwitchService.closeModalEditService();
  }


}
