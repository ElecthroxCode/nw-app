import { Component } from '@angular/core';

@Component({
  selector: 'app-schudele-templete',
  imports: [],
  templateUrl: './schudele-templete.component.html',
  styleUrl: './schudele-templete.component.css'
})
export class SchudeleTempleteComponent {

  dayWeek = [
    'Horas',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ];

  isJob:boolean = false;

  hours: string[] = [
    '6:00 a.m',
    '6:30 a.m',
    '7:00 a.m',
    '7:30 a.m',
    '8:00 a.m',
    '8:30 a.m',
    '9:00 a.m',
    '9:30 a.m',
    '10:00 a.m',
    '10:30 a.m',
    '11:00 a.m',
    '11:30 a.m',
    '12:00 m',
    '12:30 m',
    '13:00 (1:00 p.m)',
    '13:30 (1:30 p.m)',
    '14:00 (2:00 p.m)',
    '14:30 (2:30 p.m)',
    '15:00 (3:00 p.m)',
    '15:30 (3:30 p.m)',
    '16:00 (4:00 p.m)',
    '16:30 (4:30 p.m)',
    '17:00 (5:00 p.m)',
    '17:30 (5:30 p.m)',
    '18:00 (6:00 p.m)',
    '18:30 (6:30 p.m)',
    '19:00 (7:00 p.m)',
    '19:30 (7:30 p.m)',
    '20:00 (8:00 p.m)'
  ];


  schudeleRows: { hour: string, cells: any[] }[] = [];

  constructor() {
    this.schudeleRows = this.hours.map(hour => ({
      hour, cells: Array(7).fill(null).map(() => ({selected:false, text:''}))
    })
    );


     document.addEventListener('mouseup', () => this.onMouseUp());


  }

  
  isDragging = false;
dragValue = false;

onMouseDown(cell: any) {
  this.isDragging = true;
  this.dragValue = !cell.selected; // ← copiamos el valor opuesto al actual
  cell.selected = this.dragValue;
}

onMouseOver(cell: any) {
  if (this.isDragging) {
    cell.selected = this.dragValue;
  }
}

onMouseUp() {
  this.isDragging = false;
}



}
