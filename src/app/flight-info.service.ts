import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightInfoService {
  airportSelected = "EHAM";
  runwaySelected = "18R";
  procedureSelected = "Dry take-off";
  procedureSelectedSet: Subject<string> = new Subject<string>();
  airportSelectedSet: Subject<string> = new Subject<string>();
  runwaySelectedSet: Subject<string> = new Subject<string>();

  constructor() {
    this.airportSelectedSet.subscribe((value) => {
      this.airportSelected = value;
    });
    this.procedureSelectedSet.subscribe((value) => {
      this.procedureSelected = value;
    });
    this.runwaySelectedSet.subscribe((value) => {
      this.runwaySelected = value;
    });
  }
  public setAirport(toSet: string){
    this.airportSelectedSet.next(toSet);
  }
  public getAirport(){
    return this.airportSelected;
  }
  public setRunway(toSet: string){
    this.runwaySelectedSet.next(toSet);
  }
  public getRunway(){
    return this.runwaySelected;
  }
  public getProcedure(){
    return this.procedureSelected;
  }
  public  setProcedureSelected(toSet : string){
    this.procedureSelectedSet.next(toSet);
  }

}
