import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalSwitchService {
  private isModalAddCompanySubject = new BehaviorSubject<boolean>(false);
  private isModalEditServiceOpenSubject = new BehaviorSubject<boolean>(false);
  private isModalEditProfileSubject = new BehaviorSubject<boolean>(false);
  
  $modalAddCompanyObservable = this.isModalAddCompanySubject.asObservable();
  $isModalEditServiceOpenObservable = this.isModalEditServiceOpenSubject.asObservable();
  $isModalEditProfileOpenObservable = this.isModalEditProfileSubject.asObservable();

//modalAddCompany

  isShowModal(isEnable:boolean):void{
    this.isModalAddCompanySubject.next(isEnable);
  }

  openModalAddCompany():void{
    this.isModalAddCompanySubject.next(true);
  }

  closeModalAddCompany():void{
    this.isModalAddCompanySubject.next(false);
  }

  getCurrentValue():boolean{
    return this.isModalAddCompanySubject.getValue();
  }

//modalEditService

  openModalEditService():void{
    this.isModalEditServiceOpenSubject.next(true);
  }

  closeModalEditService():void{
    this.isModalEditServiceOpenSubject.next(false);
  }

  //modalEditProfile

  
  openModalEditProfile():void{
    this.isModalEditProfileSubject.next(true);
  }

  closeModalEditProfile():void{
    this.isModalEditProfileSubject.next(false);
  }

  getCurrentValueProfile():boolean{
    return this.isModalEditProfileSubject.getValue();
  }

}
