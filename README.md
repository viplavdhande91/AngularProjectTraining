
# Send data from Parent to Child Component


#### 1. Parent Component =>app ; Child Component =>user 


#### 2. create data in app.component ts.[Parent Component]

#### 3. Import display selector of user component in app.component.html file. i.e <app-user>  </app-user>

#### 4. Bind dataSendFromParent property in app.component.html

#### 5. Import Input from angular Core in user.component.ts[Child Component] file

#### 6. Create Input Decorator inside class{With Same name as Parent Propert inside html} which imports data. 

#### 7. Use the data either in user.component.ts or user.component.html file .
