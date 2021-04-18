import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  recordArray:Array<any> = [];

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    let tempRecord = this.appService.JogRecord;
    
    tempRecord.forEach(arr => {
      if(arr.length === 8){
        this.recordArray.push(arr[arr.length - 1]);
      }
    })
    
  }

}
