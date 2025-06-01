import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ModalRegisterComponent } from '../modal-register/modal-register.component';
import { ModalSwitchService } from '../../shared/services/modal-switch/modal-switch.service';
import { Subscription } from 'rxjs';
import { CardServicesBusinessComponent } from '../card-services-business/card-services-business.component';
import { CommonModule } from '@angular/common';
import { ModadEditProfileComponent } from './modad-edit-profile/modal-edit-profile.component';
import { UserSchudelesComponent } from '../user-schudeles/user-schudeles.component';
import { CalendarioPartoComponent } from '../../calendario-parto/calendario-parto.component';

@Component({
  selector: 'app-user-profile',
  imports: [
    ModalRegisterComponent,
    CardServicesBusinessComponent,
    CommonModule,
    ModadEditProfileComponent,
    UserSchudelesComponent,
    CalendarioPartoComponent
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
     this.subscriptions.add(
    this.modalAddCompanyService.$modalAddCompanyObservable
    .subscribe( (value:boolean) => {
      this.isShowModalAddCompany = value;
    })
   );

  this.subscriptions.add(
      this.modalAddCompanyService.$isModalEditProfileOpenObservable
    .subscribe( (value:boolean) => {
      this.isShowModalEditProfile = value;
    })
    );
  }


  private modalAddCompanyService = inject(ModalSwitchService);
  isShowModalAddCompany?:boolean;
  isShowServices:boolean = true;
  isShowModalEditInfo:boolean = false;
  isShowModalEditProfile?:boolean;
  isHidden:boolean = true;
  isShowListService=true;
  isShowCaledarParto = true;

  private subscriptions: Subscription = new Subscription();
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); 
  }

  openModal():void{
    this.modalAddCompanyService.openModalAddCompany();
  }
  //modal edit info profile
   openModalEditInfo():void{
    this.modalAddCompanyService.openModalEditProfile();
  }

  //btn-hidden

  showTable(){
    this.isHidden = false;
  }
  hiddenTable(){
    this.isHidden = true;
  }

  enableSection(enable:boolean){
    this.isShowListService = enable;
    this.isShowCaledarParto = false;
  }

   enableSectionCaledary(enable:boolean){
    this.isShowListService = enable;
    this.isShowCaledarParto = true;
  }
}


