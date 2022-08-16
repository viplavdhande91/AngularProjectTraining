
# Routing
### BASIC Routing




#### 1. While Creating new Project add Yes[Y] to Routing.


#### 2. Define routes in app-routing.module.ts For Example
```
const routes: Routes = [{component:AboutusComponent,
                          path:'about'},
                        
                          {component:ContactusComponent,
                            path:'contact'}
                        
                        ];
```

#### 3.Add routerLink attribute to button[HTML elements] For Example
```    
    <button mat-raised-button color="primary" routerLink="about">About us</button>

```
#### 4.Use app routlet tag in main page[In app.component.html] :For Example
```
    <router-outlet> </router-outlet>

```

### Dynamic Routing

#### 1. Note: Pass routerLink = "user/30" in app.component.html and Define routes in app-routing.module.ts For Example
```
const routes: Routes = [{component:AboutusComponent,
                          path:'user/:id'},
                        
                        
                        ];
```

#### 2.1. How to Receive id in app.component.ts?
```
import { ActivatedRoute } from '@angular/router';

```

#### 2.2. Define route object in constructor of ActivatedRoute class and get id [In user.component.ts].


##### Note: For any url pattern this will work.
```
const routes: Routes = [{component:AboutusComponent,
                          path:'**'}, 
                        ];
```


### Child Routing

#### 1. Make about[Parent Component] and aboutus and aboutme as child components.

#### 2. Add routes in app-routing.module.ts for Example
```
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

```
#### 3.Use app routlet tag in Parent page[In about.component.html] :For Example
```
    <router-outlet> </router-outlet>

```