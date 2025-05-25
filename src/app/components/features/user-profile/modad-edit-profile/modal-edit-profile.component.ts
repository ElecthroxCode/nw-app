import { Component, inject } from '@angular/core';
import { ModalSwitchService } from '../../../shared/services/modal-switch/modal-switch.service';

@Component({
  selector: 'app-modal-edit-profile',
  imports: [],
  templateUrl: './modal-edit-profile.component.html',
  styleUrl: './modal-edit-profile.component.css'
})
export class ModadEditProfileComponent {

  private modalEditProfileService = inject(ModalSwitchService);


  closeModalEdit(){
    this.modalEditProfileService.closeModalEditProfile();
  }

}
