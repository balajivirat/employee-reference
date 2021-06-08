import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  object:any;
  storage:any=[];
  store:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.store = JSON.parse( localStorage.getItem('details')!);
  }
  register(value: any){
    if (this.store==null){
      this.object = value;
      if (this.object.username == "" && this.object.password == "" || this.object.username == null && this.object.password == null) {
        swal("Enter The Username and Password")
      }else{
      this.storage.push(this.object)
      localStorage.setItem('details', JSON.stringify(this.storage))
      swal("Good job!", "You Signed In!", "success");
      this.router.navigate(['/login'])
      this.ngOnInit();
    }
    }else{
    for(let i=0; i<this.store.length; i++){
      this.storage.push(this.store[i])
    }
    this.object = value;
    console.log(this.object);
    
    if (this.object.username == "" && this.object.password == "" || this.object.username == null && this.object.password == null) {
      swal("Enter The Username and Password")
    }else{
      this.storage.push(this.object)
      localStorage.setItem('details', JSON.stringify(this.storage))
      
      swal("Good job!", "You Signed In!", "success");
      this.router.navigate(['/login'])
      this.ngOnInit();
    }

    }  
  }
}
