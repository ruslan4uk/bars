import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'frontend';

  loggedIn: boolean;


  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Для постоянного обновления флага
    router.events.subscribe(() => {
      this.getLoggedIn();
    });
  }

  getLoggedIn() {
    this.loggedIn = this.authService.loggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }


}
