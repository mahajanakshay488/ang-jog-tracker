import { Injectable } from '@angular/core';

export interface MainObj{
  date: Date,
  km: Number,
  min: Number,
  day: Number
}

export interface CalculatedObj{
  distance: Number,
  duration: Number,
  averageSpeed: Number,
  date: Date
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  JogRecord: Array<Array<any>> = [[]];
  calculatedObj: CalculatedObj;
  
  constructor() {
  }  

  onSubmit(data: MainObj){
    
    this.addObject(data);
    this.getAverageSpeed();
    console.log(this.JogRecord);
    
  }

//add object in week array
  addObject(data: MainObj){ 

    //check if today is monday then day is 1 and new array is create for new week.
      if(data.day === 1){
        let d = [data];
        this.JogRecord.push(d);
      }
      else{
        //if day is not monday then obj is add exsting week.
        let lastel = this.JogRecord.length - 1;
        this.JogRecord[lastel].push(data);
      }
  }

//calculate weekly average speed and add in that week array
  getAverageSpeed(){
    this.JogRecord.forEach(el => {
      var wDist = 0;
      var wTime = 0;
      var averageSpeed = null;

      if(el.length === 7){
        el.forEach(e => {

          wDist = wDist + e.km;
          wTime = wTime + e.min;

        });

        averageSpeed = wDist/wTime;

        this.calculatedObj = {
          distance: wDist,
          duration: wTime,
          averageSpeed: (averageSpeed * 60),
          date: new Date()
        };

        el.push(this.calculatedObj);
        console.log('check');
      }
      console.log('work');
    });
  }

}
