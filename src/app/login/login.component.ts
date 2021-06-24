import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  storage: any = [];
  object: any;
  setofobject: any;

  constructor(private router: Router, public userservice: UserService) { }

  ngOnInit(): void {
  }
  login(values: any) {

    this.object = values;



    if (this.object.username == "" && this.object.password == "" || this.object.username == null && this.object.password == null) {
      swal("Enter The Username and Password")
    } else {
      this.userservice.postusers(values).subscribe((res => {

        this.setofobject = res;

        console.log('setofobject..........', this.setofobject);

        if (this.object.username != this.setofobject[0].username && this.object.password != this.setofobject[0].password) {

          swal('Wrong input');
        } else {
          swal("Good job!", "You Logged In!", "successfully");
          this.router.navigate(['/dummycontent']);
        }

      }))





    }



    //   console.log(values);

    //   this.object = values;
    //   if (this.object.username == "" && this.object.password == "" ||this.object.username == null && this.object.password == null) {
    //     swal("Enter The Username and Password")
    //   }else{
    //   this.setofobject.push(this.object)
    //   this.storage = JSON.parse( localStorage.getItem('details')!);
    //   console.log(this.setofobject);

    //   console.log(this.storage);

    //   for (let i = 0; i < this.storage.length; i++) {
    //      this.element = this.storage[i]
    //     console.log(this.element);
    //   }
    //   if (this.object.username !== this.element.username && this.object.password !== this.element.password) {

    //     swal('Wrong Input')
    //   }else{
    //     swal("Good job!", "You Logged In!", "successfully");
    //     this.router.navigate(['/dummycontent']);
    //   }
    // }
  }
}
