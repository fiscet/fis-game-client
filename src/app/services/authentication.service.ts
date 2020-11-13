import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<boolean>(`${environment.api_endpoint}auth/login/`, { email, password })
      .pipe(map((res: any) => {

        console.log({res})

        if (res && res.access_token) {

          localStorage.setItem('curUser', JSON.stringify({
            email: email,
            token: res.access_token,
          }));

          return true;
        } else {
          console.error('[AuthService] Authentication has failed!');
          return false;
        }
      }),
        catchError(err => of(false)),
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('curUser');
  }
}
