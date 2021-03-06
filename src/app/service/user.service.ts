import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  exclusive = new Subject<boolean>();
  userName = new BehaviorSubject<string>("John Doe"); 


  userServiceURL='https://crud-products-management-default-rtdb.firebaseio.com/users.json'
  constructor(private http : HttpClient) { }

  addUser(userData:Users) : Observable<Users[]>{
    return this.http.post<Users[]>(this.userServiceURL,userData)
  }
}
