import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {

  users: string = 'https://localhost:5001/api/users';

  constructor(private http: HttpClient) { }

  //GET
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.users);
  }

  //GET{id}
  getUser(user: User): Observable<User> {
    const url = `${this.users}/${user.id}`;
    return this.http.get<User>(url, httpOptions);
  }

  //POST
  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.users, user, httpOptions);
  }

  //DELETE
  deleteUser(user: User): Observable<User> {
    const url = `${this.users}/${user.id}`;
    return this.http.delete<User>(url, httpOptions);
  }

  //POST
  validateUser(user: User): Observable<User> {
    return this.http.post<User>(user.email, user.password, httpOptions);
  }
}
