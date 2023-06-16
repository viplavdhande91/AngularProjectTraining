import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { G1Guard } from './guards/g1.guard';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';
import { C4Component } from './components/c4/c4.component';


const routes: Routes = [{ path: 'c1', component: C1Component, canActivate : [G1Guard] },
                        { path: 'c2', component: C2Component },
                        { path: 'c3', component: C3Component },
                        { path: 'c4', component: C4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
