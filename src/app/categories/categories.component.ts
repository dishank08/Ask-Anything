import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.image-checkbox').each(function () {
      if ($(this).find('input[type="checkbox"]').first().attr('checked')) {
        $(this).addClass('image-checkbox-checked');
      } else {
        $(this).removeClass('image-checkbox-checked');
      }
    });
    $('.image-checkbox').on('click', function (e) {
      $(this).toggleClass('image-checkbox-checked');
      let checkbox;
      checkbox = $(this).find('input[type="checkbox"]');
      checkbox.prop('checked', !checkbox.prop('checked'));
      e.preventDefault();
    });
  }

}
