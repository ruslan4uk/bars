import {Component, OnInit} from '@angular/core';
import {Auth, AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  message: string;
  form: Auth = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  register() {
    this.authService.registration(this.form).subscribe(() => {
      this.message = 'Вы успешно зарегистрировались';
    }, ({error}) => {
      this.message = error.error;
    });
  }

}
