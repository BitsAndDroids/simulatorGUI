import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OverlayServiceService {
  //Putting this logic in a service enables us to access the settings menu state from different elements
  //This way we're able to open and close the settings overlay from the home screen and the settings overlay itself
  open = false;
  settingsVisibility: Subject<boolean> = new Subject<boolean>();
  public  setOpen(toSet:boolean){
    this.open = toSet;
  }
  public getOpen(){
    return this.open;
  }
  public toggleOpen(){
    this.settingsVisibility.next(!this.open);
  }
  constructor() {
    this.settingsVisibility.subscribe((value) => {
      this.open = value;
    });
  }
}
