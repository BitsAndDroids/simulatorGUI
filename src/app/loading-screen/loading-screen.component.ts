import {Component, OnInit} from '@angular/core';
import {Timestamp} from "rxjs/internal-compatibility";
import {count, delay} from "rxjs/operators";
import {async} from "rxjs";

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  loadingFill: string = "Loading flightplan";
  loadingFillStrings: string[] = ["Connecting external power unit", "Coupling jet way","Registering flight plan","Loading in cargo","Performing walk-around"];
  progress: number = 0;

  constructor() {
          var counter: number = 0;
          const interval = setInterval(() =>{
            this.progress+=10;
            if(counter > this.loadingFillStrings.length - 2){
              counter = 0;
            }
            counter++;
            this.loadingFill = this.loadingFillStrings[counter];
            if(this.progress == 100){
              clearInterval(interval);
            }
          }, 1000);



  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit(): void {

  }

}
