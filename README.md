
# SIBLING COMPONENTS INTERACTION WITH EACH OTHER


1. Create two components c1 and c2 [Here Sending data  c1- > c2]


2. Create todos service.By Default **providedIn** should be root. By that only **one instance of service is created** at root level and can be injected and shared for any component.
```bash
@Injectable({
  providedIn: 'root'
})
```

3.Create In todos.service.ts
```bash
  data : string = "";
```

4.Inject service inside in c1 and set data inside component.
```bash
  dataSetter(): void {
    this.todoservice.data = "My Score is 82%";

  }
  ```

5.Inject service inside in c2 using public access modifer view data inside component.


6.Here we define how to share data between components 
 - We can share data from parent to child via **@Input**
 - We can share data from child to parent via **ViewChild**
 - We can share data from child to parent via **@Output** for button clicks or Form entries
