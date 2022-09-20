

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  ngOnInit():void{
    console.log('This is tut 20');
    let impArray = ['adrak', 'pyaz', 'bhindi'];

    /**
     * 
     * 
     * { sbusbidyid : {feepercent : 100 ,floorspcae = 34,subsidynumber :absc }   ,
     { sbusbidyid : {feepercent : 100 ,floorspcae = 34}   
     ,{ sbusbidyid : {feepercent : 100 ,floorspcae = 34}   
     ,{ sbusbidyid : {feepercent : 100 ,floorspcae = 34}   ,
     * }
     * 
     */
    // // Add a key-value pair inside local Storage
    localStorage.setItem('Name', 'Harry');
    localStorage.setItem('Name2', 'Rohan');
    localStorage.setItem('Sabzi', JSON.stringify(impArray));


    sessionStorage.setItem('Name', 'Harry');
    sessionStorage.setItem('Name2', 'ajay');
    sessionStorage.setItem('Sabzi', JSON.stringify(impArray));
    
    // Clears the entire local storage
    // localStorage.clear();
    
    // Clear a particular key-value pair
    // localStorage.removeItem('Name2');
    
    // Retrieve an item from the local Storage
    let name = localStorage.getItem('Name');
    // name = JSON.parse(localStorage.getItem('Sabzi'));
    console.log(name)
    
    // sessionStorage.setItem('sessionName', 'sHarry');
    // sessionStorage.setItem('sessionName2', 'sRohan');
    // sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));
    

  }
}