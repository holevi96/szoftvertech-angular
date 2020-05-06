import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BASE_URL = 'http://localhost:54061/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  register(user){
     return this.http.post(BASE_URL + 'FelhasznaloiFiok/register', user)
  }

  login(user) {
    return this.http.post(BASE_URL + 'FelhasznaloiFiok/login', user);
  }

  addWork(work) {
    console.log(work)
    return this.http.post(BASE_URL + 'Munkak', work);
  }
  addSemester(semester) {
    return this.http.post(BASE_URL + 'Szemeszterek', semester);
  }

  getSemester() {
    return this.http.get(BASE_URL + 'Szemeszterek');
  }
  getWorks() {
    return this.http.get(BASE_URL + 'Munkak');
  }
  deleteSemester(id) {
    return this.http.delete(BASE_URL + 'Szemeszterek/', id)
  }
  editSemester(id, semester) {
    return this.http.put(BASE_URL + 'Szemeszterek/' + id, semester)
  }
}
