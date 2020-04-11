import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  login(user: any) {
    console.log(user)
    return this.http.post('/api/authenticate', user)
      .pipe(map(result => {
        // store user details in localStorage
        localStorage.setItem('currentUser', JSON.stringify(result));
        return result;
      }));
  }
}