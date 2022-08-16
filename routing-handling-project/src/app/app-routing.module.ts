import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  component: AboutComponent,
  path: 'about',
  children: [{ path: 'aboutus', component: AboutUsComponent },

  { path: 'aboutme', component: AboutMeComponent }]

},

{
  component: ContactusComponent,
  path: 'contact'
},
{
  component: UserComponent,
  path: 'user/:id'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
