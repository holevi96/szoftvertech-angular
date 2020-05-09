import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

const BASE_URL = 'http://localhost:54061/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  register(user){
     return this.http.post(BASE_URL + 'FelhasznaloiFiok/register', user);
  }

  login(user) {
    return this.http.post(BASE_URL + 'FelhasznaloiFiok/login', user);
  }
  isLoggedIn() {
    return (localStorage.getItem('jwt') != null);
  }
  addWork(work) {
    console.log(work)
    return this.http.post(BASE_URL + 'Munkak', work);
  }
  getWorks() {
    return this.http.get(BASE_URL + 'Munkak');
  }
  deleteWork(id) {
    return this.http.delete(BASE_URL + 'Munkak/', id);
  }
  editWork(id, work) {
    return this.http.put(BASE_URL + 'Munkak/' + id, work);
  }
}
