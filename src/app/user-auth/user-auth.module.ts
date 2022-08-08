import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent  //THIS COMPONENT IS AVAILABLE TO WHOLE APPLICATION
  ]
})
export class UserAuthModule { }
