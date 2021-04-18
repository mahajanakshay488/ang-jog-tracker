import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @ViewChild('form', {static: true}) cridentials: NgForm ;
  todayDate= new Date();
  
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let elem = this.cridentials.value;
    elem.day = this.todayDate.getDay();
    elem.date = this.todayDate;
    console.log(elem);
    this.appService.onSubmit(elem);
  }

}
