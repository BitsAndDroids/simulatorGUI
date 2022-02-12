import { Component, OnInit } from '@angular/core';
import {OverlayServiceService} from "../overlay-service.service";


@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.scss']
})
export class EditScreenComponent implements OnInit {
  airports : string[] = ["EHAM", "EDDL","EHVN"];
  procedures : string[] = ["Dry take-off","Wet take-off","Engine failure takeoff","Circuit"];
  selectedAirport : string = "EHAM";
  selectedProcedure : string = "Dry take-off";
  selectedRunway : string = "18R";
  constructor(private overlayService:OverlayServiceService) {

  }

  ngOnInit(): void {
  }
  changeRunway(runway: string, id: string){
    this.selectedRunway = runway;

    var rwys = document.getElementsByClassName("runway");
    for(var i = 0; i < rwys.length; i++){
      // @ts-ignore
      rwys[i].style.stroke="#707070";
    }
    // @ts-ignore
    document.getElementById(id).style.stroke = "#23770B";

  }
  toggleOpen(){
    this.overlayService.toggleOpen();
  }
}
