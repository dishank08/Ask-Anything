import { Component, OnInit } from '@angular/core';
import {LoginCheckService} from '../logincheck.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  fname; lname; username; password;
  constructor(private registerServ: LoginCheckService) { }

  ngOnInit() {
  }

  onSubmit(data) {
    let obj;
    obj = {fname: this.fname, lname: this.lname, username: this.username, password: this.password};
    console.log(obj);
    this.registerServ.userRegister(obj).subscribe(function(status) {
      console.log(status);
    });
}
}
