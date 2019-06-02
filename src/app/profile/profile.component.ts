import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      $('#click1').click(function(){
        document.querySelector('#demo1').classList.remove('my-hide');
          document.querySelector('#demo1').classList.add('my-show');
      });

      $('#click2').click(function(){
        document.querySelector('#demo2').classList.remove('my-hide');
          document.querySelector('#demo2').classList.add('my-show');
        });

      $('#click3').click(function(){
        document.querySelector('#demo3').classList.remove('my-hide');
          document.querySelector('#demo3').classList.add('my-show');
        });
      }
    }
