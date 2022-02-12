import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-screen',
  templateUrl: './active-screen.component.html',
  styleUrls: ['./active-screen.component.scss']
})
export class ActiveScreenComponent implements OnInit {
  ETA: string = " 10:20";

  progress: number = 0;
  hours: number = 10;
  minutes: number = 20;
  totalMinutes : number = this.hours * 60 + this.minutes;
  constructor() { }

  ngOnInit(): void {
    var everyTick = this.totalMinutes / 100;
    var counter:number = 0;
    const interval = setInterval(() =>{
      this.progress+=1;
      this.totalMinutes -= everyTick;
      this.hours = this.totalMinutes / 60;
      this.minutes = this.totalMinutes % 60;
      this.ETA = ((this.hours >= 10) ?" " :" 0") + Math.floor(this.hours) + ((this.minutes >= 10) ?":" :":0") + Math.floor(this.minutes);
      counter++;
      //To entertain the user with some quirky lines these will be altered each interval as well.

      if(this.progress == 100){
        clearInterval(interval);
      }
    }, 1000);
  }

}
