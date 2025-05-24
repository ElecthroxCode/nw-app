import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalSwitchService {
  private modalSwitchSubject = new BehaviorSubject<boolean>(false);
  private isModalEditServiceOpenSubject = new BehaviorSubject<boolean>(false);
  
  $modalObservable = this.modalSwitchSubject.asObservable();
  $isModalEditServiceOpen = this.isModalEditServiceOpenSubject.asObservable();

  isShowModal(isEnable:boolean):void{
    this.modalSwitchSubject.next(isEnable);
  }

  getCurrentValue():boolean{
    return this.modalSwitchSubject.getValue();
  }

  openModalEditService(){
    this.isModalEditServiceOpenSubject.next(true);
  }

  closeModalEditService(){
    this.isModalEditServiceOpenSubject.next(false);
  }

}
