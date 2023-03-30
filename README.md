
# Interceptors in Angular


## A)Creation Steps

#### 1. Creation
```

ng generate interceptor headers
```


#### 2. Import into header.interceptor.ts
```
import { HttpInterceptor } from '@angular/common/http';

```

#### 3.In app.module.ts
```
import { HttpClientModule } from '@angular/common/http';


import { HeadersInterceptor } from './headers.interceptor';



{provide:HTTP_INTERCEPTORS,useClass:HeadersInterceptor,multi:true}
```


#### 4.Register Modules in imports in app.module.ts
```

imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],

```

#### 5.Create service api which fetches from https://jsonplaceholder.typicode.com/todos/
```
ng g s api

```

#### 6.Create Button app.component.html and inject service into app.component.ts



#### 7.on click of load button check network tab [/todo api under xhr section : check api key which we added in headers]

