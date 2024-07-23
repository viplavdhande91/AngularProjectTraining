
# Send data from Child to Parent Component


-  Parent Component => **app** ; Child Component =>**user** 


-  Create GetDataFromChild() function in **app.component.ts** Because we have to trigger this function on the basis of
   event happenstance in Child Component.

-  Import display selector of **user component** in **app.component.html** file. i.e **<app-user>  </app-user>**

- Bind outputSend Event with GetDataFromChild() function in app.component.html

-  Import **Output,EventEmitter** from angular Core in **user.component.ts** file

-  Output Decorator sends data to function GetDataFromChild() because of Event binding. 

-  In **user.component.html** file take user input emit the event and recieve event in Parent Component .
