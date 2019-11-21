import {Component} from '@angular/core';
import {Auth, AuthService} from '../auth.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  errors: string;

  form: Auth = {
    email: '',
    password: ''
  };

  constructor(protected authService: AuthService, private router: Router) {
  }


  auth() {
    this.authService.authorization(this.form).pipe(first()).subscribe((data: any) => {
      this.authService.setToken(data._token);
      this.router.navigate(['/profile']);
    }, ({error}) => {
      this.errors = error.error;
    });

  }

}
