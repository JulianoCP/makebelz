import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiEmail } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(public httpClient: HttpClient) {}

  verifyEmail(email: string) {
    const params = new HttpParams()
      .set('access_key', ApiEmail.access_key)
      .set('email', email);

    return new Promise((resolve, reject) => {
      this.httpClient.get(ApiEmail.databaseURL, { params }).subscribe(
        (data: any) => {
          console.log(data);
          resolve(data);
        },
        error => {
          console.log(error);
          reject(error);
        }
      );
    });
  }
}
