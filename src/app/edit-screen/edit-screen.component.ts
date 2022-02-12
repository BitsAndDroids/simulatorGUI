import { Component, OnInit } from '@angular/core';
import {OverlayServiceService} from "../overlay-service.service";
import {FlightInfoService} from "../flight-info.service";


@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.scss']
})
export class EditScreenComponent implements OnInit {
  //Hardcoded lists can be replaced by databases/files in the future
  airports : string[] = ["EHAM", "EDDL","EHVN"];
  procedures : string[] = ["Dry take-off","Wet take-off","Engine failure takeoff","Circuit"];

  //These are the pre-selected variables showing in the HTML
  selectedAirport : string = this.flightInfoService.getAirport();
  selectedProcedure : string = this.flightInfoService.getProcedure();
  selectedRunway : string = this.flightInfoService.getRunway();

  constructor(private overlayService:OverlayServiceService, private flightInfoService:FlightInfoService) {

  }

  ngOnInit(): void {
    this.changeRunway(this.selectedRunway,this.selectedRunway);
  }

  changeRunway(runway: string, id: string){
    this.selectedRunway = runway;

    //reset all the runways to the default color before highlighting the selected runway
    var rwys = document.getElementsByClassName("runway");
    for(var i = 0; i < rwys.length; i++){
      // @ts-ignore
      rwys[i].style.stroke="#707070";
    }
    // @ts-ignore
    document.getElementById(id).style.stroke = "#23770B";

  }
  changeAirport(airport: string){
    this.selectedAirport = airport;
  }
  changeProcedure(procedure : string){
    this.selectedProcedure = procedure;
  }

  toggleOpen(){
    console.log(this.selectedAirport);
    this.flightInfoService.setAirport(this.selectedAirport);
    this.flightInfoService.setRunway(this.selectedRunway);
    this.flightInfoService.setProcedureSelected(this.selectedProcedure);
    console.log(this.flightInfoService.getAirport());
    this.overlayService.toggleOpen();
  }
}
