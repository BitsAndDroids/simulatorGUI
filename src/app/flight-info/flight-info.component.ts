import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.scss']
})
export class FlightInfoComponent implements OnInit {
  //The information displayed in this element is all hardcoded at the moment
  //TODO create a flight info service to pass the data to relevant elements
  constructor() { }

  ngOnInit(): void {
  }

}
