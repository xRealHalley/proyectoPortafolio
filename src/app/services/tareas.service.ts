import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TareasService {
  private tareas: any[] = [];

  constructor() {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
  }

  getTareas(): any[] {
    return this.tareas;
  }

  agregarTarea(tarea: string): void {
    this.tareas.push({ tarea, completada: false });
    this.actualizarLocalStorage();
  }

  marcarComoCompletada(index: number): void {
    this.tareas[index].completada = true;
    this.actualizarLocalStorage();
  }

  borrarTarea(index: number): void {
    this.tareas.splice(index, 1);
    this.actualizarLocalStorage();
  }

  private actualizarLocalStorage(): void {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
}
