import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl: string = "http://localhost:2000/api/students";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl);
  }
  add(body: any) {
    return this.http.post(this.apiUrl,body)
  }

  update(body: any) {
    return this.http.put(this.apiUrl,body)

  }
  getById(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
  }
}