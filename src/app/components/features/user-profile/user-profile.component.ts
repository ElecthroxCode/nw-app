import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ModalRegisterComponent } from '../modal-register/modal-register.component';
import { ModalSwitchService } from '../../shared/services/modal-switch/modal-switch.service';
import { Subscription } from 'rxjs';
import { CardServicesBusinessComponent } from '../card-services-business/card-services-business.component';

@Component({
  selector: 'app-user-profile',
  imports: [ModalRegisterComponent, CardServicesBusinessComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit, OnDestroy{

  isShowModal?:boolean;
  private subscription!: Subscription;
  private $modal = inject(ModalSwitchService);
  showServiceBusiness:boolean = true;
  
  ngOnInit(): void {
   this.subscription = this.$modal.$modalObservable.subscribe({
      next: (resp:boolean) => {
        this.isShowModal = resp;
      },
      error: (err: any)=> console.error('error en observable modal', err)
        
   })
  }

  showModal(){
    this.$modal.isShowModal(true);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

}
