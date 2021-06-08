import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  storage: any;
  object: any;
  setofobject: any=[];
  element: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(values: any){
    console.log(values);
    
    this.object = values;
    if (this.object.username == "" && this.object.password == "" ||this.object.username == null && this.object.password == null) {
      swal("Enter The Username and Password")
    }else{
    this.setofobject.push(this.object)
    this.storage = JSON.parse( localStorage.getItem('details')!);
    console.log(this.setofobject);
    
    console.log(this.storage);
    
    for (let i = 0; i < this.storage.length; i++) {
       this.element = this.storage[i]
      console.log(this.element);
    }
    if (this.object.username !== this.element.username && this.object.password !== this.element.password) {
        
      swal('Wrong Input')
    }else{
      swal("Good job!", "You Logged In!", "successfully");
      this.router.navigate(['/dummycontent']);
    }
  }
  }
}
