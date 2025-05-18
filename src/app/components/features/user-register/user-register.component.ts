import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  imports: [],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

selected = true;


selectBtn(nameBtn:string){
  if(!this.selected && nameBtn == "customer"){
    this.selected = true;
  }
  if(this.selected && nameBtn == "company"){
    this.selected = false;
  }
}

}
