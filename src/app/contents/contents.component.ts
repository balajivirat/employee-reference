import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var $ : any;
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  storage:any = [];
  object: any;
  title = 'employeedetails';
  store: any;
  data: any;
  filterdata: any;
  getter: any;
  ind: any;
  constructor(public userservice: UserService) { }

  ngOnInit() {
    this.store =JSON.parse( localStorage.getItem('employeedetails')!);
    console.log(this.storage);
    this.storage= [];
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
  this.getter = value;
  console.log(this.getter);
  $("#myModal").modal('show');
  for(let i=0; i<this.store.length; i++){
    if (this.getter == this.store[i].empid) {
      this.filterdata = [this.store[i]];
      this.ind = i;
      console.log(this.ind);
    
    }
    
  } 

}
update(data: any){
  $("#myModal").modal('hide');
  this.store.splice(this.ind,1,data)
  localStorage.setItem('employeedetails', JSON.stringify(this.store)) 
 this.ngOnInit();  
}

// edited(index: any) {
//     this.show=true;
//     $("#myModal").modal('show');
//     this.num = index;
//     this.formdata[index];
//     this.updatedata = this.formdata[index]
//   }
// updatecard(update: any) {
//   this.updates=update;
//   this.formdata.splice(this.num,1,this.updates)
//   localStorage.setItem("formdata", JSON.stringify(this.formdata));
//   this.ngOnInit();
// }


}
