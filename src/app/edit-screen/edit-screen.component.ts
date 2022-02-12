import { Component, OnInit } from '@angular/core';
import {OverlayServiceService} from "../overlay-service.service";


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
  selectedAirport : string = "EHAM";
  selectedProcedure : string = "Dry take-off";
  selectedRunway : string = "18R";

  constructor(private overlayService:OverlayServiceService) {

  }

  ngOnInit(): void {
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

  toggleOpen(){
    this.overlayService.toggleOpen();
  }
}
