import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';


@Injectable()
export class ResponseHttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap(() => {
      }, (err: any) => {
        if (err.status === 401) {
          this.authService.removeToken();
          location.reload(true);
        }
      }
    ));

  }
}
