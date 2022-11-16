import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import SERVER_ROUTE from '../../constants/server';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(SERVER_ROUTE + id);
  }

  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(SERVER_ROUTE, user);
  }

  editUser(id: string, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(SERVER_ROUTE + id, user)
  }

  sendEmail(email: string): Observable<string>{
     return this.http.post<string>(SERVER_ROUTE, email);
  }
}
