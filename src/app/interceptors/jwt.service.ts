import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest < any >, next: HttpHandler): Observable < HttpEvent < any >> {
    // add authorization header with jwt token if available
    const curUser = JSON.parse(localStorage.getItem('curUser'));
    if(curUser && curUser.token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${curUser.token}`
      }
    });
  }

  return next.handle(request);
}
}