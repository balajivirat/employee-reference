import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var $: any;
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  storage: any = [];
  object: any;
  title = 'employeedetails';
  store: any = [];
  data: any;
  filterdata: any;
  getter: any;
  ind: any;
  constructor(public userservice: UserService) { }

  ngOnInit() {
    this.userservice.getcontent().subscribe((res => {
      this.storage = res;
      console.log('res.................', res);

    }))

    // this.store =JSON.parse( localStorage.getItem('employeedetails')!);
    // console.log(this.storage);
    // this.storage= [];
  }
  subfunc(data: any) {
    console.log(data);
    this.userservice.postContent(data).subscribe((res => {

    }))
    this.ngOnInit();

    // if (this.store==null) {
    //   this.object = data;
    // this.storage.push(this.object)
    // localStorage.setItem('employeedetails', JSON.stringify(this.storage))
    // this.ngOnInit();
    // }else{
    // for(let i=0; i<this.store.length; i++){
    //   this.storage.push(this.store[i])
    // }
    // this.object = data;
    // this.storage.push(this.object)
    // localStorage.setItem('employeedetails', JSON.stringify(this.storage))
    // this.ngOnInit();
    // }
  }
  delete(saving: any) {
    console.log(saving);
    this.userservice.deletecontent(saving).subscribe((res => { }))
    this.ngOnInit();
    // for(let i=0; i<this.store.length; i++){
    //   // console.log( this.store[i].empid);
    //   if (saving == this.store[i].empid) {
    //     this.store.splice(i, 1)
    //     localStorage.setItem('employeedetails', JSON.stringify(this.storage))
    //   }

    // } 
  }

  edit(value: any) {
    this.getter = value;
    console.log(this.getter);
    $("#myModal").modal('show');
    for (let i = 0; i < this.storage.length; i++) {
      if (this.getter == this.storage[i].empid) {
        this.filterdata = [this.storage[i]];
        console.log(this.storage[i]);

        this.ind = i;
        console.log(this.ind);

      }
      console.log('edit............', this.filterdata);

    }

  }
  update() {
    this.filterdata.push(this.getter)
    console.log('store.........', this.filterdata);

    $("#myModal").modal('hide');
    this.userservice.editcontent(this.filterdata).subscribe((res => { }))
    this.ngOnInit();

    //   this.store.splice(this.ind,1,data)
    //   localStorage.setItem('employeedetails', JSON.stringify(this.store)) 
    //  this.ngOnInit();  
  }


}
