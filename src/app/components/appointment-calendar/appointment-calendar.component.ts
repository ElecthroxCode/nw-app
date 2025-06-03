import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendario-parto',
  imports: [FormsModule, CommonModule],
  templateUrl: './appointment-calendar.component.html',
  styleUrl: './appointment-calendar.component.css'
})
export class CalendarioPartoComponent implements OnInit{
  @Input() servicioSeleccionado!: string;

  fechaSeleccionada: Date | null = null;
  horaSeleccionada: string | null = null;
  semanas: Date[][] = [];

  horasDisponibles: string[] = [
    '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00'
  ];

  fechaActual = new Date();
  fechaMostrada = new Date();

  ngOnInit() {
    this.fechaMostrada.setDate(1);
    this.generarCalendario(this.fechaMostrada);
  }

  generarCalendario(fecha: Date) {
    const año = fecha.getFullYear();
    const mes = fecha.getMonth();
    const primerDiaMes = new Date(año, mes, 1);
    const ultimoDiaMes = new Date(año, mes + 1, 0);
    const diasMes = ultimoDiaMes.getDate();
    const primerDiaSemana = primerDiaMes.getDay();

    let diasCalendario: Date[] = [];

    // Días del mes anterior para completar la primera semana
    for (let i = primerDiaSemana - 1; i >= 0; i--) {
      diasCalendario.push(new Date(año, mes, -i));
    }

    // Días del mes actual
    for (let d = 1; d <= diasMes; d++) {
      diasCalendario.push(new Date(año, mes, d));
    }

    // Días del mes siguiente para completar el final
    while (diasCalendario.length % 7 !== 0) {
      const last = diasCalendario[diasCalendario.length - 1];
      diasCalendario.push(new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1));
    }

    // Agrupar por semanas
    this.semanas = [];
    for (let i = 0; i < diasCalendario.length; i += 7) {
      this.semanas.push(diasCalendario.slice(i, i + 7));
    }
  }

  esMismoDia(d1: Date, d2: Date | null) {
    if (!d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  }

  seleccionarDia(dia: Date) {
    this.fechaSeleccionada = dia;
    this.horaSeleccionada = null;
  }

  siguienteMes() {
    this.fechaMostrada = new Date(this.fechaMostrada.getFullYear(), this.fechaMostrada.getMonth() + 1, 1);
    this.generarCalendario(this.fechaMostrada);
  }

  anteriorMes() {
    const esMesActual = this.fechaMostrada.getFullYear() === this.fechaActual.getFullYear() &&
                        this.fechaMostrada.getMonth() === this.fechaActual.getMonth();

    if (!esMesActual) {
      this.fechaMostrada = new Date(this.fechaMostrada.getFullYear(), this.fechaMostrada.getMonth() - 1, 1);
      this.generarCalendario(this.fechaMostrada);
    }
  }

  get esPrimerMes() {
    return this.fechaMostrada.getFullYear() === this.fechaActual.getFullYear() &&
           this.fechaMostrada.getMonth() === this.fechaActual.getMonth();
  }

  fechaActualSinHora(): Date {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return hoy;
  }
}
