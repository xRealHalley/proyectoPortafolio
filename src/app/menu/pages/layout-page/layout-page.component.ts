import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Inicio', icon:'home', url: './inicio' },
    { label: 'Calculadora', icon:'calculate', url: './calculadora' },
    { label: 'Banderas', icon:'flag', url: './banderas' },
    { label: 'Lista Tareas', icon:'lists', url: './tareas' },
    { label: 'Weather', icon:'sunny', url: './weather' }

  ]

  constructor(private authService: AuthService, private router: Router) {}

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']); // Redirigir a la página de login
  }
}
