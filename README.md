## GUARDS IN ANGULAR


1. Create two components c1,c2,c3,c4 .


2. Create guards g1,g2,g3,g4.
```bash
ng g g guards/g1

```

3. Set guards in app.routing.module file
```bash
const routes: Routes = [{ path: 'c1', component: C1Component, canActivate : [G1Guard] 
},
{ path: 'c2', component: C2Component 
},
{ path: 'c3', component: C3Component 
},
{ path: 'c4', component: C4Component
},
];
```
4. Set canActivate() method in g1.boolean value return decides to activate rote or not.


### Notes
- AuthGuard is used to protect the routes from **unauthorized access.**
- we can implement **authentication check** in canActivate  method

