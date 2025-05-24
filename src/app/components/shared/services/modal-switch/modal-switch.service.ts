import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalSwitchService {
  private modalSwitchSubject = new BehaviorSubject<boolean>(false);
  
  $modalObservable = this.modalSwitchSubject.asObservable();

  isShowModal(isEnable:boolean):void{
    this.modalSwitchSubject.next(isEnable);
  }

  getCurrentValue():boolean{
    return this.modalSwitchSubject.getValue();
  }
}
