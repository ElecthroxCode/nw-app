import { Component, inject, OnInit } from '@angular/core';
import { ModalSwitchService } from '../../shared/services/modal-switch/modal-switch.service';

@Component({
  selector: 'app-modal-register',
  imports: [],
  templateUrl: './modal-register.component.html',
  styleUrl: './modal-register.component.css'
})
export class ModalRegisterComponent {
 
  private  modalAddCompanyService = inject(ModalSwitchService);
 
  enableAddService:boolean = false;
  enableAddImg:boolean = false;

  closeModal(){
    this.modalAddCompanyService.closeModalAddCompany();
  }

  addBtnImg(){
    this.enableAddImg = true;
  }
  addBtnService(){
    this.enableAddService = true;
  }

}
