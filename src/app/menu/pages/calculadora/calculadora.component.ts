import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../../../services/calculadora.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  display: string = '';

  constructor(private calculadoraService : CalculadoraService) {}

  ngOnInit(): void {}

  // Función para introducir valores
  enterValue(value: string): void {
    this.display += value;
  }

  // Función para limpiar pantalla
  clear(): void {
    this.display = '';
  }

  // Función para borrar el último dígito
  deleteLastDigit(): void {
    this.display = this.display.slice(0, -1);
  }

  // Función para calcular y guardar en el historial.
  result(): void {
    try {
      const sanitizedExpression = this.display.replace(/[^-()\d/*+.]/g, '');
      const result = new Function('return ' + sanitizedExpression)();
      this.display = result.toString();
      this.calculadoraService.addOperation(`${sanitizedExpression} = ${result}`);
    } catch (error) {
      this.display = 'Error';
    }
  }
}

