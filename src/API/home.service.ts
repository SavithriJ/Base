import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

}
