import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../../services/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit {
  tareasPorHacer: any[] = [];
  tareasCompletadas: any[] = [];
  nuevaTarea: string = '';

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.actualizarListas();
  }

  actualizarListas(): void {
    this.tareasPorHacer = this.tareasService.getTareas().filter(tarea => !tarea.completada);
    this.tareasCompletadas = this.tareasService.getTareas().filter(tarea => tarea.completada);
  }

  agregarTarea(): void {
    if (this.nuevaTarea.trim() !== '') {
      this.tareasService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = '';
      this.actualizarListas();
    }
  }

  marcarComoCompletada(index: number): void {
    this.tareasService.marcarComoCompletada(index);
    this.actualizarListas();
  }

  borrarTarea(index: number, completada: boolean): void {
    this.tareasService.borrarTarea(index);
    if (completada) {
      this.tareasCompletadas = this.tareasService.getTareas().filter(tarea => tarea.completada);
    } else {
      this.tareasPorHacer = this.tareasService.getTareas().filter(tarea => !tarea.completada);
    }
  }
}

