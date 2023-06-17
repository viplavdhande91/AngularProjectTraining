### What is a pure pipe?
### Why is it not recommended to use pipes to filter and sort data in Angular?


#### In Angular, there are two categories of pipes
### 1. Pure Pipes
### 2. Impure Pipes

When you create a new pipe, it is pure by default. To make a pipe impure, set it's pure flag to false. **Impure pipes can significantly affect the performance of the application.** So you have to think very carefully, before you use an impure pipe in your angular application. 


## Pure pipe
```
@Pipe({
    name: 'employeeFilter',
    pure: true //BY DEFAULT IT IS TRUE I.E PURE PIPE
})

export class EmployeeFilterPipe implements PipeTransform {}

```
- Is fast
- Angular executes a pure pipe only when it detects a pure change to the input value
- A pure change is either a change to a **primitive input value** (String, Number, Boolean) **or** a changed **object reference** (Array, Date, Object)
- A pure pipe is **not executed** if the input to the pipe is an object and **only the property values of the object changes** but not the reference


### Why are Pure pipes fast 
- An input for a pipe can either be a value type (String, Number, Boolean etc) or a reference type (like Array, Date, Object etc.)
- If the input to the pure pipe is a value type. Since value types store data directly in the memory slot comparing if a value type value has changed is very quick.
- On the other hand, if the input to the pure pipe is a reference type, it is executed only if the **reference of the input object has changed**. Checking if an object reference has changed is much faster than checking if each of the object individual property values have changed.
- So pure pipes are fast, but using them for **filtering data is not a good idea** because, the filtering may not work as expected if the source data is updated without a change to the object reference.

One way to make this work is by making the pipe impure. **Impure pipes can significantly impact the performance of the application** as they run on every change detection cycle.


## Impure pipe
 To make a pipe impure, set it's pure property to false.
```
@Pipe({
    name: 'employeeFilter',
    pure: false
})
export class EmployeeFilterPipe implements PipeTransform {}
```
 - You have to think very carefully when you make a pipe impure. This is because an impure pipe is processed on every change, even when the source data does not change. They run unnecessarily when not required. 

- If you have an array with thousands of objects and each object in turn has dozens of properties. Now if we use an impure pipe to filter or sort this array and **for some reason on the same page if we are also listening to the mouse move or keystroke event, then the pipe is unnecessarily executed for every mouse move or keystroke** which can significantly degrade the performance of the application.

This is the reason, Angular team recommends not to use pipes to filter and sort data. Angular recommends to move the filtering and sorting logic into the component itself. 


## NOTES    

[kudvenkat Youtube 1](https://www.youtube.com/watch?v=XSLf5PRjxPw&ab_channel=kudvenkat)

[kudvenkat Youtube 2](https://www.youtube.com/watch?v=XSLf5PRjxPw&ab_channel=kudvenkat)
