import { Injectable } from '@angular/core';
import { User } from '../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersKey = 'users';
  private currentUserKey = 'currentUser';

  constructor(private router: Router) {}

  register(user: User): void {

    const users = this.getUsers();

    const existingUser = users.find(u => u.user === user.user);

    if (existingUser) {
      alert('Ya existe un usuario con ese nombre de usuario');
      return;
    }

    user.id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    users.push(user);
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    this.login(user.user, user.password);

  }


  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.user === username && u.password === password);

    if (user) {
      localStorage.setItem(this.currentUserKey, JSON.stringify(user));
      return true;
    }

    return false;
  }


  private getUsers(): User[] {
    const usersJson = localStorage.getItem(this.usersKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }


  getCurrentUser(): User | null {
    const currentUserJson = localStorage.getItem(this.currentUserKey);
    return currentUserJson ? JSON.parse(currentUserJson) : null;
  }


  logout(): void {
    localStorage.removeItem(this.currentUserKey);
    this.router.navigate(['/login']).then(() => {
      window.history.replaceState({}, '', '/login');
    });
  }

}
