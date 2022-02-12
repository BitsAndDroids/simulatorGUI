import { Component, OnInit } from '@angular/core';
import {FlightInfoService} from "../flight-info.service";

@Component({
  selector: 'app-active-screen',
  templateUrl: './active-screen.component.html',
  styleUrls: ['./active-screen.component.scss']
})
export class ActiveScreenComponent implements OnInit {
  ETA: string = " 10:20";
  departureAirport : string = this.flightInfoService.getAirport();
  progress: number = 0;
  hours: number = 10;
  minutes: number = 20;
  totalMinutes : number = this.hours * 60 + this.minutes;
  constructor(private flightInfoService: FlightInfoService) { }

  ngOnInit(): void {
    const progressEveryTick = this.totalMinutes / 1000;
    let counter:number = 0;
    const interval = setInterval(() =>{
      this.progress+=0.1;
      this.totalMinutes -= progressEveryTick;
      this.hours = this.totalMinutes / 60;
      this.minutes = this.totalMinutes % 60;
      if(this.hours < 0){
        this.hours = 0;
      }
      if(this.minutes < 0){
        this.minutes = 0;
      }
      this.ETA = ((this.hours >= 10) ?" " :" 0") + Math.floor(this.hours) + ((this.minutes >= 10) ?":" :":0") + Math.floor(this.minutes);
      counter++;
      //To entertain the user with some quirky lines these will be altered each interval as well.

      if(this.progress == 100){
        clearInterval(interval);
      }
    }, 100);
  }

}
