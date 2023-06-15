## @ViewChild
 
In Angular, if we want to access the template information; i.e, any element from the html file in the ts file or in our component the we can choose the **@viewchild** concept.
 
By using @viewchild we can achieve the following things,
- Accessing template of same component
- Accessing the template of child component

### Syntax of creating the @viewchild variable
 ```
@ViewChild('templaterefvariable',{static : true}) mytxt : ElementRef
 ```
In the above @ViewChild will be accepting two arguments ;
- first is about a string which has to be our template reference variable.
-  My variable name is “mytxt” which is of type ElementRef.
 