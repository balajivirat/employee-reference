import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storage:any = [];
  object: any;
  title = 'employeedetails';
  store: any;
  data: any;
  filterdata: any;
  ngOnInit(){
     this.store =JSON.parse( localStorage.getItem('employeedetails')!);
    console.log(this.storage);
    this.storage= [];
    // $(".btn").click(function(){
    //   $("#myModal").modal('show');

    // });
  }
  subfunc(data: any){
    if (this.store==null) {
      this.object = data;
    this.storage.push(this.object)
    localStorage.setItem('employeedetails', JSON.stringify(this.storage))
    this.ngOnInit();
    }else{
    for(let i=0; i<this.store.length; i++){
      this.storage.push(this.store[i])
    }
    this.object = data;
    this.storage.push(this.object)
    localStorage.setItem('employeedetails', JSON.stringify(this.storage))
    this.ngOnInit();
  }
}
delete(saving: any){
  console.log(saving);
  for(let i=0; i<this.store.length; i++){
    // console.log( this.store[i].empid);
    if (saving == this.store[i].empid) {
      this.store.splice(i, 1)
      localStorage.setItem('employeedetails', JSON.stringify(this.storage))
    }
    
  } 
}

edit(value : any){
  console.log(value);
  $("#myModal").modal('show');
  for(let i=0; i<this.store.length; i++){
    if (value == this.store[i].empid) {
      this.filterdata = [this.store[i]];
      console.log(this.filterdata);
      this.store.splice(i, 1)
    }
    
  } 
  
    // $(".btn").click(function(){
    

    // });
}
update(data: any){
  console.log(this.store);
  // thi
  for (let i = 0; i < this.store.length; i++) {
    this.storage = [];
    this.storage.push(this.store[i]);  
  }
  this.storage.push(data)
  localStorage.setItem('employeedetails', JSON.stringify(this.storage))
  $("#myModal").modal('hide');

 this.ngOnInit();
  // for(let i=0; i<this.store.length; i++){
  //   if (this.filterdata == data) {
  //     console.log( this.filterdata);
      
  //   // this.store.splice(i, 1)
  //     console.log("true");
      
  //     // localStorage.setItem('employeedetails', JSON.stringify(this.storage))
  //   }
  
  // } 
}
}