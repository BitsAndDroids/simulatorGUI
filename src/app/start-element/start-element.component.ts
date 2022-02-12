import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {OverlayServiceService} from "../overlay-service.service";
import {Subject} from "rxjs";
@Component({
  selector: 'app-start-element',
  templateUrl: './start-element.component.html',
  styleUrls: ['./start-element.component.scss']
})
export class StartElementComponent implements OnInit {

  showSettings: boolean = false;

  constructor(private overlayService: OverlayServiceService) {
    this.overlayService.settingsVisibility.subscribe((value)=>{
      this.showSettings = value;
    })
  }

  ngOnInit(): void {
  }
  get getOpen(): boolean {
    return this.overlayService.open;
  }
  toggleSettings(){
    this.overlayService.toggleOpen();
  }

}
