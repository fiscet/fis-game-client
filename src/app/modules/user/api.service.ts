import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { debounceTime, map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MutationResponseModel } from '../../models/mutation-response.model'
import { UserModel } from './models/user.model'

@Injectable()
export class ApiService {

  API_ENDPOINT = environment.api_endpoint;

  constructor(private http: HttpClient) { }

  create(data: UserModel): Observable<MutationResponseModel> {
    return this.http.post<MutationResponseModel>(`${this.API_ENDPOINT}user/insert/`, data).pipe(
      catchError(err => {
        console.log('API Error ->', err);
        return throwError(err);
      })
    );
  }
}
