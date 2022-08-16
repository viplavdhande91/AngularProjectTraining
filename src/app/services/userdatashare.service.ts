import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdatashareService {

  constructor() { }

  usersDataFunc() {

    return [{ name: "viplav", age: 26, email: "viplav@test.com" },
    { name: "bruce", age: 27, email: "bruce@test.com" },
    { name: "peter", age: 28, email: "peter@test.com" },
    { name: "sam", age: 28, email: "sam@test.com" }]
  }
}
