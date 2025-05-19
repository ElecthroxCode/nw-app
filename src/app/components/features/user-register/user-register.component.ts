import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  imports: [],
  template: `
  <section >
    
  <div class="container-register">
      <div class="zone-msg">
          <div class="msg-register">
              <h1>Nuestros clientes son nuestro mayor orgullo</h1>
              <div>
                  <p>Crea tu cuenta de forma rápida y fácil</p>
              </div>
          
          </div>
      </div>
      
      <div class="register">
          
          <form action="">
              <h3>Registro de cliente</h3>
              <div><input type="text" name="" id="" placeholder="Escribe tu nombre y apellido"></div>
              <div><input type="text" name="" id="" placeholder="Escribe tu email"></div>
              <div><input type="text" name="" id="" placeholder="Escribe tu télefono"></div>
              <div><input type="password" name="" id="" placeholder="Escribe tu contraseña"></div>
              <div><input type="password" name="" id="" placeholder="Repite tu contraseña"></div>
              <div><button class="btn btn-register">Register</button></div>
          </form>
      </div>

  </div>
</section>

  `,
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {





}
