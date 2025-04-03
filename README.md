
# Guards in Angular  

## 1. Create Components  
Generate four components:  
```sh
ng generate component c1
ng generate component c2
ng generate component c3
ng generate component c4
```

## 2. Create Guards  
Generate four guards:  
```sh
ng generate guard guards/g1
ng generate guard guards/g2
ng generate guard guards/g3
ng generate guard guards/g4
```

## 3. Set Up Guards in `app-routing.module.ts`  
Modify the routes to apply guards where needed:  
```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { G1Guard } from './guards/g1.guard';

const routes: Routes = [
  { path: 'c1', component: C1Component, canActivate: [G1Guard] },
  { path: 'c2', component: C2Component },
  { path: 'c3', component: C3Component },
  { path: 'c4', component: C4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

## 4. Implement `canActivate()` in Guard  
Modify `guards/g1.guard.ts` to control route access:  
```ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class G1Guard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {

    const isAuthenticated = true; // Replace with Authentication Logic
    if (!isAuthenticated) {
      this.router.navigate(['/']);
      return false;
    }
    return true;

  }
}
```

## Notes  
- **Guards protect routes** from unauthorized access.  
- `canActivate()` decides whether a route should be accessible or not.  
- Typically used for **authentication checks** before navigating to a route.  

