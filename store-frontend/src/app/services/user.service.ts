import { Injectable } from '@angular/core';
import { User } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User = new User();

  constructor() { }

  getUser():User{
    return this.user;
  }

  updateUser(update: User):User{
    this.user=update;
    return this.user;
  }
}
