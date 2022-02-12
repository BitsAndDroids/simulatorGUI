import {Component, OnInit} from '@angular/core';
import {Timestamp} from "rxjs/internal-compatibility";
import {count, delay} from "rxjs/operators";
import {async} from "rxjs";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  loadingFill: string = "Loading flightplan";
  loadingFillStrings: string[] = ["Connecting external power unit", "Coupling jet way","Registering flight plan","Loading in cargo","Performing walk-around"];
  progress: number = 0;

  constructor(private router: Router) {
          var counter: number = 0;

          //By using an interval we enhance the feeling of progress.
          //This could be replaced by actual progress data
          //If no feedback can be returned from the system a fake sense of progress is still better than no progress.
          const interval = setInterval(() =>{
            this.progress+=10;
            if(counter > this.loadingFillStrings.length - 2){
              counter = 0;
            }
            counter++;
            //To entertain the user with some quirky lines these will be altered each interval as well.
            this.loadingFill = this.loadingFillStrings[counter];
            if(this.progress == 100){
              clearInterval(interval);
              this.router.navigate(['/active-screen']);
            }
          }, 1000);

  }

  ngOnInit(): void {

  }

}
