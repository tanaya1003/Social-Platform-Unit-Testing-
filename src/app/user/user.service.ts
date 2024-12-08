import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
   { id:1 , Name:"Tanaya Tiwatne"},
  {  id:2 , Name:"Sanika Patharkar"}
  ]

  constructor(){}

  getUsers(){
    return of(this.users)
  }
}
