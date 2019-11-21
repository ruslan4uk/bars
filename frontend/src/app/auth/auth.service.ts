import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Auth {
  email: string;
  password: string;
  error?: object;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  registration(form) {
    return this.http.post('http://localhost:3000/auth/register', form);
  }

  authorization(form) {
    return this.http.post('http://localhost:3000/auth/login', form);
  }

  logout(): void {
    this.removeToken();
  }

  setToken(token): void {
    localStorage.setItem('_token', token);
  }

  getToken(): string {
    return localStorage.getItem('_token');
  }

  removeToken(): void {
    localStorage.removeItem('_token');
  }

  loggedIn() {
    return  !!localStorage.getItem('_token');
  }

}
