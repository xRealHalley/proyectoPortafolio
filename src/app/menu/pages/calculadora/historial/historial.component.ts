import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalculadoraService } from '../../../../services/calculadora.service';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  historyList: string[] = [];

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.historyList = this.calculadoraService.getHistory();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  // Función para que el scrollBar se mueva automáticamente hacia el último resultado
  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  // Función para limpiar el historial
  clearHistory(): void {
    this.calculadoraService.clearHistory();
    this.historyList = [];
  }
}
