
# LAZY LOADING
 



#### 1.Create admin module with routing flag
```
ng g m admin --routing
```

#### 2.create two components in admin module.
```
ng g c admin/list
ng g c admin/login
```


#### 3.Add routes in admin-routing.module.ts
```
const routes: Routes = [{path: 'login' , component: LoginComponent},

 {path: 'list' , component: ListComponent}

];
```

#### 4.Add routes in app-routing.module.ts
```
const routes: Routes = [

{
path:'admin' , loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)

}

];
```

#### 5. Add routerLink in app.component.html


#### 6. Add some temp code to verify lazy loading[Add in admin-module.ts]


```
console.warn("ADMIN MODULE LOADED"); //TO CHECK ADMIN MODULE GETS LOADED OR NOT

```
## Notes

To achieve Lazy Loading never register AdminModule 
in app.module.ts import section.
