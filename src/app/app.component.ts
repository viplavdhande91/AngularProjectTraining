

import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validator, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  loginform = new FormGroup({

    user: new FormControl('',[Validators.required,Validators.email]),

    password: new FormControl('')
  })


  getFormData()
  {
    console.log(this.loginform.value);
  }
   

  get userData()    //WE CAN DEFINE GETTERS FOR user field
  {
    return this.loginform.get('user');
  }
}