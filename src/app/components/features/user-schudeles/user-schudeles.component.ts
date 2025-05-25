import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-schudeles',
  imports: [FormsModule],
  templateUrl: './user-schudeles.component.html',
  styleUrl: './user-schudeles.component.css'
})
export class UserSchudelesComponent {
  selectDay: string = '';
  selectHourMorning: string = '';
  selectHourAternoom: string = '';
  options: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  hoursMorning:string[] = ['6:00 a.m', '7:00 a.m', '8:00 a.m', '9:00 a.m', '10:00 a.m', '11:00 a.m', '12:00 m'];
  hoursAternoom:string[] = ['12:00 m', '13:00 (1:00 p.m)', '14:00 (2:00 p.m)',
     '15:00 (3:00 p.m)', '16:00 (4:00 p.m)', '17:00 (5:00 p.m)', '18:00 (6:00 p.m)', '19:00 (7:00 p.m)'];
}
