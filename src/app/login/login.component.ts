import { Component, OnInit } from '@angular/core';
import {LoginCheckService} from '../logincheck.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username;
  public password;
  public status;
  public x={status: "failure"};
  constructor(private userServ: LoginCheckService) { }

  ngOnInit() {
    document.querySelector('#pass').addEventListener('input', function() {
      $('#icon').css('display' , 'block');
    });
    $(document).ready(function() {
      $('#icon').click(function() {
        if ($('#pass').get(0).type === 'password') {
          $('#pass').get(0).type = 'text';
          document.querySelector('#icon').classList.remove('fa-eye');
          document.querySelector('#icon').classList.add('fa-eye-slash');
        } else {
          $('#pass').get(0).setAttribute('type', 'password');
          document.querySelector('#icon').classList.add('fa-eye');
          document.querySelector('#icon').classList.remove('fa-eye-slash');
        }
      });
    });
  }

  onSubmit(data) {
    console.log(this.username);
    console.log(this.password);
    this.userServ.userlogin({username: this.username, password: this.password}).subscribe(function(status) {
      console.log(status);
    });
}

}
