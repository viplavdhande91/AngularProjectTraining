
# Service
 



#### 1.Create Service inside services folder
```
ng generate service services/WeatherDataService 

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

#### 5. import service in app.component.ts and 
```
      console.log(data)
```

## Article on Content Negotiation
As the name suggest, Web API, an Application Programming Interface for Web. In other words, it’s a framework which is used to create services aka API’s which can be consumed by **clients** using browser or tablets or mobile devices. Basically, it is used to create RESTful services. To find more over REST, have a look into Difference between SOAP And REST APIs. **Whenever we consume an API, we receive data in either JSON or XML or plain text or your own custom format. I.e. the requester and responder are aware of the format in which they will receive data.** This is nothing but Content Negotiation in Web API 2.

How Content Negotiation Works
#### There are two main headers which hold the responsibility of content negotiation

- Content-Type

- Accept

 Let’s try to understand them. When a requester send a service request, the CONTENT-TYPE tells responder the format he will receive data whereas the ACCEPT header tells in which format the requester requires the data.
![alt text](https://github.com/viplavdhande91/Angular-Training/blob/api-call/webapi-negotiationwebapi2-1.png?raw=true)


### Default Content Negotiator
In the above pictorial view, there are few points which should be noted down,

- User 2 didn’t mention Content-Type but then received the response in desired format. I.e. XML.

- Whereas User 4 didn’t mention both Content-Type as well as Accept header. But then received the response. I.e. in JSON format. In short, JSON format is the default content negotiator in web api 2.

- Also, User 3 requires data in text/html format but receives data in XML format. In short, text/html Accept header sends response in XML format by default.

