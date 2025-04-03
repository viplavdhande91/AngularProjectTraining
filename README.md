Here's a single copyable `README.md` file:  

# Angular Services Guide

## 1. Create a Service inside the `services` folder  
Run the following command to generate a service:  
```bash
ng generate service services/userdatashare
```

## 2. Add a `usersDataFunc` method in `userdatashare.service.ts`  
Open `services/userdatashare.service.ts` and define a function to manage user data.  

## 3. Create and Design a Footer Component  
- Generate the footer component:  
  ```sh
  ng generate component footer
  ```
- Design the footer using HTML and CSS in `footer.component.html` and `footer.component.css`.  

## 4. Use `UserdatashareService` in `app.component.ts`  
- Import `UserdatashareService` in `app.component.ts`:  
  ```ts
  import { UserdatashareService } from './services/userdatashare.service';

  constructor(private userDataService: UserdatashareService) {}
  ```
- Fetch and use data from the service.  

## 5. Use `UserdatashareService` in `footer.component.ts`  
- Import `UserdatashareService` in `footer.component.ts`:  
  ```ts
  import { UserdatashareService } from '../services/userdatashare.service';

  constructor(private userDataService: UserdatashareService) {}
  ```
- Fetch and display data from the service.  
