
# Service
 



#### 1.Create Service inside services folder
```
ng generate service services/WeatherDataService {

```

#### 2. Import httpclient module inside weather-data-service.service.ts
```
import { HttpClient } from '@angular/common/http'

```


#### 3. Import httpclient module inside app.module.ts
```
import { HttpClientModule } from '@angular/common/http'

```

#### 4.Register module in app.module.ts imports
```
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
```

#### 5. import service in app.component.ts and console.log(data).