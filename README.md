
# Send data from Child to Parent Component


#### 1. Parent Component =>app ; Child Component =>user 


#### 2. create GetDataFromChild() function in app.component ts.Because we have to pass this function to Child Component.

#### 3. Import display selector of user component in app.component.html file. i.e <app-user>  </app-user>

#### 4. Bind GetDataFromChildEvent with GetDataFromChild() function in app.component.html

#### 5. Import Output,EventEmitter from angular Core in user.component.ts file

#### 6. Output Decorator sends data by help of recieved  function GetDataFromChildEvent. 

#### 7. In user.component.html file take user input emit the event by help of received function GetDataFromChildEvent .
