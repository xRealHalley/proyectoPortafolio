import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {
  name: string = '';
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(): void {
    const newUser: User = {
      id: 0,
      name: this.name,
      user: this.username,
      password: this.password
    };

    this.authService.register(newUser);
    this.router.navigate(['/']);
  }
}
