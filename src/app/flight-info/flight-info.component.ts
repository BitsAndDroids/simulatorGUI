import { Component, OnInit } from '@angular/core';
import {FlightInfoService} from "../flight-info.service";

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent implements OnInit {
  airportSelected: string = this.flightInfoService.getAirport();
  runwaySelected: string = this.flightInfoService.getRunway();
  procedureSelected: string = this.flightInfoService.getProcedure();
  //The information displayed in this element is all hardcoded at the moment
  //TODO create a flight info service to pass the data to relevant elements
  constructor(private flightInfoService: FlightInfoService) {
    this.flightInfoService.airportSelectedSet.subscribe((value)=>{
      this.airportSelected = value;
    });
    this.flightInfoService.runwaySelectedSet.subscribe(((value) =>{
      this.runwaySelected = value;
    }))
    this.flightInfoService.procedureSelectedSet.subscribe((value)=>{
      this.procedureSelected = value;
    })
  }

  ngOnInit(): void {
  }



}
